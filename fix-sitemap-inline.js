const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(process.cwd()).filter(file => file.endsWith('.html'));
const footerOpenRegex = /<footer[^>]*class=["']sitemap-footer["'][^>]*>/i;
const replaceRegex = /color:\s*#ffffff\s*(?:!important)?\s*;/gi;

let totalPatches = 0;
files.forEach(file => {
  const text = fs.readFileSync(file, 'utf8');
  let output = text;
  let currentIndex = 0;

  while (true) {
    const match = footerOpenRegex.exec(output.slice(currentIndex));
    if (!match) break;

    const matchStart = currentIndex + match.index;
    const closeIndex = output.indexOf('</footer>', matchStart);
    if (closeIndex === -1) break;

    const regionEnd = closeIndex + '</footer>'.length;
    const region = output.slice(matchStart, regionEnd);
    const replacedRegion = region.replace(replaceRegex, 'color: #0f172a !important;');

    if (replacedRegion !== region) {
      output = output.slice(0, matchStart) + replacedRegion + output.slice(regionEnd);
      totalPatches += 1;
    }

    currentIndex = regionEnd;
  }

  if (output !== text) {
    fs.writeFileSync(file, output, 'utf8');
    console.log('patched', file);
  }
});
console.log('done, total regions patched:', totalPatches);
