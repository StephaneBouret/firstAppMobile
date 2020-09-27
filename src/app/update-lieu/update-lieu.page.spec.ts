import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdateLieuPage } from './update-lieu.page';

describe('UpdateLieuPage', () => {
  let component: UpdateLieuPage;
  let fixture: ComponentFixture<UpdateLieuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateLieuPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateLieuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
