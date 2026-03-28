import { Component, Input, SimpleChanges, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ServoyBaseComponent } from '@servoy/public';

@Component({
    selector: 'counters-Counter',
    templateUrl: './Counter.html',
	styleUrls: ['./Counter.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Counter extends ServoyBaseComponent<HTMLDivElement>{

    @Input() totalStudents: number;

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