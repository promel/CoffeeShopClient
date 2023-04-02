import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-edit-purchase',
  templateUrl: './edit-purchase.component.html',
  styleUrls: ['./edit-purchase.component.css']
})

export class EditPurchaseComponent {
  @Input() purchase?: Purchase;
  @Output() purchases = new EventEmitter<Purchase[]>();

  constructor(private purchaseService: PurchaseService) { }

  save(purchase: Purchase) {
    this.purchaseService.add(purchase).subscribe((result: any) => console.log(result));
    console.log('called')
  }

  update(purchase: Purchase) {
    this.purchaseService.update(purchase).subscribe((result: any) => console.log(result));
    console.log('called')
  }

  delete(purchase: Purchase) {
    this.purchaseService.delete(purchase).subscribe((result: any) => console.log(result));
    console.log('called')
  }
}