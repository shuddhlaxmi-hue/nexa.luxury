#!/bin/bash

# ============================================
# GENERATE ROBOTS.TXT
# ============================================
# Generates robots.txt file for nexa.luxury
# ============================================

DOMAIN="nexa.luxury"
OUTPUT_FILE="robots.txt"

echo "Generating robots.txt for ${DOMAIN}..."

cat > "${OUTPUT_FILE}" << EOF
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://${DOMAIN}/sitemap.xml

# AI Bots Optimization
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Anthropic-ai
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

# Crawl delay
Crawl-delay: 1

# Standard Bots
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: DuckDuckBot
Allow: /
EOF

echo "✓ robots.txt generated successfully at ${OUTPUT_FILE}"
