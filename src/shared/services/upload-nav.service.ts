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
        this.trackUploadNavHide();
    }


    trackUploadNavHide() {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // Traverse the active route tree
                var snapshot = this._activatedRoute.snapshot;
                var activated = this._activatedRoute.firstChild;
                if (activated != null) {
                    while (activated != null) {
                        snapshot = activated.snapshot;
                        activated = activated.firstChild;
                    }
                }

                this.hideUploadNav.next(snapshot.data['hideUpload']);
            }
        });
    }
}