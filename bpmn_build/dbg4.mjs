import { layoutProcess } from 'bpmn-auto-layout';
import { readFileSync } from 'fs';
const xml = readFileSync('diagram_src.bpmn', 'utf-8');
const r = await layoutProcess(xml);
console.log('typeof result:', typeof r, r && r.xml ? 'has xml' : '');
const s = typeof r === 'string' ? r : r.xml;
console.log('BPMNEdge count:', (s.match(/BPMNEdge/g) || []).length);
console.log('mf8 target present:', s.includes('targetRef="E_b2"'));
