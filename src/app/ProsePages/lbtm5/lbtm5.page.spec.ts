import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Lbtm5Page } from './lbtm5.page';

describe('Lbtm5Page', () => {
  let component: Lbtm5Page;
  let fixture: ComponentFixture<Lbtm5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lbtm5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Lbtm5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
