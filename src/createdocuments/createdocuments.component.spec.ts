import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedocumentsComponent } from './createdocuments.component';

describe('CreatedocumentsComponent', () => {
  let component: CreatedocumentsComponent;
  let fixture: ComponentFixture<CreatedocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatedocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
