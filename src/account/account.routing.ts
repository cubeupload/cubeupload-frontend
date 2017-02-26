import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { AccountComponent } from './account.component';

const appRoutes : Routes = 
[
    {
        path : 'account',
        component : AccountComponent
    },
];

export const appRoutingProviders: any[] = [];
export const accountRouting: ModuleWithProviders = RouterModule.forChild(appRoutes);