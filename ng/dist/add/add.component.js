"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ADD_MODE = 'add_mode';
var EDIT_MODE = 'edit_mode';
var AddComponent = /** @class */ (function () {
    function AddComponent() {
        this.onSubmit = new core_1.EventEmitter();
        this.cancelText = 'Cancel';
        if (this.mode == ADD_MODE) {
            this.bgColor = 'bg-yellow';
            this.heading = 'Add contact';
            this.okText = 'Add';
        }
        if (this.mode == EDIT_MODE) {
            this.bgColor = 'bg-green';
            this.heading = 'Edit contact';
            this.okText = 'Update';
        }
    }
    AddComponent.prototype.close = function () {
        this.onSubmit.emit('cancel');
    };
    AddComponent.prototype.okFn = function () {
        this.onSubmit.emit(this.mode);
    };
    AddComponent.prototype.cancelFn = function () {
        this.onSubmit.emit('cancel');
    };
    AddComponent.prototype.invoke = function () {
        console.log('achieved');
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddComponent.prototype, "onSubmit", void 0);
    AddComponent = __decorate([
        core_1.Component({
            'selector': 'add',
            'template': " <div class=\"modal-header\">\n                <p class=\"modal-heading-text noclick\">{{heading}}</p>\n                <div class=\"close-btn btn\" (click)=\"close()\"></div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"profile-image male noclick\"></div>\n                <div class=\"modal-details\">\n                    <input type=\"text\" class=\"modal-text\" id=\"modal_name\" maxlength=\"20\" placeholder=\"Enter name\">\n                    <input type=\"text\" maxlength=10 class=\"modal-text\" id=\"modal_number\" placeholder=\"Enter phone number\">\n                </div>\n                <div class=\"button-wrapper\">\n                    <div class=\"modal-ok-btn btn\" [ngClass]=bgColor tabindex=\"0\" (click)=\"okFn()\">{{okText}}</div>\n                    <div class=\"modal-cancel-btn btn\" tabindex=\"1\" (click)=\"cancelFn()\">{{cancelText}}</div>\n                </div>\n            </div>",
            'styles': ["\n    :host {\n\twidth: 80%;\n\theight: 280px;\n\tbackground-color: aquamarine;\n\tposition: absolute;\n\ttransform: translateX(-50%) translateY(-50%);\n\ttop: 50%;\n\tleft: 50%;\n}\n\n.profile-image {\n\tbackground-image: url(ng/dist/img/profile.png);\n    width: 80px;\n    height: 80px;\n    background-size: cover;\n    border-radius: 50%;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    float: left;\n}\n\n.modal-header {\n\twidth: 100%;\n\theight: 40px;\n\tbackground-color: #529aff;\n    padding: 5px 0 5px 0;\n}\n\n.modal-details {\n    padding-left: 100px;\n    width: 100%;\n    box-sizing: border-box;\n}\n\n.modal-body {\n\t    background-color: white;\n    width: 100%;\n    height: 240px;\n    padding-top: 25px;\n    padding-left: 35px;\n    box-sizing: border-box;\n    overflow: hidden;\n    padding-right: 35px;\n}\n\n.modal-heading-text {\n\t    color: white;\n    margin-left: 10px;\n    float: left;\n    line-height: 30px;\n    font-size: 18px;\n    margin-bottom: 0;\n}\n\n.modal-info{\n\t    font-size: 24px;\n\ttext-align: center;\n        margin-bottom: 40px;\n}\n\n.modal-ok-btn{\n\twidth: 130px;\n    height: 50px;\n    border-radius: 5px;\n    color: white;\n    font-size: 24px;\n    text-align: center;\n    float: left;\n}\n\n.bg-red{\n    background-color: #c12e2a;\n}\n\n.bg-yellow{\n    background-color: #eb9316;\n}\n\n.modal-cancel-btn{\n\twidth: 130px;\n    height: 50px;\n    background-color: #e0e0e0;\n    border-radius: 5px;\n    color: black;\n    font-size: 24px;\n    text-align: center;\n    float: right;\n}\n\n.modal-text {\n\tmargin-top: 10px;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n    border-top: none;\n    border-left: none;\n    border-right: none;\n    background-color: transparent;\n    color: black;\n    font-size: 16px;\n\tline-height: 23px;\n\twidth: 100%;\n}\n\n.modal-text::placeholder {\n\tcolor: rgba(0, 0, 0, 0.5);\n}\n\n.button-wrapper{\n    margin-top: 50px;\n}\n\n.modal-text:focus {\n\toutline: none;\n}\n\n\n    "]
        }),
        __metadata("design:paramtypes", [])
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
//# sourceMappingURL=add.component.js.map