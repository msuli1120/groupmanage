import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@Pipe({
  name: 'role',
  pure: false
})
export class RolePipe implements PipeTransform {

  transform(members: Member[], desiredRole) {
    var output: Member[] = [];
    if (desiredRole === 'member') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].role === 'Member') {
          output.push(members[i]);
        }
      }
      return output;
    } else if (desiredRole === 'manager') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].role === 'Manger') {
          output.push(members[i]);
        }
      }
      return output;
    } else if (desiredRole === 'secretary') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].role === 'Secretary') {
          output.push(members[i]);
        }
      }
      return output;
    } else if (desiredRole === 'treasurer') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].role === 'Treasurer') {
          output.push(members[i]);
        }
      }
      return output;
    } else if (desiredRole === 'ceo') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].role === 'CEO') {
          output.push(members[i]);
        }
      }
      return output;
    } else if (desiredRole === 'president') {
      for (var i = 0; i < members.length; i++) {
        if (members[i].role === 'President') {
          output.push(members[i]);
        }
      }
      return output;
    } else {
      return members;
    }
  }

}
