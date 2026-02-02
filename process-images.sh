#!/bin/bash

# ============================================================================
# TAMARACK RESTORATION — Image Processing Script
# ============================================================================
# This script:
# 1. Creates clean directory structure
# 2. Converts images to optimized WebP
# 3. Adds EXIF metadata (title, description, copyright)
# 4. Adds GPS coordinates for location-specific images
# 5. Renames files with SEO-friendly names
# ============================================================================

set -e

# ----------------------------------------------------------------------------
# CONFIGURATION
# ----------------------------------------------------------------------------

# Paths - UPDATE THESE TO MATCH YOUR SETUP
SOURCE_DIR="$HOME/Projects/tamarackrestoration-final-2.0/raw-images"  # Where you extracted the zip
OUTPUT_DIR="$HOME/Projects/tamarackrestoration-final-2.0/public/images"
BACKUP_DIR="$HOME/Projects/tamarackrestoration-final-2.0/public/images-backup-$(date +%Y%m%d)"

# Business info for EXIF
BUSINESS_NAME="Tamarack Restoration"
BUSINESS_PHONE="(760) 500-2211"
BUSINESS_URL="https://www.tamarackrestoration.com"
COPYRIGHT="© $(date +%Y) Tamarack Restoration. All rights reserved."

# WebP quality (80-90 is good balance of quality/size)
WEBP_QUALITY=85

# ----------------------------------------------------------------------------
# SERVICE AREA GPS COORDINATES (San Diego County)
# ----------------------------------------------------------------------------
declare -A CITY_COORDS
CITY_COORDS["carlsbad"]="33.1581,-117.3506"
CITY_COORDS["oceanside"]="33.1959,-117.3795"
CITY_COORDS["encinitas"]="33.0370,-117.2920"
CITY_COORDS["san-marcos"]="33.1434,-117.1661"
CITY_COORDS["vista"]="33.2000,-117.2426"
CITY_COORDS["solana-beach"]="32.9912,-117.2712"
CITY_COORDS["del-mar"]="32.9595,-117.2653"
CITY_COORDS["rancho-santa-fe"]="33.0164,-117.2028"
CITY_COORDS["la-costa"]="33.0853,-117.2648"
CITY_COORDS["bressi-ranch"]="33.1292,-117.2617"
CITY_COORDS["san-elijo-hills"]="33.0772,-117.1575"
CITY_COORDS["escondido"]="33.1192,-117.0864"
CITY_COORDS["poway"]="32.9628,-117.0359"
CITY_COORDS["la-jolla"]="32.8328,-117.2713"
CITY_COORDS["san-diego"]="32.7157,-117.1611"
# Default for general/non-location images (Carlsbad HQ)
CITY_COORDS["default"]="33.1581,-117.3506"

# ----------------------------------------------------------------------------
# HELPER FUNCTIONS
# ----------------------------------------------------------------------------

check_dependencies() {
    echo "Checking dependencies..."
    
    if ! command -v exiftool &> /dev/null; then
        echo "❌ ExifTool not found. Install with: brew install exiftool"
        exit 1
    fi
    echo "✅ ExifTool $(exiftool -ver)"
    
    if ! command -v cwebp &> /dev/null; then
        echo "❌ cwebp not found. Install with: brew install webp"
        exit 1
    fi
    echo "✅ cwebp $(cwebp -version 2>&1 | head -1)"
    
    echo ""
}

create_directory_structure() {
    echo "Creating directory structure..."
    
    # Backup existing images
    if [ -d "$OUTPUT_DIR" ]; then
        echo "  Backing up existing images to $BACKUP_DIR"
        cp -r "$OUTPUT_DIR" "$BACKUP_DIR"
    fi
    
    # Create fresh directory structure
    mkdir -p "$OUTPUT_DIR"/{logo,hero,certifications,insurance,team,vehicles,equipment}
    mkdir -p "$OUTPUT_DIR"/services/{water-damage,mold-removal,flood-cleanup,fire-damage,sewage-cleanup,leak-detection,general}
    
    echo "✅ Directory structure created"
    echo ""
}

