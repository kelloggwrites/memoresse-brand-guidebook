#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Building Memoresse Brand Guidebook for Amplify...');

// Step 1: Run normal Astro build
console.log('📦 Running Astro build...');
execSync('npm run build', { stdio: 'inherit' });

// Step 2: Create .amplify-hosting directory structure
const amplifyDir = '.amplify-hosting';
const staticDir = path.join(amplifyDir, 'static');

console.log('📁 Creating Amplify directory structure...');
if (!fs.existsSync(amplifyDir)) {
    fs.mkdirSync(amplifyDir);
}
if (!fs.existsSync(staticDir)) {
    fs.mkdirSync(staticDir, { recursive: true });
}

// Step 3: Copy dist contents to .amplify-hosting/static
console.log('📋 Copying static files...');
execSync(`cp -r dist/* ${staticDir}/`, { stdio: 'inherit' });

// Step 4: Create deploy-manifest.json
const manifest = {
    "version": 1,
    "framework": "astro",
    "artifactType": "static"
};

const manifestPath = path.join(amplifyDir, 'deploy-manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

console.log('✅ Amplify build complete!');
console.log('📂 Files created:');
console.log(`   - ${manifestPath}`);
console.log(`   - ${staticDir}/index.html`);
console.log(`   - ${staticDir}/_astro/ (assets)`);
