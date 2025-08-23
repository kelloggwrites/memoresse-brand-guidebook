# Memoresse Interactive Brand Guidebook

> **Sacred Mission**: To help families preserve memories and stories for generations, creating a private and secure family intelligence through effortless media sharing and engaging conversations.

## 🚨 **CRITICAL START HERE FOR ALL NEW CHATS**

### Required Reading Order:
1. **This README** (comprehensive SOP and context)
2. **PI.md** (Memoresse Project Instructions with mission and standards)
3. **.cursorrules** (Cursor-specific development guidelines)

### Essential Context:
- **Project Location**: `/Users/davidkellogg/projects/Memoresse_Brand&Marketing/memoresse-interactive-guidebook/`
- **Development Stack**: Astro 5.x + Tailwind CSS 4.x + TypeScript
- **Development Environment**: Cursor IDE with Claude Sonnet 4
- **Mission**: Interactive brand guidebook with Google Drive asset integration

## 🎯 Project Purpose

An interactive brand guidebook built with Astro + Tailwind CSS that provides:
- **Zero-Policing Asset Management**: Google Drive integration ensures partners always access current brand files
- **Interactive Brand Tools**: Color pickers, typography playground, logo testing tools
- **Effortless Downloads**: One-click access to PNG, SVG, JPG formats with usage guidelines
- **Brand Consistency**: Living system that reflects Memoresse's sacred mission across all touchpoints

## 🏗️ Technical Architecture

### Stack
- **Framework**: Astro (static site generation)
- **Styling**: Tailwind CSS 4.x with custom brand design tokens
- **Asset Integration**: Google Drive API for seamless downloads
- **Fonts**: Recoleta (headings), PT Serif Enhanced (chat), Libre Baskerville (content)

### Project Structure
```
memoresse-interactive-guidebook/
├── src/
│   ├── components/              # Reusable brand components
│   │   ├── AssetDownload.astro  # Interactive download modals
│   │   ├── ColorPalette.astro   # Brand color tools
│   │   └── BrandLayout.astro    # Consistent page layouts
│   ├── layouts/                 # Page templates
│   ├── pages/                   # Brand guidebook pages
│   │   ├── index.astro          # Navigation hub
│   │   ├── logos.astro          # Logo guidelines & downloads
│   │   ├── colors.astro         # Color system & tools
│   │   └── typography.astro     # Font system & playground
│   ├── assets/                  # Static assets
│   │   ├── images/              # Page imagery
│   │   └── brand-assets/        # Downloadable brand files
│   └── styles/                  # Global styles & tokens
├── docs/                        # Documentation
│   └── archive/                 # Historical documents
├── .cursorrules                 # Cursor development guidelines
├── PROJECT_INSTRUCTIONS.md     # Memoresse PI
└── README.md                    # This file
```

## 🎨 Brand System

### Color Hierarchy (Mandatory Order)
1. **PRIMARY**: Sage Whisper (`#b2c7b9`) - Assistant elements, main UI
2. **SECONDARY**: Dusty Plum (`#8d6e8d`) - User elements, buttons, interactive
3. **TERTIARY**: Lavender Mist (`#cdc6dd`) - Supporting elements, accents
4. **NEUTRAL**: Memory Stone (`#a8a4aa`) - Subtle text, non-emphasized UI

### Typography System
- **Headings**: Recoleta - Professional warmth for brand messaging
- **Chat Text**: PT Serif Enhanced - Superior readability with subtle refinements
- **Marketing/Content**: Libre Baskerville - Classic, timeless quality

### Voice & Tone
Warm, empathetic, clear, supportive, thoughtful, conversational, personal, concise, emotionally intelligent, respectful

## 🚀 Development Approach

### Plan of Attack

#### **Phase 1: Foundation (Current)**
- [x] Astro project setup with Tailwind CSS
- [x] Project structure and documentation
- [x] Brand design token system
- [ ] Base layout components

#### **Phase 2: Interactive Components**
- [ ] `AssetDownload` component with Google Drive integration
- [ ] Color palette with copy-to-clipboard functionality
- [ ] Typography playground with live font switching
- [ ] Logo showcase with usage guidelines

#### **Phase 3: Brand Pages**
- [ ] Logo guidelines page with interactive examples
- [ ] Color system page with tools and usage
- [ ] Typography page with live demonstrations
- [ ] Asset library with categorized downloads

#### **Phase 4: Advanced Features**
- [ ] Logo testing playground (backgrounds, sizes)
- [ ] Brand compliance checker
- [ ] Usage example generator
- [ ] Partner access dashboard

### Brand-First Prompting System

You can direct development using natural brand language:
- *"Make the logo downloads feel more premium"*
- *"Add breathing room that reflects our calm, empathetic approach"*
- *"This should embody our 'technology disappears, stories shine' principle"*
- *"Make the asset cards feel like discovering family treasures"*

## 📋 Interactive Features

