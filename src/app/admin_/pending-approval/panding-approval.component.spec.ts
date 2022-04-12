import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PandingApprovalComponent } from './panding-approval.component';

describe('PandingApprovalComponent', () => {
  let component: PandingApprovalComponent;
  let fixture: ComponentFixture<PandingApprovalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PandingApprovalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PandingApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
