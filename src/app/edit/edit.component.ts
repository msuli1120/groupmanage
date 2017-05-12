import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [MemberService]
})
export class EditComponent implements OnInit {
  @Input() member;
  updateSuccess = false;
  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  update(member) {
    this.memberService.updateMember(member);
  }

  delete(member) {
    if (confirm('Are you sure you want to delete ' + member.name + '?')) {
      this.memberService.deleteMember(member);
    }
  }

}
