import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mll31Page } from './mll31.page';

describe('Mll31Page', () => {
  let component: Mll31Page;
  let fixture: ComponentFixture<Mll31Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mll31Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mll31Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
