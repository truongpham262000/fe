import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemIndexComponent } from './cart-item-index.component';

describe('CartItemIndexComponent', () => {
  let component: CartItemIndexComponent;
  let fixture: ComponentFixture<CartItemIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
