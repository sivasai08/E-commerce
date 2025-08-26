import { TestBed } from '@angular/core/testing';
import { Products } from '../service/Product.service';

describe('ProductService', () => {
  let service: Products;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Products);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
