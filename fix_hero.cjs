const fs = require('fs');

let content = fs.readFileSync('src/data/heroData.ts', 'utf8');

const uniqueImagePool = [
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&h=1080&q=85',
  'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=1920&h=1080&q=85',
  'https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?auto=format&fit=crop&w=1920&h=1080&q=85',
  'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&w=1920&h=1080&q=85',
  'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&w=1920&h=1080&q=85',
  'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=1920&h=1080&q=85',
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=1920&h=1080&q=85',
];

const regex = /image:\s*(?:'[^']+'|[A-Za-z0-9_]+),/g;
let count = 0;
content = content.replace(regex, (match) => {
  if (match.includes("image: ''")) return match; 
  const newImg = uniqueImagePool[count % uniqueImagePool.length];
  count++;
  return `image: '${newImg}',`;
});

fs.writeFileSync('src/data/heroData.ts', content, 'utf8');
console.log(`Replaced ${count} images in heroData.`);
