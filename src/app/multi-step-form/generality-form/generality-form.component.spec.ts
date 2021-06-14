import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralityFormComponent } from './generality-form.component';

describe('GeneralityFormComponent', () => {
  let component: GeneralityFormComponent;
  let fixture: ComponentFixture<GeneralityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
