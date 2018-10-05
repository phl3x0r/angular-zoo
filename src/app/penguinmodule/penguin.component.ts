import { Component, OnInit } from '@angular/core';
import { generatePenguinData, PenguinData } from './data/penguin.data';
import { penguinColumns } from './data/penguin.conf';

@Component({
  selector: 'penguin-root',
  templateUrl: './penguin.component.html',
  styleUrls: ['./penguin.component.scss']
})
export class PenguinComponent implements OnInit {
  penguinData: PenguinData[];
  columnsToDisplay = penguinColumns;
  constructor() {}

  ngOnInit() {
    this.penguinData = generatePenguinData();
  }
}
