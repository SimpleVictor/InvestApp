import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import {UsersDataModule} from "../users-data/users-data.module";

export const routes: Routes = [
    { path: 'home', component: HomeComponent }
];

export const routing = RouterModule.forChild(routes);
