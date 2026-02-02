#!/bin/zsh

# ============================================================================
# TAMARACK RESTORATION — Image Processing Script (zsh compatible)
# ============================================================================

set -e

# ----------------------------------------------------------------------------
# CONFIGURATION - Update these paths if needed
# ----------------------------------------------------------------------------
SOURCE_DIR="$HOME/Projects/tamarackrestoration-final-2.0/raw-images"
OUTPUT_DIR="$HOME/Projects/tamarackrestoration-final-2.0/public/images"
BACKUP_DIR="$HOME/Projects/tamarackrestoration-final-2.0/public/images-backup-$(date +%Y%m%d-%H%M%S)"

BUSINESS_NAME="Tamarack Restoration"
COPYRIGHT="© $(date +%Y) Tamarack Restoration. All rights reserved."
WEBP_QUALITY=85

# ----------------------------------------------------------------------------
# FUNCTIONS
# ----------------------------------------------------------------------------

check_deps() {
    echo "Checking dependencies..."
    if ! command -v exiftool &> /dev/null; then
        echo "❌ ExifTool not found. Install: brew install exiftool"
        exit 1
    fi
    if ! command -v cwebp &> /dev/null; then
        echo "❌ cwebp not found. Install: brew install webp"
        exit 1
    fi
    echo "✅ All dependencies found"
    echo ""
}

setup_dirs() {
    echo "Setting up directories..."
    
    if [ -d "$OUTPUT_DIR" ]; then
        echo "  Backing up existing images to $BACKUP_DIR"
        cp -r "$OUTPUT_DIR" "$BACKUP_DIR"
        rm -rf "$OUTPUT_DIR"
    fi
    
    mkdir -p "$OUTPUT_DIR"/{logo,hero,certifications,insurance,team,vehicles,equipment}
    mkdir -p "$OUTPUT_DIR"/services/{water-damage,mold-removal,flood-cleanup,fire-damage,sewage-cleanup,leak-detection,general}
    
    echo "✅ Directories created"
    echo ""
}

# process_img source dest title description lat lon
process_img() {
    local src="$1"
    local dst="$2"
    local title="$3"
    local desc="$4"
    local lat="${5:-33.1581}"
    local lon="${6:--117.3506}"
    
    if [ ! -f "$src" ]; then
        echo "  ⚠️  Not found: $src"
        return 0
    fi
    
    mkdir -p "$(dirname "$dst")"
    
    # Convert to webp
    cwebp -q $WEBP_QUALITY "$src" -o "$dst" 2>/dev/null || cp "$src" "$dst"
    
    # Add EXIF
    exiftool -overwrite_original -q \
        -Title="$title" \
        -Description="$desc" \
        -Copyright="$COPYRIGHT" \
        -Artist="$BUSINESS_NAME" \
        -GPSLatitude="$lat" \
        -GPSLongitude="$lon" \
        -GPSLatitudeRef="N" \
        -GPSLongitudeRef="W" \
        "$dst" 2>/dev/null || true
    
    local size=$(ls -lh "$dst" | awk '{print $5}')
    echo "  ✅ $(basename "$dst") ($size)"
}

# process_img_no_gps source dest title description
process_img_no_gps() {
    local src="$1"
    local dst="$2"
    local title="$3"
    local desc="$4"
    
    if [ ! -f "$src" ]; then
        echo "  ⚠️  Not found: $src"
        return 0
    fi
    
    mkdir -p "$(dirname "$dst")"
    
    if [[ "$src" == *.webp ]]; then
        cp "$src" "$dst"
    else
        cwebp -q $WEBP_QUALITY "$src" -o "$dst" 2>/dev/null || cp "$src" "$dst"
    fi
    
    exiftool -overwrite_original -q \
        -Title="$title" \
        -Description="$desc" \
        -Copyright="$COPYRIGHT" \
        -Artist="$BUSINESS_NAME" \
        "$dst" 2>/dev/null || true
    
    local size=$(ls -lh "$dst" | awk '{print $5}')
    echo "  ✅ $(basename "$dst") ($size)"
}

# copy_file source dest title description (for PNGs that need transparency)
copy_file() {
    local src="$1"
    local dst="$2"
    local title="$3"
    local desc="$4"
    
    if [ ! -f "$src" ]; then
        echo "  ⚠️  Not found: $src"
        return 0
    fi
    
    mkdir -p "$(dirname "$dst")"
    cp "$src" "$dst"
    
    exiftool -overwrite_original -q \
        -Title="$title" \
        -Description="$desc" \
        -Copyright="$COPYRIGHT" \
        "$dst" 2>/dev/null || true
    
    local size=$(ls -lh "$dst" | awk '{print $5}')
    echo "  ✅ $(basename "$dst") ($size)"
}

