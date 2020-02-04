import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationGetComponent } from './publication-get.component';

describe('PublicationGetComponent', () => {
  let component: PublicationGetComponent;
  let fixture: ComponentFixture<PublicationGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
