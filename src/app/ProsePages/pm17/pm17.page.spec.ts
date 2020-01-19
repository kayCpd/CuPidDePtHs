import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Pm17Page } from './pm17.page';

describe('Pm17Page', () => {
  let component: Pm17Page;
  let fixture: ComponentFixture<Pm17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pm17Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Pm17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
