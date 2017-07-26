import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { AccountComponent } from './account.component';

const appRoutes : Routes = 
[
    {
        path : 'account',
        component : AccountComponent,
        data: {
            hideUpload: false
        }
    },
];

export const appRoutingProviders: any[] = [];
export const accountRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);