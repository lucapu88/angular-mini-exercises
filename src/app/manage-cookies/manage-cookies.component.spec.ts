import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCookiesComponent } from './manage-cookies.component';

describe('ManageCookiesComponent', () => {
  let component: ManageCookiesComponent;
  let fixture: ComponentFixture<ManageCookiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageCookiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCookiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
