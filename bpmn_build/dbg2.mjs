import { layoutProcess } from 'bpmn-auto-layout';
import { readFileSync, writeFileSync } from 'fs';
const xml = readFileSync('diagram_src.bpmn', 'utf-8');
const r = await layoutProcess(xml);
console.log('keys:', Object.keys(r));
for (const k of Object.keys(r)) {
  const v = r[k];
  console.log(k, typeof v, v && v.length !== undefined ? ('len=' + v.length) : '');
}
