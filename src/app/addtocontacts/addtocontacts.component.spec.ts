import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtocontactsComponent } from './addtocontacts.component';

describe('AddtocontactsComponent', () => {
  let component: AddtocontactsComponent;
  let fixture: ComponentFixture<AddtocontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtocontactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtocontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
