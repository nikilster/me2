#!/bin/bash

# Personal Website Setup Script

echo "📦 Setting up personal website..."

# Install dependencies
echo "🔧 Installing dependencies..."
npm install

# Create public directory and placeholder images
echo "🖼️ Creating placeholder images..."
mkdir -p public

# Create directories
echo "📁 Creating necessary directories..."
mkdir -p app/api

echo "✅ Setup complete! Run 'npm run dev' to start the development server." 