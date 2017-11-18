import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';

  tweet = {
    body: "Here is a body of a tweet",
    isLiked: false,
    likesCount: 10
  }

  zippy1 = {
    title: "Title 1"
  }

  zippy2 = {
    title: "Title 2"
  }
}
