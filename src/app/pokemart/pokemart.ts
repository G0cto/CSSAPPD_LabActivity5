import { Component, inject } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemart',
  standalone: true,
  imports: [],
  templateUrl: './pokemart.html',
  styleUrl: './pokemart.css'
})
export class Pokemart {

  pokemonService = inject(PokemonService);

}
