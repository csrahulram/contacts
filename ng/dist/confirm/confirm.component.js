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
var ConfirmComponent = (function () {
    function ConfirmComponent() {
        this.onConfirm = new core_1.EventEmitter();
        this.heading = 'Warning!';
        this.message = 'Are you sure you want to remove this contact?';
        this.okText = 'Delete';
        this.cancelText = 'Cancel';
    }
    ConfirmComponent.prototype.close = function () {
        this.onConfirm.emit('cancel');
    };
    ConfirmComponent.prototype.okFn = function () {
        this.onConfirm.emit('ok');
    };
    ConfirmComponent.prototype.cancelFn = function () {
        this.onConfirm.emit('cancel');
    };
    return ConfirmComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConfirmComponent.prototype, "onConfirm", void 0);
ConfirmComponent = __decorate([
    core_1.Component({
        'selector': 'confirm',
        'template': "\n        <div class=\"modal-header\">\n                <p class=\"modal-heading-text noclick\">{{heading}}</p>\n                <div class=\"close-btn btn\" (click)=\"close()\"></div>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"modal-text-container\">\n                    <p class=\"modal-info\">{{message}}</p>\n                </div>\n                <div class=\"button-wrapper\">\n                    <div class=\"modal-delete-btn btn\" tabindex=\"0\" (click)=\"okFn()\">{{okText}}</div>\n                    <div class=\"modal-cancel-btn btn\" tabindex=\"1\" (click)=\"cancelFn()\">{{cancelText}}</div>\n                </div>\n            </div>\n    ",
        'styles': ["\n    :host {\n\twidth: 80%;\n\theight: 280px;\n\tbackground-color: aquamarine;\n\tposition: absolute;\n\ttransform: translateX(-50%) translateY(-50%);\n\ttop: 50%;\n\tleft: 50%;\n}\n\n.modal-header {\n\twidth: 100%;\n\theight: 40px;\n\tbackground-color: #529aff;\n    padding: 5px 0 5px 0;\n}\n\n.modal-body {\n\t    background-color: white;\n    width: 100%;\n    height: 240px;\n    padding-top: 25px;\n    padding-left: 35px;\n    box-sizing: border-box;\n    overflow: hidden;\n    padding-right: 35px;\n}\n\n.modal-heading-text {\n\t    color: white;\n    margin-left: 10px;\n    float: left;\n    line-height: 30px;\n    font-size: 18px;\n    margin-bottom: 0;\n}\n\n.modal-info{\n\t    font-size: 24px;\n\ttext-align: center;\n        margin-bottom: 40px;\n}\n\n.modal-delete-btn{\n\twidth: 130px;\n    height: 50px;\n    background-color: #c12e2a;\n    border-radius: 5px;\n    color: white;\n    font-size: 24px;\n    text-align: center;\n    float: left;\n}\n\n.modal-cancel-btn{\n\twidth: 130px;\n    height: 50px;\n    background-color: #e0e0e0;\n    border-radius: 5px;\n    color: black;\n    font-size: 24px;\n    text-align: center;\n    float: right;\n}\n    "]
    }),
    __metadata("design:paramtypes", [])
], ConfirmComponent);
exports.ConfirmComponent = ConfirmComponent;
//# sourceMappingURL=confirm.component.js.map