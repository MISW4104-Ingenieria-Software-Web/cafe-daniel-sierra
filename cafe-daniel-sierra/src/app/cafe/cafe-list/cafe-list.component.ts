import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';
import { dataCafes } from './dataCafes';
import cafeJson from './cafes.json';

@Component({
  selector: 'app-cafe-list',
  templateUrl: './cafe-list.component.html',
  styleUrls: ['./cafe-list.component.css']
})
export class CafeListComponent implements OnInit {

  /*cafes: Array<Cafe> = [];

  constructor() { }

  getCafeList(): Array<Cafe> {
    return dataCafes;
  }

  ngOnInit() {
    this.cafes = this.getCafeList();
  }*/
    cafes: Array<Cafe> = [];

    constructor(private cafeService: CafeService) { }
   
    getCafes(): void {
      this.cafes = cafeJson;
      /*this.cafeService.getCafes().subscribe((cafes) => {
        this.cafes = cafes;
      });*/
    }
   
    ngOnInit() {
      this.getCafes();
    }

    countCafeOrigen() {
      return this.cafes.filter(cafe => cafe.tipo == "Café de Origen").length;
    }
    countCafeBlend() {
      return this.cafes.filter(cafe => cafe.tipo == "Blend").length;
    }

}
