import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent {
  title = "List of authors";
  authors;

  constructor(authorsService: AuthorsService) { 
    this.authors = authorsService.getAuthors();
  }

}
