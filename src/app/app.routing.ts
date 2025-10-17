import {Routes, RouterModule} from '@angular/router';

//Componentes
import { HomeComponent } from './components/home/home.component';

//Pages
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    {path: '',
     component: PagesComponent,
     children: [
        {path: 'about', component: AboutComponent},
        {path: '', redirectTo:'/home', pathMatch: 'full'},    
     ]
    },
    {path: 'home', component: HomeComponent},
    {path: '**', component: Error404Component}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes,{ useHash: true });