#!/bin/bash

# ============================================
# GENERATE SITEMAP.XML
# ============================================
# Generates sitemap.xml file for nexa.luxury
# ============================================

DOMAIN="nexa.luxury"
OUTPUT_FILE="sitemap.xml"
CURRENT_DATE=$(date +%Y-%m-%d)

echo "Generating sitemap.xml for ${DOMAIN}..."

cat > "${OUTPUT_FILE}" << EOF
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
  
  <!-- Homepage -->
  <url>
    <loc>https://${DOMAIN}/</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- Sections -->
  <url>
    <loc>https://${DOMAIN}/#what-is-nexa</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://${DOMAIN}/#bitcoin-comparison</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://${DOMAIN}/#supply</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://${DOMAIN}/#divisibility</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://${DOMAIN}/#halving</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://${DOMAIN}/#benefits</loc>
    <lastmod>${CURRENT_DATE}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
</urlset>
EOF

echo "✓ sitemap.xml generated successfully at ${OUTPUT_FILE}"
