# Image Audit — hussaalsaif-v3

**Date:** 2026-03-15

## Image Inventory

| File | Size | Dimensions | Used In Code | Status |
|------|------|-----------|-------------|--------|
| avatar.jpg | 3 KB | 100x100 | page.tsx (About section, ImageReveal) | OK |
| beauty-editorials.jpg | 27 KB | 361x640 | page.tsx (PROJECTS array) | OK |
| brand-campaigns.jpg | 53 KB | 640x639 | page.tsx (PROJECTS array) | OK |
| event-coverage.jpg | 43 KB | 361x640 | page.tsx (PROJECTS array) | OK |
| gallery-1.jpg | 14 KB | 361x640 | page.tsx (PROJECTS array) | OK |
| gallery-2.jpg | 31 KB | 361x640 | page.tsx (PROJECTS array) | OK |
| gallery-3.jpg | 10 KB | 361x640 | **NOT REFERENCED** | UNUSED |
| gallery-4.jpg | 72 KB | 720x1046 | page.tsx (PROJECTS array) | OK |
| gallery-5.jpg | 142 KB | 720x1046 | page.tsx (PROJECTS array) | OK |
| gallery-6.jpg | 207 KB | 720x1280 | page.tsx (PROJECTS array) | COMPRESSED (was 308 KB / 1080x1920) |
| gallery-7.jpg | 64 KB | 720x1280 | page.tsx (PROJECTS array) | OK |
| gallery-8.jpg | 31 KB | 640x640 | **NOT REFERENCED** | UNUSED |
| hero.jpg | 69 KB | 640x640 | page.tsx (Hero section), layout.tsx (OG meta) | OK |
| youtube-reels.jpg | 38 KB | 361x640 | **NOT REFERENCED** | UNUSED |

**Total size:** ~804 KB (14 images)

## Unused Images

3 images are not referenced anywhere in the codebase:
- `gallery-3.jpg` (10 KB)
- `gallery-8.jpg` (31 KB)
- `youtube-reels.jpg` (38 KB)

Combined waste: ~79 KB. Can be safely deleted if not planned for future use.

## Compression Actions Taken

- **gallery-6.jpg**: Resized from 1080x1920 (315 KB) to 720x1280 (212 KB). Saved ~103 KB.
- **gallery-4.jpg**: Resized from 1005x1461 to 720x1046. File size slightly increased from 70 KB to 74 KB due to sips re-encoding (no backup existed to restore).
- **gallery-5.jpg**: Resized from 1005x1461 to 720x1046. File size increased from 113 KB to 145 KB due to sips re-encoding (no backup existed to restore).

**Note:** gallery-4 and gallery-5 should be re-compressed with a proper tool (e.g., `jpegoptim`, `mozjpeg`, or Squoosh) to recover the size regression from sips re-encoding.

## No Images Over 300KB

After compression, all images are under 300 KB. The largest is gallery-6.jpg at 212 KB.

## Favicon

**File:** `src/app/favicon.ico` (25.9 KB)

Multi-size ICO containing 4 icons:
- 16x16, 32-bit (1.3 KB)
- 32x32, 32-bit (5.0 KB)
- 48x48, 32-bit (11.3 KB)
- 256x256, 32-bit (7.6 KB)

This is a proper multi-size favicon. Has alpha channel. Good.

## WebP/AVIF

Not needed. The site uses Next.js `<Image>` component which automatically serves WebP/AVIF via its built-in image optimization pipeline. No manual conversion required.

## Recommendations

1. **Delete unused images** (`gallery-3.jpg`, `gallery-8.jpg`, `youtube-reels.jpg`) unless they are planned for future use.
2. **Re-compress gallery-4.jpg and gallery-5.jpg** with `jpegoptim --max=80` or `mozjpeg` to undo the sips re-encoding bloat.
3. **avatar.jpg is only 100x100** — fine for its current use in the About section, but if it ever gets displayed larger, a higher-res version will be needed.
4. **hero.jpg is 640x640** — used as the main hero image filling up to 620px tall on desktop. The current resolution is adequate since Next.js Image serves optimized versions, but a 1280px source would produce sharper results on retina displays.