# ----------------------------------------------------------------------------
# MAIN
# ----------------------------------------------------------------------------

echo "============================================"
echo "TAMARACK RESTORATION - Image Processing"
echo "============================================"
echo ""

check_deps
setup_dirs

SRC="$SOURCE_DIR/images"

# ============================================================================
# LOGOS
# ============================================================================
echo "Processing LOGOS..."
process_img_no_gps \
    "$SRC/logo/Tamarack restoration logo 2 - best.webp" \
    "$OUTPUT_DIR/logo/tamarack-logo.webp" \
    "Tamarack Restoration Logo" \
    "Official logo of Tamarack Restoration - Professional restoration services in San Diego County."

process_img_no_gps \
    "$SRC/logo/Tamarack restoration logo 2 - best.webp" \
    "$OUTPUT_DIR/logo/og-default.webp" \
    "Tamarack Restoration" \
    "Professional restoration services in San Diego County. 24/7 emergency response."
echo ""

# ============================================================================
# HERO
# ============================================================================
echo "Processing HERO..."
process_img \
    "$SRC/hero/hero-restoration-services.webp" \
    "$OUTPUT_DIR/hero/truck-hero.webp" \
    "Tamarack Restoration Service Vehicle" \
    "Tamarack Restoration emergency response vehicle serving San Diego County." \
    "33.1581" "-117.3506"
echo ""

# ============================================================================
# CERTIFICATIONS
# ============================================================================
echo "Processing CERTIFICATIONS..."
process_img_no_gps \
    "$SRC/certifications/iicrc-certified-badge.webp" \
    "$OUTPUT_DIR/certifications/iicrc-certified.webp" \
    "IICRC Certified Restoration Company" \
    "Tamarack Restoration is IICRC certified for water damage, fire damage, and mold remediation."

process_img_no_gps \
    "$SRC/certifications/homeadvisor-approved.webp" \
    "$OUTPUT_DIR/certifications/homeadvisor-approved.webp" \
    "HomeAdvisor Screened and Approved" \
    "Tamarack Restoration is HomeAdvisor Screened & Approved."

process_img_no_gps \
    "$SRC/certifications/certifications-banner.webp" \
    "$OUTPUT_DIR/certifications/certifications-banner.webp" \
    "Tamarack Restoration Certifications" \
    "IICRC Certified and HomeAdvisor Approved."
echo ""

# ============================================================================
# INSURANCE
# ============================================================================
echo "Processing INSURANCE logos..."
copy_file \
    "$SRC/insurance/sf-logo-horizontal.png" \
    "$OUTPUT_DIR/insurance/state-farm.png" \
    "State Farm Insurance Partner" \
    "Tamarack Restoration works with State Farm insurance claims."

copy_file \
    "$SRC/insurance/Slightly-smaller-Allstate-logo-V2-1-1.jpg" \
    "$OUTPUT_DIR/insurance/allstate.jpg" \
    "Allstate Insurance Partner" \
    "Tamarack Restoration works with Allstate insurance claims."

copy_file \
    "$SRC/insurance/farmers-insurance-3-logo-png-transparent.png" \
    "$OUTPUT_DIR/insurance/farmers.png" \
    "Farmers Insurance Partner" \
    "Tamarack Restoration works with Farmers insurance claims."

copy_file \
    "$SRC/insurance/USAA-placeholder.png" \
    "$OUTPUT_DIR/insurance/usaa.png" \
    "USAA Insurance Partner" \
    "Tamarack Restoration works with USAA insurance claims."

copy_file \
    "$SRC/insurance/liberty-mutual-seeklogo.png" \
    "$OUTPUT_DIR/insurance/liberty-mutual.png" \
    "Liberty Mutual Insurance Partner" \
    "Tamarack Restoration works with Liberty Mutual insurance claims."

process_img_no_gps \
    "$SRC/insurance/insurance-partners-banner.webp" \
    "$OUTPUT_DIR/insurance/insurance-banner.webp" \
    "Insurance Partners" \
    "Tamarack Restoration works with all major insurance carriers."
echo ""

# ============================================================================
# TEAM
# ============================================================================
echo "Processing TEAM images..."
process_img \
    "$SRC/Job images 2/tamarack-restoration-bressi-ranch-mold-removal.jpg" \
    "$OUTPUT_DIR/team/team-thumbs-up.webp" \
    "Tamarack Restoration Team" \
    "Professional restoration team at Tamarack Restoration. IICRC certified technicians." \
    "33.1292" "-117.2617"

