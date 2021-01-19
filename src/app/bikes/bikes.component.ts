import { Component, OnInit } from '@angular/core';
import { Bike } from './bike.model';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  bikes: Bike[] = [
    {
      brand: 'TVS',
      model: 'Apache 360',
      price: 300000,
      imageUrl: ''
    },
    {
      brand: 'Pulsar',
      model: 'NS 200',
      price: 170000,
      imageUrl:''
    },
    {
      brand:'Royal Enfield',
      model:'Interceptor 650',
      price:330000,
      imageUrl:'https://cdn.pixabay.com/photo/2016/04/07/06/53/bmw-1313343__340.jpg'
    }
  ];
  selectedBike = this.bikes[0];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectingBike(bike){
    this.selectedBike = bike;
  }

}
