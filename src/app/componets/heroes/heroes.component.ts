import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HeroService } from 'src/app/serivices/hero.service';
import { MessageService } from 'src/app/serivices/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  /**
   * Get the heroes
   */
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

  /**
   * Init method
   */
  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * Add a hero to the database
   * @param heroName Name of the hero to be created
   */
  add(heroName: string): void {
    heroName = heroName.trim();
    if (!heroName) {
      return;
    }
    this.heroService.addHero({ name: heroName } as Hero).subscribe((hero) => {
      this.heroes.push(hero);
    });
  }

  /**
   * Deleted the hero
   * @param hero Hero to be deleted
   */
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter((h) => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
