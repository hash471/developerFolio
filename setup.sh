# Switch to main branch
git checkout main || git checkout -b main

# Update package.json for correct URL
node -e "
const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json'));
pkg.homepage = 'https://hash471.github.io/portfolio';
pkg.scripts.predeploy = 'npm run build';
pkg.scripts.deploy = 'gh-pages -d build';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
"

# Install gh-pages
npm install --save-dev gh-pages

# Create required files
echo '{"short_name":"Portfolio","name":"Sriharsha Portfolio","start_url":".","display":"standalone"}' > public/manifest.json
touch public/.nojekyll

# Create missing images
mkdir -p src/assets/images
for img in aws-logo gcp-logo azure-logo make-logo ghl-logo zapier-logo api-logo agencyAutomation makeIntegration cloudMigration automationDashboard; do
    echo "placeholder" > "src/assets/images/${img}.png"
done

# Clean deploy
git push origin --delete gh-pages  # Remove old
rm -rf build/
git add .
git commit -m "Setup portfolio for GitHub Pages"
git push origin main
npm run deploy