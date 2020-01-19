import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cttw16Page } from './cttw16.page';

describe('Cttw16Page', () => {
  let component: Cttw16Page;
  let fixture: ComponentFixture<Cttw16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cttw16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cttw16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
