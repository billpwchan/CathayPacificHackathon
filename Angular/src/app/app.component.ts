import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'entertainmentSystem';
  allowFirstPage = true;
  allowSecondPage = false;
  welcomePage = true;

  ngOnInit(): void {

  }

  previousPage() {
    this.allowFirstPage = true;
    this.allowSecondPage = false;
  }

  nextPage() {
    this.allowFirstPage = false;
    this.allowSecondPage = true;
  }
}
