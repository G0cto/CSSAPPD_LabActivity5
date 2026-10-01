import { Injectable, signal, computed } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  region: string;
  type: string;
  heldItem: string;
  description: string;
  image: string;
}

export interface ShopItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // POKEMON DATA
// POKEMON DATA
pokemon = signal<Pokemon[]>([
  {
    id: 1,
    name: 'Charizard',
    region: 'Kanto',
    type: 'Fire / Flying',
    heldItem: 'Charcoal',
    description: 'A powerful Pokémon that can breathe intense flames.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif'
  },

  {
    id: 2,
    name: 'Pikachu',
    region: 'Kanto',
    type: 'Electric',
    heldItem: 'Light Ball',
    description: 'A cute Pokémon that can generate electricity.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif'
  },

  {
    id: 3,
    name: 'Chikorita',
    region: 'Johto',
    type: 'Grass',
    heldItem: 'Miracle Seed',
    description: 'A Grass-type Pokémon with a sweet scent.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/152.gif'
  },

  {
    id: 4,
    name: 'Cyndaquil',
    region: 'Johto',
    type: 'Fire',
    heldItem: 'Charcoal',
    description: 'A powerful Pokémon that can create intense flames.',
    image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/155.gif'
  },

  {
    id: 5,
    name: 'Treecko',
    region: 'Hoenn',
    type: 'Grass',
    heldItem: 'Black Belt',
    description: 'A Grass-type Pokémon with a powerful tail that helps it sense humidity.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/252.gif'
  },

  {
    id: 6,
    name: 'Gardevoir',
    region: 'Hoenn',
    type: 'Psychic / Fairy',
    heldItem: 'Twisted Spoon',
    description: 'A Pokémon capable of powerful psychic abilities.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/282.gif'
  }
]);

  // POKEMART DATA
shopItems = signal<ShopItem[]>([
  {
    id: 1,
    name: 'Poké Ball',
    price: 200,
    description: 'Used to catch wild Pokémon.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'
  },

  {
    id: 2,
    name: 'Great Ball',
    price: 600,
    description: 'A better Poké Ball with a higher catch rate.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png'
  },

  {
    id: 3,
    name: 'Ultra Ball',
    price: 1200,
    description: 'A very effective Poké Ball.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png'
  },

  {
    id: 4,
    name: 'Potion',
    price: 300,
    description: 'Restores HP.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png'
  },

  {
    id: 5,
    name: 'Super Potion',
    price: 700,
    description: 'Restores more HP than a Potion.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png'
  },

  {
    id: 6,
    name: 'Hyper Potion',
    price: 1200,
    description: 'Restores a large amount of HP.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png'
  },

  {
    id: 7,
    name: 'Max Potion',
    price: 2500,
    description: 'Fully restores a Pokémon’s HP.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png'
  },

  {
    id: 8,
    name: 'Antidote',
    price: 100,
    description: 'Cures a Pokémon from poison.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/antidote.png'
  },

  {
    id: 9,
    name: 'Revive',
    price: 1500,
    description: 'Revives a fainted Pokémon.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png'
  },

  {
    id: 10,
    name: 'Full Heal',
    price: 600,
    description: 'Cures all status conditions.',
    image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-heal.png'
  }
]);

  // CART STATE
  private cartItems = signal<ShopItem[]>([]);

  // Components can read the cart, but cannot directly modify it.
  cart = this.cartItems.asReadonly();


  // COMPUTED TOTAL
  totalPrice = computed(() =>
    this.cartItems().reduce(
      (sum, item) => sum + item.price,
      0
    )
  );


  // ADD ITEM TO CART
  addToCart(product: ShopItem) {

    this.cartItems.update(current => [
      ...current,
      product
    ]);

  }



  // CLEAR CART
  clearCart() {

    this.cartItems.set([]);

  }

}