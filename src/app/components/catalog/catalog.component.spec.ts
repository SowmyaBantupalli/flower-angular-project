import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogComponent } from './catalog.component';
import { FlowerService } from '../../services/flower.service';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;
  let flowerService: jasmine.SpyObj<FlowerService>;

  
  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display filter buttons', () => {
    const buttons = fixture.nativeElement.querySelectorAll('.filter-btn');
    expect(buttons.length).toBe(4);
  });

  it('should filter by color when button clicked', () => {
    component.filterByColor('0');
    expect(component.currentColorCode).toBe('0');
    expect(component.currentPage).toBe(1);
  
  });

  
});
