import { layoutProcess } from 'bpmn-auto-layout';
const minimal = `<?xml version='1.0' encoding='UTF-8'?>
<bpmn:definitions xmlns:bpmn='http://www.omg.org/spec/BPMN/20100524/MODEL' id='d1' targetNamespace='x'>
  <bpmn:process id='p1'>
    <bpmn:startEvent id='s1'/>
    <bpmn:userTask id='t1' name='Do'/>
    <bpmn:endEvent id='e1'/>
    <bpmn:sequenceFlow id='f1' sourceRef='s1' targetRef='t1'/>
    <bpmn:sequenceFlow id='f2' sourceRef='t1' targetRef='e1'/>
  </bpmn:process>
</bpmn:definitions>`;
const r = await layoutProcess(minimal);
const hasEdge = r.includes('BPMNEdge');
console.log('minimal has BPMNEdge:', hasEdge);
if (hasEdge) {
  const i = r.indexOf('BPMNEdge');
  console.log(r.slice(i - 120, i + 300));
}
