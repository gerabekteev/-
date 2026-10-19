import { layoutProcess } from 'bpmn-auto-layout';
import { readFileSync, writeFileSync } from 'fs';
const xml = readFileSync('diagram_src.bpmn', 'utf-8');
const out = await layoutProcess(xml);
writeFileSync('diagram_laid_out.bpmn', out);
console.log('written, bytes:', out.length);
