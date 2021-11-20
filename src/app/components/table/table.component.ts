import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  tableChoose!: FormGroup;
  @Input() nbInput!: number;
  nbChoose: number = 0;

  constructor() { }

  get formControls() { return this.tableChoose.controls; }

  ngOnInit(): void {
    this.tableChoose = new FormGroup({
      nbInput: new FormControl(),
    });
  }

  uniqueTable() {
    let valInput = this.tableChoose.value.nbInput;
    this.nbChoose = valInput;
  }

  uniqueTableMultiple() {
    let table: number[] = [];

    if (this.nbChoose) {
      for(let i=0; i<=10; i++) {
        let inc = (this.nbChoose * i);
        table.push(inc);
        // debug
        console.log("val of inc : " + inc);
      }
      return table;
    }
    return table;
  }
}
