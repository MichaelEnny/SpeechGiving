import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTalkComponent } from './update-talk.component';

describe('UpdateTalkComponent', () => {
  let component: UpdateTalkComponent;
  let fixture: ComponentFixture<UpdateTalkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTalkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTalkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
