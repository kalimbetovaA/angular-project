import { Component, OnInit } from '@angular/core';
import {Category} from "../category";
import {SalonService} from "../angularServices/salon.service";
import {CategoryService} from "../angularServices/category.service";
import {Observable, of} from "rxjs";
import {Salon} from "../salon";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataArr!: Category[];

  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategoriesData()
      .subscribe(data => {
        this.dataArr = data; });
  }

  ngOnInit(): void {
  }

}
