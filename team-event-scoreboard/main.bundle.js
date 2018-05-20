webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-root",
            template: "\n    <router-outlet></router-outlet>\n  ",
            styles: []
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_papaparse__ = __webpack_require__("../../../../ngx-papaparse/ngx-papaparse.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_upload_players_data_upload_player_data_component__ = __webpack_require__("../../../../../src/app/components/upload-players-data/upload-player-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_create_team_create_team_component__ = __webpack_require__("../../../../../src/app/components/create-team/create-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_view_team_view_team_component__ = __webpack_require__("../../../../../src/app/components/view-team/view-team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_team_card_team_card_component__ = __webpack_require__("../../../../../src/app/components/team-card/team-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guard_team_check_guard__ = __webpack_require__("../../../../../src/app/guard/team-check.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_data_store_service__ = __webpack_require__("../../../../../src/app/services/data-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    { path: "", redirectTo: "uploadData", pathMatch: "full" },
    { path: "uploadData", component: __WEBPACK_IMPORTED_MODULE_6__components_upload_players_data_upload_player_data_component__["a" /* UploadPlayersDataComponent */] },
    { path: "createTeam", component: __WEBPACK_IMPORTED_MODULE_7__components_create_team_create_team_component__["a" /* CreateTeamComponent */] },
    {
        path: "viewTeam",
        component: __WEBPACK_IMPORTED_MODULE_8__components_view_team_view_team_component__["a" /* ViewTeamComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_10__guard_team_check_guard__["a" /* TeamCheckGuard */]]
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_upload_players_data_upload_player_data_component__["a" /* UploadPlayersDataComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_create_team_create_team_component__["a" /* CreateTeamComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_team_card_team_card_component__["a" /* TeamCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_view_team_view_team_component__["a" /* ViewTeamComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ngx_papaparse__["a" /* PapaParseModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_12__services_data_store_service__["a" /* DataStoreService */], __WEBPACK_IMPORTED_MODULE_10__guard_team_check_guard__["a" /* TeamCheckGuard */], __WEBPACK_IMPORTED_MODULE_11__services_team_service__["a" /* TeamService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/create-team/create-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".create-team-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr;\r\n      grid-template-columns: 1fr;\r\n}\r\n\r\n.create-team-wrapper .game-option-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr;\r\n  padding: 50px 50px 0;\r\n}\r\n\r\n.create-team-wrapper .game-option-wrapper .select-all-wrapper {\r\n  position: relative;\r\n}\r\n\r\n.create-team-wrapper .game-option-wrapper .team-size-wrapper {\r\n  text-align: right;\r\n}\r\n\r\n.create-team-wrapper .game-option-wrapper .team-size-selector {\r\n  margin-left: 10px;\r\n  width: 300px;\r\n}\r\n\r\n.create-team-wrapper .player-grid-wrapper {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n  grid-gap: 10px;\r\n  padding: 50px;\r\n}\r\n\r\n.create-team-wrapper .player-grid-item {\r\n  border: 1px solid #000;\r\n  border-radius: 25px;\r\n  min-width: 200px;\r\n  padding: 10px;\r\n  position: relative;\r\n}\r\n\r\n.create-team-wrapper .player-grid-item span,\r\n.create-team-wrapper .select-all-wrapper span {\r\n  margin-left: 20px;\r\n}\r\n\r\n.create-team-wrapper .player-grid-item label,\r\n.create-team-wrapper .select-all-wrapper label {\r\n  background-color: #e9ddc7;\r\n  border: 1px solid #e9ddc7;\r\n  border-radius: 50%;\r\n  cursor: pointer;\r\n  height: 28px;\r\n  left: 7px;\r\n  position: absolute;\r\n  top: 7px;\r\n  width: 28px;\r\n}\r\n\r\n.create-team-wrapper .player-grid-item label:after,\r\n.create-team-wrapper .select-all-wrapper label:after {\r\n  border: 2px solid #fff;\r\n  border-top: none;\r\n  border-right: none;\r\n  content: \"\";\r\n  height: 6px;\r\n  left: 7px;\r\n  opacity: 0;\r\n  position: absolute;\r\n  top: 8px;\r\n  -webkit-transform: rotate(-45deg);\r\n          transform: rotate(-45deg);\r\n  width: 12px;\r\n}\r\n\r\n.create-team-wrapper .player-grid-item input[type=\"checkbox\"],\r\n.create-team-wrapper .select-all-wrapper input[type=\"checkbox\"] {\r\n  visibility: hidden;\r\n}\r\n\r\n.create-team-wrapper .player-grid-item input[type=\"checkbox\"]:checked + label,\r\n.create-team-wrapper\r\n  .select-all-wrapper\r\n  input[type=\"checkbox\"]:checked\r\n  + label {\r\n  background-color: #00b16a;\r\n  border-color: #00b16a;\r\n  /* background-color: #21988e; */\r\n}\r\n\r\n.create-team-wrapper\r\n  .player-grid-item\r\n  input[type=\"checkbox\"]:checked\r\n  + label:after,\r\n.create-team-wrapper\r\n  .select-all-wrapper\r\n  input[type=\"checkbox\"]:checked\r\n  + label:after {\r\n  opacity: 1;\r\n}\r\n\r\n.create-team-wrapper .game-option-wrapper .select-all-wrapper span {\r\n  display: inline-block;\r\n  margin: 8px 25px 0;\r\n}\r\n\r\n.create-team-wrapper .generate-button-wrapper {\r\n  margin: auto;\r\n}\r\n\r\n.create-team-wrapper .generate-button-wrapper .btn {\r\n  padding: 10px;\r\n  width: 500px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-team/create-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"create-team-wrapper\">\r\n    <div class=\"game-option-wrapper\">\r\n        <div class=\"select-all-wrapper\">\r\n            <input id=\"playerSelection\" type=\"checkbox\" [(ngModel)]=\"selectAll\" (change)=\"selectAllPlayers();\" />\r\n            <label for=\"playerSelection\"></label>\r\n            <span>Select All Players</span>\r\n        </div>\r\n        <div class=\"team-size-wrapper\">\r\n            <span class=\"team-size-label\">Players per team</span>\r\n            <select class=\"team-size-selector custom-select\" [(ngModel)]=\"teamSize\">\r\n                <option *ngFor=\"let teamSize of teamSizeOptions\" [value]=\"teamSize\">{{teamSize}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <div class=\"player-grid-wrapper\">\r\n        <div class=\"player-grid-item form-group checkbox-rounded checkbox-success-filled\" *ngFor=\"let player of players\">\r\n            <input id={{player.name}} class=\"filled-in\" (change)=\"changePlayer(player)\" type=\"checkbox\" [(ngModel)]=\"player.selected\">\r\n            <label for={{player.name}}></label>\r\n            <span class=\"name-label\">{{player.name}}</span>\r\n        </div>\r\n    </div>\r\n    <div class=\"generate-button-wrapper\">\r\n        <input type=\"button\" class=\"btn btn-primary\" value=\"Make Teams\" (click)=\"formTeams()\">\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/create-team/create-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_team_service__ = __webpack_require__("../../../../../src/app/services/team.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_store_service__ = __webpack_require__("../../../../../src/app/services/data-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateTeamComponent = /** @class */ (function () {
    function CreateTeamComponent(router, teamService, dataStoreService) {
        var _this = this;
        this.router = router;
        this.teamService = teamService;
        this.dataStoreService = dataStoreService;
        this.players = [];
        this.selectedPlayers = [];
        this.selectAll = false;
        this.teamSizeOptions = [2, 3, 4, 5, 6];
        this.teamSize = 4;
        this.teams = new Map();
        this.dataStoreService.players.forEach(function (name) {
            _this.players.push({ name: name, selected: false });
        });
    }
    CreateTeamComponent.prototype.ngOnInit = function () { };
    CreateTeamComponent.prototype.selectAllPlayers = function () {
        var newSelectValue = this.selectAll ? true : false;
        this.players.forEach(function (player) {
            player["selected"] = newSelectValue;
        });
    };
    CreateTeamComponent.prototype.changePlayer = function (player) {
        if (!player.selected) {
            this.selectAll = false;
        }
    };
    CreateTeamComponent.prototype.formTeams = function () {
        var _this = this;
        this.selectedPlayers = [];
        this.players.forEach(function (player) {
            if (player["selected"]) {
                _this.selectedPlayers.push(player["name"]);
            }
        });
        this.teams = this.teamService.formTeams(this.teamSize, this.selectedPlayers);
        this.saveDataToStore();
        this.router.navigate(["/viewTeam"]);
    };
    CreateTeamComponent.prototype.saveDataToStore = function () {
        this.dataStoreService.teamSize = this.teamSize;
        this.dataStoreService.teams = this.teams;
    };
    CreateTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-create-team",
            template: __webpack_require__("../../../../../src/app/components/create-team/create-team.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/create-team/create-team.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_team_service__["a" /* TeamService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_store_service__["a" /* DataStoreService */]])
    ], CreateTeamComponent);
    return CreateTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/team-card/team-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team-card {\r\n  color: #000;\r\n}\r\n\r\n.team-card .new-player-input-box {\r\n  margin: 0 auto;\r\n  width: 280px;\r\n}\r\n\r\n.team-card .new-player-input-box button {\r\n  margin-left: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/team-card/team-card.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"team-card\">\r\n    <div class=\"card bg-light text-center\">\r\n        <div class=\"card-header\">\r\n            Team - {{teamName | uppercase}}\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <ul class=\"list-group list-group-flush\">\r\n                <li class=\"list-group-item\" *ngFor=\"let player of teamPlayers\">{{player}}</li>\r\n            </ul>\r\n        </div>\r\n        <div class=\"card-footer add-new-player\">\r\n            <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"!showInputBox\" (click)=\"showPlayerInputBox()\">Add Player</button>\r\n            <div class=\"new-player-input-box form-inline\" *ngIf=\"showInputBox\">\r\n                <input type=\"text\" #playerName class=\"player-name form-control\">\r\n                <button type=\"button\" class=\"btn btn-primary form-control\" (click)=\"addPlayer(playerName)\">Add</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/team-card/team-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_store_service__ = __webpack_require__("../../../../../src/app/services/data-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamCardComponent = /** @class */ (function () {
    function TeamCardComponent(dataStoreService) {
        this.dataStoreService = dataStoreService;
        this.showInputBox = false;
    }
    TeamCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamPlayers.forEach(function (player, index) {
            if (!player) {
                _this.teamPlayers.splice(index);
            }
        });
    };
    TeamCardComponent.prototype.addPlayer = function (player) {
        this.showInputBox = false;
        this.teamPlayers.push(player.value);
        this.dataStoreService.teams.set(this.teamName, this.teamPlayers);
    };
    TeamCardComponent.prototype.showPlayerInputBox = function () {
        this.showInputBox = true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], TeamCardComponent.prototype, "teamName", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TeamCardComponent.prototype, "teamPlayers", void 0);
    TeamCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-team-card",
            styles: [__webpack_require__("../../../../../src/app/components/team-card/team-card.component.css")],
            template: __webpack_require__("../../../../../src/app/components/team-card/team-card.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_store_service__["a" /* DataStoreService */]])
    ], TeamCardComponent);
    return TeamCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/upload-players-data/upload-player-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadPlayersDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_papaparse__ = __webpack_require__("../../../../ngx-papaparse/ngx-papaparse.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_data_store_service__ = __webpack_require__("../../../../../src/app/services/data-store.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_players__ = __webpack_require__("../../../../../src/app/config/players.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UploadPlayersDataComponent = /** @class */ (function () {
    function UploadPlayersDataComponent(router, papaParseService, dataStoreService) {
        this.router = router;
        this.papaParseService = papaParseService;
        this.dataStoreService = dataStoreService;
        this.importedCsvPlayers = [];
        this.importHasErrors = false;
        this.useDummyData = false;
    }
    UploadPlayersDataComponent.prototype.parseCsvFile = function ($event) {
        var self = this;
        var file = $event.target.files[0];
        var reader = new FileReader();
        reader.onloadend = function (event) {
            var json = self.papaParseService.parse(reader.result);
            self.importHasErrors = json.errors.length ? false : true;
            self.importedCsvPlayers = json.data[0];
        };
        reader.readAsText(file);
    };
    UploadPlayersDataComponent.prototype.confirmSelection = function () {
        if (!this.useDummyData) {
            console.info("import", this.importedCsvPlayers);
            this.dataStoreService.players = this.importedCsvPlayers;
        }
        else {
            console.info("default", __WEBPACK_IMPORTED_MODULE_4__config_players__["a" /* Players */].names);
            this.dataStoreService.players = __WEBPACK_IMPORTED_MODULE_4__config_players__["a" /* Players */].names;
        }
        this.router.navigate(["/createTeam"]);
    };
    UploadPlayersDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-upload-data",
            template: __webpack_require__("../../../../../src/app/components/upload-players-data/upload-players-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/upload-players-data/upload-players-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_papaparse__["b" /* PapaParseService */],
            __WEBPACK_IMPORTED_MODULE_3__services_data_store_service__["a" /* DataStoreService */]])
    ], UploadPlayersDataComponent);
    return UploadPlayersDataComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/upload-players-data/upload-players-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".upload-data {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.upload-data .import-parent-container {\r\n  width: 400px;\r\n}\r\n\r\n.upload-data .card-header {\r\n  color: #000;\r\n}\r\n\r\n.upload-data .card-footer {\r\n  color: #000;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  -ms-flex-pack: distribute;\r\n      justify-content: space-around;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/upload-players-data/upload-players-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"upload-data\">\r\n    <div class=\"import-parent-container card text-center\">\r\n        <div class=\"card-header\">\r\n            Upload players data\r\n        </div>\r\n        <div class=\"card-body\">\r\n            <input type=\"file\" id=\"csvFile\" accept=\".csv\" required (change)=\"parseCsvFile($event)\">\r\n        </div>\r\n        <div class=\"card-footer\">\r\n            <div class=\"use-dummy\">\r\n                <input type=\"checkbox\" id=\"useDummyData\" [(ngModel)]=\"useDummyData\">\r\n                <label for=\"useDummyData\">Use dummy data</label>\r\n            </div>\r\n            <div class=\"confirm-button-container\">\r\n                <button id=\"confirmData\" class=\"btn btn-primary\" (click)=\"confirmSelection()\">Confirm</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/view-team/view-team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view-team .cards-main-holder {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: 1fr 1fr 1fr 1fr;\r\n      grid-template-columns: 1fr 1fr 1fr 1fr;\r\n  grid-gap: 30px;\r\n  padding: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-team/view-team.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"view-team\">\r\n    <div class=\"cards-main-holder\">\r\n        <div class=\"card-holder\" *ngFor=\"let teamName of teamNames\">\r\n            <app-team-card [teamName]=\"teamName\" [teamPlayers]=\"teams.get(teamName)\"></app-team-card>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/view-team/view-team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewTeamComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_store_service__ = __webpack_require__("../../../../../src/app/services/data-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewTeamComponent = /** @class */ (function () {
    function ViewTeamComponent(dataStoreService) {
        var _this = this;
        this.dataStoreService = dataStoreService;
        this.teams = new Map();
        this.teamNames = [];
        console.warn(this.dataStoreService.teams);
        this.teamNames = [];
        this.teams = this.dataStoreService.teams;
        this.teams.forEach(function (value, key) {
            _this.teamNames.push(key);
        });
        console.warn(this.teamNames);
    }
    ViewTeamComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "app-view-team",
            styles: [__webpack_require__("../../../../../src/app/components/view-team/view-team.component.css")],
            template: __webpack_require__("../../../../../src/app/components/view-team/view-team.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_store_service__["a" /* DataStoreService */]])
    ], ViewTeamComponent);
    return ViewTeamComponent;
}());



/***/ }),

