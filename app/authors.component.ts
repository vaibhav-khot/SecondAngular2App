import { Component } from "@angular/core";
import { AuthorService} from "./author.service";

@Component({
  selector : "authors",
  template : `
              <h1>{{title}}</h1>
              <ul>
                <li *ngFor="let author of authors">
                {{author}}
                </li>
              </ul>

              `,
  providers : [ AuthorService]
})

export class AuthorsComponent {
  title = "List Of Authors"
  authors : any;
  constructor(authorService : AuthorService){
  this.authors = authorService.getAuthors();

}

}
