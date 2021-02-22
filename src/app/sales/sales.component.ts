import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  public mySales: any = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getMySales();
  }

  registerSale() {
    this.router.navigate(['/dashboard', {}]);
  }

  getMySales() {
    this.mySales = [{
      code: 1,
      documentNumber: '77777777',
      firstName: 'Iván',
      lastName: 'Rodríguez',
      phoneNumber: '950 302 674',
      certified: 'Diploma',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      code: 1,
      documentNumber: '77777777',
      firstName: 'Iván',
      lastName: 'Rodríguez',
      phoneNumber: '950 302 674',
      certified: 'Diploma',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      code: 1,
      documentNumber: '77777777',
      firstName: 'Iván',
      lastName: 'Rodríguez',
      phoneNumber: '950 302 674',
      certified: 'Diploma',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      code: 1,
      documentNumber: '77777777',
      firstName: 'Iván',
      lastName: 'Rodríguez',
      phoneNumber: '950 302 674',
      certified: 'Diploma',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      code: 1,
      documentNumber: '77777777',
      firstName: 'Iván',
      lastName: 'Rodríguez',
      phoneNumber: '950 302 674',
      certified: 'Diploma',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      code: 1,
      documentNumber: '77777777',
      firstName: 'Iván',
      lastName: 'Rodríguez',
      phoneNumber: '950 302 674',
      certified: 'Diploma',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    }]
  }

}
