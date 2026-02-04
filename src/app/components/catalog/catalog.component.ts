import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlowerService } from '../../services/flower.service';
import { FlickrPhoto } from '../../models/flower.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

interface FilterOption {
  label: string;
  value: string | null;
  colorCode: string | null;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit, OnDestroy {
  photos: FlickrPhoto[] = [];
  totalPhotos: number = 0;
  currentPage: number = 1;
  currentColorCode: string | null = null;

  filters: FilterOption[] = [
    { label: 'All Photos', value: null, colorCode: null },
    { label: 'Red Photos', value: '0', colorCode: '0' },
    { label: 'Green Photos', value: '5', colorCode: '5' },
    { label: 'Blue Photos', value: '8', colorCode: '8' }
  ];

  private destroy$ = new Subject<void>();

  constructor(private flowerService: FlowerService) {}

  ngOnInit(): void {
    // Subscribe to photos
    this.flowerService.photos$
      .pipe(takeUntil(this.destroy$))
      .subscribe(photos => {
        this.photos = photos;
      });

    // Subscribe to total photos count
    this.flowerService.totalPhotos$
      .pipe(takeUntil(this.destroy$))
      .subscribe(total => {
        this.totalPhotos = total;
      });

    // Initial load
    this.loadPhotos();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  filterByColor(colorCode: string | null): void {
    this.currentColorCode = colorCode;
    this.currentPage = 1;
    this.loadPhotos();
  }

  loadMore(): void {
    this.currentPage++;
    this.flowerService.loadMore(this.currentColorCode);
  }

  private loadPhotos(): void {
    this.flowerService.searchFlowers(this.currentColorCode, this.currentPage)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }

  getImageUrl(photo: FlickrPhoto): string {
    return this.flowerService.getImageUrl(photo);
  }

  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.style.opacity = '0.5';
  }

  isFilterActive(filterValue: string | null): boolean {
    return this.currentColorCode === filterValue;
  }
}
