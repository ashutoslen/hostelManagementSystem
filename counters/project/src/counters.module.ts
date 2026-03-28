import { Counter } from './Counter/Counter';
import { NgModule } from '@angular/core';
import { ServoyPublicModule } from '@servoy/public';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
 
@NgModule({
    declarations: [
		Counter,
    ],
    providers: [],
    imports: [
      ServoyPublicModule,
      CommonModule,
      FormsModule
    ],
    exports: [
		Counter, 
      ]
})
export class countersModule {}