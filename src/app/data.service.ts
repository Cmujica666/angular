import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as jsss from './books.json';


@Injectable()
export class DataService {

  private books = new BehaviorSubject<any>(jsss);
  book = this.books.asObservable();
  

  constructor() { }

  cambiarLibro(book){

    this.books.next(book);
    
  }
}



