import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';

@Component({
  selector: 'app-mobile-preview',
  templateUrl: './mobile-preview.component.html',
  styleUrls: ['./mobile-preview.component.css'],
})
export class MobilePreviewComponent implements OnInit {
  previewCardData: any;
  constructor(private _movieData: MoviesService) {}
  ngOnInit() {
    this._movieData.getData().subscribe((data) => {
      console.log(data, 'FROM COMPONENT');
      this.previewCardData = data;
    });
  }
}
