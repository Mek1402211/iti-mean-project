import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomercartComponent } from './customercart.component';

describe('CustomercartComponent', () => {
  let component: CustomercartComponent;
  let fixture: ComponentFixture<CustomercartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomercartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomercartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
