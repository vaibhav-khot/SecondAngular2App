import { Component } from "@angular/core";
import { AuthorService} from "./author.service";

@Component({
  selector : "authors",
  template : `
              <h1>Authors</h1>
              <ul>
              <li *ngFor="let author of authors">
              {{author}}
              </li>
              </ul>

              `,
  providers : [ AuthorService] 
})

export class AuthorsComponent {
authors : any;
constructor(authorService : AuthorService){
this.authors = authorService.getAuthors();

}

}
