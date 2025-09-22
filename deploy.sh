#!/bin/bash

# Sriharsha's Portfolio Deployment Script
echo "🚀 Setting up Sriharsha's Portfolio..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Step 1: Clone repository
echo -e "${BLUE}📂 Cloning DeveloperFolio repository...${NC}"
git clone https://github.com/saadpasta/developerFolio.git sriharsha-portfolio
cd sriharsha-portfolio

# Step 2: Install dependencies
echo -e "${BLUE}📦 Installing dependencies...${NC}"
npm install

# Step 3: Setup environment
echo -e "${YELLOW}⚙️  Setting up environment...${NC}"
cp env.example .env
echo "REACT_APP_GITHUB_TOKEN = \"YOUR_GITHUB_TOKEN_HERE\"" > .env
echo "GITHUB_USERNAME = \"hash471\"" >> .env
echo "USE_GITHUB_DATA = \"true\"" >> .env

# Step 4: Backup original portfolio
echo -e "${YELLOW}💾 Backing up original portfolio...${NC}"
mv src/portfolio.js src/portfolio.original.js

# Step 5: Create custom portfolio
echo -e "${GREEN}✨ Creating your custom portfolio...${NC}"
cat > src/portfolio.js << 'EOL'
// Your custom portfolio configuration will go here
// Replace this with the generated configuration from Claude
EOL

# Step 6: Update package.json for deployment
echo -e "${YELLOW}📝 Updating package.json for GitHub Pages...${NC}"
npm install --save-dev gh-pages

# Add to package.json scripts
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json'));
pkg.homepage = 'https://hash471.github.io/portfolio';
pkg.scripts['predeploy'] = 'npm run build';
pkg.scripts['deploy'] = 'gh-pages -d build';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Step 7: Create GitHub Actions workflow
echo -e "${BLUE}🔄 Setting up GitHub Actions...${NC}"
mkdir -p .github/workflows
cat > .github/workflows/deploy.yml << 'EOL'
name: Build and Deploy
on:
  push:
    branches: [ master ]
  pull_request:
    branches: [ master ]
  schedule:
    - cron: "0 0 * * 0"  # Redeploy every week
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout 🛎️
      uses: actions/checkout@v2.3.1

    - name: Setup Node.js 🔧
      uses: actions/setup-node@v2
      with:
        node-version: '16'

    - name: Install and Build 🔧
      run: |
        npm install
        npm run build
      env:
        REACT_APP_GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        GITHUB_USERNAME: hash471
        USE_GITHUB_DATA: "true"

    - name: Deploy 🚀
      uses: JamesIves/github-pages-deploy-action@4.1.4
      with:
        branch: gh-pages
        folder: build
EOL

echo -e "${GREEN}✅ Setup complete!${NC}"
echo -e "${YELLOW}📝 Next steps:${NC}"
echo "1. Replace YOUR_GITHUB_TOKEN_HERE in .env with your actual token"
echo "2. Replace the portfolio.js content with your custom configuration"
echo "3. Add company logos to src/assets/images/"
echo "4. Run 'npm start' to test locally"
echo "5. Run 'npm run deploy' to deploy to GitHub Pages"
echo ""
echo -e "${GREEN}🌟 Your portfolio will be live at: https://hash471.github.io/portfolio${NC}"