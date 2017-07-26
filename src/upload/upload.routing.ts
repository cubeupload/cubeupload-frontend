import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { UploadComponent } from './upload.component';

const appRoutes : Routes = 
[
    {
        path : '',
        component : UploadComponent,
        data: {
            hideUpload: true
        }
    },
];

export const appRoutingProviders: any[] = [];
export const uploadRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);