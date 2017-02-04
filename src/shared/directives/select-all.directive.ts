import { Directive, OnInit, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: 'input[selectAll]',
    // host: {
    //     '(focus)': 'onFocus()',
    //     '(blur)': '_onBlur()',
    //     '(click)': 'onClick($event.target)'
    // }
})
export class SelectAllDirective implements OnInit {
    constructor(private _element: ElementRef, private _renderer: Renderer) {
        console.log("init directive");
    }

    selectElementText(element): void {
        element.focus();
        element.setSelectionRange(0, element.value.length);
    }

    @HostListener('focus', ['$event.target'])
    onFocus(element) {
        this.selectElementText(element);
    }

    @HostListener('mouseup', ['$event.target'])
    onClick(element) {
        this.selectElementText(element);
    }

    @HostListener('mouseenter', ['$event.target']) 
    onMouseEnter(element) {
        //this.selectElementText(element);
    }

    ngOnInit() {
        //this._element.
    }
}