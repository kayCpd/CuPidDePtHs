import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Dmol23Page } from './dmol23.page';

describe('Dmol23Page', () => {
  let component: Dmol23Page;
  let fixture: ComponentFixture<Dmol23Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dmol23Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Dmol23Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
