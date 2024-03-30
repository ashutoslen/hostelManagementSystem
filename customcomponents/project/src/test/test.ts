import { Component, Input, SimpleChanges, Renderer2, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ServoyBaseComponent } from '@servoy/public';

@Component({
    selector: 'customcomponents-test',
    templateUrl: './test.html',
     changeDetection: ChangeDetectionStrategy.OnPush
})
export class Test extends ServoyBaseComponent<HTMLDivElement>{

    @Input() yourName: string;

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