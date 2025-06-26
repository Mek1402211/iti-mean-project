import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustoumerComponent } from './custoumer.component';

describe('CustoumerComponent', () => {
  let component: CustoumerComponent;
  let fixture: ComponentFixture<CustoumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustoumerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustoumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
