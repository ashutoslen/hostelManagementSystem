import { Test } from './test/test';
import { DashboardCounters } from './DashboardCounters/DashboardCounters';
import { NgModule } from '@angular/core';
import { ServoyPublicModule } from '@servoy/public';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@NgModule({
    declarations: [
		Test,
		DashboardCounters,
    ],
    providers: [],
    imports: [
      ServoyPublicModule,
      CommonModule,
      FormsModule
    ],
    exports: [
		Test,
		DashboardCounters, 
      ]
})
export class customcomponentsModule {}