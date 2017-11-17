import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titlecasing',
  templateUrl: './titlecasing.component.html',
  styleUrls: ['./titlecasing.component.css']
})
export class TitlecasingComponent implements OnInit {
  private smallCasedWords: Array<string> = ["for", "of", "the", "a", "an", "with"];
  titleCasedText: string = "";


  constructor() { }

  ngOnInit() {
  }

  onKeyUp(inputText) {
    this.titleCasedText = this.makeTitleCased(inputText);
  }

  private makeTitleCased(inText: string): string {
    let textArray: Array<string>;
    let outText: string = "";
    textArray = inText.toLowerCase().split(" ");

    let count: number = 0;
    if (textArray) {
      textArray.forEach(text => {
        if (!this.smallCasedWords.includes(text) || count == 0) {
          outText += text.charAt(0).toUpperCase() + text.slice(1);
        } else {
          outText += text;
        }
        outText += " ";
        count++;
      });
    }

    return outText;
  }
}
