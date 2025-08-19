import { Pipe, PipeTransform } from '@angular/core';
import { JSONPath } from 'jsonpath-plus';


@Pipe({
  name: 'jsonPath'
})
export class JsonPathPipe implements PipeTransform {
  /**
 * <!-- 返回第一个 -->
{{ data | jsonPath:'$.store.book[*].price' }}

<!-- 返回数组 -->
{{ data | jsonPath:'$.store.book[*].price':true }}
 */
  transform(obj: any, path: string, multi: boolean = false): any {
    try {
      const result = JSONPath({ path, json: obj });
      return multi ? result : (result?.length ? result[0] : null);
    } catch {
      return null;
    }
  }
}
