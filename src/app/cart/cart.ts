import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class Cart {

  pokemonService = inject(PokemonService);

}