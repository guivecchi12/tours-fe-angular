import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tour } from '../model/tour';
import { CommonModule } from '@angular/common';
import { TourCardComponent } from '../tour-card/tour-card.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ToursStore } from '../service/tours.store';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TourCardComponent, MatTabsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  easyTours$: Observable<Tour[]>;
  mediumTours$: Observable<Tour[]>;
  difficultTours$: Observable<Tour[]>;

  constructor(private toursStore: ToursStore) {}

  ngOnInit(): void {
    this.easyTours$ = this.toursStore.filterByCategory('easy');
    this.mediumTours$ = this.toursStore.filterByCategory('medium');
    this.difficultTours$ = this.toursStore.filterByCategory('difficult');
  }
}
