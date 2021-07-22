import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstermanualComponent } from './monstermanual.component';

describe('MonstermanualComponent', () => {
  let component: MonstermanualComponent;
  let fixture: ComponentFixture<MonstermanualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonstermanualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstermanualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
