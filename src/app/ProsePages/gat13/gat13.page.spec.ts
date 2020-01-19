import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Gat13Page } from './gat13.page';

describe('Gat13Page', () => {
  let component: Gat13Page;
  let fixture: ComponentFixture<Gat13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gat13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Gat13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
