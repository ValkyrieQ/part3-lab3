import { Component, ViewChild, OnInit } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { BackendService } from './backend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('productList', { static: true }) productList: ProductListComponent;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    // ===== แบบนี้จะใช้ไม่ได้ เพราะ viewchild ยังสร้างไม่เสร็จ ทำให้ productList เป็น undefined ต้องใช้ AfterViewInit =====
    // === หรือ แก้ด้วยการใส่ @ViewChild('productList', { statuc: true }) คือบังคับให้มัน query หรือ render และ assign ค่าให้เสร็จ ก่อนจะไป AfterViewInit แล้ว detect change ซึ่ง ณ จุดนั้น oldValue กับ newValue ต้องเหมือนกัน ===
    this.productList.products = this.backendService.getProducts();
  }
}
