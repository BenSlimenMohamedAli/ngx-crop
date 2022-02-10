import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCropComponent } from './ngx-crop.component';

describe('NgxCropComponent', () => {
  let component: NgxCropComponent;
  let fixture: ComponentFixture<NgxCropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxCropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
