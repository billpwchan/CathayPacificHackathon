import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashroomComponent } from './washroom.component';

describe('WashroomComponent', () => {
  let component: WashroomComponent;
  let fixture: ComponentFixture<WashroomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashroomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
