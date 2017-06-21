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
var person_1 = require("./person");
var logger_service_1 = require("./logger.service");
var LaiLaiComponent = (function () {
    function LaiLaiComponent(logger) {
        this.logger = logger;
        this.dd = false;
        this.powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
        this.model = new person_1.Person(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
        this.submitted = false;
    }
    LaiLaiComponent.prototype.ngOnInit = function () {
        this.greeting = "FENG WANG !";
        this.logger.debug("用户初始化数据");
        this.logger.sss("王凤来");
    };
    LaiLaiComponent.prototype.showData = function () {
        this.dd = true;
    };
    LaiLaiComponent.prototype.hideData = function () {
        this.dd = false;
    };
    LaiLaiComponent.prototype.onSubmit = function () { this.submitted = true; };
    Object.defineProperty(LaiLaiComponent.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    LaiLaiComponent.prototype.newHero = function () {
        this.model = new person_1.Person(42, '', '');
    };
    return LaiLaiComponent;
}());
LaiLaiComponent = __decorate([
    core_1.Component({
        selector: 'lailai',
        templateUrl: './lailai.component.html'
    }),
    __metadata("design:paramtypes", [logger_service_1.LoggerService])
], LaiLaiComponent);
exports.LaiLaiComponent = LaiLaiComponent;
//# sourceMappingURL=lailai.component.js.map