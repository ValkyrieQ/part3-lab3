import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  constructor() {}

  getProducts() {
    return [
      {
        name: 'ส้มโอ',
        price: 90,
      },
      {
        name: 'แตงโม',
        price: 1000,
      },
      {
        name: 'มะพร้าวน้ำหอม',
        price: 500,
      },
    ];
  }
}
