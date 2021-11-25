import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
//Se der pau no form mudar para antes do CartService esta linha abaixo
//no passo a passo ele colocou antes, mas resolvi mudar para testar se a posicao
//influencia.
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  })

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {}

  onSubmit(): void {
    //Processa os dados do checkout
    this.items = this.cartService.clearCart();
    console.warn('Seus pedidos foram enviados', this.checkoutForm.value);
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
  }

}
