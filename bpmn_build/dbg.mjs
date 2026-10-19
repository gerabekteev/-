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
try {
  const r = await layoutProcess(minimal);
  console.log('OK len=' + (r.xml ? r.xml.length : 'no xml'));
} catch (e) {
  console.log('ERR msg=' + e.message);
  console.log('STACK=' + String(e.stack));
}
