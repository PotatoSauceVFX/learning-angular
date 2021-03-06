import { Component, OnInit } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import { Hero } from '../hero';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    console.log("Hero selected:", hero);
    this.selectedHero = hero;
  }

}
