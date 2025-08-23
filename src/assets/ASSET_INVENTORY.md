# Memoresse Brand Asset Inventory

> **Comprehensive organized collection of all Memoresse brand assets for the interactive guidebook**

## 📁 Asset Organization Structure

```
src/assets/
├── brand-assets/           # Downloadable brand files for partners
│   ├── logos/             # Primary brand logos and wordmarks
│   ├── icons/             # Favicons, app icons, and symbols
│   ├── colors/            # Color palettes and brand color files
│   ├── fonts/             # Typography files (to be added)
│   ├── textures/          # Background textures and materials
│   ├── backgrounds/       # Brand background assets
│   └── templates/         # Design templates and guidelines
└── images/                # Page imagery for guidebook
```

## 🎨 **Logos** (`src/assets/brand-assets/logos/`)

### Primary Logos
- **Memoresse-Logo-Full.png** (22KB) - Complete logo with text, PNG format
- **Memoresse-Logo-Vector.svg** (8KB) - Vector version, infinitely scalable
- **Memoresse-Logo-Black.png** (6KB) - Black version for light backgrounds
- **Memoresse-Logo-BlackOnWhite.jpg** (45KB) - Logo on white background, JPG format

### Symbols & Icons
- **Memoresse-Symbol-Black.png** (4KB) - Standalone M symbol, black
- **Memoresse-Symbol-Vector.svg** (1KB) - Vector M symbol
- **Memoresse-M-Swish.png** (16KB) - Stylized M with swish element

## 🔗 **Icons** (`src/assets/brand-assets/icons/`)

### Web & App Icons
- **favicon-1.png** (903B) - Standard favicon for web
- **icon-8.png** (2KB) - App icon variant
- **Swish-Icon-Wht-on-Color-Background.png** (166KB) - White icon on color background

### Usage Guidelines
- **favicon-1.png**: Use for website favicon, minimum 16×16px
- **icon-8.png**: General purpose icon applications
- **Swish-Icon**: Social media profiles, app icons with color backgrounds

## 🌈 **Colors** (`src/assets/brand-assets/colors/`)

### Brand Palette (`brand-palette.json`)
```json
{
  "primary": {
    "name": "Sage Whisper",
    "hex": "#b2c7b9",
    "rgb": "178, 199, 185",
    "usage": "Primary brand color - calm, serene, memories"
  },
  "secondary": {
    "name": "Plum Shadow", 
    "hex": "#5E4C64",
    "rgb": "94, 76, 100",
    "usage": "Secondary accent - depth, sophistication"
  },
  "tertiary": {
    "name": "Lavender Mist",
    "hex": "#cdc6dd", 
    "rgb": "205, 198, 221",
    "usage": "Tertiary color - soft, ethereal"
  },
  "neutral": {
    "name": "Memory Stone",
    "hex": "#a8a4aa",
    "rgb": "168, 164, 170", 
    "usage": "Neutral tone - balance, timelessness"
  },
  "text": {
    "name": "Stone Ink",
    "hex": "#2d2b2c",
    "rgb": "45, 43, 44",
    "usage": "Primary text color"
  },
  "background": {
    "name": "Off White",
    "hex": "#fafafa",
    "rgb": "250, 250, 250",
    "usage": "Clean background color"
  }
}
```

## 🏗️ **Textures** (`src/assets/brand-assets/textures/`)

### Background Textures
- **wooden_lockbox.webp** (51KB) - Hero image, wooden lockbox texture
- **Metal.jpg** (498KB) - Metal texture for premium feel
- **Metal Closeup.jpg** (799KB) - Detailed metal texture
- **Wallnut_Comp.jpg** (2.9MB) - Rich walnut wood texture
- **Supili_Comp.jpg** (617KB) - Composite texture material

### Usage Guidelines
- **wooden_lockbox.webp**: Primary hero backgrounds, product imagery
- **Metal textures**: Premium sections, CTA backgrounds
- **Wallnut**: Warm, family-oriented sections
- **Supili**: Modern, tech-forward applications

## 📷 **Page Images** (`src/assets/images/`)

### Hero & Content Images
- **Page1-photo-memoresse-lockbox.jpg** (5.6MB) - Primary hero image of Memoresse lockbox
- **1.png** (789KB) - Additional page imagery

### Usage Guidelines
- **Page1-photo-memoresse-lockbox.jpg**: Main hero sections, product showcases
- **1.png**: Supporting content imagery

## 🎯 **Asset Usage Guidelines**

### Logo Applications
1. **Primary Logo**: Use Memoresse-Logo-Full.png for most applications
2. **Minimum Size**: Never smaller than 32px height for readability
3. **Clear Space**: Maintain space equal to the height of the "M" around logo
4. **Background**: Prefer light backgrounds; use black version on white

### Color Applications
1. **Hierarchy**: Always follow Primary → Secondary → Tertiary → Neutral order
2. **Accessibility**: Ensure sufficient contrast ratios (4.5:1 minimum)
3. **Brand Consistency**: Use exact hex values from brand-palette.json

### Icon Applications
1. **Web Favicon**: Always use favicon-1.png for consistency
2. **App Icons**: Use icon-8.png for general applications
3. **Social Media**: Swish-Icon-Wht-on-Color-Background.png for profiles

## 🔄 **Asset Updates & Maintenance**

### Google Drive Integration
- All assets should be uploaded to Google Drive with public sharing
- Extract file IDs for use in AssetDownload components
- Maintain version control through descriptive file naming

### File Naming Convention
- **Logos**: `Memoresse-Logo-[Variant]-[Format]`
- **Icons**: `[Name]-[Size/Variant].[ext]`
- **Colors**: `brand-palette.[ext]`
- **Textures**: `[MaterialName]_[Variant].[ext]`

### Quality Standards
- **Logos**: Vector (SVG) when possible, high-res PNG as backup
- **Icons**: Multiple sizes for different use cases
- **Colors**: Always provide hex, RGB, and usage guidelines
- **Textures**: Optimize for web while maintaining quality

## 📋 **Missing Assets (To Be Added)**

### Fonts
- [ ] Recoleta font files (WOFF2, WOFF)
- [ ] PT Serif Enhanced files
- [ ] Libre Baskerville files

### Templates
- [ ] PowerPoint template
- [ ] Keynote template
- [ ] Figma design system
- [ ] Email signature templates

### Additional Formats
- [ ] EPS versions of logos for print
- [ ] PDF brand guidelines document
- [ ] Print-quality color swatches

---

**Asset Quality**: All assets have been curated from the best available versions, avoiding duplicates and ensuring brand consistency across all applications.

