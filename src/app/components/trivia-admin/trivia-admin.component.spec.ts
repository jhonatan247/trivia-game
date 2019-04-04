import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaAdminComponent } from './trivia-admin.component';

describe('TriviaAdminComponent', () => {
  let component: TriviaAdminComponent;
  let fixture: ComponentFixture<TriviaAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriviaAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriviaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
