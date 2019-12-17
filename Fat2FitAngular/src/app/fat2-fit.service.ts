import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Fat2FitService {
  lists = new BehaviorSubject([
    {
      name : "Assyraf",
      age : 23
    },
    {
      name : "Adam",
      age : 24
    },
    {
      name : "Firdaus",
      age : 25
    }
  ])
  constructor() { }
}
