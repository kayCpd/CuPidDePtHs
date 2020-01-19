import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Cc26Page } from './cc26.page';

describe('Cc26Page', () => {
  let component: Cc26Page;
  let fixture: ComponentFixture<Cc26Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cc26Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Cc26Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
