import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FlowerService } from './flower.service';
import { FlickrResponse } from '../models/flower.model';

describe('FlowerService', () => {
  let service: FlowerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlowerService]
    });
    service = TestBed.inject(FlowerService);
    httpMock = TestBed.inject(HttpTestingController);
  });

it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
  it('should update total photos count', (done) => {
    const mockResponse: FlickrResponse = {
      photos: {
        page: 1,
        pages: 10,
        perpage: 20,
        total: '200',
        photo: []
      },
      stat: 'ok'
    };

    service.searchFlowers(null, 1).subscribe(() => {
      service.totalPhotos$.subscribe(total => {
        expect(total).toBe(200);
        done();
      });
    });

    const req = httpMock.expectOne(request =>
      request.url.includes('flickr.photos.search')
    );
    req.flush(mockResponse);
  });
});
