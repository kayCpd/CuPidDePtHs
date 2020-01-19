import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tssl2Page } from './tssl2.page';

describe('Tssl2Page', () => {
  let component: Tssl2Page;
  let fixture: ComponentFixture<Tssl2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tssl2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tssl2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
