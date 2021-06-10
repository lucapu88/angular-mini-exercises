import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssGridComponent } from './css-grid.component';

describe('CssGridComponent', () => {
  let component: CssGridComponent;
  let fixture: ComponentFixture<CssGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
