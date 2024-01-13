import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticingComponent } from './practicing.component';

describe('PracticingComponent', () => {
  let component: PracticingComponent;
  let fixture: ComponentFixture<PracticingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PracticingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
