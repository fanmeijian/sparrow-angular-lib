import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-editing-tools',
  templateUrl: './editing-tools.component.html',
  styleUrls: ['./editing-tools.component.css']
})
export class EditingToolsComponent implements OnInit {
  ngOnInit(): void {
  }
  @Output() onUndo = new EventEmitter();
  @Output() onRedo = new EventEmitter();
  @Output() onZoomReset = new EventEmitter();
  @Output() onZoomIn = new EventEmitter();
  @Output() onZoomOut = new EventEmitter();
  @Output() onSave = new EventEmitter();
  @Output() onDownloadXml = new EventEmitter();
  @Output() onDownloadSvg = new EventEmitter();

  _onUndo() {
    this.onUndo.emit();
  }
  _onRedo() {
    this.onRedo.emit();
  }
  _onZoomReset() {
    this.onZoomReset.emit();
  }
  _onZoomIn() {
    this.onZoomIn.emit();
  }
  _onZoomOut() {
    this.onZoomOut.emit();
  }
  _onSave() {
    this.onSave.emit();
  }
  _onDownloadXml() {
    this.onDownloadXml.emit();
  }
  _onDownloadSvg() {
    this.onDownloadSvg.emit();
  }
}
