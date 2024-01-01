import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChatComponent } from './list-chat.component';

describe('ListChatComponent', () => {
  let component: ListChatComponent;
  let fixture: ComponentFixture<ListChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListChatComponent]
    });
    fixture = TestBed.createComponent(ListChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
