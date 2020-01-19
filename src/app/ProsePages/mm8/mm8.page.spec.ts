import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mm8Page } from './mm8.page';

describe('Mm8Page', () => {
  let component: Mm8Page;
  let fixture: ComponentFixture<Mm8Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mm8Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mm8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
