import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandingProjectComponent } from './panding-project.component';

describe('PandingProjectComponent', () => {
  let component: PandingProjectComponent;
  let fixture: ComponentFixture<PandingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandingProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
