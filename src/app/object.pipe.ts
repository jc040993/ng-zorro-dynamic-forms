import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'object'
})
export class ObjectPipe implements PipeTransform {

  transform(value: any, func: String, args: any): any {
    switch (func) {
      case "keys":
        return Object.keys(value).map(key => Object.assign({ "key": `key${args}-${key}`, "uKey": key }, value[key]));
    }
    return value;
  }

}
