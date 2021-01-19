import { Component, OnInit } from '@angular/core';
import { getMaxListeners } from 'process';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.css']
})
export class StructuralDirectivesComponent implements OnInit {
  employees = [
    'Prajwal Gowda N B',
    'Shivakumar K S',
    'akash',
    'deepika',
    'bhavesh'
  ];
  emp = [
    {
      name: 'prajwal',
      mobile: 9482801714,
      email: 'praj@gmail.com'
    },
    {
      name: 'prajwal',
      mobile: 9482801714,
      email: 'praj@gmail.com'
    },
    {
      name: 'prajwal',
      mobile: 9482801714,
      email: 'praj@gmail.com'
    },
    {
      name: 'prajwal',
      mobile: 9482801714,
      email: 'praj@gmail.com'
    },
    {
      name: 'prajwal',
      mobile: 9482801714,
      email: 'praj@gmail.com'
    }];
    message : string;
    trainerName = 'Prajwal';
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(i: number): void {
    this.employees.splice(i, 1);
    this.message = 'student deleted successfully';
    setTimeout(()=>{
      this.message = null;
    }, 2000);
  }
  onRemove(i: number): void {
    this.emp.splice(i, 1);
    this.message = 'student deleted successfully';
    setTimeout(()=>{
      this.message = null;
    }, 2000);
  }
}
