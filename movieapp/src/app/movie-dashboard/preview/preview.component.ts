import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movies } from 'src/app/interface/movie.interface';
@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnChanges {
  @Input() previewCard!: Movies;
  ngOnChanges(changes: SimpleChanges) {}
}
