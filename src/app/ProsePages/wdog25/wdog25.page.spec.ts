import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Wdog25Page } from './wdog25.page';

describe('Wdog25Page', () => {
  let component: Wdog25Page;
  let fixture: ComponentFixture<Wdog25Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Wdog25Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Wdog25Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
