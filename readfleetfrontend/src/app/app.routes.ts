import { Routes } from '@angular/router';
import { Shell } from './components/shell/shell';

export const routes: Routes = [
    {
        path: '',
        component: Shell,
        children: [
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
            {
                path: 'dashboard',
                loadComponent: () => import('./components/dashboard/dashboard').then(m => m.Dashboard)
            },
            {
                path: 'fleet',
                loadComponent: () => import('./components/fleet/fleet').then(m => m.Fleet)   
            },
            {
                path: 'books',
                loadComponent: () => import('./components/books/books').then(m => m.Books)   
            },
            {
                path: 'missions',
                loadComponent: () => import('./components/missions/missions').then(m => m.Missions)   
            },
            {
                path: 'achievements',
                loadComponent: () => import('./components/achievements/achievements').then(m => m.Achievements)   
            },
            {
                path: 'battles',
                loadComponent: () => import('./components/battles/battles').then(m => m.Battles)   
            },
            {
                path: 'home-base',
                loadComponent: () => import('./components/home-base/home-base').then(m => m.HomeBase)   
            },
        ]
    }
];
