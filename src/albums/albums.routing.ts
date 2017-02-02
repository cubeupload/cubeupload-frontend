import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate }   from '@angular/router';
import { AlbumsComponent } from './albums.component';

const appRoutes : Routes = 
[
    {
        path : '',
        component : AlbumsComponent
    },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes);