import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFireDatabase) {
    this.members = angularFire.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(id: string) {
    return this.angularFire.object('members/' + id);
  }

  addMember(member: Member) {
    this.members.push(member);
  }
}
