import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public documentType: string = "";
  public documentNumber:string = "";
  public findCourseName: string = "";
  public courses: any = [];
  public myCourses: any = [];
  public summaryPrice: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getCourses();
  }

  mySales() {
    this.router.navigate(['/sales', {}]);
  }

  continueRegistration() {
    console.log('TO-DO: CONTINUE REGISTRATION');
  }

  findByCourseName() {
    this.getCourses();
    this.courses = this.courses.filter(x => x.name.toUpperCase().indexOf(this.findCourseName.toUpperCase()) > -1);
    console.log('TO-DO: FIND BY COURSE NAME');
  }

  getCourses() {
    this.courses = [{
      id: '1',
      code: 'Código',
      name: 'Curso',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      id: '2',
      code: 'Código',
      name: 'Curso',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      id: '3',
      code: 'Código',
      name: 'Curso',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      id: '4',
      code: 'Código',
      name: 'Curso',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      id: '5',
      code: 'Código',
      name: 'Curso',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    },
    {
      id: '6',
      code: 'Código',
      name: 'Curso',
      startDate: '01/01/21',
      endDate: '01/01/21',
      price: 250
    }]
  }

  removeMyCourse(id: any) {
    for (var i = 0; i < this.myCourses.length; i++) {
      if (this.myCourses[i].id == id) {
        this.summaryPrice = this.summaryPrice - this.myCourses[i].price;
        this.myCourses.splice(i, 1);
        break;
      }
    }
  }

  enrollCourse() {
    console.log('TO-DO ENROLL COURSE: ')
  }

  pushToList(id: any) {
    const course = this.courses.filter(x => x.id == id)[0];
    this.myCourses.push(course);
    this.summaryPrice = this.summaryPrice + course.price;
  }

  goToDetail(id: any) {

  }

}
