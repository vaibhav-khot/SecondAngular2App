import { Component ,Directive } from '@angular/core';
import { CoursesComponent } from './courses.component';
import { AuthorsComponent } from './authors.component';
import { CourseService } from './course.service';



@Component({
  selector: 'my-app',
  template: `<h1>My 2nd {{name}} app</h1>
            <courses></courses>

            <authors></authors>
            <button (click)="mouseClick($event)">I clicked it {{times}} times </button>
            <div *ngIf="times== 2"> You Have clicked 2 times Stop!</div>
            `,
  providers :[CourseService]

})


export class AppComponent  {
name = 'Angular';
times : number = 0;
  mouseClick(event : any){
    this.times++;
    console.log(event);
    console.log(event.target);
    }

}
//(click)
//(dblclick)
//(mousemove)
