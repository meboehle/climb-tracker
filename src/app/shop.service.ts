import { Injectable } from '@angular/core';
import { ShopItem } from './shop-item';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  items: ShopItem[] = [];
  checkout = 0;

  constructor() { }

  getItems(): ShopItem[] {
    return this.items;
  }

  getCheckout(): number {
    return this.checkout;
  }

  incQuantity(item: ShopItem): void {
    if (item.quantity === 0) {
      this.items.push(item);
    }
    item.quantity++;
    this.checkout = this.checkout + item.price;
  }

  decQuantity(item: ShopItem): void {
    if (item.quantity === 1) {
      this.items = this.items.filter(i => i !== item);
    }
    if (item.quantity > 0) {
      item.quantity--;
      this.checkout = this.checkout - item.price;
    }
  }

}
