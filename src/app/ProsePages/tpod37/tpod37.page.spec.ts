import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tpod37Page } from './tpod37.page';

describe('Tpod37Page', () => {
  let component: Tpod37Page;
  let fixture: ComponentFixture<Tpod37Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tpod37Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Tpod37Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
