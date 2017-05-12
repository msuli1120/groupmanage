import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomComponent } from './welcom/welcom.component';
import { MembersComponent } from './members/members.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { EditComponent } from './edit/edit.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    WelcomComponent,
    MembersComponent,
    AboutComponent,
    ContactComponent,
    AdminComponent,
    MemberDetailComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
