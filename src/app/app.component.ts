import { Component } from '@angular/core';
import { Purchase } from './models/purchase';
import { PurchaseService } from './services/purchase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  purchaseToEdit: Purchase|undefined;
  title = 'Coffee Shop';
  purchases: Purchase[] = []; 
  
  constructor(private purchaseService: PurchaseService) { }
  
  ngOnInit(): void {
    this.purchaseService.get()
    .subscribe((result: Purchase[]) => (this.purchases = result));
  }
  
  updatedPurchaseList(purchases : Purchase[]) {
    this.purchases = purchases;
  }
  
  editPurchase(purchase: Purchase) {
    this.purchaseToEdit = purchase 
  }
  initAddPurchase() {
    this.purchaseToEdit = new Purchase();
  }
}
