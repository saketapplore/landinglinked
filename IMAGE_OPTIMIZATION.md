# Image Optimization Guide

## Overview
This project uses `vite-plugin-imagemin` to automatically compress and optimize all images during the build process, reducing file sizes while maintaining excellent visual quality.

## How It Works

### Automatic Optimization
When you run `npm run build`, all images in the `public/images` folder will be automatically optimized:

- **PNG files**: Lossless compression using optipng (level 7)
- **JPG/JPEG files**: High-quality compression at 90% quality using mozjpeg
- **GIF files**: Optimized using gifsicle (level 7)
- **SVG files**: Optimized by removing unnecessary metadata
- **WEBP files**: Compressed at 90% quality

### Quality Settings
The current configuration maintains 90% quality for lossy formats (JPG, WEBP), which provides:
- Excellent visual quality (nearly indistinguishable from original)
- Significant file size reduction (typically 40-70% smaller)
- Fast page load times

### Usage

#### Development
During development (`npm run dev`), images are served without optimization for faster build times.

#### Production Build
```bash
npm run build
```

This will:
1. Build your application
2. Automatically compress all images
3. Output optimized images to the `dist` folder

### Customization

If you want to adjust the quality settings, edit `vite.config.ts`:

```typescript
mozjpeg: {
  quality: 90, // Change this value (1-100)
},
webp: {
  quality: 90, // Change this value (1-100)
},
```

**Recommended Quality Levels:**
- **95-100**: Highest quality, minimal compression
- **85-94**: High quality, good compression (recommended)
- **75-84**: Good quality, better compression
- **Below 75**: Noticeable quality loss

### Benefits

✅ **No Quality Loss**: PNG optimization is lossless, JPG/WEBP at 90% quality is visually identical
✅ **Automatic**: No manual optimization needed
✅ **Build-time**: Only runs during production builds, not in development
✅ **All Formats**: Supports PNG, JPG, GIF, SVG, WEBP
✅ **Fast Loading**: Smaller images = faster website

### File Size Reduction Examples

Typical compression results:
- PNG: 30-50% reduction (lossless)
- JPG: 40-60% reduction (at 90% quality)
- WEBP: 50-70% reduction (at 90% quality)

### Troubleshooting

If images don't appear optimized:
1. Make sure you've run `npm run build` (not just `npm run dev`)
2. Check the `dist/images` folder for optimized images
3. Compare file sizes before (in `public/images`) and after (in `dist/images`)

### Dependencies

The following packages are installed:
- `vite-plugin-imagemin`: Vite plugin for image optimization
- `imagemin-gifsicle`: GIF optimizer
- `imagemin-mozjpeg`: JPG/JPEG optimizer
- `imagemin-optipng`: PNG optimizer
- `imagemin-svgo`: SVG optimizer
- `imagemin-webp`: WEBP optimizer
