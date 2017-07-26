import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SharedModule } from './../shared.module';
import { ActivatedRoute, Route, Router, NavigationEnd } from '@angular/router';

@Injectable()
export class UploadNavService {
    hideUploadNav: Subject<boolean> = new Subject();

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) {
        this._router.events.subscribe(event => {
            console.log("event");
            if (event instanceof NavigationEnd) {
                // Traverse the active route tree
                var snapshot = _activatedRoute.snapshot;
                var activated = _activatedRoute.firstChild;
                if (activated != null) {
                    while (activated != null) {
                        snapshot = activated.snapshot;
                        activated = activated.firstChild;
                    }
                }
                this.setHidden(snapshot.data['hideUpload']);
            }
        });
    }

    setHidden(boolean: boolean) {
        this.hideUploadNav.next(boolean);
    }

    setVisible() {
        this.hideUploadNav.next(false);
    }
}