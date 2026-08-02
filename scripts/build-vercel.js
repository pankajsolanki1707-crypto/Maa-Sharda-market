const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Running Vite production build...');
  execSync('pnpm --filter @workspace/maa-sharda-market run build', { stdio: 'inherit' });
  
  const src = fs.existsSync('artifacts/maa-sharda-market/dist') 
    ? 'artifacts/maa-sharda-market/dist' 
    : 'dist';
    
  console.log(`Copying build from: ${src}`);
  if (src !== 'dist') {
    fs.cpSync(src, 'dist', { recursive: true });
  }
  fs.cpSync(src, 'public', { recursive: true });
  console.log('Build output prepared successfully!');
} catch (error) {
  console.error('Build execution failed:', error);
  process.exit(1);
}
