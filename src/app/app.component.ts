// /src/app/app.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tableChoose!: FormGroup;
  nbChoose: number = 0;

  tablesChoose!: FormGroup;
  nbTChoose: number = 0;

  ngOnInit(): void {
    this.tableChoose = new FormGroup({
      nbInput: new FormControl(),
    });

    this.tablesChoose = new FormGroup({
      nbTInput: new FormControl(),
    })
  }
}
