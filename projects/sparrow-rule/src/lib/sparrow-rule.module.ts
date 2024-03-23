import { NgModule } from "@angular/core";
import { SparrowRuleComponent } from "./sparrow-rule.component";
import { AngularMaterialModule } from "./angular-material.module";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { RuleTemplatesComponent } from "./rule/rule-templates/rule-templates.component";
import { RuleApiModule } from "@sparrowmini/rule-api";
import { RuleCreateComponent } from "./rule/rule-create/rule-create.component";

@NgModule({
  declarations: [SparrowRuleComponent, RuleTemplatesComponent, RuleCreateComponent],
  imports: [BrowserModule, RouterModule, AngularMaterialModule, RuleApiModule],
  exports: [SparrowRuleComponent],
})
export class SparrowRuleModule {}
