import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movies } from 'src/app/interface/movie.interface';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnChanges {
  @Input() card!: Movies;
  ngOnChanges(changes: SimpleChanges) {}
}
