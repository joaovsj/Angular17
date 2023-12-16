import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferrableViewComponent } from './deferrable-view.component';

describe('DeferrableViewComponent', () => {
  let component: DeferrableViewComponent;
  let fixture: ComponentFixture<DeferrableViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferrableViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferrableViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
