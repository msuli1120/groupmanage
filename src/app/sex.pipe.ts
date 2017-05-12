import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'sex',
  pure: false
})
export class SexPipe implements PipeTransform {

  transform(members: Member[], desiredSex) {
    var output: Member[] = [];
    if (desiredSex === 'male') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].sex === 'male') {
          output.push(members[i]);
        }
      }
      return output;
    } else if (desiredSex === 'female') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].sex === 'female') {
          output.push(members[i]);
        }
      }
      return output;
    } else {
      return members;
    }
  }

}
