import { layoutProcess } from 'bpmn-auto-layout';
import { readFileSync, writeFileSync } from 'fs';
const xml = readFileSync('diagram_src.bpmn', 'utf-8');
try {
  const r = await layoutProcess(xml);
  const s = typeof r === 'string' ? r : r.xml;
  writeFileSync('diagram_laid_out.bpmn', s);
  console.log('OK bytes:', s.length, '| BPMNEdge:', (s.match(/BPMNEdge/g) || []).length, '| BPMNShape:', (s.match(/BPMNShape/g) || []).length);
} catch (e) {
  console.error('ERR', e.code || '', e.message, e.elementId || '');
}
