import { readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const files = [];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.js') && !p.endsWith('server.js')) files.push(p);
  }
};
walk('src');

let bad = 0;
for (const f of files) {
  try {
    await import(pathToFileURL(f).href);
  } catch (e) {
    bad++;
    console.log('FAIL', f, '->', e.message.split('\n')[0]);
  }
}
console.log(bad === 0 ? `all ${files.length} source files load OK` : `${bad} file(s) failed`);