import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent} from './contact/contact.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersComponent } from './members/members.component';
import { WelcomComponent } from './welcom/welcom.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'members',
    component: MembersComponent
  }, {
    path: 'members/:id',
    component: MemberDetailComponent
  }, {
    path: 'admin',
    component: AdminComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
