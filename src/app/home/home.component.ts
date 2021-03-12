import { Component, OnInit } from '@angular/core';
import {Category} from "../category";
import {SalonService} from "../angularServices/salon.service";
import {CategoryService} from "../angularServices/category.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataArr!: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.dataArr = this.categoryService.getCategoriesData();
  }

}
