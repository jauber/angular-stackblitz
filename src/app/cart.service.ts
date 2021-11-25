import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  // Adicionar produtos ao carrinho
  addtoCart(product: Product){
    this.items.push(product);
  }
  // Retornando os itens do carrinho
  getItems(){
    return this.items;
  }

  // Limpando os itens do carrinho
  clearCart(){
    this.items = [];
    return this.items;
  }

  // Obtendo os preços de postagem
  getShippingPrices(){
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  constructor(
    private http: HttpClient
  ) {}
}
