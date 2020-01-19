import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mt4Page } from './mt4.page';

describe('Mt4Page', () => {
  let component: Mt4Page;
  let fixture: ComponentFixture<Mt4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mt4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mt4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
