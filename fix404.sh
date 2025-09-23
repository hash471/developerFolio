#!/bin/bash

# Setup deployment from main branch to gh-pages branch
echo "🚀 Setting up main → gh-pages deployment workflow"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}📋 Deployment Setup:${NC}"
echo "• Source code: main branch"
echo "• Deployment: gh-pages branch"
echo "• GitHub Pages: Serve from gh-pages branch"

# Step 1: Ensure we're on the right branch structure
echo -e "${YELLOW}📝 Step 1: Setting up branch structure...${NC}"

current_branch=$(git branch --show-current)
echo "Current branch: $current_branch"

# If on master, rename to main (modern standard)
if [ "$current_branch" = "master" ]; then
    echo "Renaming master → main for modern Git standards..."
    git branch -m master main
    git push origin -u main
    git push origin --delete master 2>/dev/null || echo "Master branch cleanup complete"
    echo -e "${GREEN}✅ Renamed master to main${NC}"
elif [ "$current_branch" != "main" ]; then
    # Switch to main or create it
    git checkout main 2>/dev/null || git checkout -b main
    echo -e "${GREEN}✅ Now on main branch${NC}"
fi

# Step 2: Update package.json for gh-pages deployment
echo -e "${YELLOW}📝 Step 2: Configuring package.json...${NC}"

node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));

// Set homepage for GitHub Pages
pkg.homepage = 'https://hash471.github.io/portfolio';

// Ensure deployment scripts exist
pkg.scripts = pkg.scripts || {};
pkg.scripts.predeploy = 'npm run build';
pkg.scripts.deploy = 'gh-pages -d build';

// Add dev dependency for gh-pages if not present
pkg.devDependencies = pkg.devDependencies || {};
if (!pkg.devDependencies['gh-pages']) {
    pkg.devDependencies['gh-pages'] = '^6.0.0';
}

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
console.log('✅ Updated package.json for gh-pages deployment');
"

# Step 3: Install gh-pages if not installed
echo -e "${YELLOW}📦 Step 3: Installing gh-pages...${NC}"

if ! npm list gh-pages --depth=0 &>/dev/null; then
    npm install --save-dev gh-pages
    echo -e "${GREEN}✅ Installed gh-pages${NC}"
else
    echo -e "${GREEN}✅ gh-pages already installed${NC}"
fi

# Step 4: Create required public files
echo -e "${YELLOW}📝 Step 4: Creating required files...${NC}"

# Create manifest.json
cat > public/manifest.json << 'EOL'
{
  "short_name": "Sriharsha Portfolio",
  "name": "Sriharsha Ramachandra - Senior Full Stack Engineer",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#0066cc",
  "background_color": "#ffffff"
}
EOL

# Create .nojekyll to prevent Jekyll processing
touch public/.nojekyll

# Create robots.txt for better SEO
cat > public/robots.txt << 'EOL'
User-agent: *
Allow: /

Sitemap: https://hash471.github.io/portfolio/sitemap.xml
EOL

echo -e "${GREEN}✅ Created manifest.json, .nojekyll, and robots.txt${NC}"

# Step 5: Create missing image placeholders
echo -e "${YELLOW}🎨 Step 5: Creating image placeholders...${NC}"

mkdir -p src/assets/images

# Function to create minimal PNG
create_png_placeholder() {
    local filename="$1"
    # Create a minimal 1x1 transparent PNG
    printf '\x89\x50\x4E\x47\x0D\x0A\x1A\x0A\x00\x00\x00\x0D\x49\x48\x44\x52\x00\x00\x00\x01\x00\x00\x00\x01\x08\x06\x00\x00\x00\x1F\x15\xC4\x89\x00\x00\x00\x0A\x49\x44\x41\x54\x78\x9C\x63\x00\x01\x00\x00\x05\x00\x01\x0D\x0A\x2D\xB4\x00\x00\x00\x00\x49\x45\x4E\x44\xAE\x42\x60\x82' > "$filename"
}

# All required images
required_images=(
    # Cloud providers
    "aws-logo.png" "gcp-logo.png" "azure-logo.png" "openmetal-logo.png"
    
    # Automation tools
    "make-logo.png" "ghl-logo.png" "zapier-logo.png" "api-logo.png"
    
    # Projects
    "agencyAutomation.png" "makeIntegration.png" "cloudMigration.png" 
    "automationDashboard.png" "aiResearchAssistant.png" "voiceAssistant.png"
    "cryptoWallet.png" "microservicesArch.png"
    
    # Companies
    "taylorFrancisLogo.png" "rqbLogo.png" "techChefsLogo.png" 
    "dxcLogo.png" "tcsLogo.png"
    
    # Education
    "bitsLogo.png" "gvpLogo.png"
    
    # Achievements
    "awsLogo.png" "catLogo.png"
)