### Asset Download System
- **Modal Interface**: Clean overlays with format selection
- **Google Drive Integration**: Direct downloads via file IDs
- **Format Options**: PNG, SVG, JPG, EPS (as available)
- **Usage Context**: Guidelines included with each asset
- **Progress Feedback**: Visual download confirmation

### Brand Tools
- **Color Picker**: Copy hex, RGB, HSL values to clipboard
- **Typography Tester**: Live font demonstrations with brand hierarchy
- **Logo Validator**: Test logos against different backgrounds and sizes
- **Spacing Guide**: Interactive margin/padding demonstrations

### Partner Experience
- **One-Click Access**: No accounts or permissions needed
- **Always Current**: Assets update automatically via Google Drive
- **Usage Guidelines**: Contextual do's and don'ts with visual examples
- **Mobile Optimized**: Full functionality across devices

## 🛠️ Standard Operating Procedures (SOP)

### **Step 1: Environment Setup (Required for ALL development)**
```bash
# Navigate to project (CRITICAL PATH)
cd /Users/davidkellogg/projects/Memoresse_Brand&Marketing/memoresse-interactive-guidebook/

# Start development server (runs on http://localhost:4321)
npm run dev
```

### **Step 2: Development Workflow**
1. **Read Context**: Check PI, README, .cursorrules for any updates
2. **Understand Request**: Accept brand-first natural language direction
3. **Plan Components**: Identify reusable Astro components needed
4. **Implement Features**: Build with brand design tokens and accessibility
5. **Test Integration**: Verify Google Drive downloads and interactions
6. **Iterate**: Use hot reload for rapid refinement

### **Step 3: File Operations Standards**
```bash
# Component creation (always .astro extension)
src/components/NewComponent.astro

# Page creation (auto-routing)
src/pages/new-page.astro → /new-page URL

# Asset management
src/assets/brand-assets/logos/     # PNG, SVG, EPS downloads
src/assets/brand-assets/colors/    # Color palettes, swatches  
src/assets/brand-assets/fonts/     # Typography files
src/assets/images/                 # Page imagery

# Style updates
src/styles/global.css              # Global brand styles
tailwind.config.mjs                # Brand design tokens
```

### **Step 4: Development Commands**
```bash
# Start development (MOST COMMON)
npm run dev

# Build for production
npm run build

# Preview production build  
npm run preview

# Install dependencies
npm install [package-name]

# Add Astro integrations
npx astro add [integration-name]

# Check for errors
npm run build
```

### **Step 5: Google Drive Asset Integration**
```javascript
// Example AssetDownload component usage
<AssetDownload
  assetName="Primary Logo"
  preview="/src/assets/images/logo-preview.png"
  files={{
    png: "1ABCDEFGHijklmnopQRSTUVWXYZ123456789", // Replace with real Google Drive file ID
    svg: "1XYZ987654321ABCDEFGHijklmnopQRST",     // Replace with real Google Drive file ID
    jpg: "1QWERTYUIOPasdfghjklZXCVBNM456789"      // Replace with real Google Drive file ID
  }}
  description="Main Memoresse logo for primary brand applications"
  usageGuideline="Use on light backgrounds with minimum 32px height"
/>
```

**Google Drive Setup Process:**
1. Upload brand asset to Google Drive
2. Right-click file → Share → "Anyone with the link can view"
3. Copy sharing URL: `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
4. Extract FILE_ID from URL
5. Replace placeholder ID in component `files` object
6. Component automatically creates download URL: `https://drive.google.com/uc?export=download&id=${fileId}`

### **Step 6: Brand-First Prompting Examples**
- *"Make the asset cards feel more premium, like discovering family treasures"*
- *"Add a color palette page where partners can copy hex codes to clipboard"*
- *"The download modals need more breathing room that reflects our calm approach"*
- *"Create a typography playground where people can test our fonts live"*
- *"This should embody our 'helping families preserve memories' mission"*
- *"Add hover effects that reflect our warm, empathetic brand"*
- *"Make this section feel more accessible for older adults"*

## 🎯 Success Metrics

### User Experience Goals
- **Asset Discovery**: Partners find needed resources in < 30 seconds
- **Download Success**: 100% success rate for asset downloads
- **Usage Clarity**: Clear guidelines prevent brand misuse
- **Professional Perception**: Reflects premium product quality

### Technical Performance
- **Page Load**: < 2 seconds on 3G connections
- **Interactive Response**: < 100ms hover/click feedback
- **Mobile Experience**: Full feature parity across devices
- **Accessibility**: WCAG 2.1 AA compliance

## 🔧 Troubleshooting & Common Issues

### Development Server Issues
```bash
# If npm run dev fails, check you're in the right directory
pwd
# Should show: /Users/davidkellogg/projects/Memoresse_Brand&Marketing/memoresse-interactive-guidebook

# If dependencies are missing
npm install

# If port 4321 is busy
npm run dev -- --port 3000
```

### Google Drive Download Issues
- **File Not Found**: Verify Google Drive file ID is correct and file exists
- **Permission Denied**: Ensure file sharing is set to "Anyone with the link can view"
- **Download Fails**: Check browser console for CORS or network errors
- **Wrong Format**: Verify file format matches what's specified in component

