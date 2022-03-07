import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chanson',
  templateUrl: './chanson.html',
  styleUrls: ['./chanson.component.css']
})
export class ChansonComponent implements OnInit {

  @Input() titre ;
  @Input() chanteur;
  @Input() id;
  
  constructor() { }

  ngOnInit(): void {
  }

}
