import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { DecoupledEditor, type EditorConfig, } from 'ckeditor5';
import { ckeditorConfig } from '../../../model/constant';
import { FormGroup } from '@angular/forms';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular';

@Component({
  selector: 'lib-ckeditor-control',
  templateUrl: './ckeditor-control.component.html',
  styleUrls: ['./ckeditor-control.component.css']
})
export class CkeditorControlComponent implements OnInit, AfterViewInit {
  updateValue($event: ChangeEvent<DecoupledEditor>) {
    console.log($event.editor.getData())
  }

  @Input() public name: string
  @Input() public formGroup: FormGroup

  public isLayoutReady = false;
  public Editor = DecoupledEditor;
  public config: EditorConfig = ckeditorConfig; // CKEditor needs the DOM tree before calculating the
  @ViewChild('editorToolbarElement')
  private editorToolbar!: ElementRef<HTMLDivElement>;
  @ViewChild('editorMenuBarElement')
  private editorMenuBar!: ElementRef<HTMLDivElement>;
  @ViewChild('ckeditor') ckeditorRef!: ElementRef<any>;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) { }
  ngAfterViewInit(): void {
    this.isLayoutReady = true;
    this.changeDetector.detectChanges();
  }

  ngOnInit(): void {
  }

  public onReady(editor: DecoupledEditor): void {
    Array.from(this.editorToolbar.nativeElement.children).forEach((child) =>
      child.remove()
    );
    Array.from(this.editorMenuBar.nativeElement.children).forEach((child) =>
      child.remove()
    );

    this.editorToolbar.nativeElement.appendChild(
      editor.ui.view.toolbar.element!
    );
    this.editorMenuBar.nativeElement.appendChild(
      editor.ui.view.menuBarView.element!
    );
  }
}