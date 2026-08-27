const fs = require('fs');

let content = fs.readFileSync('src/data/catalogData.ts', 'utf8');

const uniqueImagePool = [
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1470071131384-001b85755b36?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1490682143684-14369e18dce8?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1506744626753-1fa28f67c9bf?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1473496169904-658ba37448eb?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1465146633711-14f8c4146958?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1445217143695-4671dc313b52?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1476820865390-c52aeafa985d?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1503152889424-9c2d0f3eee1c?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1504198458649-3128b932f49e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1443632864897-14973fa006cf?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1464820453369-31d2c0b651af?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1493225457124-a1a2a5f532a8?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1485160497022-3e09382fb310?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1425082661705-1834bfd0999c?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1418065460487-3e41a6c8e15f?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1502481851512-e9e2529bfbf9?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1506260408121-e353d10b87c7?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1497449493050-aad1e7cad165?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1454372182658-c712e4c5a1db?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1500634245200-e5245c7574ef?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1431794062232-2a99a5431c6c?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1512411030438-e5033c4eb3a3?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1498805983167-a523078d762c?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1471018236639-24739f829029?auto=format&fit=crop&w=800&h=500&q=85',
  'https://images.unsplash.com/photo-1490604001847-b712b0c2f967?auto=format&fit=crop&w=800&h=500&q=85'
];

let currentIndex = 0;
// We only want to replace images in the explore sections, where the repetition was identified.
// Actually, let's just parse the content and replace every `image: '...'` or `image: img...` 
// inside the explore arrays (from lines 11 to 819 roughly)

const regex = /image:\s*(?:'[^']+'|[A-Za-z0-9_]+),/g;

// To only target explore sections, let's just do a global replace for all `image:` occurrences
// but keep the specific ones (like professors, classes) if needed, or just replace ALL of them
// so NO image ever repeats in the whole site.
let count = 0;
content = content.replace(regex, (match) => {
  if (match.includes("image: ''")) return match; // skip empty ones
  const newImg = uniqueImagePool[count % uniqueImagePool.length];
  count++;
  return `image: '${newImg}',`;
});

fs.writeFileSync('src/data/catalogData.ts', content, 'utf8');
console.log(`Replaced ${count} images.`);
