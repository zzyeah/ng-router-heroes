import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.less']
})
export class HeroDetailComponent implements OnInit {
  hero$!: Observable<Hero>
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')!))
    );
  }

  gotoHeroes(hero: Hero): void{
    this.router.navigate(['/heroes']);
  }

}
