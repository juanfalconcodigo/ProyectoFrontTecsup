import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationPostComponent } from './publication-post.component';

describe('PublicationPostComponent', () => {
  let component: PublicationPostComponent;
  let fixture: ComponentFixture<PublicationPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicationPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicationPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
