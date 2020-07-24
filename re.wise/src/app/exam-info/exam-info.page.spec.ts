import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExamInfoPage } from './exam-info.page';

describe('ExamInfoPage', () => {
  let component: ExamInfoPage;
  let fixture: ComponentFixture<ExamInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExamInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
