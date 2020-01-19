import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tptw50Page } from './tptw50.page';

describe('Tptw50Page', () => {
  let component: Tptw50Page;
  let fixture: ComponentFixture<Tptw50Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tptw50Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tptw50Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