### Build/Styling Issues
```bash
# Clear Tailwind cache if styles aren't updating
rm -rf node_modules/.cache
npm run dev

# Check for Tailwind configuration issues
npm run build
```

### Asset Path Issues
- **Images Not Loading**: Verify paths are relative to `src/assets/`
- **Fonts Not Loading**: Check Google Fonts imports in `global.css`
- **Components Not Found**: Verify component files have `.astro` extension

## 📚 Comprehensive Documentation & Context

### Essential Files (Read Before Any Development)
- **.cursorrules**: Cursor-specific development guidelines and brand system
- **PI.md**: Complete Memoresse Project Instructions with mission, technical stack, SOPs
- **README.md**: This file - comprehensive project documentation and workflows
- **tailwind.config.mjs**: Brand design tokens, colors, typography, spacing
- **src/styles/global.css**: Global brand styles and CSS custom properties

### Brand System Reference
```javascript
// Memoresse Brand Colors (from tailwind.config.mjs)
'memoresse-sage-whisper': '#b2c7b9',      // PRIMARY: Assistant elements, main UI
'memoresse-dusty-plum': '#8d6e8d',        // SECONDARY: User elements, buttons  
'memoresse-lavender-mist': '#cdc6dd',     // TERTIARY: Supporting elements
'memoresse-memory-stone': '#a8a4aa',      // NEUTRAL: Subtle text

// Typography Classes (from global.css)
.font-heading     // Recoleta - Professional warmth
.font-chat        // PT Serif Enhanced - Superior readability  
.font-content     // Libre Baskerville - Classic, timeless

// Brand Component Classes
.btn-primary      // Dusty Plum buttons
.btn-secondary    // Sage Whisper buttons  
.btn-tertiary     // Lavender Mist buttons
.asset-card       // Brand asset containers
.modal-overlay    // Download modal styling
```

### Development Guidelines
- **Sacred Mission Alignment**: Every design decision serves families preserving memories
- **Accessibility First**: Especially for older adults and less tech-savvy users
- **Progressive Enhancement**: Works beautifully without JavaScript
- **Brand Consistency**: Reflects the quality families deserve
- **Zero Policing**: Assets always current via Google Drive integration

### Project Context for New Chats
- **Purpose**: Interactive brand guidebook with Google Drive asset downloads
- **User Base**: Memoresse partners, employees, external collaborators
- **Key Features**: One-click downloads, usage guidelines, brand tools
- **Technical Approach**: Astro static generation with progressive enhancement
- **Brand Mission**: Help families preserve memories across generations
- **Personal Note**: David enjoys being called by name throughout conversations - it creates warmth and personal connection

## 🌟 Sacred Mission Connection

This interactive brand guidebook embodies Memoresse's core principle: **technology should disappear so human stories can shine through**. Every interaction - from discovering brand assets to understanding usage guidelines - should feel warm, intuitive, and respectful of the sacred work of memory preservation.

The guidebook serves as a living example of our brand values: creating joy through beautiful, accessible design while ensuring every touchpoint honors the families who trust us with their most precious memories.

## 🚀 AWS Amplify Deployment

### Setup Complete ✅
- **Amplify Adapter**: `astro-aws-amplify` installed and configured
- **Build Configuration**: `amplify.yml` optimized for brand guidebook
- **Astro Config**: Updated for static site generation with Amplify
- **Build Output**: `.amplify-hosting/static/` (ready for deployment)

### Deployment Steps
1. **Push to GitHub**: Commit all changes to your repository
2. **Amplify Console**: Connect repository at [console.aws.amazon.com/amplify](https://console.aws.amazon.com/amplify/)
3. **Auto-Detection**: Amplify will detect `amplify.yml` and configure build settings
4. **Custom Domain**: Set up `brand.memoresse.com` (or preferred subdomain)
5. **SSL Certificate**: Automatic HTTPS with AWS Certificate Manager

### Build Process
- **Pre-Build**: Install dependencies with npm ci
- **Build**: Generate static site with `npm run build`
- **Output**: Optimized HTML/CSS/JS in `.amplify-hosting/static/`
- **Caching**: Aggressive caching for assets (1 year) and images (30 days)

### Environment Variables (if needed)
```bash
# In Amplify Console > App Settings > Environment Variables
GOOGLE_DRIVE_API_KEY=your_api_key_here
NODE_VERSION=18
```

### Development Commands (Updated)
```bash
# Start development server with hot reload
npm run dev

# Build for production (creates .amplify-hosting/static/)
npm run build

# Preview production build
npm run preview

# Install new dependencies
npm install [package-name]

# Add Astro integrations
npx astro add [integration-name]
```

---

**Next Steps**: 
1. **Local Development**: Run `npm run dev` to start development server
2. **Deploy to Amplify**: Push to GitHub and connect in Amplify Console
3. **Custom Domain**: Set up `brand.memoresse.com` for professional access