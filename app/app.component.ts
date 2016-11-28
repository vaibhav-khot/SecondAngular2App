import { Component ,Directive } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { CourseService } from './course.service';



@Component({
  selector: 'my-app',
  template: `<h1>My 2nd {{name}} app</h1>
            <courses></courses>

            <authors></authors>
            `,
  providers :[CourseService]

})


export class AppComponent  {
name = 'Angular'; }
