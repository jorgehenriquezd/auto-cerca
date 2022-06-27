import { Component, OnInit } from '@angular/core';
import { TrendingCategories } from 'src/app/services/dummy';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

   categories = TrendingCategories;

  constructor() { }

  ngOnInit(): void {
  }

}