created_images=0
for img in "${required_images[@]}"; do
    if [ ! -f "src/assets/images/$img" ]; then
        create_png_placeholder "src/assets/images/$img"
        created_images=$((created_images + 1))
    fi
done

echo -e "${GREEN}✅ Created $created_images placeholder images${NC}"

# Step 6: Clean any existing deployment
echo -e "${YELLOW}🧹 Step 6: Cleaning previous deployments...${NC}"

# Remove gh-pages branch to start fresh
git push origin --delete gh-pages 2>/dev/null && echo "Deleted old gh-pages branch" || echo "No existing gh-pages branch"

# Clean build directories
rm -rf build/
rm -rf node_modules/.cache/

echo -e "${GREEN}✅ Cleaned previous deployments${NC}"

# Step 7: Commit current changes to main
echo -e "${YELLOW}💾 Step 7: Committing to main branch...${NC}"

git add .
if git diff --staged --quiet; then
    echo "No changes to commit"
else
    git commit -m "Setup portfolio for gh-pages deployment - $(date '+%Y-%m-%d %H:%M:%S')"
    echo -e "${GREEN}✅ Committed changes to main${NC}"
fi

# Push main branch
git push origin main

echo -e "${GREEN}✅ Pushed main branch${NC}"

# Step 8: Build the project
echo -e "${YELLOW}🔨 Step 8: Building project...${NC}"

# Set build environment variables
export PUBLIC_URL="https://hash471.github.io/portfolio"
export CI=false
export GENERATE_SOURCEMAP=false

npm run build

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Build successful${NC}"
    echo "Build contents:"
    ls -la build/ | head -5
else
    echo -e "${RED}❌ Build failed - check errors above${NC}"
    exit 1
fi

# Step 9: Deploy to gh-pages branch
echo -e "${YELLOW}🚀 Step 9: Deploying to gh-pages branch...${NC}"

npm run deploy

if [ $? -eq 0 ]; then
    echo -e "${GREEN}🎉 DEPLOYMENT SUCCESSFUL! 🎉${NC}"
    
    # Step 10: Verify deployment
    echo -e "${YELLOW}🔍 Step 10: Verifying deployment...${NC}"
    
    # Check if gh-pages branch was created
    sleep 2
    if git ls-remote --heads origin gh-pages >/dev/null 2>&1; then
        echo -e "${GREEN}✅ gh-pages branch created successfully${NC}"
    else
        echo -e "${YELLOW}⚠️  gh-pages branch not visible yet (normal delay)${NC}"
    fi
    
    echo ""
    echo -e "${BLUE}🌟 DEPLOYMENT COMPLETE! 🌟${NC}"
    echo ""
    echo -e "${GREEN}📋 What was set up:${NC}"
    echo "✅ Source code: main branch"
    echo "✅ Deployment: gh-pages branch (auto-generated)"
    echo "✅ Homepage: https://hash471.github.io/portfolio"
    echo "✅ Created ${created_images} placeholder images"
    echo "✅ Added manifest.json, .nojekyll, robots.txt"
    echo "✅ Configured gh-pages deployment workflow"
    echo ""
    echo -e "${BLUE}⚙️  FINAL STEP - Enable GitHub Pages:${NC}"
    echo "1. Go to: https://github.com/hash471/portfolio/settings/pages"
    echo "2. Source: Select 'Deploy from a branch'"
    echo "3. Branch: Select 'gh-pages'"
    echo "4. Folder: Select '/ (root)'"
    echo "5. Click 'Save'"
    echo ""
    echo -e "${YELLOW}⏰ Timeline:${NC}"
    echo "• Enable GitHub Pages: Now"
    echo "• Wait for deployment: 5-10 minutes" 
    echo "• Site live: https://hash471.github.io/portfolio"
    echo ""
    echo -e "${BLUE}🔄 Future deployments:${NC}"
    echo "• Make changes in main branch"
    echo "• Run: npm run deploy"
    echo "• Changes automatically go to gh-pages"
    echo ""
    echo -e "${GREEN}🚀 Your portfolio is ready to go live!${NC}"
    
else
    echo -e "${RED}❌ Deployment failed${NC}"
    echo ""
    echo -e "${YELLOW}🔧 Common fixes:${NC}"
    echo "1. Check repository exists: https://github.com/hash471/portfolio"
    echo "2. Verify push permissions to the repository"
    echo "3. Ensure git remote is correct:"
    echo "   git remote -v"
    echo "4. If needed, fix remote:"
    echo "   git remote set-url origin https://github.com/hash471/portfolio.git"
    
    exit 1
fi

# Show branch structure
echo ""
echo -e "${BLUE}📊 Branch Structure:${NC}"
echo "• main: Your source code (current)"
echo "• gh-pages: Auto-generated deployment files"
echo ""
echo -e "${GREEN}✅ Setup complete! Enable GitHub Pages in repository settings.${NC}"