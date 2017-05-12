import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'age',
  pure: false
})
export class AgePipe implements PipeTransform {

  transform(members: Member[], desiredAge) {
    var output: Member[] = [];
    if (desiredAge === 'lt30') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].age < 30) {
          output.push(members[i]);
        }
      }
      return output;
    } else if (desiredAge === 'lt40') {
      for (var j = 0; j < members.length; j++) {
        if (members[j].age <= 40 && members[j].age >= 30) {
          output.push(members[j]);
        }
      }
      return output;
    } else if (desiredAge === 'olderthan40') {
      for (var z = 0; z < members.length; z++) {
        if (members[z].age > 40) {
          output.push(members[z]);
        }
      }
      return output;
    } else {
      return members;
    }
  }

}
