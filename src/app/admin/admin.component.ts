import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService, AngularFireDatabase]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  saveMember(name: string, age: number, sex: string, bio: string, role: string, location: string, professionAge: string, picture: string) {
    var d = new Date();
    var time = d.toLocaleString();
    if (picture === '') {
      picture = 'http://grumpymonks.co.uk/w/wp-content/uploads/2015/03/funny-avater13.png';
      if ((name === '') || (sex === '') || (bio === '') || (role === '') || (location === '') || (professionAge === '')) {
        confirm('Please fill out the blanks!');
      } else {
        if ((name === '') || (sex === '') || (bio === '') || (role === '') || (location === '') || (professionAge === '')) {
          confirm('Please fill out the blanks!');
        } else {
          var newMember: Member = new Member(name, age, sex, bio, role, time, location, professionAge, picture);
          this.memberService.addMember(newMember);
        }
      }
    } else {
      var newMember: Member = new Member(name, age, sex, bio, role, time, location, professionAge, picture);
      this.memberService.addMember(newMember);
    }
  }
}
