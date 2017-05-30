import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component.js';
import { LoginComponent } from './login/login.component.js';
import { ProductComponent } from './product/product.component.js';
import { AboutComponent } from './about/about.component.js';
import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        {
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'product',
            component: ProductComponent
        },
        {
            path: 'about',
            component: AboutComponent
        },
        { 
            path: '**', 
            component: LoginComponent
        }
    ]), HttpModule,
    JsonpModule],
    declarations: [
    AppComponent, 
    LoginComponent, 
    ProductComponent, 
    AboutComponent],
    bootstrap: [AppComponent]
})



export class AppModule { }
