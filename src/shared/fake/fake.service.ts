import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class FakeService {

    constructor() { }

    fakeUploadProgress(msDelayPerPercent: number): Observable<any> {
        return Observable.timer(101, msDelayPerPercent).map(r => {
            return r;
        }).take(102);
    }
}