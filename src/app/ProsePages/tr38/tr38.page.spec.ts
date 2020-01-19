import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tr38Page } from './tr38.page';

describe('Tr38Page', () => {
  let component: Tr38Page;
  let fixture: ComponentFixture<Tr38Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tr38Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tr38Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
