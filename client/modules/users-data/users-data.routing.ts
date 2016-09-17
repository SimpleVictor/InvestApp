import { Routes, RouterModule } from '@angular/router';

import {UsersDataComponent} from "./users-data.component";

export const routes: Routes = [
    { path: 'users', component: UsersDataComponent}
];

export const routing = RouterModule.forChild(routes);
