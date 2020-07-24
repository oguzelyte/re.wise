import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamInfoPageRoutingModule } from './exam-info-routing.module';

import { ExamInfoPage } from './exam-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamInfoPageRoutingModule
  ],
  declarations: [ExamInfoPage]
})
export class ExamInfoPageModule {}
