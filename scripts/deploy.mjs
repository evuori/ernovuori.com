#!/usr/bin/env node

import { execSync } from 'child_process'
import { config } from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import fs from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const projectRoot = join(__dirname, '..')

// Load environment variables from .env file
config({ path: join(projectRoot, '.env') })

const { AWS_S3_BUCKET, AWS_CLOUDFRONT_DISTRIBUTION_ID, AWS_REGION = 'us-east-1' } = process.env

// Validate required environment variables
if (!AWS_S3_BUCKET) {
  console.error('Error: AWS_S3_BUCKET is not set in .env file')
  process.exit(1)
}

if (!AWS_CLOUDFRONT_DISTRIBUTION_ID) {
  console.error('Error: AWS_CLOUDFRONT_DISTRIBUTION_ID is not set in .env file')
  process.exit(1)
}

console.log('🚀 Starting deployment process...\n')

try {
  // Step 1: Build the Next.js site with static export
  console.log('📦 Building Next.js site with static export...')
  execSync('EXPORT=true UNOPTIMIZED=true yarn build', {
    cwd: projectRoot,
    stdio: 'inherit',
    env: { ...process.env, EXPORT: 'true', UNOPTIMIZED: 'true' },
  })
  console.log('✅ Build completed\n')

  // Check if out directory exists
  const outDir = join(projectRoot, 'out')
  if (!fs.existsSync(outDir)) {
    console.error('Error: out directory not found. Build may have failed.')
    process.exit(1)
  }

  // Step 2: Sync files to S3
  console.log(`📤 Syncing files to S3 bucket: ${AWS_S3_BUCKET}...`)
  execSync(`aws s3 sync out/ s3://${AWS_S3_BUCKET}/ --delete --region ${AWS_REGION}`, {
    cwd: projectRoot,
    stdio: 'inherit',
  })
  console.log('✅ Files synced to S3\n')

  // Step 3: Set cache control for static assets
  console.log('⚙️  Setting cache headers for static assets...')

  // Set long cache for static assets (JS, CSS, images, etc.)
  execSync(
    `aws s3 cp s3://${AWS_S3_BUCKET}/_next/ s3://${AWS_S3_BUCKET}/_next/ --recursive --metadata-directive REPLACE --cache-control "public,max-age=31536000,immutable" --region ${AWS_REGION}`,
    {
      cwd: projectRoot,
      stdio: 'inherit',
    }
  )

  // Set short cache and correct Content-Type for HTML files
  execSync(
    `aws s3 cp s3://${AWS_S3_BUCKET}/ s3://${AWS_S3_BUCKET}/ --exclude "*" --include "*.html" --recursive --metadata-directive REPLACE --content-type "text/html; charset=utf-8" --cache-control "public,max-age=0,must-revalidate" --region ${AWS_REGION}`,
    {
      cwd: projectRoot,
      stdio: 'inherit',
    }
  )
  console.log('✅ Cache headers set for HTML\n')

  // Step 3.5: Set correct Content-Type for other file types
  console.log('⚙️  Setting Content-Type for CSS, JS, and other assets...')

  const contentTypes = [
    { ext: '*.css', type: 'text/css; charset=utf-8' },
    { ext: '*.js', type: 'application/javascript; charset=utf-8' },
    { ext: '*.json', type: 'application/json; charset=utf-8' },
    { ext: '*.xml', type: 'application/xml; charset=utf-8' },
    { ext: '*.svg', type: 'image/svg+xml' },
    { ext: '*.png', type: 'image/png' },
    { ext: '*.jpg', type: 'image/jpeg' },
    { ext: '*.jpeg', type: 'image/jpeg' },
    { ext: '*.ico', type: 'image/x-icon' },
    { ext: '*.woff', type: 'font/woff' },
    { ext: '*.woff2', type: 'font/woff2' },
    { ext: '*.ttf', type: 'font/ttf' },
    { ext: '*.txt', type: 'text/plain; charset=utf-8' },
    { ext: '*.webmanifest', type: 'application/manifest+json; charset=utf-8' },
  ]

  contentTypes.forEach(({ ext, type }) => {
    execSync(
      `aws s3 cp s3://${AWS_S3_BUCKET}/ s3://${AWS_S3_BUCKET}/ --exclude "*" --include "${ext}" --recursive --metadata-directive REPLACE --content-type "${type}" --region ${AWS_REGION}`,
      {
        cwd: projectRoot,
        stdio: 'inherit',
      }
    )
  })
  console.log('✅ Content-Type set for all assets\n')

  // Step 4: Invalidate CloudFront cache
  console.log(
    `🔄 Invalidating CloudFront cache for distribution: ${AWS_CLOUDFRONT_DISTRIBUTION_ID}...`
  )
  const invalidationOutput = execSync(
    `aws cloudfront create-invalidation --distribution-id ${AWS_CLOUDFRONT_DISTRIBUTION_ID} --paths "/*"`,
    {
      cwd: projectRoot,
      encoding: 'utf8',
    }
  )

  const invalidation = JSON.parse(invalidationOutput)
  const invalidationId = invalidation.Invalidation.Id
  console.log(`✅ Cache invalidation created: ${invalidationId}\n`)

  console.log('🎉 Deployment completed successfully!')
  console.log(`\n📍 Your site is live at: https://${AWS_S3_BUCKET}`)
} catch (error) {
  console.error('\n❌ Deployment failed:', error.message)
  process.exit(1)
}
