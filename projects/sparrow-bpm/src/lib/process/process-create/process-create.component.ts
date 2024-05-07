import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

import Modeler from 'bpmn-js/lib/Modeler';
import { CamundaModdleDescriptor } from '../../bpmnio/CamundaModdleDescriptor';
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
// import propertiesPanelModule from 'bpmn-js-properties-panel/lib';
// import propertiesProvider from 'bpmn-js-properties-panel/lib/provider/camunda';
import { Observable } from 'rxjs';
import { DeploymentService } from '@sparrowmini/camunda-api';
import { FlowService } from '@sparrowmini/flow-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-process-create',
  templateUrl: './process-create.component.html',
  styleUrls: ['./process-create.component.css'],
})
export class ProcessCreateComponent implements OnInit, AfterViewInit {
  // instantiate BpmnJS with component
  modeler!: Modeler;
  formGroup: FormGroup = this.fb.group({
    name: [null, Validators.required],
    code: [null, Validators.required],
    remark: [null],
    xmlStr: [null, Validators.required],
  });

  @ViewChild('canvas')
  private canvesRef: ElementRef<HTMLElement> | undefined;

  deploye(event: any) {
    let file: File = event.target.files[0];
    let a: Blob = new Blob([file], { type: 'application/octet-stream' });
    console.log(file, a);
    let formData = new FormData();
    formData.append('deployment-name', 'tttt');
    formData.append('addd.bpmn', a, 'addd.bpmn');

    let headers = new HttpHeaders();
    headers.set('content-type', 'multipart/form-data');
    headers.set('Access-Control-Allow-Origin', '*');
    this.http
      .post(
        'http://localhost:4421/org-service/engine-rest/engine/default/deployment/create',
        formData,
        { headers: headers }
      )
      .subscribe((res) => console.log(res));
    // this.deployeService.createDeploymentForm(undefined,undefined,undefined,undefined,'test',undefined,a).subscribe()
  }

  constructor(
    private http: HttpClient,
    private deployeService: DeploymentService,
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
            <bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" id="Definitions_12hbt2k" targetNamespace="http://bpmn.io/schema/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="17.3.0">
              <bpmn:process id="Process_10hicog" isExecutable="false">
                <bpmn:startEvent id="StartEvent_15r3zml" />
              </bpmn:process>
              <bpmndi:BPMNDiagram id="BPMNDiagram_1">
                <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_10hicog">
                  <bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_15r3zml">
                    <dc:Bounds x="156" y="82" width="36" height="36" />
                  </bpmndi:BPMNShape>
                </bpmndi:BPMNPlane>
              </bpmndi:BPMNDiagram>
            </bpmn:definitions>
        `);
      }
    });
  }
  ngOnInit(): void {}

  handleError(err: any) {
    if (err) {
      console.warn('Ups, error: ', err);
    }
  }

  public getExample(): Observable<string> {
    const url = '/assets/diagram.bpmn'; // local
    return this.http.get(url, { responseType: 'text' });
  }

  state: any;

  /**
   * 下载xml/svg
   *  @param  type  类型  svg / xml
   *  @param  data  数据
   *  @param  name  文件名称
   */
  download = (type: any, data: any, name: any) => {
    let dataTrack = '';
    const a = document.createElement('a');

    switch (type) {
      case 'xml':
        dataTrack = 'bpmn';
        break;
      case 'svg':
        dataTrack = 'svg';
        break;
      default:
        break;
    }

    name = name || `diagram.${dataTrack}`;

    a.setAttribute(
      'href',
      `data:application/bpmn20-xml;charset=UTF-8,${encodeURIComponent(data)}`
    );
    a.setAttribute('target', '_blank');
    a.setAttribute('dataTrack', `diagram:download-${dataTrack}`);
    a.setAttribute('download', name);

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // 前进
  handleRedo = () => {
    // this.modeler.get('commandStack').redo();
  };

  // 后退
  handleUndo = () => {
    // this.modeler.get('commandStack').undo();
  };

  // 下载SVG格式
  handleDownloadSvg = () => {
    // this.modeler.saveSVG({ format: true }, (err: any, data: any) => {
    //   this.download('svg', data, 'svg');
    // });
  };

  // 下载XML格式
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

  // 流程图放大缩小
  handleZoom = (radio: any) => {
    const newScale = !radio
      ? 1.0 // 不输入radio则还原
      : this.state.scale + radio <= 0.2 // 最小缩小倍数
      ? 0.2
      : this.state.scale + radio;

    // this.modeler.get('canvas').zoom(newScale);
    this.state.scale = newScale;
  };

  // 保存
  handleSave() {
    // this.modeler.saveXML({ format: true }, async (err: any, xml: any) => {
    //   console.log(xml);
    // });
  }
}
