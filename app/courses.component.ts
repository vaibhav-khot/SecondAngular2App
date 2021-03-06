import { Component } from '@angular/core';
import { CourseService } from './course.service';

@Component({
selector : 'courses' ,
template :`<h1>{{title}}</h1>
<ul>
<li *ngFor="let course of courses">{{course}}</li>
</ul>
`

})

export class CoursesComponent{
  title = "List Of Courses"
  courses:any;
  constructor(courseService : CourseService){
  this.courses=courseService.getCourses();
}

}
