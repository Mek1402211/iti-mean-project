import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoryproductsComponent } from './catgoryproducts.component';

describe('CatgoryproductsComponent', () => {
  let component: CatgoryproductsComponent;
  let fixture: ComponentFixture<CatgoryproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatgoryproductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatgoryproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
