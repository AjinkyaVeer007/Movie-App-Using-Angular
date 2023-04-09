import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../service/movies.service';
import { Movies } from '../interface/movie.interface';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css'],
})
export class MovieDashboardComponent implements OnInit {
  isMobile!: boolean;
  moviesData: Movies[] = [];
  filteredMoviesData: Movies[] = [];
  previewCardData!: Movies;
  uniqueLanguages: string[] = [];
  search = new FormControl('');
  constructor(
    private movieService: MoviesService,
    private toaster: ToastrService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.isMobile = this.breakpointObserver.isMatched(Breakpoints.Handset);
  }
  ngOnInit(): void {
    this.movies();
  }
  onSubmit() {
    let searchData: any = this.search.value;
    if (searchData) {
      this.filteredMoviesData = this.moviesData.filter((movie) =>
        movie.name.toLowerCase().includes(searchData.toLowerCase())
      );
      if (this.filteredMoviesData.length == 0) {
        this.filteredMoviesData = this.moviesData;
        this.toaster.error('No Movie Found');
      }
    }
    this.previewCardData = this.filteredMoviesData[0];
  }
  movies() {
    this.movieService.getMovies().subscribe({
      next: (data) => {
        if (data.status) {
          this.moviesData = data.data;
          this.filteredMoviesData = this.moviesData;
          this.previewCardData = this.filteredMoviesData[0];
          this.filterLanguages();
        }
      },
      error: (error) => console.log(error),
    });
  }
  filterLanguages() {
    let language: string[] = [];
    this.moviesData.forEach((movie: Movies) => {
      language.push(movie.language);
    });
    this.uniqueLanguages = [...new Set(language)];
    this.uniqueLanguages.push('All');
  }
  filterLaguage(language: string) {
    if (language === 'All') {
      this.filteredMoviesData = this.moviesData;
    } else {
      this.filteredMoviesData = this.moviesData.filter(
        (movies) => movies.language == language
      );
    }
    this.previewCardData = this.filteredMoviesData[0];
  }

  onCardClick(movieCard: any) {
    this.previewCardData = movieCard;
    if (this.isMobile) {
      this.movieService.setData(movieCard);
      this.router.navigate(['preview']);
    }
  }
}
