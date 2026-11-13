const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\ALL AtoZ\\Downloads\\Products images';
const targetDir = 'C:\\Users\\ALL AtoZ\\.gemini\\antigravity\\scratch\\vendra-grow\\public\\images';

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
console.log('Source files:', files);

const mappings = [
  { match: 'Generating_advertising_mockup', name: 'hero-botanical-cliff.jpg' },
  { match: 'Hair_oil_product_advertisement', name: 'hair-oil-poster.jpg' },
  { match: 'Hair_oil_product_ad_poster', name: 'model-ingredients-poster.jpg' },
  { match: 'Matching_product_bottle_shape', name: 'hair-oil-bottle-green.jpg' },
  { match: 'Vendra_Grow_Herbal_Shampoo_bottle_1d0cb9c3', name: 'how-to-use-guide.jpg' },
  { match: 'Vendra_Grow_Herbal_Shampoo_bottle_1f02ad11', name: 'shampoo-results-model.jpg' },
  { match: 'Vendra_Grow_Herbal_Shampoo_bottle_2dabb0e8', name: 'shampoo-bottle-clean.jpg' },
  { match: 'Vendra_Grow_Herbal_Shampoo_adver', name: 'shampoo-adver.jpg' }
];

files.forEach(file => {
  const fullSrc = path.join(srcDir, file);
  // Copy original as-is too
  fs.copyFileSync(fullSrc, path.join(targetDir, file));

  for (const m of mappings) {
    if (file.includes(m.match)) {
      fs.copyFileSync(fullSrc, path.join(targetDir, m.name));
      console.log(`Copied ${file} -> ${m.name}`);
    }
  }
});

// Also copy reference image if exists
const refImg = 'C:\\Users\\ALL AtoZ\\.gemini\\antigravity\\brain\\307b0a53-8d30-4bb5-ade1-864c206d158a\\.user_uploaded\\media_1794422485685_e4b85bb0.jpg';
if (fs.existsSync(refImg)) {
  fs.copyFileSync(refImg, path.join(targetDir, 'ui-reference.jpg'));
  console.log('Copied UI reference image');
}

console.log('Copied all successfully. Target files:');
console.log(fs.readdirSync(targetDir));
