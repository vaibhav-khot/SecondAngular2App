import { Component ,Directive } from "@angular/core";
import { AuthorService} from "./author.service";
import { AutoGrowDirective } from './auto-grow.directive';


@Component({
  selector : "authors",
  template : `
              <h1>{{title}}</h1>
              <input type="text" autoGrow/>
              <div>
                <p *ngFor="let author of authors; let i = index">
                {{i}}.{{author}}
                </p>
              </div>

              `,
  providers : [ AuthorService ]
})

export class AuthorsComponent {
  title = "List Of Authors"
  authors : any;
  constructor(authorService : AuthorService){
  this.authors = authorService.getAuthors();

}

}
