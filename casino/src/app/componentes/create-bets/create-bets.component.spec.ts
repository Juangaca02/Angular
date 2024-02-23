import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBetsComponent } from './create-bets.component';

describe('CreateBetsComponent', () => {
  let component: CreateBetsComponent;
  let fixture: ComponentFixture<CreateBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateBetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
