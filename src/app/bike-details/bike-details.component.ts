import { Component, Input, OnInit } from '@angular/core';
import { Bike } from '../bikes/bike.model';

@Component({
  selector: 'app-bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.css']
})
export class BikeDetailsComponent implements OnInit {

  @Input() bikesDetails:Bike;
  constructor() { }

  ngOnInit(): void {
  }

}
