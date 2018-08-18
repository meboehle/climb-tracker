import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-shop-items';
import { ShopService } from '../shop.service';


@Component({
  selector: 'app-shop-items',
  templateUrl: './shop-items.component.html',
  styleUrls: ['./shop-items.component.scss']
})
export class ShopItemsComponent implements OnInit {

  shopItems = ITEMS;

  constructor(public shopService: ShopService) { }

  ngOnInit() {
  }

}
