import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateTriviaComponent } from './generate-trivia.component';

describe('GenerateTriviaComponent', () => {
  let component: GenerateTriviaComponent;
  let fixture: ComponentFixture<GenerateTriviaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateTriviaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateTriviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
