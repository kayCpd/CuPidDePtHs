import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sm43Page } from './sm43.page';

describe('Sm43Page', () => {
  let component: Sm43Page;
  let fixture: ComponentFixture<Sm43Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sm43Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sm43Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
