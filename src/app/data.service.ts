import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private items = new BehaviorSubject<any>(['Primer item', 'Otro item']);
  item = this.items.asObservable();

  constructor() { }

  cambiarItem(item){

    this.items.next(item);
  }
}


