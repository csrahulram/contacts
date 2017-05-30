"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var app_component_js_1 = require("./app.component.js");
var base_component_js_1 = require("./base/base.component.js");
var product_component_js_1 = require("./product/product.component.js");
var contact_component_js_1 = require("./contact/contact.component.js");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, router_1.RouterModule.forRoot([
                {
                    path: 'base',
                    component: base_component_js_1.BaseComponent
                },
                {
                    path: '**',
                    component: base_component_js_1.BaseComponent
                }
            ]), http_1.HttpModule,
            http_1.JsonpModule],
        declarations: [
            app_component_js_1.AppComponent,
            base_component_js_1.BaseComponent,
            product_component_js_1.ProductComponent,
            contact_component_js_1.ContactComponent
        ],
        bootstrap: [app_component_js_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map