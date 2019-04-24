import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { DataService } from '../data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('items', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-55%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(25px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('200ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(25px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-55%)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  btnText: string = 'Agregar un item';
  itemText: string;
  items = [];
  constructor(private _data: DataService) { }

  ngOnInit() {
    this._data.book.subscribe(res => this.items = res);
    this._data.cambiarLibro(this.items);
    
  }

  addItem(){
    this.items.push(this.itemText);
    console.log(this.itemText);
    this.itemText = '';
    this._data.cambiarLibro(this.items);
  }

  removerItem(i){
    this.items.splice(i, 1);
    this._data.cambiarLibro(this.items);
  }

 /* upJson(){
    
  }*/
}
