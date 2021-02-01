import { Routes, RouterModule} from '@angular/router';

import { CrearComponent} from './components/crear/crear.component';
import { ListarComponent} from './components/listar/listar.component';

const appRoutes: Routes = [
    {path:'', component: CrearComponent},
    {path:'Crear', component: CrearComponent},
    {path:'Listar', component: ListarComponent},
];

export const routing = RouterModule.forRoot(appRoutes)