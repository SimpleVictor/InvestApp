import { Routes, RouterModule } from '@angular/router';
import {OutputGraphComponent} from "./outputgraph.component";

export const routes: Routes = [
    { path: 'final', component: OutputGraphComponent }
];

export const routing = RouterModule.forChild(routes);
