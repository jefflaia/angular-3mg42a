import { Injectable } from '@angular/core';
import { Observable,Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  items = [];
private _course = new Subject<any>();
    course$ = this._course.asObservable();

  constructor(  ) {

   }

  getOne() {
    this._course.next( {"courseName": "courseName", "courseDesc":"courseDesc", "courseAmount":10});
    
  }

  
}