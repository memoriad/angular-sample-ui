import { Routes } from '@angular/router';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { IndexComponent } from './components/index/index.component';

export const appRoutes: Routes = [
    {
        path: '',
        component: IndexComponent
    },
    {
        path: 'create',
        component: CreateComponent
    },
    {
        path: 'article/:id',
        component: EditComponent
    }
];