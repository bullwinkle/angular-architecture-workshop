import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';

@NgModule({
  imports: [
    CommonModule,
    LuggageDomainModule,
    RouterModule.forChild([
      { path: '', component: CheckinComponent },
    ]),
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent],
})
export class LuggageFeatureCheckinModule {}
