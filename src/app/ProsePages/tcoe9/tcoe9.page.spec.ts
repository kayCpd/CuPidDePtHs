import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tcoe9Page } from './tcoe9.page';

describe('Tcoe9Page', () => {
  let component: Tcoe9Page;
  let fixture: ComponentFixture<Tcoe9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tcoe9Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tcoe9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
