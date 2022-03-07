import { Component, OnInit } from '@angular/core';
import { KaraokeService } from '../services/karaoke.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chanson-detail',
  templateUrl:'./chanson-detail.html',
  styleUrls: ['./chanson-detail.component.css']
})
export class ChansonDetailComponent implements OnInit {

  titre: string ;
  chanteur: string ;
  url: string ;
  
  constructor(private service: KaraokeService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
	  const id = this.route.snapshot.params['id'] ;
	  this.titre = this.service.getChansonById (+id).titre ;
	  this.chanteur = this.service.getChansonById (+id).chanteur ;
	  this.url = "assets/karaoke/"+this.service.getChansonById (+id).fichier ;
  }

  retourListe()
  {
	this.router.navigate(['']);  
  }
}
