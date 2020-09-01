import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { ProductsService } from './products.service';
import { Product } from '@core/models/product.model';
import { environment } from 'src/environments/environment';

fdescribe('ProductsService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: ProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('test for getAllProducts', () => {

    it('should return products', () => {
      // arrange
      const expectData: Product[] = [
        {
          id: '1',
          title: 'Reloj',
          price: 121,
          description: 'Cool Reloj',
          image: 'img/img.jpg'
        },
        {
          id: '2',
          title: 'Sudadera',
          price: 121,
          description: 'Cool Sudadera',
          image: 'img/img.jpg'
        },
      ];
      let dataError;
      let dataResponse;

      // Act
      service.getAllProducts()
        .subscribe(response => {
          dataResponse = response;
        }, error => {
          dataError = error;
        });

      const req = httpTestingController.expectOne(`${environment.url_api}/products`);
      req.flush(expectData);

      // assert
      expect(dataResponse.length).toEqual(2);
      expect(req.request.method).toEqual('GET');
      expect(dataError).toBeUndefined();

    });
  });
});
