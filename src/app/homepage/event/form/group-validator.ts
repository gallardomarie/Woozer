import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable()
export class ValidateGroup {

  static valid = (inGroup: boolean) => {
    return (c: FormControl) => {
      if (!inGroup && c.value === '') {
          return {group: true};
      }
  };
}

}
