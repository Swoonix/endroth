(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: 'Roboto', sans-serif;\r\n\r\n}\r\n\r\n.example-full-width{\r\n  width: 100%;\r\n\r\n}\r\n\r\n.example-card {\r\n    max-width: 500px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.example-header-image {\r\n    background-image: url('loup1.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n.example-header-image-2 {\r\n    background-image: url('loup2.jpg');\r\n    background-size: cover;\r\n  }\r\n\r\n.example-header-image-3 {\r\n    background-image: url('loup3.jpg');\r\n    background-size: cover;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n  <mat-tab label=\"Découverte objet\">\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image-2\"></div>\n        <mat-card-title>Nouvelle découverte objet</mat-card-title>\n        <mat-card-subtitle>Modérateurs & Animateurs</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <form class=\"example-form\" (submit)=\"decouverte_objet()\" method=\"POST\" id=\"test\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"number\" placeholder=\"Niveau d'exploration\" [(ngModel)]=\"explo_niveau\" name=\"explo_niveau\">\n          </mat-form-field>\n          <br>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"number\" placeholder=\"Jauge astrale\" [(ngModel)]=\"jauge_astrale\" name=\"jauge_astrale\">\n          </mat-form-field>\n          <br>Valeur bonus jauge astrale : {{bonus_2}}\n          <mat-divider style=\"margin-top: 10px\" [inset]=\"true\"></mat-divider>\n          <br>Numéro du dé : {{random_number_objet}}\n          <mat-divider style=\"margin-top: 10px\" [inset]=\"true\"></mat-divider>\n          <br>\n          <p style=\"color:green\">Résultat : {{resultat_objet}}</p>\n          <mat-card-actions>\n            <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\" style=\"float:right\">DECOUVERTE</button>\n\n\n          </mat-card-actions>\n        </form>\n\n      </mat-card-content>\n      <mat-card-actions>\n      </mat-card-actions>\n    </mat-card>\n  </mat-tab>\n  <mat-tab label=\"Découverte\">\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image\"></div>\n        <mat-card-title>Nouvelle découverte</mat-card-title>\n        <mat-card-subtitle>Administrateurs seulement</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <form class=\"example-form\" (submit)=\"decouverte()\" method=\"POST\" id=\"test\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"number\" placeholder=\"Niveau d'exploration\" [(ngModel)]=\"explo_niveau\" name=\"explo_niveau\">\n          </mat-form-field>\n          <br>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"number\" placeholder=\"Jauge astrale\" [(ngModel)]=\"jauge_astrale\" name=\"jauge_astrale\">\n          </mat-form-field>\n          <br>Valeur bonus jauge astrale : {{bonus}}\n          <mat-divider style=\"margin-top: 10px\" [inset]=\"true\"></mat-divider>\n          <br>Numéro du dé : {{random_number}}\n          <mat-divider style=\"margin-top: 10px\" [inset]=\"true\"></mat-divider>\n          <br>\n          <p style=\"color:green\">Résultat : {{resultat}}</p>\n          <mat-card-actions>\n            <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\" style=\"float:right;\">DECOUVERTE</button>\n          </mat-card-actions>\n        </form>\n\n      </mat-card-content>\n      <mat-card-actions>\n\n      </mat-card-actions>\n    </mat-card>\n  </mat-tab>\n  <mat-tab label=\"Découverte collectionneur\">\n    <mat-card class=\"example-card\">\n      <mat-card-header>\n        <div mat-card-avatar class=\"example-header-image-3\"></div>\n        <mat-card-title>Découverte collectionneur</mat-card-title>\n        <mat-card-subtitle>Modérateurs & Animateurs </mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content>\n        <form class=\"example-form\" (submit)=\"collectionneur()\" method=\"POST\" id=\"test\">\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"number\" placeholder=\"Niveau du joueur\" [(ngModel)]=\"perso_niveau\" name=\"perso_niveau\">\n          </mat-form-field>\n          <br>\n          <mat-form-field class=\"example-full-width\">\n            <input matInput type=\"number\" placeholder=\"Jauge astrale\" [(ngModel)]=\"jauge_astrale\" name=\"jauge_astrale\">\n          </mat-form-field>\n          <br>Valeur bonus jauge astrale : {{bonus_3}}\n          <mat-divider style=\"margin-top: 10px\" [inset]=\"true\"></mat-divider>\n          <br>Numéro du dé : {{random_number_collectionneur}}\n          <mat-divider style=\"margin-top: 10px\" [inset]=\"true\"></mat-divider>\n          <br>\n          <p style=\"color:green\">Résultat : {{resultat_collectionneur}}</p>\n          <mat-card-actions>\n            <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\" style=\"float:right\">DECOUVERTE</button>\n\n\n          </mat-card-actions>\n        </form>\n\n      </mat-card-content>\n      <mat-card-actions>\n      </mat-card-actions>\n    </mat-card>\n  </mat-tab>\n</mat-tab-group>\n<button mat-raised-button color=\"warn\" (click)=\"reset()\" style=\"margin-left:50% !important; margin-right: auto !important; margin-top: 25px\">RESET</button>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.jauge_astrale = 50;
        this.explos = [
            { value: 0, viewValue: '0' },
            { value: 1, viewValue: '1' },
            { value: 2, viewValue: '2' },
            { value: 3, viewValue: '3' },
            { value: 4, viewValue: '4' },
            { value: 5, viewValue: '5' },
            { value: 6, viewValue: '6' }
        ];
    }
    AppComponent.prototype.reset = function () {
        this.random();
        this.bonus = undefined;
        this.bonus_2 = undefined;
        this.bonus_3 = undefined;
        this.resultat = undefined;
        this.resultat_collectionneur = undefined;
        this.resultat_objet = undefined,
            this.explo_niveau = 0;
        this.perso_niveau = 0;
        this.jauge_astrale = 50;
    };
    AppComponent.prototype.random = function () {
        this.random_number = Math.floor(Math.random() * (101 - 0) + 0);
        this.random_number_objet = Math.floor(Math.random() * (101 - 0) + 0);
        this.random_number_collectionneur = Math.floor(Math.random() * (101 - 0) + 0);
    };
    AppComponent.prototype.astral = function () {
        // Appliquer bonus/malus au dé
        // this.random_number += this.jauge_astrale;
        if (this.jauge_astrale === 0) {
            this.bonus = -25;
        }
        else if (this.jauge_astrale > 0 && this.jauge_astrale <= 10) {
            this.bonus = -20;
        }
        else if (this.jauge_astrale > 10 && this.jauge_astrale <= 20) {
            this.bonus = -15;
        }
        else if (this.jauge_astrale > 20 && this.jauge_astrale <= 30) {
            this.bonus = -10;
        }
        else if (this.jauge_astrale > 30 && this.jauge_astrale <= 40) {
            this.bonus = -5;
        }
        else if (this.jauge_astrale > 40 && this.jauge_astrale < 60) {
            this.bonus = 0;
        }
        else if (this.jauge_astrale >= 60 && this.jauge_astrale < 70) {
            this.bonus = 5;
        }
        else if (this.jauge_astrale >= 70 && this.jauge_astrale < 80) {
            this.bonus = 10;
        }
        else if (this.jauge_astrale >= 80 && this.jauge_astrale < 90) {
            this.bonus = 15;
        }
        else if (this.jauge_astrale >= 90 && this.jauge_astrale < 100) {
            this.bonus = 20;
        }
        else if (this.jauge_astrale === 100) {
            this.bonus = 25;
        }
        return this.bonus;
    };
    AppComponent.prototype.astral_obj = function () {
        if (this.jauge_astrale === 0) {
            this.bonus_2 = -25;
        }
        else if (this.jauge_astrale > 0 && this.jauge_astrale <= 10) {
            this.bonus_2 = -20;
        }
        else if (this.jauge_astrale > 10 && this.jauge_astrale <= 20) {
            this.bonus_2 = -15;
        }
        else if (this.jauge_astrale > 20 && this.jauge_astrale <= 30) {
            this.bonus_2 = -10;
        }
        else if (this.jauge_astrale > 30 && this.jauge_astrale <= 40) {
            this.bonus_2 = -5;
        }
        else if (this.jauge_astrale > 40 && this.jauge_astrale < 60) {
            this.bonus_2 = 0;
        }
        else if (this.jauge_astrale >= 60 && this.jauge_astrale < 70) {
            this.bonus_2 = 5;
        }
        else if (this.jauge_astrale >= 70 && this.jauge_astrale < 80) {
            this.bonus_2 = 10;
        }
        else if (this.jauge_astrale >= 80 && this.jauge_astrale < 90) {
            this.bonus_2 = 15;
        }
        else if (this.jauge_astrale >= 90 && this.jauge_astrale < 100) {
            this.bonus_2 = 20;
        }
        else if (this.jauge_astrale === 100) {
            this.bonus_2 = 25;
        }
        return this.bonus_2;
    };
    AppComponent.prototype.astral_collectionneur = function () {
        if (this.jauge_astrale === 0) {
            this.bonus_3 = -25;
        }
        else if (this.jauge_astrale > 0 && this.jauge_astrale <= 10) {
            this.bonus_3 = -20;
        }
        else if (this.jauge_astrale > 10 && this.jauge_astrale <= 20) {
            this.bonus_3 = -15;
        }
        else if (this.jauge_astrale > 20 && this.jauge_astrale <= 30) {
            this.bonus_3 = -10;
        }
        else if (this.jauge_astrale > 30 && this.jauge_astrale <= 40) {
            this.bonus_3 = -5;
        }
        else if (this.jauge_astrale > 40 && this.jauge_astrale < 60) {
            this.bonus_3 = 0;
        }
        else if (this.jauge_astrale >= 60 && this.jauge_astrale < 70) {
            this.bonus_3 = 5;
        }
        else if (this.jauge_astrale >= 70 && this.jauge_astrale < 80) {
            this.bonus_3 = 10;
        }
        else if (this.jauge_astrale >= 80 && this.jauge_astrale < 90) {
            this.bonus_3 = 15;
        }
        else if (this.jauge_astrale >= 90 && this.jauge_astrale < 100) {
            this.bonus_3 = 20;
        }
        else if (this.jauge_astrale === 100) {
            this.bonus_3 = 25;
        }
        return this.bonus_3;
    };
    // Déduction de la découverte en fonction de tous les critères
    AppComponent.prototype.decouverte = function () {
        this.random_number += this.astral();
        console.log(this.random_number);
        switch (this.explo_niveau) {
            case 0: {
                if (this.random_number <= 70) {
                    this.resultat = 'Découverte d\'un PNJ';
                }
                else if (this.random_number > 70 && this.random_number <= 90) {
                    this.resultat = 'Découverte d\'un secret/batiment';
                }
                else {
                    this.resultat = 'Découverte de nouvelle terre';
                }
                break;
            }
            case 1: {
                if (this.random_number <= 50) {
                    this.resultat = 'Découverte d\'un PNJ';
                }
                else if (this.random_number > 50 && this.random_number <= 80) {
                    this.resultat = 'Découverte d\'un secret/batiment';
                }
                else {
                    this.resultat = 'Découverte de nouvelle terre';
                }
                break;
            }
            case 2: {
                if (this.random_number <= 40) {
                    this.resultat = 'Découverte d\'un PNJ';
                }
                else if (this.random_number > 40 && this.random_number <= 70) {
                    this.resultat = 'Découverte d\'un secret/batiment';
                }
                else {
                    this.resultat = 'Découverte de nouvelle terre';
                }
                break;
            }
            case 3: {
                if (this.random_number <= 30) {
                    this.resultat = 'Découverte d\'un PNJ';
                }
                else if (this.random_number > 30 && this.random_number <= 70) {
                    this.resultat = 'Découverte d\'un secret/batiment';
                }
                else {
                    this.resultat = 'Découverte de nouvelle terre';
                }
                break;
            }
            case 4: {
                if (this.random_number <= 20) {
                    this.resultat = 'Découverte d\'un PNJ';
                }
                else if (this.random_number > 20 && this.random_number <= 60) {
                    this.resultat = 'Découverte d\'un secret/batiment';
                }
                else {
                    this.resultat = 'Découverte de nouvelle terre';
                }
                break;
            }
            case 5: {
                if (this.random_number <= 20) {
                    this.resultat = 'Découverte d\'un PNJ';
                }
                else if (this.random_number > 20 && this.random_number <= 40) {
                    this.resultat = 'Découverte d\'un secret/batiment';
                }
                else {
                    this.resultat = 'Découverte de nouvelle terre';
                }
                break;
            }
            case 6: {
                if (this.random_number <= 15) {
                    this.resultat = 'Découverte d\'un PNJ';
                }
                else if (this.random_number > 15 && this.random_number <= 30) {
                    this.resultat = 'Découverte d\'un secret/batiment';
                }
                else {
                    this.resultat = 'Découverte de nouvelle terre';
                }
                break;
            }
        }
        if (this.random_number > 100) {
            this.random_number = 100;
        }
        else if (this.random_number < 0) {
            this.random_number = 0;
        }
    };
    AppComponent.prototype.decouverte_objet = function () {
        this.random_number_objet += this.astral_obj();
        switch (this.explo_niveau) {
            case 0: {
                if (this.random_number_objet <= 15) {
                    this.resultat_objet = 'Trouve un objet pointu et s\'écorche le coussinet, rien de bien grave';
                }
                else if (this.random_number_objet > 15 && this.random_number_objet <= 30) {
                    this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 5 unités de nourriture, indigestion si consommé';
                }
                else if (this.random_number_objet > 30 && this.random_number_objet <= 45) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 1 et 2 unités de nourriture';
                }
                else if (this.random_number_objet > 45 && this.random_number_objet <= 65) {
                    this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
                }
                else if (this.random_number_objet > 65 && this.random_number_objet <= 75) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
                }
                else if (this.random_number_objet > 75 && this.random_number_objet <= 95) {
                    this.resultat_objet = 'Trouve un objet ayant une utilité';
                }
                else {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
                }
                break;
            }
            case 1: {
                if (this.random_number_objet <= 5) {
                    this.resultat_objet = 'Trouve un objet pointu et s\'écorche le coussinet, rien de bien grave';
                }
                else if (this.random_number_objet > 5 && this.random_number_objet <= 20) {
                    this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 5 unités de nourriture, indigestion si consommé';
                }
                else if (this.random_number_objet > 20 && this.random_number_objet <= 30) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 1 et 2 unités de nourriture';
                }
                else if (this.random_number_objet > 30 && this.random_number_objet <= 50) {
                    this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
                }
                else if (this.random_number_objet > 50 && this.random_number_objet <= 75) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
                }
                else if (this.random_number_objet > 75 && this.random_number_objet <= 90) {
                    this.resultat_objet = 'Trouve un objet ayant une utilité';
                }
                else {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
                }
                break;
            }
            case 2: {
                if (this.random_number_objet <= 15) {
                    this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 5 unités de nourriture, indigestion si consommé';
                }
                else if (this.random_number_objet > 15 && this.random_number_objet <= 35) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 1 et 2 unités de nourriture';
                }
                else if (this.random_number_objet > 35 && this.random_number_objet <= 50) {
                    this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
                }
                else if (this.random_number_objet > 50 && this.random_number_objet <= 70) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
                }
                else if (this.random_number_objet > 70 && this.random_number_objet <= 90) {
                    this.resultat_objet = 'Trouve un objet ayant une utilité';
                }
                else {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
                }
                break;
            }
            case 3: {
                if (this.random_number_objet <= 5) {
                    this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 5 unités de nourriture, indigestion si consommé';
                }
                else if (this.random_number_objet > 5 && this.random_number_objet <= 25) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 1 et 2 unités de nourriture';
                }
                else if (this.random_number_objet > 25 && this.random_number_objet <= 45) {
                    this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
                }
                else if (this.random_number_objet > 45 && this.random_number_objet <= 65) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
                }
                else if (this.random_number_objet > 65 && this.random_number_objet <= 87) {
                    this.resultat_objet = 'Trouve un objet ayant une utilité';
                }
                else {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
                }
                break;
            }
            case 4: {
                if (this.random_number_objet <= 20) {
                    this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 2 unités de nourriture';
                }
                else if (this.random_number_objet > 20 && this.random_number_objet <= 45) {
                    this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
                }
                else if (this.random_number_objet > 45 && this.random_number_objet <= 65) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
                }
                else if (this.random_number_objet > 65 && this.random_number_objet <= 90) {
                    this.resultat_objet = 'Trouve un objet ayant une utilité';
                }
                else {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
                }
                break;
            }
            case 5: {
                if (this.random_number_objet <= 15) {
                    this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 2 unités de nourriture';
                }
                else if (this.random_number_objet > 15 && this.random_number_objet <= 45) {
                    this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
                }
                else if (this.random_number_objet > 45 && this.random_number_objet <= 65) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
                }
                else if (this.random_number_objet > 65 && this.random_number_objet <= 90) {
                    this.resultat_objet = 'Trouve un objet ayant une utilité';
                }
                else {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
                }
                break;
            }
            case 6: {
                if (this.random_number_objet <= 5) {
                    this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 2 unités de nourriture';
                }
                else if (this.random_number_objet > 5 && this.random_number_objet <= 40) {
                    this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
                }
                else if (this.random_number_objet > 40 && this.random_number_objet <= 60) {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
                }
                else if (this.random_number_objet > 60 && this.random_number_objet <= 85) {
                    this.resultat_objet = 'Trouve un objet ayant une utilité';
                }
                else {
                    this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
                }
                break;
            }
        }
        if (this.random_number_objet > 100) {
            this.random_number_objet = 100;
        }
        else if (this.random_number_objet < 0) {
            this.random_number_objet = 0;
        }
    };
    AppComponent.prototype.collectionneur = function () {
        this.random_number_collectionneur += this.astral_collectionneur();
        switch (this.perso_niveau) {
            case 6: {
                if (this.random_number_collectionneur <= 80) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 80 && this.random_number_collectionneur <= 90) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 7: {
                if (this.random_number_collectionneur <= 80) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 80 && this.random_number_collectionneur <= 90) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 8: {
                if (this.random_number_collectionneur <= 80) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 80 && this.random_number_collectionneur <= 90) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 9: {
                if (this.random_number_collectionneur <= 80) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 80 && this.random_number_collectionneur <= 90) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 10: {
                if (this.random_number_collectionneur <= 60) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 60 && this.random_number_collectionneur <= 85) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 11: {
                if (this.random_number_collectionneur <= 60) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 60 && this.random_number_collectionneur <= 85) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 12: {
                if (this.random_number_collectionneur <= 60) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 60 && this.random_number_collectionneur <= 85) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 13: {
                if (this.random_number_collectionneur <= 60) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 60 && this.random_number_collectionneur <= 85) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 14: {
                if (this.random_number_collectionneur <= 50) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 50 && this.random_number_collectionneur <= 80) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
            case 15: {
                if (this.random_number_collectionneur <= 50) {
                    this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
                }
                else if (this.random_number_collectionneur > 50 && this.random_number_collectionneur <= 80) {
                    this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
                }
                else {
                    this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
                }
                break;
            }
        }
        if (this.random_number_collectionneur > 100) {
            this.random_number_collectionneur = 100;
        }
        else if (this.random_number_collectionneur < 0) {
            this.random_number_collectionneur = 0;
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        this.random();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Angular Material










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\swoon\Documents\Developpement\Endroth\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map