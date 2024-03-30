import { Component, Input, SimpleChanges, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy,Output,EventEmitter } from '@angular/core';
import { ServoyBaseComponent } from '@servoy/public';

@Component({
    selector: 'customcomponents-Dashboard-Counters',
    templateUrl: './DashboardCounters.html',
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardCounters extends ServoyBaseComponent<HTMLDivElement>{

   // @Input() yourName: string;
    
   // @Output() studentsChange = new EventEmitter();
    @Input() students: any;
    @Input() rooms: any;
    @Input() courses: any;
    //@Input()  value: any = 11;

    constructor(protected readonly renderer: Renderer2, protected cdRef: ChangeDetectorRef) {
         super(renderer, cdRef);
    }
    
    svyOnInit() {
        super.svyOnInit();
    }
    
    svyOnChanges( changes: SimpleChanges ) {
        super.svyOnChanges(changes);
    }
            
}