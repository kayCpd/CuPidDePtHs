import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Ts39Page } from './ts39.page';

describe('Ts39Page', () => {
  let component: Ts39Page;
  let fixture: ComponentFixture<Ts39Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ts39Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Ts39Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