process_img \
    "$SRC/team-vehicles-teamatwork/2020-08-22.webp" \
    "$OUTPUT_DIR/team/team-at-work.webp" \
    "Tamarack Restoration Technician at Work" \
    "IICRC certified technician with proper safety equipment." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Job images 2/tamarack-restoration-bressi-ranch-water-damage-restoration.jpg" \
    "$OUTPUT_DIR/team/team-floor-install.webp" \
    "Professional Floor Installation" \
    "Technician installing flooring after water damage restoration." \
    "33.1292" "-117.2617"

process_img \
    "$SRC/team-vehicles-teamatwork/unnamed (4).webp" \
    "$OUTPUT_DIR/team/team-containment-setup.webp" \
    "Professional Containment Setup" \
    "Technician setting up containment barriers." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/team-vehicles-teamatwork/unnamed.webp" \
    "$OUTPUT_DIR/team/truck-interior.webp" \
    "Fully Equipped Restoration Vehicle" \
    "Inside Tamarack Restoration service vehicle with professional equipment." \
    "33.1581" "-117.3506"
echo ""

# ============================================================================
# VEHICLES
# ============================================================================
echo "Processing VEHICLE images..."
process_img \
    "$SRC/team-vehicles-teamatwork/tamarack-restoration-team-carlsbad.webp" \
    "$OUTPUT_DIR/vehicles/truck-rear-view.webp" \
    "Tamarack Restoration Service Vehicle" \
    "Emergency response vehicle ready for water, fire, and mold emergencies." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/team-vehicles-teamatwork/unnamed (3).webp" \
    "$OUTPUT_DIR/vehicles/truck-street-view.webp" \
    "Tamarack Restoration Truck" \
    "Service vehicle on location in San Diego County." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/team-vehicles-teamatwork/unnamed (1).webp" \
    "$OUTPUT_DIR/vehicles/truck-door-branding.webp" \
    "Tamarack Restoration 24/7 Emergency Services" \
    "Fire, Mold, Water, Storm - 24/7 emergency restoration services." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Equipment/2025-08-08.webp" \
    "$OUTPUT_DIR/vehicles/truck-door-closeup.webp" \
    "Tamarack Restoration Emergency Services" \
    "24/7 Emergency Services - Call (760) 500-2211." \
    "33.1581" "-117.3506"
echo ""

# ============================================================================
# WATER DAMAGE
# ============================================================================
echo "Processing WATER DAMAGE images..."
process_img \
    "$SRC/services/water restoration mid job dry out - fans and blowers-good.JPG" \
    "$OUTPUT_DIR/services/water-damage/drying-equipment-room.webp" \
    "Water Damage Drying Equipment Setup" \
    "Professional water damage restoration with industrial dehumidifiers and air movers." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/water resoration.JPG" \
    "$OUTPUT_DIR/services/water-damage/living-room-dryout.webp" \
    "Water Damage Restoration in Progress" \
    "Large-scale water damage restoration with multiple air movers and dehumidifiers." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/water restoration.JPG" \
    "$OUTPUT_DIR/services/water-damage/structural-drying.webp" \
    "Structural Drying Services" \
    "Water damage structural drying with professional-grade equipment." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/water restoration(1).JPG" \
    "$OUTPUT_DIR/services/water-damage/containment-drying.webp" \
    "Contained Drying Area" \
    "Professional containment and drying equipment for water damage restoration." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/water restoration equipment.JPG" \
    "$OUTPUT_DIR/services/water-damage/drying-equipment.webp" \
    "Professional Drying Equipment" \
    "Industrial dehumidifiers and air scrubbers for water damage restoration." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/water-damage-restoration.webp" \
    "$OUTPUT_DIR/services/water-damage/kitchen-restored.webp" \
    "Kitchen After Water Damage Restoration" \
    "Beautifully restored kitchen after water damage repair." \
    "33.1581" "-117.3506"

# City-specific water damage
process_img \
    "$SRC/services/water restoration mid job dry out - fans and blowers-good.JPG" \
    "$OUTPUT_DIR/services/water-damage/carlsbad-water-damage-restoration.webp" \
    "Water Damage Restoration Carlsbad CA" \
    "Professional water damage restoration in Carlsbad, California. 24/7 emergency response. Call (760) 500-2211." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/water resoration.JPG" \
    "$OUTPUT_DIR/services/water-damage/oceanside-water-damage-restoration.webp" \
    "Water Damage Restoration Oceanside CA" \
    "Professional water damage restoration in Oceanside, California. Call (760) 500-2211." \
    "33.1959" "-117.3795"

