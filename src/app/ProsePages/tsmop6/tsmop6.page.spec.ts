import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tsmop6Page } from './tsmop6.page';

describe('Tsmop6Page', () => {
  let component: Tsmop6Page;
  let fixture: ComponentFixture<Tsmop6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tsmop6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tsmop6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
