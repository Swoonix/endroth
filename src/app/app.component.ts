import { Component, OnInit } from '@angular/core';

export interface Explo {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  resultat: string;
  resultat_objet: string;
  resultat_collectionneur: string;
  random_number: number;
  random_number_objet: number;
  random_number_collectionneur: number;
  jauge_astrale = 50;
  explo_niveau: number;
  perso_niveau: number;

  bonus: number;
  explos: Explo[] = [
    { value: 0, viewValue: '0' },
    { value: 1, viewValue: '1' },
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
    { value: 6, viewValue: '6' }
  ];



  random() {
    this.random_number = Math.floor(Math.random() * (101 - 0) + 0);
    this.random_number_objet = Math.floor(Math.random() * (101 - 0) + 0);
    this.random_number_collectionneur = Math.floor(Math.random() * (101 - 0) + 0);
  }

  astral() {
    // Appliquer bonus/malus au dé
    // this.random_number += this.jauge_astrale;
    if (this.jauge_astrale === 0) {
      this.bonus = -25;
    } else if (this.jauge_astrale > 0 && this.jauge_astrale <= 10) {
      this.bonus = -20;
    } else if (this.jauge_astrale > 10 && this.jauge_astrale <= 20) {
      this.bonus = -15;
    } else if (this.jauge_astrale > 20 && this.jauge_astrale <= 30) {
      this.bonus = -10;
    } else if (this.jauge_astrale > 30 && this.jauge_astrale <= 40) {
      this.bonus = -5;
    } else if (this.jauge_astrale > 40 && this.jauge_astrale < 60) {
      this.bonus = 0;

    } else if (this.jauge_astrale >= 60 && this.jauge_astrale < 70) {
      this.bonus = 5;
    } else if (this.jauge_astrale >= 70 && this.jauge_astrale < 80) {
      this.bonus = 10;
    } else if (this.jauge_astrale >= 80 && this.jauge_astrale < 90) {
      this.bonus = 15;
    } else if (this.jauge_astrale >= 90 && this.jauge_astrale < 100) {
      this.bonus = 20;
    } else if (this.jauge_astrale === 100) {
      this.bonus = 25;
    }
    return this.bonus;
  }

  // Déduction de la découverte en fonction de tous les critères
  decouverte() {
    this.random_number += this.astral();
    console.log(this.random_number);
    switch (this.explo_niveau) {
      case 0: {
        if (this.random_number <= 70) {
          this.resultat = 'Découverte d\'un PNJ';
        } else if (this.random_number > 70 && this.random_number <= 90) {
          this.resultat = 'Découverte d\'un secret/batiment';
        } else {
          this.resultat = 'Découverte de nouvelle terre';
        }
        break;
      }
      case 1: {
        if (this.random_number <= 50) {
          this.resultat = 'Découverte d\'un PNJ';
        } else if (this.random_number > 50 && this.random_number <= 80) {
          this.resultat = 'Découverte d\'un secret/batiment';
        } else {
          this.resultat = 'Découverte de nouvelle terre';
        }
        break;
      }
      case 2: {
        if (this.random_number <= 40) {
          this.resultat = 'Découverte d\'un PNJ';
        } else if (this.random_number > 40 && this.random_number <= 70) {
          this.resultat = 'Découverte d\'un secret/batiment';
        } else {
          this.resultat = 'Découverte de nouvelle terre';
        }
        break;
      }
      case 3: {
        if (this.random_number <= 30) {
          this.resultat = 'Découverte d\'un PNJ';
        } else if (this.random_number > 30 && this.random_number <= 70) {
          this.resultat = 'Découverte d\'un secret/batiment';
        } else {
          this.resultat = 'Découverte de nouvelle terre';
        }
        break;
      }
      case 4: {
        if (this.random_number <= 20) {
          this.resultat = 'Découverte d\'un PNJ';
        } else if (this.random_number > 20 && this.random_number <= 60) {
          this.resultat = 'Découverte d\'un secret/batiment';
        } else {
          this.resultat = 'Découverte de nouvelle terre';
        }
        break;
      }
      case 5: {
        if (this.random_number <= 20) {
          this.resultat = 'Découverte d\'un PNJ';
        } else if (this.random_number > 20 && this.random_number <= 40) {
          this.resultat = 'Découverte d\'un secret/batiment';
        } else {
          this.resultat = 'Découverte de nouvelle terre';
        }
        break;
      }
      case 6: {
        if (this.random_number <= 15) {
          this.resultat = 'Découverte d\'un PNJ';
        } else if (this.random_number > 15 && this.random_number <= 30) {
          this.resultat = 'Découverte d\'un secret/batiment';
        } else {
          this.resultat = 'Découverte de nouvelle terre';
        }
        break;
      }

    }
    if (this.random_number > 100) {
      this.random_number = 100;
    } else if (this.random_number < 0) {
      this.random_number = 0;
    }
  }

