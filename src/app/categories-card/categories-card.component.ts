import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.scss']
})
export class CategoriesCardComponent implements OnInit {

  constructor() { }
  @Input() data: any;

  ngOnInit(): void {
  }

}
