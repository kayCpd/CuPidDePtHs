import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Rol41Page } from './rol41.page';

describe('Rol41Page', () => {
  let component: Rol41Page;
  let fixture: ComponentFixture<Rol41Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rol41Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Rol41Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
