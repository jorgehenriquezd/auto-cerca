import { Component, OnInit } from '@angular/core';
import { VehicleTypes } from 'src/app/services/dummy';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  searchType: string = '';
  vehicleTypes = VehicleTypes;
  constructor() { }

  ngOnInit(): void {
  }

  getSearchType(type:string){
    this.searchType = type;
  }

}
