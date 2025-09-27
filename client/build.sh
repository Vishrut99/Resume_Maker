#!/bin/bash
# Build script for Render deployment

echo "Starting build process..."

# Clean install to avoid dependency conflicts
rm -rf node_modules package-lock.json
npm install --no-optional

# Build the project
npm run build

echo "Build completed successfully!"