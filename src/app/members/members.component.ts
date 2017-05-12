import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService, AngularFireDatabase]
})
export class MembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  userFilter: any = { name: ''};
  byAge: string = 'all';
  bySex: string = 'all';
  byRole: string = 'all';
  constructor( private router: Router, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToDetail(member) {
    this.router.navigate(['members', member.$key]);
  }

  changeAge(option) {
    this.byAge = option;
  }

  changeSex(option) {
    this.bySex = option;
  }

  changeRole(option) {
    this.byRole = option;
  }

}
