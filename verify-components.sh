#!/bin/bash

# This script helps verify that all components work together correctly

echo "Verifying project structure..."

# Check if required directories exist
if [ -d "src" ] && [ -d "public" ] && [ -d "src/styles" ]; then
  echo "✅ Directory structure is correct"
else
  echo "❌ Directory structure is incomplete"
  exit 1
fi

# Check if required files exist
required_files=(
  "App.tsx"
  "App.css"
  "src/index.tsx"
  "public/index.html"
  "public/manifest.json"
  "package.json"
  "tsconfig.json"
  "tailwind.config.js"
  "postcss.config.js"
  "src/styles/flipCard.css"
)

for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file is missing"
    exit 1
  fi
done

# Check if component files exist
component_files=(
  "Navbar.tsx"
  "HeroSection.tsx"
  "ValuePropositionSection.tsx"
  "HowItWorksSection.tsx"
  "CommandCenterSection.tsx"
  "IndustriesSection.tsx"
  "TestimonialsSection.tsx"
  "CaseStudySection.tsx"
  "FlipCard.tsx"
  "StoryBlock.tsx"
  "TealGlowButton.tsx"
  "TealShinyButton.tsx"
  "TestimonialGrid.tsx"
  "CaseStudyCarousel.tsx"
)

for file in "${component_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file is missing"
    exit 1
  fi
done

# Check if image placeholder files exist
image_files=(
  "src/styles/retail.jpeg"
  "src/styles/CPG.jpeg"
  "src/styles/property.jpeg"
  "src/styles/travel.jpeg"
  "public/how-it-works-bg.png"
  "public/earth-hands-bg.png"
)

for file in "${image_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file is missing"
    exit 1
  fi
done

echo "All components and files verified successfully!"
echo "To run the project, execute: npm install && npm start"

# Made with Bob
