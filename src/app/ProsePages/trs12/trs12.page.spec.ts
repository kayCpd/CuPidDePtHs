import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Trs12Page } from './trs12.page';

describe('Trs12Page', () => {
  let component: Trs12Page;
  let fixture: ComponentFixture<Trs12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trs12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Trs12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