# Convert image to WebP and set EXIF
# Usage: process_image "source_path" "output_path" "title" "description" "city_key"
process_image() {
    local src="$1"
    local dst="$2"
    local title="$3"
    local desc="$4"
    local city="${5:-default}"
    
    # Skip if source doesn't exist
    if [ ! -f "$src" ]; then
        echo "  ⚠️  Source not found: $src"
        return 1
    fi
    
    # Get GPS coordinates
    local coords="${CITY_COORDS[$city]}"
    if [ -z "$coords" ]; then
        coords="${CITY_COORDS[default]}"
    fi
    local lat=$(echo "$coords" | cut -d',' -f1)
    local lon=$(echo "$coords" | cut -d',' -f2)
    
    # Ensure output directory exists
    mkdir -p "$(dirname "$dst")"
    
    # Convert to WebP
    local tmp_webp="${dst%.webp}_tmp.webp"
    cwebp -q "$WEBP_QUALITY" "$src" -o "$tmp_webp" 2>/dev/null
    
    # Copy to final location (exiftool works better on copy)
    cp "$tmp_webp" "$dst"
    rm "$tmp_webp"
    
    # Add EXIF metadata
    exiftool -overwrite_original \
        -Title="$title" \
        -Description="$desc" \
        -Copyright="$COPYRIGHT" \
        -Artist="$BUSINESS_NAME" \
        -Creator="$BUSINESS_NAME" \
        -XMP:Credit="$BUSINESS_NAME" \
        -IPTC:Credit="$BUSINESS_NAME" \
        -XMP:Rights="$COPYRIGHT" \
        -GPSLatitude="$lat" \
        -GPSLongitude="$lon" \
        -GPSLatitudeRef="N" \
        -GPSLongitudeRef="W" \
        "$dst" 2>/dev/null
    
    local size=$(ls -lh "$dst" | awk '{print $5}')
    echo "  ✅ $dst ($size)"
}

# Process image without GPS (for logos, certifications, etc.)
process_image_no_gps() {
    local src="$1"
    local dst="$2"
    local title="$3"
    local desc="$4"
    
    if [ ! -f "$src" ]; then
        echo "  ⚠️  Source not found: $src"
        return 1
    fi
    
    mkdir -p "$(dirname "$dst")"
    
    # Check if already WebP
    if [[ "$src" == *.webp ]]; then
        cp "$src" "$dst"
    else
        cwebp -q "$WEBP_QUALITY" "$src" -o "$dst" 2>/dev/null
    fi
    
    exiftool -overwrite_original \
        -Title="$title" \
        -Description="$desc" \
        -Copyright="$COPYRIGHT" \
        -Artist="$BUSINESS_NAME" \
        "$dst" 2>/dev/null
    
    local size=$(ls -lh "$dst" | awk '{print $5}')
    echo "  ✅ $dst ($size)"
}

# Keep PNG for insurance logos (transparency needed)
process_png() {
    local src="$1"
    local dst="$2"
    local title="$3"
    local desc="$4"
    
    if [ ! -f "$src" ]; then
        echo "  ⚠️  Source not found: $src"
        return 1
    fi
    
    mkdir -p "$(dirname "$dst")"
    cp "$src" "$dst"
    
    exiftool -overwrite_original \
        -Title="$title" \
        -Description="$desc" \
        -Copyright="$COPYRIGHT" \
        "$dst" 2>/dev/null
    
    local size=$(ls -lh "$dst" | awk '{print $5}')
    echo "  ✅ $dst ($size)"
}

# ----------------------------------------------------------------------------
# MAIN PROCESSING
# ----------------------------------------------------------------------------

