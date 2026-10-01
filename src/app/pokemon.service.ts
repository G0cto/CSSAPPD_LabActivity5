import { Injectable, signal, computed } from '@angular/core';

export interface Pokemon {
  id: number;
  name: string;
  region: string;
  type: string;
  heldItem: string;
  description: string;
}

export interface ShopItem {
  id: number;
  name: string;
  price: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // ==========================================
  // POKEMON DATA
  // ==========================================

  pokemon = signal<Pokemon[]>([
    {
      id: 1,
      name: 'Charizard',
      region: 'Kanto',
      type: 'Fire / Flying',
      heldItem: 'Charcoal',
      description: 'A powerful Pokémon that can breathe intense flames.'
    },

    {
      id: 2,
      name: 'Gengar',
      region: 'Kanto',
      type: 'Ghost / Poison',
      heldItem: 'Spell Tag',
      description: 'A mysterious Pokémon that hides in darkness.'
    },

    {
      id: 3,
      name: 'Typhlosion',
      region: 'Johto',
      type: 'Fire',
      heldItem: 'Charcoal',
      description: 'A powerful Pokémon that can create intense flames.'
    },

    {
      id: 4,
      name: 'Ampharos',
      region: 'Johto',
      type: 'Electric',
      heldItem: 'Magnet',
      description: 'An Electric-type Pokémon with a bright tail.'
    },

    {
      id: 5,
      name: 'Blaziken',
      region: 'Hoenn',
      type: 'Fire / Fighting',
      heldItem: 'Black Belt',
      description: 'A powerful Pokémon that specializes in kicking attacks.'
    },

    {
      id: 6,
      name: 'Gardevoir',
      region: 'Hoenn',
      type: 'Psychic / Fairy',
      heldItem: 'Twisted Spoon',
      description: 'A Pokémon capable of powerful psychic abilities.'
    }
  ]);


  // ==========================================
  // POKEMART DATA
  // ==========================================

  shopItems = signal<ShopItem[]>([
    {
      id: 1,
      name: 'Poké Ball',
      price: 200,
      description: 'Used to catch Pokémon.'
    },

    {
      id: 2,
      name: 'Great Ball',
      price: 600,
      description: 'A better Poké Ball with a higher catch rate.'
    },

    {
      id: 3,
      name: 'Ultra Ball',
      price: 1200,
      description: 'A very effective Poké Ball.'
    },

    {
      id: 4,
      name: 'Potion',
      price: 300,
      description: 'Restores HP.'
    },

    {
      id: 5,
      name: 'Super Potion',
      price: 700,
      description: 'Restores more HP than a Potion.'
    },

    {
      id: 6,
      name: 'Hyper Potion',
      price: 1200,
      description: 'Restores a large amount of HP.'
    },

    {
      id: 7,
      name: 'Max Potion',
      price: 2500,
      description: 'Fully restores HP.'
    },

    {
      id: 8,
      name: 'Antidote',
      price: 100,
      description: 'Cures poison.'
    },

    {
      id: 9,
      name: 'Revive',
      price: 1500,
      description: 'Revives a fainted Pokémon.'
    },

    {
      id: 10,
      name: 'Full Heal',
      price: 600,
      description: 'Cures status conditions.'
    }
  ]);


  // ==========================================
  // CART STATE
  // ==========================================

  private cartItems = signal<ShopItem[]>([]);

  // Components can read the cart,
  // but cannot directly modify it.
  cart = this.cartItems.asReadonly();


  // ==========================================
  // COMPUTED TOTAL
  // ==========================================

  totalPrice = computed(() =>
    this.cartItems().reduce(
      (sum, item) => sum + item.price,
      0
    )
  );


  // ==========================================
  // ADD ITEM TO CART
  // ==========================================

  addToCart(product: ShopItem) {

    this.cartItems.update(current => [
      ...current,
      product
    ]);

  }


  // ==========================================
  // CLEAR CART
  // ==========================================

  clearCart() {

    this.cartItems.set([]);

  }

}