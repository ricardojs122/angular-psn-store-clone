import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {
  jogoDetalhe: any = {};

  constructor(private route: ActivatedRoute) {}



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const jogoIdParam = params.get('id');
      if (jogoIdParam !== null) {
        const jogoId = +jogoIdParam;
        this.carregarDetalhesDoJogo(jogoId);
      }
    });
  }

  carregarDetalhesDoJogo(jogoId: number) {

		if (jogoId === 1) {
			this.jogoDetalhe = {
				id: 1,
				cover: 'assets/SPIDER-MAN2.avif',
				label: 'DIGITAL',
				type: 'EXCLUSIVO PS5',
				price: 'R$ 399,50',
				description: 'Jogue como o icônico Homem-Aranha em uma emocionante aventura exclusiva para o PS5. Balance pela cidade de Nova York, lute contra vilões famosos e descubra uma história emocionante.'
			};
		} else if (jogoId === 2) {
			this.jogoDetalhe = {
				id: 2,
				cover: 'assets/PROMO.avif',
				label: 'APROVEITE',
				priceCall: 'ECONOMIZE AGORA',
				price: '',
				description: 'Aproveite grandes descontos em uma variedade de jogos incríveis. Esta é a oportunidade perfeita para expandir sua coleção de jogos sem quebrar o banco.'
			};
		} else if (jogoId === 3) {
			this.jogoDetalhe = {
				id: 3,
				cover: 'assets/RE4SW.avif',
				label: 'NOVA DLC',
				type: 'DIGITAL | PS5',
				priceCall: 'NOVA DLC DESTINOS SEPARADOS',
				price: 'R$ 53,90',
				description: ' Experimente o clássico de survival horror com gráficos aprimorados e conteúdo adicional. Enfrente hordas de inimigos enquanto busca a filha do presidente em uma vila sombria.'
			};
		} else if (jogoId === 4) {
			this.jogoDetalhe = {
				id: 4,
				cover: 'assets/MK1.avif',
				label: 'PRÉ VENDA',
				type: 'DIGITAL | PS5',
				priceCall: 'GARANTA JÁ O SEU FATALITY',
				price: 'R$ 369,99',
				description: ' Garanta já o seu lugar na luta e prepare-se para fatalities brutais. Mortal Kombat 1 promete combates sangrentos e personagens icônicos.'
			};
		} else if (jogoId === 5) {
			this.jogoDetalhe = {
				id: 5,
				cover: 'assets/baldur.avif',
				label: 'NOVO',
				type: 'DIGITAL | PS5',
				price: 'R$ 340,90',
				priceCall: 'VAMOS SE AVENTURAR',
				description: 'Embarque em uma aventura épica de RPG em um mundo de fantasia repleto de magia e mistério. Junte-se a um grupo de heróis e explore terras perigosas.'
			};
		} else if (jogoId === 6) {
			this.jogoDetalhe = {
				id: 6,
				cover: 'assets/lop.avif',
				label: 'NOVO',
				type: 'DIGITAL | PS4 PS5',
				price: 'R$ 349,90',
				description: ' Adentre um mundo sombrio e misterioso inspirado na clássica história de Pinóquio, mas com uma reviravolta sombria. Em "Lies of P", você controla um herói corajoso em uma jornada épica para descobrir a verdade por trás das mentiras. Enfrente inimigos implacáveis, explore cenários encantadores e tome decisões que moldarão o destino do seu personagem. Este jogo oferece uma experiência "souls-like" desafiadora, onde cada batalha é uma luta pela sobrevivência. Prepare-se para uma aventura intensa e emocionante enquanto desvenda os segredos por trás das mentiras.'
			};
		} else if (jogoId === 7) {
			this.jogoDetalhe = {
				id: 7,
				cover: 'assets/ufc.avif',
				label: 'EXCLUSIVO',
				type: 'DIGITAL | PS5',
				price: 'R$ 369,99',
				description: 'Entre no octógono e lute como um verdadeiro campeão do UFC. Escolha entre uma variedade de lutadores e prove que você é o melhor no ringue.'
			};
		} else if (jogoId === 8) {
			this.jogoDetalhe = {
				id: 8,
				cover: 'assets/likeadragon.avif',
				label: 'NOVO',
				type: 'DIGITAL | PS3 PS4 PS5',
				price: 'R$ 369,99',
				description: 'Explore o submundo do crime no Japão enquanto assume o papel de Ichiban Kasuga, um ex-membro da Yakuza. Lute, faça amizades e embarque em uma jornada inesquecível.'
			};
		}
		function voltarPagina() {
			window.history.back();
		}
  }
}
