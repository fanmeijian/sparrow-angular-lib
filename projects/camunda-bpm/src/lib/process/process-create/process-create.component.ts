import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DeploymentService } from '@sparrowmini/camunda-api';
import { FlowService } from '@sparrowmini/flow-api';
import { Observable, switchMap } from 'rxjs';

import Modeler from 'bpmn-js/lib/Modeler';
import { CamundaModdleDescriptor } from '../../../models/CamundaModdleDescriptor';
// import {
//   PropertiesProvider
//   // BpmnPropertiesPanelModule,
//   // BpmnPropertiesProviderModule,
//   // CamundaPlatformPropertiesProviderModule
// } from 'bpmn-js-properties-panel/lib/provider/bpmn/parts/';
import {
  BpmnPropertiesPanelModule,
  BpmnPropertiesProviderModule,
  CamundaPlatformPropertiesProviderModule,
  CamundaPlatformTooltipProvider,
} from 'bpmn-js-properties-panel/dist/index.js';

@Component({
  selector: 'lib-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.css'],
})
export class ProcessCreateComponent implements OnInit {
  modeler!: Modeler;
  formGroup: FormGroup = this.fb.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
    remark: [null],
    xmlStr: [null, Validators.required],
  });

  @ViewChild('canvas')
  private canvesRef: ElementRef<HTMLElement> | undefined;

  constructor(
    private http: HttpClient,
    private deploymentService: DeploymentService,
    private flowService: FlowService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngAfterViewInit(): void {
    this.modeler = new Modeler({
      container: '#canvas',
      propertiesPanel: {
        parent: '#properteis',
      },
      additionalModules: [
        BpmnPropertiesPanelModule,
        BpmnPropertiesProviderModule,
        CamundaPlatformPropertiesProviderModule,
        CamundaPlatformTooltipProvider,
      ],
      moddleExtensions: {
        camunda: CamundaModdleDescriptor,
      },
    });


    this.route.queryParams.subscribe((params: any) => {
      if (params.id) {
        this.flowService.processDefinition(params.id).subscribe((res) => {
          this.formGroup.patchValue(res);
          this.modeler.importXML(res.xmlStr!);
        });
      } else {
        this.modeler.importXML(`
        <?xml version="1.0" encoding="UTF-8"?>
        <bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" id="Definitions_1" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.5.1">
          <bpmn:process id="camunda.showcase" name="camunda.showcase" isExecutable="true">
            <bpmn:startEvent id="START" name="Process&#10;started">
              <bpmn:outgoing>SequenceFlow1</bpmn:outgoing>
            </bpmn:startEvent>
            <bpmn:endEvent id="END" name="Process&#10;ended">
              <bpmn:incoming>Flow_1twhtz5</bpmn:incoming>
            </bpmn:endEvent>
            <bpmn:sequenceFlow id="SequenceFlow1" sourceRef="START" targetRef="Task_UnderstandKeycloak" />
            <bpmn:sequenceFlow id="Flow_1twhtz5" sourceRef="Task_UnderstandKeycloak" targetRef="END" />
            <bpmn:userTask id="Task_UnderstandKeycloak" name="Understand Keycloak" camunda:formRef="Form_DoSomething" camunda:formRefBinding="latest" camunda:candidateGroups="camunda-admin">
              <bpmn:incoming>SequenceFlow1</bpmn:incoming>
              <bpmn:outgoing>Flow_1twhtz5</bpmn:outgoing>
            </bpmn:userTask>
          </bpmn:process>
          <bpmndi:BPMNDiagram id="BPMNDiagram_1">
            <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="camunda.showcase">
              <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="START">
                <dc:Bounds x="173" y="102" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="171" y="138" width="41" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="EndEvent_0fkea3f_di" bpmnElement="END">
                <dc:Bounds x="472" y="102" width="36" height="36" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="471" y="138" width="41" height="27" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNShape>
              <bpmndi:BPMNShape id="Activity_1rexfoy_di" bpmnElement="Task_UnderstandKeycloak">
                <dc:Bounds x="290" y="80" width="100" height="80" />
                <bpmndi:BPMNLabel />
              </bpmndi:BPMNShape>
              <bpmndi:BPMNEdge id="SequenceFlow_08va5r8_di" bpmnElement="SequenceFlow1">
                <di:waypoint x="209" y="120" />
                <di:waypoint x="290" y="120" />
                <bpmndi:BPMNLabel>
                  <dc:Bounds x="228" y="95" width="90" height="20" />
                </bpmndi:BPMNLabel>
              </bpmndi:BPMNEdge>
              <bpmndi:BPMNEdge id="Flow_1twhtz5_di" bpmnElement="Flow_1twhtz5">
                <di:waypoint x="390" y="120" />
                <di:waypoint x="472" y="120" />
              </bpmndi:BPMNEdge>
            </bpmndi:BPMNPlane>
          </bpmndi:BPMNDiagram>
        </bpmn:definitions>

        `);
      }
    });
  }
  ngOnInit(): void {}

  submit() {
    console.log('sdfdf');
    this.modeler.saveXML({ format: true }).then((res) => {
      console.log(res);
      this.formGroup.patchValue({ xmlStr: res.xml });
      this.flowService
        .createProcessDefinition([this.formGroup.value])
        .subscribe();
    });
  }
}
