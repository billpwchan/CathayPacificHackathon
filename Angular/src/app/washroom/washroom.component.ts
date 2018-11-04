import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-washroom',
  templateUrl: './washroom.component.html',
  styleUrls: ['./washroom.component.css']
})
export class WashroomComponent implements OnInit {

  value = 20;
  queueMessage = '';
  checked = true;
  items = [1, 2, 3, 4];
  items2 = [6, 7, 8];
  isOccupied = true;
  imageUrl = true;
  constructor(public snackBar: MatSnackBar) { }

  ngOnInit() { }

  startTimer() {
    this.queueMessage = 'You are currently at position 1.';
    let queueProcess = setInterval(() => {
      this.value = this.value + 0.15;
      if (this.value > 100) {
        this.isOccupied = false;
        this.imageUrl = false;
        this.queueMessage = 'Seat No. 66H, Please go to the Lavatory 5. as indicated.';
        this.openSnackBar();
        clearInterval(queueProcess);
      }
    }, 50);
  }

  openSnackBar() {
    this.snackBar.open('Please go to the Lavatory 5.', 'OK', {
      duration: 5000,
    });
  }
}
