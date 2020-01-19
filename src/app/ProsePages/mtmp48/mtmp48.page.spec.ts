import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Mtmp48Page } from './mtmp48.page';

describe('Mtmp48Page', () => {
  let component: Mtmp48Page;
  let fixture: ComponentFixture<Mtmp48Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mtmp48Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Mtmp48Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
