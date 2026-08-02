const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  console.log('Building Maa Sharda Market website from api-server context...');
  execSync('pnpm --filter @workspace/maa-sharda-market run build', { stdio: 'inherit' });

  const possibleSrcs = [
    path.resolve(__dirname, '..', '..', 'maa-sharda-market', 'dist'),
    path.resolve(__dirname, '..', 'dist'),
    'dist'
  ];

  const src = possibleSrcs.find(p => fs.existsSync(p));
  if (!src) {
    throw new Error('Could not locate built dist folder at ' + possibleSrcs.join(', '));
  }

  const destDist = path.resolve(__dirname, '..', 'dist');
  const destPublic = path.resolve(__dirname, '..', 'public');

  console.log(`Copying build output from ${src} to ${destDist}...`);
  if (src !== destDist) {
    fs.cpSync(src, destDist, { recursive: true });
  }
  fs.cpSync(src, destPublic, { recursive: true });
  console.log('Build output successfully copied for Vercel deployment!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
