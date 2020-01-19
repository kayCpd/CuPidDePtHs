import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Abcog20Page } from './abcog20.page';

describe('Abcog20Page', () => {
  let component: Abcog20Page;
  let fixture: ComponentFixture<Abcog20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Abcog20Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Abcog20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
