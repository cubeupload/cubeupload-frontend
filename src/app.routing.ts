import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';

const appRoutes : Routes = 
[
    {
        path : '/upload',
        component : UploadComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/upload',
        pathMatch: 'full'
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);