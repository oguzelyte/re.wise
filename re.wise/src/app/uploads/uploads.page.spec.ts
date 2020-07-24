import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UploadsPage } from './uploads.page';

describe('UploadsPage', () => {
  let component: UploadsPage;
  let fixture: ComponentFixture<UploadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UploadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
