import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    // Primeiro obtenha o product id da rota atual
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Descubra o product que corresponde ao id fornecido pela rota
    this.product = products.find(product => product.id === productIdFromRoute);
    // Aqui ele usa uma função arrow, onde caso encontre estritamente o valor e tipo
    // retorna o objeto product encontrado e então associa ao this.product.
  }

  addToCart(product: Product){
    this.cartService.addtoCart(product);
    window.alert('Seu produto foi adicionado ao carrinho!');
  }

}
