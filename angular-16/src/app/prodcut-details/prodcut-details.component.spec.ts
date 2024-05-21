import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdcutDetailsComponent } from './prodcut-details.component';

describe('ProdcutDetailsComponent', () => {
  let component: ProdcutDetailsComponent;
  let fixture: ComponentFixture<ProdcutDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdcutDetailsComponent]
    });
    fixture = TestBed.createComponent(ProdcutDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
