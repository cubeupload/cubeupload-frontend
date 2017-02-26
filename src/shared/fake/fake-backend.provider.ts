import { ModuleWithProviders } from '@angular/core';
import { fakeBackend } from './fake-backend';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { FakeService } from './fake.service'


export const fakeModuleProvider: any[] = process.env.ENV === 'local' ?
    [
        fakeBackend,
        MockBackend,
        BaseRequestOptions,
        FakeService
        
    ] : [];