import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import Connect from '../../model/Connect';
import Stage from '../../model/Stage';
import TextElm from '../../model/TextElm';
import { LogicFlow } from '@logicflow/core';

@Component({
  selector: 'lib-flow-design',
  templateUrl: './flow-design.component.html',
  styleUrls: ['./flow-design.component.css'],
})
export class FlowDesignComponent implements OnInit, AfterViewInit {
  // @ViewChild('stage') stage!: ElementRef<any>;
  @ViewChild('container') stage!: ElementRef<any>;
  constructor() {}
  ngAfterViewInit(): void {

    // console.log(this.stage);
    // // 初始化一个800 * 700的舞台
    // let s2 = new Stage(this.stage.nativeElement);
    // // 在 (50, 50)的位置初始化一个200 * 50的文字板
    // let t1 = new TextElm({
    //   text: 'hello 解决1',
    //   x: 50,
    //   y: 50,
    //   w: 200,
    //   h: 50,
    //   color: 'blue',
    //   parent: s2,
    // });
    // s2.add(t1);
    // // 在 (300, 300)的位置初始化一个200 * 50的文字板
    // let t2 = new TextElm({
    //   text: 'world 哈哈2',
    //   x: 300,
    //   y: 400,
    //   w: 200,
    //   h: 50,
    //   color: 'blue',
    //   parent: s2,
    // });
    // s2.add(t2);
    // let t3 = new TextElm({
    //   text: '多连线3',
    //   x: 300,
    //   y: 100,
    //   w: 200,
    //   h: 50,
    //   color: 'blue',
    //   parent: s2,
    // });
    // s2.add(t3);
    // // 在(10, 20)和(50， 20)的位置初始化一个连线箭头**这个连线方式要优化**，自行将箭头两端拖拽到需要连接的元素上，之后元素移动会自动更新连线
    // let connect = new Connect({ x: 10, y: 150 }, { x: 150, y: 150 });
    // s2.add(connect);
    // let connect2 = new Connect({ x: 10, y: 250 }, { x: 150, y: 250 });
    // s2.add(connect2);
    // let connect3 = new Connect({ x: 10, y: 350 }, { x: 150, y: 350 });
    // s2.add(connect3);

    // prepare data

  }

  ngOnInit(): void {
    const data = {
      // node data
      nodes: [
        {
          id: '21',
          type: 'rect',
          x: 100,
          y: 200,
          text: 'rect node',
        },
        {
          id: '50',
          type: 'circle',
          x: 300,
          y: 400,
          text: 'circle node',
        },
      ],
      // edge data
      edges: [
        {
          type: 'polyline',
          sourceNodeId: '50',
          targetNodeId: '21',
        },
      ],
    };
    // render instance
    const lf = new LogicFlow({
      container: this.stage.nativeElement,
      width: 700,
      height: 600,
    });

    lf.render(data);
    console.log('=======');
  }
}