process_img \
    "$SRC/services/water restoration.JPG" \
    "$OUTPUT_DIR/services/water-damage/encinitas-water-damage-restoration.webp" \
    "Water Damage Restoration Encinitas CA" \
    "Professional water damage restoration in Encinitas, California. Call (760) 500-2211." \
    "33.0370" "-117.2920"

process_img \
    "$SRC/services/water restoration(1).JPG" \
    "$OUTPUT_DIR/services/water-damage/san-marcos-water-damage-restoration.webp" \
    "Water Damage Restoration San Marcos CA" \
    "Professional water damage restoration in San Marcos, California. Call (760) 500-2211." \
    "33.1434" "-117.1661"

process_img \
    "$SRC/services/tamarack-restoration-rancho-santa-fe-water-damage-restoration.jpg" \
    "$OUTPUT_DIR/services/water-damage/rancho-santa-fe-water-damage.webp" \
    "Water Damage Restoration Rancho Santa Fe CA" \
    "Premium water damage restoration in Rancho Santa Fe, California. Call (760) 500-2211." \
    "33.0164" "-117.2028"
echo ""

# ============================================================================
# MOLD REMOVAL
# ============================================================================
echo "Processing MOLD REMOVAL images..."
process_img \
    "$SRC/team-vehicles-teamatwork/2020-08-22.webp" \
    "$OUTPUT_DIR/services/mold-removal/technician-respirator.webp" \
    "Mold Removal Technician with Safety Equipment" \
    "IICRC certified mold removal technician with proper respirator and safety equipment." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/mold-removal.webp" \
    "$OUTPUT_DIR/services/mold-removal/floor-remediation.webp" \
    "Mold Remediation Floor Removal" \
    "Mold-affected flooring removal following IICRC protocols." \
    "33.1581" "-117.3506"
echo ""

# ============================================================================
# FLOOD CLEANUP
# ============================================================================
echo "Processing FLOOD CLEANUP images..."
process_img \
    "$SRC/Job images 2/flood restoration(1).JPG" \
    "$OUTPUT_DIR/services/flood-cleanup/flooded-basement.webp" \
    "Flooded Basement Emergency" \
    "Severe basement flooding requiring emergency water extraction." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Job images 2/flood restoration.JPG" \
    "$OUTPUT_DIR/services/flood-cleanup/standing-water.webp" \
    "Standing Water Flood Damage" \
    "Major flood damage with standing water requiring emergency extraction." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Job images 2/flood restoration(1).JPG" \
    "$OUTPUT_DIR/services/flood-cleanup/vista-flood-cleanup.webp" \
    "Flood Cleanup Vista CA" \
    "Emergency flood cleanup services in Vista, California. Call (760) 500-2211." \
    "33.2000" "-117.2426"
echo ""

# ============================================================================
# FIRE DAMAGE
# ============================================================================
echo "Processing FIRE DAMAGE images..."
process_img \
    "$SRC/Job images 2/mid job water restoration - plastic sealing job zone- good image.JPG" \
    "$OUTPUT_DIR/services/fire-damage/containment-setup.webp" \
    "Fire Damage Restoration Containment" \
    "Professional containment setup for fire and smoke damage restoration." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Job images 2/damage restoration.JPG" \
    "$OUTPUT_DIR/services/fire-damage/restoration-containment.webp" \
    "Fire Damage Restoration in Progress" \
    "Professional containment during fire and smoke damage restoration." \
    "33.1581" "-117.3506"
echo ""

# ============================================================================
# SEWAGE CLEANUP
# ============================================================================
echo "Processing SEWAGE CLEANUP images..."
process_img \
    "$SRC/services/water restoration repair - dry wall and floor replacement.JPG" \
    "$OUTPUT_DIR/services/sewage-cleanup/demolition-repair.webp" \
    "Sewage Damage Demolition and Repair" \
    "Professional demolition of sewage-contaminated materials." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Job images 2/water restoration repair -floor replacement.JPG" \
    "$OUTPUT_DIR/services/sewage-cleanup/bathroom-restoration.webp" \
    "Bathroom Sewage Damage Repair" \
    "Bathroom restoration after sewage damage." \
    "33.1581" "-117.3506"
echo ""

