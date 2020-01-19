import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Err18Page } from './err18.page';

describe('Err18Page', () => {
  let component: Err18Page;
  let fixture: ComponentFixture<Err18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Err18Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Err18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