  decouverte_objet() {
    switch (this.explo_niveau) {
      case 0: {
        if (this.random_number_objet <= 15) {
          this.resultat_objet = 'Trouve un objet pointu et s\'écorche le coussinet, rien de bien grave';
        } else if (this.random_number_objet > 15 && this.random_number_objet <= 30) {
          this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 5 unités de nourriture, indigestion si consommé';
        } else if (this.random_number_objet > 30 && this.random_number_objet <= 45) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 1 et 2 unités de nourriture';
        } else if (this.random_number_objet > 45 && this.random_number_objet <= 65) {
          this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
        } else if (this.random_number_objet > 65 && this.random_number_objet <= 75) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
        } else if (this.random_number_objet > 75 && this.random_number_objet <= 95) {
          this.resultat_objet = 'Trouve un objet ayant une utilité';
        } else {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
        }
        break;
      }
      case 1: {
        if (this.random_number_objet <= 5) {
          this.resultat_objet = 'Trouve un objet pointu et s\'écorche le coussinet, rien de bien grave';
        } else if (this.random_number_objet > 5 && this.random_number_objet <= 20) {
          this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 5 unités de nourriture, indigestion si consommé';
        } else if (this.random_number_objet > 20 && this.random_number_objet <= 30) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 1 et 2 unités de nourriture';
        } else if (this.random_number_objet > 30 && this.random_number_objet <= 50) {
          this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
        } else if (this.random_number_objet > 50 && this.random_number_objet <= 75) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
        } else if (this.random_number_objet > 75 && this.random_number_objet <= 90) {
          this.resultat_objet = 'Trouve un objet ayant une utilité';
        } else {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
        }
        break;
      }
      case 2: {
        if (this.random_number_objet <= 15) {
          this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 5 unités de nourriture, indigestion si consommé';
        } else if (this.random_number_objet > 15 && this.random_number_objet <= 35) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 1 et 2 unités de nourriture';
        } else if (this.random_number_objet > 35 && this.random_number_objet <= 50) {
          this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
        } else if (this.random_number_objet > 50 && this.random_number_objet <= 70) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
        } else if (this.random_number_objet > 70 && this.random_number_objet <= 90) {
          this.resultat_objet = 'Trouve un objet ayant une utilité';
        } else {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
        }
        break;
      }
      case 3: {
        if (this.random_number_objet <= 5) {
          this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 5 unités de nourriture, indigestion si consommé';
        } else if (this.random_number_objet > 5 && this.random_number_objet <= 25) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 1 et 2 unités de nourriture';
        } else if (this.random_number_objet > 25 && this.random_number_objet <= 45) {
          this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
        } else if (this.random_number_objet > 45 && this.random_number_objet <= 65) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
        } else if (this.random_number_objet > 65 && this.random_number_objet <= 87) {
          this.resultat_objet = 'Trouve un objet ayant une utilité';
        } else {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
        }
        break;
      }
      case 4: {
        if (this.random_number_objet <= 20) {
          this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 2 unités de nourriture, indigestion si consommé';
        } else if (this.random_number_objet > 20 && this.random_number_objet <= 45) {
          this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
        } else if (this.random_number_objet > 45 && this.random_number_objet <= 65) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
        } else if (this.random_number_objet > 65 && this.random_number_objet <= 90) {
          this.resultat_objet = 'Trouve un objet ayant une utilité';
        } else {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
        }
        break;
      }
      case 5: {
        if (this.random_number_objet <= 15) {
          this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 2 unités de nourriture, indigestion si consommé';
        } else if (this.random_number_objet > 15 && this.random_number_objet <= 45) {
          this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
        } else if (this.random_number_objet > 45 && this.random_number_objet <= 65) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
        } else if (this.random_number_objet > 65 && this.random_number_objet <= 90) {
          this.resultat_objet = 'Trouve un objet ayant une utilité';
        } else {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
        }
        break;
      }

      case 6: {
        if (this.random_number_objet <= 5) {
          this.resultat_objet = 'Trouve un cadavre d\'animal, donne entre 1 et 2 unités de nourriture, indigestion si consommé';
        } else if (this.random_number_objet > 5 && this.random_number_objet <= 40) {
          this.resultat_objet = 'Trouve un objet servant de monnaie d\'échange';
        } else if (this.random_number_objet > 40 && this.random_number_objet <= 60) {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 2 et 3 unités de nourriture';
        } else if (this.random_number_objet > 60 && this.random_number_objet <= 85) {
          this.resultat_objet = 'Trouve un objet ayant une utilité';
        } else {
          this.resultat_objet = 'Trouve une proie morte et encore fraîche / aliment humain comestible donnant entre 3 et 4 unités de nourriture';
        }
        break;
      }

    }
    if (this.random_number_objet > 100) {
      this.random_number_objet = 100;
    } else if (this.random_number_objet < 0) {
      this.random_number_objet = 0;
    }
  }


  collectionneur() {
    switch (this.perso_niveau) {
      case 6: {
        if (this.random_number_collectionneur <= 80) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 80 && this.random_number_collectionneur <= 90) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }
      case 7: {
        if (this.random_number_collectionneur <= 80) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 80 && this.random_number_collectionneur <= 90) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }
      case 8: {
        if (this.random_number_collectionneur <= 80) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 80 && this.random_number_collectionneur <= 90) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }
      case 9: {
        if (this.random_number_collectionneur <= 80) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 80 && this.random_number_collectionneur <= 90) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }

      case 10: {
        if (this.random_number_collectionneur <= 60) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 60 && this.random_number_collectionneur <= 85) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }
      case 11: {
        if (this.random_number_collectionneur <= 60) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 60 && this.random_number_collectionneur <= 85) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }
      case 12: {
        if (this.random_number_collectionneur <= 60) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 60 && this.random_number_collectionneur <= 85) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }
      case 13: {
        if (this.random_number_collectionneur <= 60) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 60 && this.random_number_collectionneur <= 85) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }

      case 14: {
        if (this.random_number_collectionneur <= 50) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 50 && this.random_number_collectionneur <= 80) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }
      case 15: {
        if (this.random_number_collectionneur <= 50) {
          this.resultat_collectionneur = 'Trouve un objet rare servant de monnaie d\'échange';
        } else if (this.random_number_collectionneur > 50 && this.random_number_collectionneur <= 80) {
          this.resultat_collectionneur = 'Trouve un objet rare ayant une utilité';
        } else {
          this.resultat_collectionneur = 'Découverte d\'un PNJ rare';
        }
        break;
      }
    }
    if (this.random_number_collectionneur > 100) {
      this.random_number_collectionneur = 100;
    } else if (this.random_number_collectionneur < 0) {
      this.random_number_collectionneur = 0;
    }
  }



  ngOnInit() {
    this.random();
  }

}
