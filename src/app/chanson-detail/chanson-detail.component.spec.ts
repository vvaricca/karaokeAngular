import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChansonDetailComponent } from './chanson-detail.component';

describe('ChansonDetailComponent', () => {
  let component: ChansonDetailComponent;
  let fixture: ComponentFixture<ChansonDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChansonDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChansonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
