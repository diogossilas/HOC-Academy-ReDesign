const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      // text-white -> text-[var(--color-text)]
      content = content.replace(/text-white(?!\/)/g, 'text-[var(--color-text)]');
      content = content.replace(/text-white\//g, 'text-[var(--color-text)]/');
      
      // text-black -> text-[var(--color-bg)]
      content = content.replace(/text-black(?!\/)/g, 'text-[var(--color-bg)]');
      content = content.replace(/text-black\//g, 'text-[var(--color-bg)]/');
      
      // bg-cyan-400, text-cyan-400, border-cyan-400
      content = content.replace(/(bg|text|border)-cyan-400/g, '$1-[var(--color-primary)]');
      content = content.replace(/(bg|text|border)-cyan-300/g, '$1-[var(--color-primary)]');
      content = content.replace(/(bg|text|border)-cyan-500/g, '$1-[var(--color-primary)]');
      content = content.replace(/(bg|text|border)-sky-400/g, '$1-[var(--color-primary)]');
      content = content.replace(/(bg|text|border)-sky-300/g, '$1-[var(--color-primary)]');
      content = content.replace(/(bg|text|border)-sky-500/g, '$1-[var(--color-primary)]');
      content = content.replace(/from-cyan-500\/20/g, 'from-[var(--color-primary)]/20');
      content = content.replace(/from-sky-500\/20/g, 'from-[var(--color-primary)]/20');
      
      content = content.replace(/border-white\/10/g, 'border-[var(--color-muted)]/10');
      content = content.replace(/border-white\/20/g, 'border-[var(--color-muted)]/20');
      content = content.replace(/bg-white\/5/g, 'bg-[var(--color-text)]/5');
      content = content.replace(/bg-white\/10/g, 'bg-[var(--color-text)]/10');
      
      content = content.replace(/bg-black/g, 'bg-[var(--color-bg)]');
      content = content.replace(/bg-\[\#050608\]/g, 'bg-[var(--color-bg)]');
      
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

processDir('./src');
console.log('Color classes updated.');
