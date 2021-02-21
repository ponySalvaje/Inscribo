import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    this.getCourses();
    this.getMyCourses();
  }

  continueRegistration() {
    console.log('TO-DO: CONTINUE REGISTRATION');
  }

  findByCourseName() {
    console.log('TO-DO: FIND BY COURSE NAME');
  }

  getCourses() {
    this.courses = [{
      code: 'Código',
      name: 'Curso',
      startDate: 'Fecha Inicio',
      endDate: 'Fecha Fin'
    },
    {
      code: 'Código',
      name: 'Curso',
      startDate: 'Fecha Inicio',
      endDate: 'Fecha Fin'
    },
    {
      code: 'Código',
      name: 'Curso',
      startDate: 'Fecha Inicio',
      endDate: 'Fecha Fin'
    },
    {
      code: 'Código',
      name: 'Curso',
      startDate: 'Fecha Inicio',
      endDate: 'Fecha Fin'
    },
    {
      code: 'Código',
      name: 'Curso',
      startDate: 'Fecha Inicio',
      endDate: 'Fecha Fin'
    },
    {
      code: 'Código',
      name: 'Curso',
      startDate: 'Fecha Inicio',
      endDate: 'Fecha Fin'
    }]
  }

  getMyCourses() {
    this.myCourses = [{
      id: '1',
      name: 'Curso 1',
      startDate: 'Fecha Inicio',
      endDate: 'Fecha Fin',
      price: 250
    },
    {
      id: '2',
      name: 'Curso 1',
      startDate: 'Fecha Inicio',
      endDate: 'Fecha Fin',
      price: 250
    }]
  }

  removeMyCourse(id: any) {
    console.log('TO-DO REMOVE MY COURSE: ', id)
  }

  enrollCourse() {
    console.log('TO-DO ENROLL COURSE: ')
  }

}
