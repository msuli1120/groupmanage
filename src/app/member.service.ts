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

  updateMember(member) {
    var memberInDatabase = this.getMemberById(member.$key);
    memberInDatabase.update({
      role: member.role,
      location: member.location,
      name: member.name,
      age: member.age,
      sex: member.sex.toLowerCase(),
      picture: member.picture,
      bio: member.bio,
      professionAge: member.professionAge
    });
  }

  deleteMember(member) {
    var memberInDatabase = this.getMemberById(member.$key);
    memberInDatabase.remove();
  }
}