# ============================================================================
# LEAK DETECTION
# ============================================================================
echo "Processing LEAK DETECTION images..."
process_img \
    "$SRC/services/mold detection and removal.JPG" \
    "$OUTPUT_DIR/services/leak-detection/thermal-camera-floor.webp" \
    "Thermal Imaging Leak Detection" \
    "Advanced thermal imaging camera detecting hidden water leaks." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/moisture detection.JPG" \
    "$OUTPUT_DIR/services/leak-detection/thermal-camera-garage.webp" \
    "Thermal Leak Detection in Garage" \
    "Thermal imaging detecting moisture in garage ceiling." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/moisture detection 2.JPG" \
    "$OUTPUT_DIR/services/leak-detection/thermal-camera-ceiling.webp" \
    "Ceiling Leak Detection with Thermal Camera" \
    "Thermal imaging revealing hidden ceiling leak." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/moisture detection imaging.JPG" \
    "$OUTPUT_DIR/services/leak-detection/thermal-camera-wall.webp" \
    "Wall Leak Detection" \
    "Thermal imaging showing moisture behind wall." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/moisture detection(1).JPG" \
    "$OUTPUT_DIR/services/leak-detection/thermal-camera-plumbing.webp" \
    "Plumbing Leak Detection" \
    "Thermal imaging detecting plumbing leaks behind walls." \
    "33.1581" "-117.3506"
echo ""

# ============================================================================
# GENERAL / RESULTS
# ============================================================================
echo "Processing GENERAL/RESULTS images..."
process_img \
    "$SRC/Job images 2/2025-11-11.webp" \
    "$OUTPUT_DIR/services/general/kitchen-after-restoration.webp" \
    "Kitchen After Complete Restoration" \
    "Beautiful modern kitchen after complete water damage restoration." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Job images 2/damage restoration - after job completion.JPG" \
    "$OUTPUT_DIR/services/general/dining-room-after.webp" \
    "Dining Room After Restoration" \
    "Elegant dining room after complete restoration." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Tamarack Restoration Images - Job images/tamarack-restoration-solana-beach-mold-removal.jpg" \
    "$OUTPUT_DIR/services/general/hallway-after-restoration.webp" \
    "Hallway After Water Damage Restoration" \
    "Beautifully restored hardwood hallway after water damage repair in Solana Beach." \
    "32.9912" "-117.2712"

process_img \
    "$SRC/Tamarack Restoration Images - Job images/cieling repair water restoration.JPG" \
    "$OUTPUT_DIR/services/general/ceiling-repair.webp" \
    "Ceiling Water Damage Repair" \
    "Ceiling repair after water damage." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Tamarack Restoration Images - Job images/water restoration- complete restoration of kitchen.JPG" \
    "$OUTPUT_DIR/services/general/kitchen-restoration-progress.webp" \
    "Kitchen Restoration in Progress" \
    "Large kitchen during water damage restoration." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Job images 2/mid job water restoration - plastic sealing job zone- good image.JPG" \
    "$OUTPUT_DIR/services/general/containment-barrier.webp" \
    "Professional Containment Barrier" \
    "Full-room containment barrier with zippered entry." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Tamarack Restoration Images - Job images/water restoration mid job - plastic sealing ktichen area.JPG" \
    "$OUTPUT_DIR/services/general/containment-kitchen.webp" \
    "Kitchen Containment Setup" \
    "Professional containment during kitchen restoration." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/water restoration repair - dry wall and floor replacement-3.JPG" \
    "$OUTPUT_DIR/services/general/floor-demolition.webp" \
    "Floor Demolition for Water Damage Repair" \
    "Professional demolition of water-damaged flooring." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/Tamarack Restoration Images - Job images/tamarack-restoration-solana-beach-mold-removal.jpg" \
    "$OUTPUT_DIR/services/general/solana-beach-restoration.webp" \
    "Property Restoration Solana Beach CA" \
    "Professional property restoration in Solana Beach, California." \
    "32.9912" "-117.2712"
echo ""

# ============================================================================
# EQUIPMENT
# ============================================================================
echo "Processing EQUIPMENT images..."
process_img \
    "$SRC/Equipment/Drying equipment.JPG" \
    "$OUTPUT_DIR/equipment/dehumidifier-display.webp" \
    "Professional Dehumidifier Monitoring" \
    "LGR dehumidifier digital display showing moisture readings." \
    "33.1581" "-117.3506"

process_img \
    "$SRC/services/water restoration dry out equipment - fan.JPG" \
    "$OUTPUT_DIR/equipment/air-mover.webp" \
    "Industrial Air Mover" \
    "Professional-grade air mover for structural drying." \
    "33.1581" "-117.3506"
echo ""

# ============================================================================
# DONE
# ============================================================================
echo "============================================"
echo "✅ Processing complete!"
echo "============================================"
echo ""
echo "Images saved to: $OUTPUT_DIR"
echo "Backup at: $BACKUP_DIR"
echo ""
echo "To verify EXIF data:"
echo "  exiftool $OUTPUT_DIR/services/water-damage/carlsbad-water-damage-restoration.webp"
echo ""
