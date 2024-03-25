import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatChipInputEvent } from "@angular/material/chips";
import { Observable, startWith, map } from "rxjs";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { SysroleService } from "@sparrowmini/org-api";

@Component({
  selector: "lib-sysrole-selection",
  templateUrl: "./sysrole-selection.component.html",
  styleUrls: ["./sysrole-selection.component.css"],
})
export class SysroleSelectionComponent implements OnInit {
  @Input() public selectedSysroles!: any[];
  @Input() public multiple: boolean = false;
  @Output() private onSelected = new EventEmitter<string>();
  @Output() private onRemoved = new EventEmitter<string>();

  sysroles: any[] = [];
  // selectedSysroles: any[] = []

  @ViewChild("fruitInput") fruitInput!: ElementRef<HTMLInputElement>;

  constructor(private sysroleService: SysroleService) {}
  ngOnInit(): void {
    this.sysroleService.sysroles([],0, 100000).subscribe((res) => {
      this.sysroles = res.content!;
    });
  }

  remove(fruit: any): void {
    const index = this.selectedSysroles.indexOf(fruit);

    if (index >= 0) {
      this.selectedSysroles.splice(index, 1);
    }
  }

  select(seletedItem: any) {
    if (!this.multiple) {
      this.selectedSysroles = [];
    }

    if (this.selectedSysroles.indexOf(seletedItem) === -1) {
      this.selectedSysroles.push(seletedItem);
      this.onSelected.emit(seletedItem.id);
    }
  }
}
