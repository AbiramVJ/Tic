import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPopupComponent } from './product-popup.component';

describe('ProductPopupComponent', () => {
  let component: ProductPopupComponent;
  let fixture: ComponentFixture<ProductPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
