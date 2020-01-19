import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Aokol14Page } from './aokol14.page';

describe('Aokol14Page', () => {
  let component: Aokol14Page;
  let fixture: ComponentFixture<Aokol14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Aokol14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Aokol14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