main() {
    echo "============================================"
    echo "TAMARACK RESTORATION - Image Processing"
    echo "============================================"
    echo ""
    
    check_dependencies
    create_directory_structure
    
    # Define source base path
    local SRC="$SOURCE_DIR/images"
    
    # ========================================================================
    # LOGOS
    # ========================================================================
    echo "Processing LOGOS..."
    
    process_image_no_gps \
        "$SRC/logo/Tamarack restoration logo 2 - best.webp" \
        "$OUTPUT_DIR/logo/tamarack-logo.webp" \
        "Tamarack Restoration Logo" \
        "Official logo of Tamarack Restoration - Professional water, fire, mold, and storm damage restoration services in San Diego County."
    
    # Copy for OG image
    process_image_no_gps \
        "$SRC/logo/Tamarack restoration logo 2 - best.webp" \
        "$OUTPUT_DIR/logo/og-default.webp" \
        "Tamarack Restoration" \
        "Professional restoration services in San Diego County. 24/7 emergency response for water, fire, mold, and storm damage."
    
    echo ""
    
    # ========================================================================
    # HERO
    # ========================================================================
    echo "Processing HERO images..."
    
    process_image \
        "$SRC/hero/hero-restoration-services.webp" \
        "$OUTPUT_DIR/hero/truck-hero.webp" \
        "Tamarack Restoration Service Vehicle" \
        "Tamarack Restoration's fully-equipped emergency response vehicle serving San Diego County. 24/7 water damage, fire damage, mold removal, and storm damage restoration." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # CERTIFICATIONS
    # ========================================================================
    echo "Processing CERTIFICATIONS..."
    
    process_image_no_gps \
        "$SRC/certifications/iicrc-certified-badge.webp" \
        "$OUTPUT_DIR/certifications/iicrc-certified.webp" \
        "IICRC Certified Restoration Company" \
        "Tamarack Restoration is IICRC certified - the gold standard in the restoration industry for water damage, fire damage, and mold remediation."
    
    process_image_no_gps \
        "$SRC/certifications/homeadvisor-approved.webp" \
        "$OUTPUT_DIR/certifications/homeadvisor-approved.webp" \
        "HomeAdvisor Screened and Approved" \
        "Tamarack Restoration is HomeAdvisor Screened & Approved - background checked and verified for quality service."
    
    process_image_no_gps \
        "$SRC/certifications/certifications-banner.webp" \
        "$OUTPUT_DIR/certifications/certifications-banner.webp" \
        "Tamarack Restoration Certifications" \
        "IICRC Certified and HomeAdvisor Approved restoration company serving San Diego County."
    
    echo ""
    
    # ========================================================================
    # INSURANCE LOGOS
    # ========================================================================
    echo "Processing INSURANCE logos..."
    
    process_png \
        "$SRC/insurance/sf-logo-horizontal.png" \
        "$OUTPUT_DIR/insurance/state-farm.png" \
        "State Farm Insurance Partner" \
        "Tamarack Restoration works with State Farm insurance claims for water damage, fire damage, and mold restoration."
    
    process_png \
        "$SRC/insurance/Slightly-smaller-Allstate-logo-V2-1-1.jpg" \
        "$OUTPUT_DIR/insurance/allstate.jpg" \
        "Allstate Insurance Partner" \
        "Tamarack Restoration works with Allstate insurance claims for property damage restoration."
    
    process_png \
        "$SRC/insurance/farmers-insurance-3-logo-png-transparent.png" \
        "$OUTPUT_DIR/insurance/farmers.png" \
        "Farmers Insurance Partner" \
        "Tamarack Restoration works with Farmers insurance claims for restoration services."
    
    process_png \
        "$SRC/insurance/USAA-placeholder.png" \
        "$OUTPUT_DIR/insurance/usaa.png" \
        "USAA Insurance Partner" \
        "Tamarack Restoration works with USAA insurance claims for military families."
    
    process_png \
        "$SRC/insurance/liberty-mutual-seeklogo.png" \
        "$OUTPUT_DIR/insurance/liberty-mutual.png" \
        "Liberty Mutual Insurance Partner" \
        "Tamarack Restoration works with Liberty Mutual insurance claims."
    
    process_image_no_gps \
        "$SRC/insurance/insurance-partners-banner.webp" \
        "$OUTPUT_DIR/insurance/insurance-banner.webp" \
        "Insurance Partners" \
        "Tamarack Restoration works with all major insurance carriers including State Farm, Allstate, Farmers, USAA, Liberty Mutual, and AAA."
    
    echo ""
    
    # ========================================================================
    # TEAM IMAGES
    # ========================================================================
    echo "Processing TEAM images..."
    
    process_image \
        "$SRC/Job images 2/tamarack-restoration-bressi-ranch-mold-removal.jpg" \
        "$OUTPUT_DIR/team/team-thumbs-up.webp" \
        "Tamarack Restoration Team" \
        "The professional restoration team at Tamarack Restoration. IICRC certified technicians providing water damage, mold removal, and fire restoration services in San Diego County." \
        "bressi-ranch"
    
    process_image \
        "$SRC/team-vehicles-teamatwork/2020-08-22.webp" \
        "$OUTPUT_DIR/team/team-at-work.webp" \
        "Tamarack Restoration Technician at Work" \
        "IICRC certified technician performing professional restoration work with proper safety equipment and protocols." \
        "carlsbad"
    
    process_image \
        "$SRC/Job images 2/tamarack-restoration-bressi-ranch-water-damage-restoration.jpg" \
        "$OUTPUT_DIR/team/team-floor-install.webp" \
        "Professional Floor Installation" \
        "Tamarack Restoration technician installing new flooring after water damage restoration. Complete repair and reconstruction services." \
        "bressi-ranch"
    
    process_image \
        "$SRC/team-vehicles-teamatwork/unnamed (4).webp" \
        "$OUTPUT_DIR/team/team-containment-setup.webp" \
        "Professional Containment Setup" \
        "Tamarack Restoration technician setting up containment barriers for safe and controlled restoration work." \
        "carlsbad"
    
    process_image \
        "$SRC/team-vehicles-teamatwork/unnamed.webp" \
        "$OUTPUT_DIR/team/truck-interior.webp" \
        "Fully Equipped Restoration Vehicle" \
        "Inside Tamarack Restoration's service vehicle - fully stocked with professional dehumidifiers, air movers, and restoration equipment." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # VEHICLES
    # ========================================================================
    echo "Processing VEHICLE images..."
    
    process_image \
        "$SRC/team-vehicles-teamatwork/tamarack-restoration-team-carlsbad.webp" \
        "$OUTPUT_DIR/vehicles/truck-rear-view.webp" \
        "Tamarack Restoration Service Vehicle" \
        "Tamarack Restoration's emergency response vehicle with equipment compartments open, ready to respond to water damage, fire damage, and mold emergencies in San Diego County." \
        "carlsbad"
    
    process_image \
        "$SRC/team-vehicles-teamatwork/unnamed (3).webp" \
        "$OUTPUT_DIR/vehicles/truck-street-view.webp" \
        "Tamarack Restoration Truck" \
        "Tamarack Restoration service vehicle on location in San Diego County. 24/7 emergency water damage, fire damage, and mold restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/team-vehicles-teamatwork/unnamed (1).webp" \
        "$OUTPUT_DIR/vehicles/truck-door-branding.webp" \
        "Tamarack Restoration 24/7 Emergency Services" \
        "Fire, Mold, Water, Storm - Tamarack Restoration provides 24/7 emergency restoration services throughout San Diego County." \
        "carlsbad"
    
    process_image \
        "$SRC/Equipment/2025-08-08.webp" \
        "$OUTPUT_DIR/vehicles/truck-door-closeup.webp" \
        "Tamarack Restoration Emergency Services" \
        "24/7 Emergency Services - Fire, Mold, Water, Storm damage restoration. Call (760) 500-2211." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # WATER DAMAGE RESTORATION IMAGES
    # ========================================================================
    echo "Processing WATER DAMAGE images..."
    
    process_image \
        "$SRC/services/water restoration mid job dry out - fans and blowers-good.JPG" \
        "$OUTPUT_DIR/services/water-damage/drying-equipment-room.webp" \
        "Water Damage Drying Equipment Setup" \
        "Professional water damage restoration with industrial dehumidifiers and air movers. Tamarack Restoration's structural drying process in San Diego County." \
        "carlsbad"
    
    process_image \
        "$SRC/services/water resoration.JPG" \
        "$OUTPUT_DIR/services/water-damage/living-room-dryout.webp" \
        "Water Damage Restoration in Progress" \
        "Large-scale water damage restoration with multiple air movers and dehumidifiers. Professional structural drying by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/services/water restoration.JPG" \
        "$OUTPUT_DIR/services/water-damage/structural-drying.webp" \
        "Structural Drying Services" \
        "Water damage structural drying with professional-grade dehumidifiers. Tamarack Restoration serves San Diego County with 24/7 emergency response." \
        "carlsbad"
    
    process_image \
        "$SRC/services/water restoration(1).JPG" \
        "$OUTPUT_DIR/services/water-damage/containment-drying.webp" \
        "Contained Drying Area" \
        "Professional containment and drying equipment for water damage restoration. Controlled environment for optimal drying." \
        "carlsbad"
    
    process_image \
        "$SRC/services/water restoration equipment.JPG" \
        "$OUTPUT_DIR/services/water-damage/drying-equipment.webp" \
        "Professional Drying Equipment" \
        "Industrial dehumidifiers and air scrubbers used in professional water damage restoration by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/services/water-damage-restoration.webp" \
        "$OUTPUT_DIR/services/water-damage/kitchen-restored.webp" \
        "Kitchen After Water Damage Restoration" \
        "Beautifully restored kitchen after water damage repair by Tamarack Restoration. Complete reconstruction and finishing services." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # MOLD REMOVAL IMAGES
    # ========================================================================
    echo "Processing MOLD REMOVAL images..."
    
    process_image \
        "$SRC/team-vehicles-teamatwork/2020-08-22.webp" \
        "$OUTPUT_DIR/services/mold-removal/technician-respirator.webp" \
        "Mold Removal Technician with Safety Equipment" \
        "IICRC certified mold removal technician with proper respirator and safety equipment. Professional mold remediation by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/services/mold-removal.webp" \
        "$OUTPUT_DIR/services/mold-removal/floor-remediation.webp" \
        "Mold Remediation Floor Removal" \
        "Mold-affected flooring removal as part of professional mold remediation. Tamarack Restoration follows IICRC protocols for safe mold removal." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # FLOOD CLEANUP IMAGES
    # ========================================================================
    echo "Processing FLOOD CLEANUP images..."
    
    process_image \
        "$SRC/Job images 2/flood restoration(1).JPG" \
        "$OUTPUT_DIR/services/flood-cleanup/flooded-basement.webp" \
        "Flooded Basement Emergency" \
        "Severe basement flooding requiring emergency water extraction. Tamarack Restoration provides 24/7 flood cleanup services in San Diego County." \
        "carlsbad"
    
    process_image \
        "$SRC/Job images 2/flood restoration.JPG" \
        "$OUTPUT_DIR/services/flood-cleanup/standing-water.webp" \
        "Standing Water Flood Damage" \
        "Major flood damage with standing water. Emergency water extraction and flood cleanup by Tamarack Restoration." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # FIRE DAMAGE IMAGES (using best available - containment shots)
    # ========================================================================
    echo "Processing FIRE DAMAGE images..."
    
    process_image \
        "$SRC/Job images 2/mid job water restoration - plastic sealing job zone- good image.JPG" \
        "$OUTPUT_DIR/services/fire-damage/containment-setup.webp" \
        "Fire Damage Restoration Containment" \
        "Professional containment setup for fire and smoke damage restoration. Tamarack Restoration follows proper protocols for safe fire damage cleanup." \
        "carlsbad"
    
    process_image \
        "$SRC/Job images 2/damage restoration.JPG" \
        "$OUTPUT_DIR/services/fire-damage/restoration-containment.webp" \
        "Fire Damage Restoration in Progress" \
        "Professional containment during fire and smoke damage restoration. Complete fire damage repair services by Tamarack Restoration." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # SEWAGE CLEANUP IMAGES
    # ========================================================================
    echo "Processing SEWAGE CLEANUP images..."
    
    process_image \
        "$SRC/services/water restoration repair - dry wall and floor replacement.JPG" \
        "$OUTPUT_DIR/services/sewage-cleanup/demolition-repair.webp" \
        "Sewage Damage Demolition and Repair" \
        "Professional demolition of sewage-contaminated materials. Tamarack Restoration provides safe biohazard cleanup and sanitization." \
        "carlsbad"
    
    process_image \
        "$SRC/Job images 2/water restoration repair -floor replacement.JPG" \
        "$OUTPUT_DIR/services/sewage-cleanup/bathroom-restoration.webp" \
        "Bathroom Sewage Damage Repair" \
        "Bathroom restoration after sewage damage. Complete demolition, sanitization, and reconstruction by Tamarack Restoration." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # LEAK DETECTION IMAGES
    # ========================================================================
    echo "Processing LEAK DETECTION images..."
    
    process_image \
        "$SRC/services/mold detection and removal.JPG" \
        "$OUTPUT_DIR/services/leak-detection/thermal-camera-floor.webp" \
        "Thermal Imaging Leak Detection" \
        "Advanced thermal imaging camera detecting hidden water leaks in flooring. Non-invasive leak detection by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/services/moisture detection.JPG" \
        "$OUTPUT_DIR/services/leak-detection/thermal-camera-garage.webp" \
        "Thermal Leak Detection in Garage" \
        "Thermal imaging detecting moisture in garage ceiling. Professional leak detection services by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/services/moisture detection 2.JPG" \
        "$OUTPUT_DIR/services/leak-detection/thermal-camera-ceiling.webp" \
        "Ceiling Leak Detection with Thermal Camera" \
        "Thermal imaging camera revealing hidden ceiling leak. Tamarack Restoration uses advanced technology for accurate leak detection." \
        "carlsbad"
    
    process_image \
        "$SRC/services/moisture detection imaging.JPG" \
        "$OUTPUT_DIR/services/leak-detection/thermal-camera-wall.webp" \
        "Wall Leak Detection" \
        "Thermal imaging showing moisture behind wall. Non-destructive leak detection services in San Diego County." \
        "carlsbad"
    
    process_image \
        "$SRC/services/moisture detection(1).JPG" \
        "$OUTPUT_DIR/services/leak-detection/thermal-camera-plumbing.webp" \
        "Plumbing Leak Detection" \
        "Thermal imaging detecting plumbing leaks behind walls. Professional leak detection by Tamarack Restoration." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # GENERAL SERVICE IMAGES (Before/After, Results)
    # ========================================================================
    echo "Processing GENERAL/RESULTS images..."
    
    process_image \
        "$SRC/Job images 2/2025-11-11.webp" \
        "$OUTPUT_DIR/services/general/kitchen-after-restoration.webp" \
        "Kitchen After Complete Restoration" \
        "Beautiful modern kitchen after complete water damage restoration. Full reconstruction by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/Job images 2/damage restoration - after job completion.JPG" \
        "$OUTPUT_DIR/services/general/dining-room-after.webp" \
        "Dining Room After Restoration" \
        "Elegant dining room after complete restoration. Professional repair and reconstruction by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/Tamarack Restoration Images - Job images/tamarack-restoration-solana-beach-mold-removal.jpg" \
        "$OUTPUT_DIR/services/general/hallway-after-restoration.webp" \
        "Hallway After Water Damage Restoration" \
        "Beautifully restored hardwood hallway after water damage repair. Complete restoration by Tamarack Restoration in Solana Beach." \
        "solana-beach"
    
    process_image \
        "$SRC/Tamarack Restoration Images - Job images/cieling repair water restoration.JPG" \
        "$OUTPUT_DIR/services/general/ceiling-repair.webp" \
        "Ceiling Water Damage Repair" \
        "Ceiling repair after water damage. Professional drywall and structural repairs by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/Tamarack Restoration Images - Job images/water restoration- complete restoration of kitchen.JPG" \
        "$OUTPUT_DIR/services/general/kitchen-restoration-progress.webp" \
        "Kitchen Restoration in Progress" \
        "Large kitchen during water damage restoration. Floor protection and air scrubbers in use for professional restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/Job images 2/mid job water restoration - plastic sealing job zone- good image.JPG" \
        "$OUTPUT_DIR/services/general/containment-barrier.webp" \
        "Professional Containment Barrier" \
        "Full-room containment barrier with zippered entry. Professional restoration protocols by Tamarack Restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/Tamarack Restoration Images - Job images/water restoration mid job - plastic sealing ktichen area.JPG" \
        "$OUTPUT_DIR/services/general/containment-kitchen.webp" \
        "Kitchen Containment Setup" \
        "Professional containment during kitchen restoration. Proper protocols for dust and contamination control." \
        "carlsbad"
    
    process_image \
        "$SRC/services/water restoration repair - dry wall and floor replacement-3.JPG" \
        "$OUTPUT_DIR/services/general/floor-demolition.webp" \
        "Floor Demolition for Water Damage Repair" \
        "Professional demolition of water-damaged flooring. Preparation for new flooring installation by Tamarack Restoration." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # EQUIPMENT IMAGES
    # ========================================================================
    echo "Processing EQUIPMENT images..."
    
    process_image \
        "$SRC/Equipment/Drying equipment.JPG" \
        "$OUTPUT_DIR/equipment/dehumidifier-display.webp" \
        "Professional Dehumidifier Monitoring" \
        "LGR dehumidifier digital display showing inlet/outlet readings. Professional moisture monitoring during water damage restoration." \
        "carlsbad"
    
    process_image \
        "$SRC/services/water restoration dry out equipment - fan.JPG" \
        "$OUTPUT_DIR/equipment/air-mover.webp" \
        "Industrial Air Mover" \
        "Professional-grade air mover for structural drying. Part of Tamarack Restoration's equipment fleet." \
        "carlsbad"
    
    echo ""
    
    # ========================================================================
    # CITY-SPECIFIC IMAGES (for money pages with geo-tagging)
    # ========================================================================
    echo "Processing CITY-SPECIFIC images with geo-coordinates..."
    
    # Carlsbad
    process_image \
        "$SRC/services/water restoration mid job dry out - fans and blowers-good.JPG" \
        "$OUTPUT_DIR/services/water-damage/carlsbad-water-damage-restoration.webp" \
        "Water Damage Restoration Carlsbad CA" \
        "Professional water damage restoration in Carlsbad, California. 24/7 emergency water extraction, structural drying, and complete restoration. Call Tamarack Restoration at (760) 500-2211." \
        "carlsbad"
    
    # Oceanside
    process_image \
        "$SRC/services/water resoration.JPG" \
        "$OUTPUT_DIR/services/water-damage/oceanside-water-damage-restoration.webp" \
        "Water Damage Restoration Oceanside CA" \
        "Professional water damage restoration in Oceanside, California. Emergency flood cleanup, structural drying, and property restoration. Tamarack Restoration - (760) 500-2211." \
        "oceanside"
    
    # Encinitas
    process_image \
        "$SRC/services/water restoration.JPG" \
        "$OUTPUT_DIR/services/water-damage/encinitas-water-damage-restoration.webp" \
        "Water Damage Restoration Encinitas CA" \
        "Professional water damage restoration in Encinitas, California. 24/7 emergency response, water extraction, and complete restoration services. Tamarack Restoration." \
        "encinitas"
    
    # San Marcos
    process_image \
        "$SRC/services/water restoration(1).JPG" \
        "$OUTPUT_DIR/services/water-damage/san-marcos-water-damage-restoration.webp" \
        "Water Damage Restoration San Marcos CA" \
        "Professional water damage restoration in San Marcos, California. Emergency water damage repair and structural drying. Tamarack Restoration - (760) 500-2211." \
        "san-marcos"
    
    # Vista
    process_image \
        "$SRC/Job images 2/flood restoration(1).JPG" \
        "$OUTPUT_DIR/services/flood-cleanup/vista-flood-cleanup.webp" \
        "Flood Cleanup Vista CA" \
        "Emergency flood cleanup services in Vista, California. Fast water extraction and flood damage restoration. Tamarack Restoration - (760) 500-2211." \
        "vista"
    
    # Solana Beach
    process_image \
        "$SRC/Tamarack Restoration Images - Job images/tamarack-restoration-solana-beach-mold-removal.jpg" \
        "$OUTPUT_DIR/services/general/solana-beach-restoration.webp" \
        "Property Restoration Solana Beach CA" \
        "Professional property restoration in Solana Beach, California. Water damage, mold removal, and complete reconstruction. Tamarack Restoration." \
        "solana-beach"
    
    # Rancho Santa Fe
    process_image \
        "$SRC/services/tamarack-restoration-rancho-santa-fe-water-damage-restoration.jpg" \
        "$OUTPUT_DIR/services/water-damage/rancho-santa-fe-water-damage.webp" \
        "Water Damage Restoration Rancho Santa Fe CA" \
        "Premium water damage restoration in Rancho Santa Fe, California. Luxury home restoration specialists. Tamarack Restoration - (760) 500-2211." \
        "rancho-santa-fe"
    
    echo ""
    
    # ========================================================================
    # CLEANUP
    # ========================================================================
    echo "============================================"
    echo "Processing complete!"
    echo "============================================"
    echo ""
    echo "Images saved to: $OUTPUT_DIR"
    echo "Backup of originals: $BACKUP_DIR"
    echo ""
    echo "Next steps:"
    echo "1. Review the processed images"
    echo "2. Update your code references to match new paths"
    echo "3. Run: exiftool -r -Title -Description -GPSLatitude -GPSLongitude $OUTPUT_DIR"
    echo "   to verify EXIF data was applied correctly"
    echo ""
}

# Run main function
main "$@"
