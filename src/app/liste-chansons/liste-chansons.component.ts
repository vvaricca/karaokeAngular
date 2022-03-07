import { Component, OnInit } from '@angular/core';
import { KaraokeService } from '../services/karaoke.services';


@Component({
  selector: 'app-liste-chansons',
  templateUrl:'./liste-chansons.html',
  styleUrls: ['./liste-chansons.component.css']
})
export class ListeChansonsComponent implements OnInit {
	
   chansons: any[];	
  
  constructor(private karaokeService: KaraokeService) {}
  
  ngOnInit(): void {
	  this.chansons = this.karaokeService.chansons ;
  }

}
