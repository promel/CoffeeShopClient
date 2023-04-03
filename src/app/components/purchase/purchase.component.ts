import { Component } from '@angular/core';
import { Purchase } from 'src/app/models/purchase';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  title = 'Coffee Shop';
  purchases?: Purchase[]; 
  points?: number;

  constructor(private purchaseService: PurchaseService) { }
  
  ngOnInit(): void {
    this.purchaseService.get()
    .subscribe((result: Purchase[]) => {
      this.purchases = result;
      this.points =  Math.trunc(this.purchases?.length/10);
    });
  }
}
