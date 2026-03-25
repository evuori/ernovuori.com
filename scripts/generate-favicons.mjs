import sharp from 'sharp'
import toIco from 'to-ico'
import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.join(__dirname, '..')
const logoPath = path.join(rootDir, 'public/static/images/logo.png')
const faviconDir = path.join(rootDir, 'public/static/favicons')

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-96x96.png', size: 96 },
  { name: 'mstile-150x150.png', size: 150 },
]

async function generateFavicons() {
  console.log('Starting favicon generation...')

  // Ensure favicon directory exists
  await fs.mkdir(faviconDir, { recursive: true })

  // Read the source logo
  const logoBuffer = await fs.readFile(logoPath)

  // Generate PNG files of different sizes
  for (const { name, size } of sizes) {
    console.log(`Generating ${name}...`)
    await sharp(logoBuffer)
      .resize(size, size, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png()
      .toFile(path.join(faviconDir, name))
  }

  // Generate favicon.ico (multi-resolution ICO file with 16x16, 32x32, 48x48)
  console.log('Generating favicon.ico...')
  const ico16 = await sharp(logoBuffer)
    .resize(16, 16, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer()

  const ico32 = await sharp(logoBuffer)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer()

  const ico48 = await sharp(logoBuffer)
    .resize(48, 48, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer()

  // Create multi-resolution ICO file
  const icoBuffer = await toIco([ico16, ico32, ico48])
  await fs.writeFile(path.join(faviconDir, 'favicon.ico'), icoBuffer)

  console.log('\nFavicon generation complete!')
  console.log('\nGenerated files:')
  sizes.forEach(({ name }) => console.log(`  - ${name}`))
  console.log('  - favicon.ico')
  console.log('\nNote: safari-pinned-tab.svg was not regenerated. If you need to update it,')
  console.log('consider converting the logo to a monochrome SVG manually.')
}

generateFavicons().catch((error) => {
  console.error('Error generating favicons:', error)
  process.exit(1)
})
