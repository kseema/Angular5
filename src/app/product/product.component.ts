import { Component, OnInit } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import {Header} from 'primeng/primeng';
import {Footer} from 'primeng/primeng';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 checked=true;
 indeterminate=false;
 cars;

  constructor( private datasource:ProductDataService) { }

  ngOnInit() {
    this.cars=this.datasource.getData();
  }

}
