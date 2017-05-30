import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component.js';
import { BaseComponent } from './base/base.component.js';
import { ProductComponent } from './product/product.component.js';
import { ContactComponent } from './contact/contact.component.js';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        {
            path: 'base',
            component: BaseComponent
        },
        {
            path: '**',
            component: BaseComponent
        }
    ]), HttpModule,
        JsonpModule],
    declarations: [
        AppComponent,
        BaseComponent,
        ProductComponent,
        ContactComponent],
    bootstrap: [AppComponent]
})



export class AppModule { }
