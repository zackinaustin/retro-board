import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoneBetterComponent } from './gone-better.component';

describe('GoneBetterComponent', () => {
  let component: GoneBetterComponent;
  let fixture: ComponentFixture<GoneBetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoneBetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoneBetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
