import { Directive, OnInit, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: 'input[selectAll][selectOnMouseEnter]'
})
export class SelectAllDirective implements OnInit {
    @Input() selectOnMouseEnter: boolean = false;

    constructor(private _element: ElementRef, private _renderer: Renderer) {}

    selectElementText(element): void {
        element.focus();
        element.setSelectionRange(0, element.value.length);
    }

    @HostListener('focus', ['$event.target'])
    onFocus(element) {
        this.selectElementText(element);
    }

    @HostListener('click', ['$event.target'])
    onClick(element) {
        this.selectElementText(element);
    }

    @HostListener('mouseenter', ['$event.target']) 
    onMouseEnter(element) {
        if(this.selectOnMouseEnter) {
            this.selectElementText(element);
        }
    }

    ngOnInit() {
        //this._element.
    }
}