/***/ "../../../../../src/app/config/players.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Players; });
var Players = /** @class */ (function () {
    function Players() {
    }
    Players.names = [
        "Adam",
        "Ricky",
        "Angelina",
        "Ken",
        "Johnathan",
        "Rebecca",
        "Morty",
        "James",
        "Scott",
        "Peter",
        "Christie",
        "Christina",
        "Eve",
        "Rojers"
    ];
    return Players;
}());



/***/ }),

/***/ "../../../../../src/app/guard/team-check.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamCheckGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_store_service__ = __webpack_require__("../../../../../src/app/services/data-store.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TeamCheckGuard = /** @class */ (function () {
    function TeamCheckGuard(router, dataStoreService) {
        this.router = router;
        this.dataStoreService = dataStoreService;
    }
    TeamCheckGuard.prototype.canActivate = function () {
        if (this.dataStoreService.teamSize) {
            return true;
        }
        else {
            this.router.navigate(["/"]);
        }
        return false;
    };
    TeamCheckGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_data_store_service__["a" /* DataStoreService */]])
    ], TeamCheckGuard);
    return TeamCheckGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/data-store.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataStoreService = /** @class */ (function () {
    function DataStoreService() {
        this.players = [];
        this.teams = new Map();
    }
    DataStoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataStoreService);
    return DataStoreService;
}());



/***/ }),

/***/ "../../../../../src/app/services/team.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamService = /** @class */ (function () {
    function TeamService() {
    }
    TeamService.prototype.formTeams = function (teamSize, players) {
        var totalTeams = Math.ceil(players.length / teamSize);
        var finalTeams = new Map();
        for (var team = 0; team < totalTeams; team++) {
            var currentTeam = [];
            for (var j = 0; j < teamSize; j++) {
                var chosenPlayerIndex = this.pickRandomPlayer(players.length);
                currentTeam.push(players[chosenPlayerIndex]);
                players.splice(chosenPlayerIndex, 1);
            }
            finalTeams.set(this.getInitialTeamName(team), currentTeam);
        }
        return finalTeams;
    };
    TeamService.prototype.pickRandomPlayer = function (playersLeft) {
        return Math.floor(Math.random() * playersLeft);
    };
    TeamService.prototype.getInitialTeamName = function (index) {
        return String.fromCharCode(97 + index).trim();
    };
    TeamService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TeamService);
    return TeamService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map