const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Running Vite production build...');
  execSync('pnpm --filter @workspace/maa-sharda-market run build', { stdio: 'inherit' });
  
  const possibleSrcs = [
    'artifacts/maa-sharda-market/dist',
    '../maa-sharda-market/dist',
    '../../artifacts/maa-sharda-market/dist',
    'dist'
  ];

  const src = possibleSrcs.find(p => fs.existsSync(p));
  if (!src) {
    throw new Error('Could not find built dist folder');
  }

  console.log(`Copying build output from: ${src}`);
  if (src !== 'dist') {
    fs.cpSync(src, 'dist', { recursive: true });
  }
  fs.cpSync(src, 'public', { recursive: true });
  console.log('Build output prepared successfully!');
} catch (error) {
  console.error('Build execution failed:', error);
  process.exit(1);
}
