import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Pokemon} from './pokemon/pokemon';
import { Pokemart } from './pokemart/pokemart';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {
        path : '',
        component : Home
    },
    {
        path : 'pokemon',
        component : Pokemon 
    },
    {
        path : 'pokemart',
        component : Pokemart
    },
    {
        path : 'cart',
        component : Cart
    },

    {
        path : '**',
        redirectTo : ''
    }
];
