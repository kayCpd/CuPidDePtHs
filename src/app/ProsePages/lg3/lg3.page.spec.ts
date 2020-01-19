import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lg3Page } from './lg3.page';

describe('Lg3Page', () => {
  let component: Lg3Page;
  let fixture: ComponentFixture<Lg3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lg3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lg3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
