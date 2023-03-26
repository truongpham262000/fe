import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartItemCrudComponent } from './cart-item-crud.component';

describe('CartItemCrudComponent', () => {
  let component: CartItemCrudComponent;
  let fixture: ComponentFixture<CartItemCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartItemCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartItemCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
