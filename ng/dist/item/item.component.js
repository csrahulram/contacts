"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        selector: 'contact',
        template: "\n    <div class=\"delete-btn btn icon\"></div>\n\t\t\t <div class=\"edit-btn btn icon\"></div>\n                <div class=\"profile-icon male noclick\"></div>\n                <div class=\"details noclick\">\n                    <p class=\"name\">Sample name</p>\n                    <p class=\"number\">757578657657</p>\n                </div>\n\t\t\t\t<div class=\"id hide\">1</div>\n                ",
        styles: ["\n    .delete-btn{\n\tbackground-image: url('ng/dist/img/delete.png');\n    margin-top: 15px;\n    margin-right: 25px;\n    position: absolute;\n    right: 0;\n}\n\n.delete-btn:hover{\n\tbackground-color: rgba(0, 0, 0, 0.2);\n}\n\n.edit-btn{\n\tbackground-image: url('ng/dist/img/edit.png');\n    margin-top: 15px;\n    margin-right: 65px;\n    position: absolute;\n    right: 0;\n}\n\n.edit-btn:hover{\n\tbackground-color: rgba(0, 0, 0, 0.2);\n}\n\n.icon {\n\twidth: 30px;\n\theight: 30px;\n\tbackground-size: cover;\n}\n\n:host {\n\theight: 80px;\n\tborder-bottom: 0.2px solid rgba(0, 0, 0, 0.4);\n\tpadding-top: 10px;\n\tbox-sizing: border-box;\n\tpadding-left: 10px;\n\tborder-radius: 3px;\n}\n\n.name {\n\tfont-size: 26px;\n\tline-height: 30px;\n}\n\n.number {\n\tfont-size: 15px;\n\tline-height: 15px;\n\tcolor: rgba(0, 0, 0, 0.68);\n}\n\n.profile-icon {\n\tbackground-image: url('ng/dist/img/profile.png');\n\twidth: 60px;\n\theight: 60px;\n\tbackground-size: cover;\n\tborder-radius: 50%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: 50%;\n\tfloat: left;\n}\n    \n    "]
    })
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=item.component.js.map