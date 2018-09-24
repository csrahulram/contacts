import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailsComponent } from './details/details.component';
import { AlertComponent } from './alert/alert.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { NavComponent } from './nav/nav.component';
import { ValidateDirective } from './validate.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ContactComponent,
    SearchComponent,
    ContactsComponent,
    DetailsComponent,
    AlertComponent,
    ConfirmComponent,
    NavComponent,
    ValidateDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'contacts',
        component: ContactsComponent,
        data: { animation: 'ContactsPage' }
      },
      {
        path: 'details/:id',
        component: DetailsComponent,
        data: { animation: 'DetailPage' }
      },
      {
        path: 'new',
        component: DetailsComponent,
        data: { animation: 'DetailPage' }
      },
      {
        path: '',
        redirectTo: 'contacts',
        pathMatch: 'full'
      }
    ],  { enableTracing: false })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
