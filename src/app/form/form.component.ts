import { Component, OnInit } from '@angular/core';
// interface to store the products
interface Product{
  name : string;
  price : number;
  quant : number;
  picUrl : string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  products:Product[] =[];
  constructor() { }

  ngOnInit(): void {
  }
  // function to store the products
  onAdd(proName,proPrice,proQuant,proPic){
    let pro:Product = {
      name : proName.value,
      price : proPrice.value,
      quant : proQuant.value,
      picUrl : proPic.value
    }
    // console.log(pro);
    this.products.push(pro);
    console.log(this.products);
  }
}
