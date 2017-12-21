import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaSampleComponent } from './aba-sample.component';

describe('AbaSampleComponent', () => {
  let component: AbaSampleComponent;
  let fixture: ComponentFixture<AbaSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbaSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbaSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
