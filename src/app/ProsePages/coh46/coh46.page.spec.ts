import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Coh46Page } from './coh46.page';

describe('Coh46Page', () => {
  let component: Coh46Page;
  let fixture: ComponentFixture<Coh46Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coh46Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Coh46Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
