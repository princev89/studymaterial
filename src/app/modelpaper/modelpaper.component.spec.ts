import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelpaperComponent } from './modelpaper.component';

describe('ModelpaperComponent', () => {
  let component: ModelpaperComponent;
  let fixture: ComponentFixture<ModelpaperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelpaperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
