import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod, ResponseType } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { Injector } from '@angular/core';
import { Constants } from './constants';
import { FakeData } from './fake-data';
import { CUImage } from './../shared/models/cu-image.class';

class MockError extends Response implements Error {
    name: any
    message: any
}

export let fakeBackend = {
    // use fake backend in place of Http service for backend-less development
    provide: Http, Injector,
    useFactory: (backend, options) => {
        // configure fake backend
        backend.connections.subscribe((connection: MockConnection) => {
            let testUser = { username: 'user@cubeupload.com', password: 'test', firstName: 'Test', lastName: 'User' };
            let fakeToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJSb3lhbEhvcnRpY3VhbHR1cmFsU29jaWV0eSIsImlhdCI6MTQ4MDQxODIyMCwiZXhwIjoxNTExOTU0MjUxLCJhdWQiOiJ3d3cuZXhhbXBsZS5jb20iLCJzdWIiOlsianJvY2tldEBleGFtcGxlLmNvbSIsInF3ZUBxd2UuY29tIl0sInVuaXF1ZV9uYW1lIjoiQm9yaXMgSm9obm55Ym95IiwiRGVsZWdhdGUiOiJmYWxzZSJ9.54ZAGYauRqOqCjaiKw-9cCMALmS-U4cWi4crT1Fphk8";
            // wrap in timeout to simulate server api call
            setTimeout(() => {

                // fake authenticate api end point
                // if (connection.request.url.endsWith('/api/account/login') && connection.request.method === RequestMethod.Post) {
                //     console.log("Intercepting Auth for /api/authenticate");
                //     // get parameters from post request
                //     let params = JSON.parse(connection.request.getBody());

                //     // check user credentials and return fake jwt token if valid
                //     if (params.username === testUser.username && params.password === testUser.password) {
                //         connection.mockRespond(new Response(
                //             new ResponseOptions({ status: 200, body: fakeToken })
                //         ));
                //     } else {
                //         connection.mockError(new MockError(
                //             new ResponseOptions({ status: 400, statusText: `Incorrect Password or Email`, body: ``, type: ResponseType.Error })
                //         ));
                //     }
                // }

                // if (connection.request.url.endsWith(Constants.API_Images_Get()) && connection.request.method === RequestMethod.Get) {
                //     if (connection.request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                //         connection.mockRespond(new Response(
                //             new ResponseOptions({ status: 200, body: [testUser] })
                //         ));
                //     } else {
                //         // return 401 not authorised if token is null or invalid
                //         connection.mockError(new MockError(
                //             new ResponseOptions({ status: 400, statusText: `Invitation code is Invalid`, body: `Roberto's Magic Exception`, type: ResponseType.Error })
                //         ));
                //     }
                // }

                if (connection.request.url.endsWith(Constants.API_Images_Get()) && connection.request.method === RequestMethod.Get) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: FakeData.Images })
                    ));
                }

                if (connection.request.url.startsWith(Constants.API_Image_Get) && connection.request.method === RequestMethod.Get) {
                    let url = connection.request.url;
                    let n = url.lastIndexOf('/');
                    let id = +url.substring(n + 1);
                    let images = <CUImage[]>FakeData.Images;
                    let singleImageArray = images.filter(imageItem => imageItem.id === id)[0];
                    let singleImageForId = singleImageArray ? singleImageArray : null;
                    
                    if (singleImageForId) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({
                                status: 200, body: singleImageForId
                            })
                        ));
                    } else {
                        connection.mockError(new MockError(
                            new ResponseOptions({ status: 400, statusText: `No Image`, body: `Sorry Bro`, type: ResponseType.Error })
                        ));
                    }
                }

            }, 50);

        });

        return new Http(backend, options);
    },
    deps: [MockBackend, BaseRequestOptions]
};