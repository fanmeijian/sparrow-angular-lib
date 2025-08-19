import { Injectable, Type } from '@angular/core';

export interface DirectiveUsage {
  directive: string;
  value: any;
  component: Type<any>;
  selector: string;
}

@Injectable({ providedIn: 'root' })
export class ComponentRegistryService {
  private directiveUsages: DirectiveUsage[] = [];

  registerDirectiveUsage(usage: DirectiveUsage) {
    this.directiveUsages.push(usage);
  }

  getDirectiveUsages(directive: string): DirectiveUsage[] {
    return this.directiveUsages.filter(u => u.directive === directive);
  }
}
