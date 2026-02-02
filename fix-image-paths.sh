#!/bin/zsh

# ============================================================================
# TAMARACK RESTORATION — Fix Image Path References
# ============================================================================
# This script updates all code references to use the new image paths
# ============================================================================

set -e

echo "============================================"
echo "Fixing image path references in code..."
echo "============================================"
echo ""

# ----------------------------------------------------------------------------
# SEO.TS FIXES
# ----------------------------------------------------------------------------
echo "Fixing src/utils/seo.ts..."

# Fix OG default image
sed -i '' 's|/images/og-default\.jpg|/images/logo/og-default.webp|g' src/utils/seo.ts

# Fix logo references (png to webp)
sed -i '' 's|/images/logo/tamarack-logo\.png|/images/logo/tamarack-logo.webp|g' src/utils/seo.ts

echo "  ✅ seo.ts"

# ----------------------------------------------------------------------------
# SEOHEAD.ASTRO FIXES
# ----------------------------------------------------------------------------
echo "Fixing src/components/seo/SEOHead.astro..."

sed -i '' 's|/images/og-default\.jpg|/images/logo/og-default.webp|g' src/components/seo/SEOHead.astro

echo "  ✅ SEOHead.astro"

# ----------------------------------------------------------------------------
# HERO.ASTRO FIXES
# ----------------------------------------------------------------------------
echo "Fixing src/components/sections/Hero.astro..."

sed -i '' 's|/images/hero/truck-side-profile\.jpg|/images/hero/truck-hero.webp|g' src/components/sections/Hero.astro

echo "  ✅ Hero.astro"

# ----------------------------------------------------------------------------
# CERTIFICATIONS.ASTRO FIXES
# ----------------------------------------------------------------------------
echo "Fixing src/components/sections/Certifications.astro..."

# Fix iicrc.webp to iicrc-certified.webp
sed -i '' 's|/images/certifications/iicrc\.webp|/images/certifications/iicrc-certified.webp|g' src/components/sections/Certifications.astro

# Fix team-on-site.webp to team-at-work.webp
sed -i '' 's|/images/team/team-on-site\.webp|/images/team/team-at-work.webp|g' src/components/sections/Certifications.astro

echo "  ✅ Certifications.astro"

# ----------------------------------------------------------------------------
# HEADER.ASTRO FIXES
# ----------------------------------------------------------------------------
echo "Fixing src/components/global/Header.astro..."

# Header logo is already correct path, just ensure it exists
# /images/logo/tamarack-logo.webp - this should work

echo "  ✅ Header.astro (already correct)"

# ----------------------------------------------------------------------------
# FOOTER.ASTRO FIXES
# ----------------------------------------------------------------------------
echo "Fixing src/components/global/Footer.astro..."

# We need a white logo - for now point to the regular logo
# TODO: Generate a white version
sed -i '' 's|/images/logo/tamarack-logo-white\.png|/images/logo/tamarack-logo.webp|g' src/components/global/Footer.astro

echo "  ✅ Footer.astro (note: using regular logo, white version needed)"

# ----------------------------------------------------------------------------
# LAYOUT FIXES
# ----------------------------------------------------------------------------
echo "Fixing layout files..."

# Fix default-hero.jpg references
sed -i '' 's|/images/services/default-hero\.jpg|/images/hero/truck-hero.webp|g' src/layouts/ServicePillarLayout.astro
sed -i '' 's|/images/services/default-hero\.jpg|/images/hero/truck-hero.webp|g' src/layouts/MoneyPageLayout.astro
sed -i '' 's|/images/services/default-hero\.jpg|/images/hero/truck-hero.webp|g' src/layouts/InsuranceServiceLayout.astro

# Fix BlogPostLayout
sed -i '' 's|/images/og-default\.jpg|/images/logo/og-default.webp|g' src/layouts/BlogPostLayout.astro
sed -i '' 's|/images/logo\.png|/images/logo/tamarack-logo.webp|g' src/layouts/BlogPostLayout.astro

echo "  ✅ ServicePillarLayout.astro"
echo "  ✅ MoneyPageLayout.astro"
echo "  ✅ InsuranceServiceLayout.astro"
echo "  ✅ BlogPostLayout.astro"

# ----------------------------------------------------------------------------
# SITE.TS FIXES (service images)
# ----------------------------------------------------------------------------
echo "Fixing src/data/site.ts..."

# Water damage restoration
sed -i '' 's|/images/services/tamarack-restoration-water-damage-restoration\.webp|/images/services/water-damage/drying-equipment-room.webp|g' src/data/site.ts

# Water leak repair -> use leak detection image
sed -i '' 's|/images/services/tamarack-restoration-water-leak-repair\.webp|/images/services/leak-detection/thermal-camera-floor.webp|g' src/data/site.ts

# Mold removal
sed -i '' 's|/images/services/tamarack-restoration-mold-removal\.webp|/images/services/mold-removal/technician-respirator.webp|g' src/data/site.ts

# Fire damage restoration
sed -i '' 's|/images/services/tamarack-restoration-fire-damage-restoration\.webp|/images/services/fire-damage/containment-setup.webp|g' src/data/site.ts

# Flood cleanup
sed -i '' 's|/images/services/tamarack-restoration-flood-cleanup\.webp|/images/services/flood-cleanup/flooded-basement.webp|g' src/data/site.ts

# Sewage cleanup
sed -i '' 's|/images/services/tamarack-restoration-sewage-cleanup\.webp|/images/services/sewage-cleanup/demolition-repair.webp|g' src/data/site.ts

# Leak detection images
sed -i '' 's|/images/services/leak-detection/thermal-plumbing\.jpg|/images/services/leak-detection/thermal-camera-plumbing.webp|g' src/data/site.ts
sed -i '' 's|/images/services/leak-detection/thermal-camera-garage\.jpg|/images/services/leak-detection/thermal-camera-garage.webp|g' src/data/site.ts

# Insurance logos
sed -i '' 's|/images/insurance/insurance-state-farm\.png|/images/insurance/state-farm.png|g' src/data/site.ts
sed -i '' 's|/images/insurance/insurance-allstate\.png|/images/insurance/allstate.jpg|g' src/data/site.ts
sed -i '' 's|/images/insurance/insurance-farmers\.png|/images/insurance/farmers.png|g' src/data/site.ts
sed -i '' 's|/images/insurance/insurance-usaa\.png|/images/insurance/usaa.png|g' src/data/site.ts
sed -i '' 's|/images/insurance/insurance-liberty-mutual\.png|/images/insurance/liberty-mutual.png|g' src/data/site.ts

echo "  ✅ site.ts"

# ----------------------------------------------------------------------------
# VERIFY
# ----------------------------------------------------------------------------
echo ""
echo "============================================"
echo "✅ All image paths updated!"
echo "============================================"
echo ""
echo "Verifying no old broken paths remain..."
echo ""

# Check for any remaining old paths
OLD_PATHS=$(grep -r "og-default\.jpg\|truck-side-profile\.jpg\|default-hero\.jpg\|tamarack-logo\.png\|logo\.png\|iicrc\.webp\|team-on-site\.webp" src/ 2>/dev/null | grep -v "node_modules" || true)

if [ -z "$OLD_PATHS" ]; then
    echo "✅ No broken paths found!"
else
    echo "⚠️  Some paths may still need fixing:"
    echo "$OLD_PATHS"
fi

echo ""
echo "Next steps:"
echo "1. Run: npm run dev"
echo "2. Check the site in browser for any broken images"
echo "3. Commit changes: git add -A && git commit -m 'fix: update all image paths to new optimized structure'"
echo ""
