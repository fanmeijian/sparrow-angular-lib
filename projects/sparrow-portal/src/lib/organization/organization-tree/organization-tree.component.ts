import { Component, OnInit } from '@angular/core';
import {TreeNode} from "primeng/api";

@Component({
  selector: 'lib-organization-tree',
  templateUrl: './organization-tree.component.html',
  styleUrls: ['./organization-tree.component.css']
})
export class OrganizationTreeComponent implements OnInit {
  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      styleClass: 'bg-indigo-500 text-white',
      data: {
        image:
          'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
        name: '孙晓辉',
        title: '董事长',
      },
      children: [
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-purple-500 text-white',
          data: {
            image:
              'https://primefaces.org/cdn/primeng/images/demo/avatar/stephenshaw.png',
            name: '范美剑',
            title: 'CEO',
          },
          children: [
            {
              label: 'Sales',
              styleClass: 'bg-purple-500 text-white',
            },
            {
              label: 'Marketing',
              styleClass: 'bg-purple-500 text-white',
            },
          ],
        },
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-teal-500 text-white',
          data: {
            image:
              'https://primefaces.org/cdn/primeng/images/demo/avatar/annafali.png',
            name: '曹丹',
            title: '副董事长',
          },
          children: [
            {
              label: 'Development',
              styleClass: 'bg-teal-500 text-white',
            },
            {
              label: 'UI/UX Design',
              styleClass: 'bg-teal-500 text-white',
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

}
