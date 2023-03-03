import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public retorno:string = ''
  public escolha:number = 3
  public escolhaMaquina:number = 3

  public placarJogador:number = 0
  public placarMaquina:number = 0

  public imagens:Array<any>=[
    '../../assets/pedra.png',
    '../../assets/papel.png',
    '../../assets/tesoura.png'
  ]

  constructor(){ }

  public escolherSimbolo(resposta:Event):void{ // Função para verificar o retorno dos botões / INICIO

    this.retorno = (<HTMLInputElement> resposta.target).innerHTML // Retorno da escolha do usuario

    this.escolhaMaquina = Math.floor(Math.random()*3) // Configuração da escolha aleatoria da maquina

    if(this.retorno === 'Pedra'){ // Verificando a escolha do usuario / Pedra

      this.escolha = 0 // Atribuindo o indice '0' do array que representa a pedra 

      if(this.escolhaMaquina === 1){ // Verificando a escolha da maquina / Papel

        console.log('Você perdeu') // Resposta da disputa
        this.placarMaquina++

      }
      else if(this.escolhaMaquina === 2){ // Verificando a escolha da maquina / Tesoura

        console.log('Você ganhou') // Resposta da disputa
        this.placarJogador++

      }
      else{ // Verificando a escolha da maquina / Pedra

        console.log('Empate') // Resposta da disputa

      }

    }
    else if(this.retorno === 'Papel'){ // Verificando a escolha do usuario / Papel

      this.escolha = 1 // Atribuindo o indice '0' do array que representa o papel

      if(this.escolhaMaquina === 2){ // Verificando a escolha da maquina / Tesoura

        console.log('Você perdeu') // Resposta da disputa
        this.placarMaquina++


      }else if(this.escolhaMaquina === 0){ // Verificando a escolha da maquina / Pedra

        console.log('Você ganhou') // Resposta da disputa
        this.placarJogador++

      }else{ // Verificando a escolha da maquina / Papel

        console.log('Empate') // Resposta da disputa

      }

    }
    else{ // Verificando a escolha do usuario / Tesoura

      this.escolha = 2 // Atribuindo o indice '0' do array que representa a tesoura

      if(this.escolhaMaquina === 0){ // Verificando a escolha da maquina / Pedra

        console.log('Você perdeu') // Resposta da disputa
        this.placarMaquina++


      }else if(this.escolhaMaquina === 1){ // Verificando a escolha da maquina / Papel

        console.log('Você ganhou') // Resposta da disputa
        this.placarJogador++

      }else{ // Verificando a escolha da maquina / Pedra

        console.log('Empate') // Resposta da disputa

      }

    }

  } // Função para verificar o retorno dos botões / FIM



}
