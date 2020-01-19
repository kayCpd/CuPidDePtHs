import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Azd11Page } from './azd11.page';

describe('Azd11Page', () => {
  let component: Azd11Page;
  let fixture: ComponentFixture<Azd11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Azd11Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Azd11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
