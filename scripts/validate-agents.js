#!/usr/bin/env node

/**
 * Validate YAML front matter in agent files
 * 
 * This script validates that all agent files in .github/agents/ have valid YAML
 * front matter with proper indentation for the description field.
 * 
 * Usage: node scripts/validate-agents.js
 */

const fs = require('fs');
const path = require('path');

// Simple YAML parser for front matter validation
function parseYAMLFrontMatter(content) {
  if (!content.startsWith('---')) {
    throw new Error('Content does not start with YAML front matter (---)');
  }

  const parts = content.split('---');
  if (parts.length < 3) {
    throw new Error('Invalid YAML front matter structure');
  }

  const yamlContent = parts[1];
  
  // Basic validation - check for proper structure
  const lines = yamlContent.trim().split('\n');
  let inMultilineString = false;
  let hasName = false;
  let hasDescription = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for name field
    if (line.startsWith('name:')) {
      hasName = true;
      continue;
    }
    
    // Check for description field with multiline string
    if (line.startsWith('description: |')) {
      hasDescription = true;
      inMultilineString = true;
      continue;
    }
    
    // If we're in a multiline string, content must be indented
    if (inMultilineString) {
      // Empty lines are ok
      if (line.trim() === '') continue;
      
      // Content lines must be indented (start with spaces)
      if (!line.startsWith('  ')) {
        throw new Error(
          `Line ${i + 1} in description is not properly indented. ` +
          `Multi-line YAML strings require content to be indented with at least 2 spaces.`
        );
      }
    }
  }

  if (!hasName) {
    throw new Error('Missing required "name" field');
  }

  if (!hasDescription) {
    throw new Error('Missing required "description" field');
  }

  return { valid: true, hasName, hasDescription };
}

// Main validation function
function validateAgentFiles() {
  const agentsDir = path.join(__dirname, '..', '.github', 'agents');
  
  if (!fs.existsSync(agentsDir)) {
    console.error('❌ Error: .github/agents directory not found');
    process.exit(1);
  }

  const files = fs.readdirSync(agentsDir)
    .filter(file => file.endsWith('.agent.md'))
    .sort();

  if (files.length === 0) {
    console.error('❌ Error: No .agent.md files found');
    process.exit(1);
  }

  console.log('='.repeat(70));
  console.log('YAML VALIDATION REPORT FOR AGENT FILES');
  console.log('='.repeat(70));
  console.log();

  let validCount = 0;
  let errorCount = 0;
  const errors = [];

  for (const file of files) {
    const filePath = path.join(agentsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    console.log(`📄 ${file}`);

    try {
      const result = parseYAMLFrontMatter(content);
      console.log(`   ✅ VALID YAML`);
      validCount++;
    } catch (error) {
      console.log(`   ❌ ERROR: ${error.message}`);
      errors.push({ file, error: error.message });
      errorCount++;
    }

    console.log();
  }

  console.log('='.repeat(70));
  console.log(`SUMMARY: ${validCount} valid, ${errorCount} errors`);
  console.log('='.repeat(70));

  if (errorCount === 0) {
    console.log('🎉 All agent files are valid!');
    process.exit(0);
  } else {
    console.log('⚠️  Some agent files have errors:');
    errors.forEach(({ file, error }) => {
      console.log(`   - ${file}: ${error}`);
    });
    process.exit(1);
  }
}

// Run validation
if (require.main === module) {
  validateAgentFiles();
}

module.exports = { parseYAMLFrontMatter, validateAgentFiles };
