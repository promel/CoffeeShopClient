import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Coffee } from 'src/app/models/coffee';
import { Purchase } from 'src/app/models/purchase';
import { CoffeeService } from 'src/app/services/coffee.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})

export class CoffeeComponent {
  coffees?: Coffee[];
  constructor(private coffeeService: CoffeeService,
    private purchaseService: PurchaseService,
    private router: Router) { }

  ngOnInit(): void {
    this.coffeeService.get()
      .subscribe((result: Coffee[]) => (this.coffees = result));
  }

  save(coffee: Coffee) {
    let purchase = new Purchase();
    purchase.date = new Date();
    purchase.description = coffee.name;
    purchase.price = coffee.price;
    purchase.userId = 1;

    this.purchaseService.add(purchase).subscribe((result: any) => {
      this.router.navigate(['/purchase']);
    });
  }
}