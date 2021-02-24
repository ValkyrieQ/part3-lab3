import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('productList', { static: true }) productList: ProductListComponent;

  title = 'part2-lab2';

  ngOnInit() {
    // ===== แบบนี้จะใช้ไม่ได้ เพราะ viewchild ยังสร้างไม่เสร็จ ทำให้ productList เป็น undefined ต้องใช้ AfterViewInit =====
    // === หรือ แก้ด้วยการใส่ @ViewChild('productList', { statuc: true }) คือบังคับให้มัน query หรือ render และ assign ค่าให้เสร็จ ก่อนจะไป AfterViewInit แล้ว detect change ซึ่ง ณ จุดนั้น oldValue กับ newValue ต้องเหมือนกัน ===
    this.productList.products = [
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
