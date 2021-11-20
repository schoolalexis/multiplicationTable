import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  tablesChoose!: FormGroup;
  @Input() nbTInput!: number;
  nbTChoose: number = 0;
  
  constructor() { }

  get formControls() { return this.tablesChoose.controls; }

  ngOnInit(): void {
    this.tablesChoose = new FormGroup({
      nbTInput: new FormControl(),
    });
  }

  multipleTables() {
    let valTInput = this.tablesChoose.value.nbTInput;
    this.nbTChoose = valTInput;
  }

  tablesMultiples() {
    let tables: number[] = [];

    if(this.nbTChoose) {
      for(let x=1; x<= this.nbTChoose; x++) {
        for(let i=0; i<=10; i++) {
          let incT = (x * i);
          tables.push(incT);
          // debug
          console.log("val of incT : " + incT);
        }
      }
      return tables;
    }
    return tables;
  }

  countNbTChoose() {
    let nbT: number[] = [];

    if(this.nbTChoose) {
      for(let y=1; y<=this.nbTChoose; y++) {
        let incN = y;
        nbT.push(y);
        // debug
        console.group("val of incN : " + incN);
      }
      return nbT;
    }
    return nbT;
  }

}
