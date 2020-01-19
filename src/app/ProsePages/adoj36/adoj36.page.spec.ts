import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Adoj36Page } from './adoj36.page';

describe('Adoj36Page', () => {
  let component: Adoj36Page;
  let fixture: ComponentFixture<Adoj36Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Adoj36Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Adoj36Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
