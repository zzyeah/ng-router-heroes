import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';

import { CrisisService } from '../crisis.service';
import { Crisis } from '../crisis';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.less']
})
export class CrisisDetailComponent implements OnInit {
  hero$!: Observable<Crisis>
  selectedId = 0
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.hero$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getHero(params.get('id')!))
    );
  }

  gotoHeroes(crisis: Crisis) {
    const crisisId = crisis ? crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], {relativeTo: this.route});
  }

}
