import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
  flavor: string; // 👈 campo adicionado
  image?: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    // --- Receitas Originais e as 10 Primeiras Adicionadas ---
    {
      id: 1,
      name: 'Bolo de Chocolate',
      ingredients: ['3 ovos', '1 xícara de açúcar', '2 xícaras de farinha de trigo', '1 xícara de chocolate em pó', '1/2 xícara de óleo', '1 xícara de água quente', '1 colher de sopa de fermento em pó'],
      instructions: 'Em uma tigela, bata os ovos com o açúcar até obter um creme claro. Adicione o óleo e misture. Peneire a farinha e o chocolate em pó, adicionando à mistura alternadamente com a água quente. Por último, incorpore o fermento. Despeje em uma forma untada e enfarinhada e asse em forno pré-aquecido a 180°C por cerca de 40 minutos.',
      flavor: 'Doce',
      image: 'assets/img/bolo-de-chocolate.png'
    },
    {
      id: 2,
      name: 'Macarrão à Bolonhesa',
      ingredients: ['500g de macarrão', '500g de carne moída', '1 cebola picada', '2 dentes de alho picados', '800g de tomate pelado', 'Sal e pimenta a gosto', 'Azeite', 'Queijo parmesão ralado'],
      instructions: 'Em uma panela, aqueça o azeite e refogue a cebola e o alho. Adicione a carne moída e cozinhe até dourar. Junte o tomate pelado, tempere com sal e pimenta e deixe cozinhar em fogo baixo por cerca de 30 minutos. Cozinhe o macarrão conforme as instruções da embalagem. Sirva o macarrão com o molho bolonhesa por cima e queijo parmesão.',
      flavor: 'Salgado',
      image: 'assets/img/macarrao-a-bolonhesa.png'
    },
    {
      id: 3,
      name: 'Frango Grelhado com Legumes',
      ingredients: ['4 filés de frango', '1 abobrinha', '1 pimentão vermelho', '1 cebola roxa', 'Azeite', 'Sal, pimenta e ervas a gosto (alecrim, tomilho)'],
      instructions: 'Tempere os filés de frango com sal, pimenta e ervas. Corte os legumes em pedaços médios e tempere com azeite, sal e pimenta. Grelhe o frango em uma frigideira quente ou churrasqueira até dourar e cozinhar por completo. Grelhe os legumes até ficarem macios e com marcas de grelha. Sirva o frango com os legumes grelhados.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg'
    },
    {
      id: 4,
      name: 'Salada Caesar',
      ingredients: ['1 alface romana', '1 xícara de croutons', '1/2 xícara de queijo parmesão ralado', '1 peito de frango grelhado e fatiado', 'Molho Caesar a gosto'],
      instructions: 'Lave e rasgue as folhas de alface. Em uma saladeira grande, misture a alface, os croutons e metade do queijo parmesão. Adicione o frango fatiado. Regue com o molho Caesar a gosto, misture bem e finalize com o restante do queijo parmesão.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg'
    },
    {
      id: 5,
      name: 'Pão de Queijo',
      ingredients: ['500g de polvilho azedo', '250ml de leite', '100ml de óleo', '100ml de água', '2 ovos', '200g de queijo minas padrão ralado', 'Sal a gosto'],
      instructions: 'Ferva o leite, a água, o óleo e o sal. Despeje essa mistura sobre o polvilho em uma tigela e misture bem com uma colher. Deixe amornar. Adicione os ovos um a um, sovando a massa. Por último, incorpore o queijo ralado. Faça bolinhas e coloque em uma assadeira. Asse em forno pré-aquecido a 200°C por cerca de 25 minutos ou até dourar.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/1329061/pexels-photo-1329061.jpeg'
    },
    {
      id: 6,
      name: 'Feijoada Simples',
      ingredients: ['500g de feijão preto', '200g de linguiça calabresa', '200g de carne seca', '1 cebola picada', '3 dentes de alho picados', 'Folhas de louro', 'Sal e pimenta a gosto', 'Cheiro-verde picado'],
      instructions: 'Deixe a carne seca de molho de um dia para o outro, trocando a água. Cozinhe o feijão na panela de pressão com as folhas de louro. Em outra panela, refogue a cebola e o alho. Adicione a calabresa e a carne seca dessalgada e cozinhe. Junte o feijão cozido com o caldo e deixe apurar em fogo baixo. Tempere com sal e pimenta e finalize com cheiro-verde. Sirva com arroz, couve e farofa.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/10312015/pexels-photo-10312015.jpeg'
    },
    {
      id: 7,
      name: 'Omelete de Queijo e Presunto',
      ingredients: ['3 ovos', '2 fatias de presunto picado', '2 fatias de queijo picado', '1 colher de sopa de leite', 'Sal e pimenta a gosto', 'Salsinha picada', 'Manteiga ou azeite'],
      instructions: 'Em uma tigela, bata os ovos com o leite, sal e pimenta. Aqueça uma frigideira antiaderente com um pouco de manteiga ou azeite. Despeje os ovos batidos. Quando começar a firmar nas bordas, espalhe o queijo e o presunto sobre metade do omelete. Dobre a outra metade por cima e cozinhe por mais um minuto. Polvilhe com salsinha e sirva.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg'
    },
    {
      id: 8,
      name: 'Vitamina de Banana',
      ingredients: ['2 bananas maduras', '250ml de leite', '1 colher de sopa de aveia', 'Mel ou açúcar a gosto (opcional)'],
      instructions: 'Descasque as bananas e coloque-as no liquidificador. Adicione o leite e a aveia. Se desejar um sabor mais doce, acrescente o mel ou açúcar. Bata tudo até obter uma mistura homogênea e cremosa. Sirva imediatamente.',
      flavor: 'Doce',
      image: 'https://images.pexels.com/photos/1482803/pexels-photo-1482803.jpeg'
    },
    {
      id: 9,
      name: 'Strogonoff de Carne',
      ingredients: ['500g de tiras de filé mignon ou alcatra', '1 lata de creme de leite', '1/2 xícara de ketchup', '2 colheres de sopa de mostarda', '1 cebola picada', '2 colheres de sopa de manteiga', 'Sal e pimenta a gosto', 'Champignon fatiado a gosto'],
      instructions: 'Tempere a carne com sal e pimenta. Em uma panela, derreta a manteiga e doure a cebola. Adicione a carne e frite até dourar. Junte o ketchup, a mostarda e o champignon, misturando bem. Abaixe o fogo e adicione o creme de leite sem deixar ferver. Mexa até obter um molho cremoso e sirva com arroz e batata palha.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/5333418/pexels-photo-5333418.jpeg'
    },
    {
      id: 10,
      name: 'Panqueca Americana',
      ingredients: ['1 e 1/4 xícara de farinha de trigo', '1 colher de sopa de açúcar', '1 colher de sopa de fermento em pó', '1 pitada de sal', '1 ovo', '1 xícara de leite', '2 colheres de sopa de manteiga derretida'],
      instructions: 'Em uma tigela, misture a farinha, o açúcar, o fermento e o sal. Em outra tigela, bata o ovo e adicione o leite e a manteiga derretida. Despeje os líquidos sobre os ingredientes secos e misture apenas até incorporar (não misture demais). Aqueça uma frigideira antiaderente em fogo médio e despeje porções da massa. Cozinhe até formar bolhas na superfície, vire e cozinhe do outro lado até dourar. Sirva com mel, frutas ou a cobertura de sua preferência.',
      flavor: 'Doce',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg'
    },
    // --- As 20 Receitas Adicionais ---
    {
      id: 11,
      name: 'Mousse de Maracujá',
      ingredients: ['1 lata de leite condensado', '1 lata de creme de leite', '1 lata de suco de maracujá concentrado (use a lata como medida)'],
      instructions: 'No liquidificador, bata o leite condensado e o creme de leite por um minuto. Adicione o suco de maracujá e bata até obter uma mistura homogênea e cremosa. Despeje em taças individuais ou em um refratário e leve à geladeira por pelo menos 4 horas antes de servir.',
      flavor: 'Doce',
      image: 'https://images.pexels.com/photos/8258283/pexels-photo-8258283.jpeg'
    },
    {
      id: 12,
      name: 'Risoto de Cogumelos',
      ingredients: ['1 xícara de arroz arbóreo', '200g de cogumelos frescos (Paris ou Shiitake)', '1/2 cebola picada', '1 litro de caldo de legumes quente', '1/2 xícara de vinho branco seco', '2 colheres de sopa de manteiga', '50g de queijo parmesão ralado', 'Azeite, sal e pimenta do reino'],
      instructions: 'Em uma panela, aqueça um fio de azeite e refogue os cogumelos fatiados até dourarem. Reserve. Na mesma panela, adicione 1 colher de manteiga e refogue a cebola. Junte o arroz e frite por um minuto. Adicione o vinho e mexa até evaporar. Vá adicionando o caldo de legumes quente, uma concha por vez, mexendo sempre, até que o arroz esteja "al dente". Incorpore os cogumelos, o restante da manteiga e o queijo parmesão. Tempere com sal e pimenta e sirva imediatamente.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/921374/pexels-photo-921374.jpeg'
    },
    {
      id: 13,
      name: 'Salpicão de Frango',
      ingredients: ['500g de peito de frango cozido e desfiado', '1 cenoura ralada', '1 lata de milho verde escorrido', '1 maçã verde em cubos', '1/2 xícara de uvas passas (opcional)', '1 xícara de maionese', 'Batata palha a gosto', 'Sal e cheiro-verde picado'],
      instructions: 'Em uma tigela grande, misture o frango desfiado, a cenoura, o milho, a maçã e as uvas passas. Adicione a maionese e misture bem até que todos os ingredientes estejam incorporados. Tempere com sal e cheiro-verde a gosto. Leve à geladeira por pelo menos 30 minutos. Sirva frio, coberto com batata palha.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg'
    },
    {
      id: 14,
      name: 'Lasanha à Bolonhesa',
      ingredients: ['1 pacote de massa para lasanha (pré-cozida)', '500g de carne moída', '500g de queijo muçarela fatiado', '400g de presunto fatiado', '1 porção de molho à bolonhesa', '1 porção de molho branco (bechamel)', 'Queijo parmesão ralado para gratinar'],
      instructions: 'Pré-aqueça o forno a 180°C. Em um refratário, comece com uma camada de molho à bolonhesa. Cubra com uma camada de massa, depois presunto, queijo e molho branco. Repita as camadas até acabarem os ingredientes, finalizando com molho branco e queijo parmesão ralado. Leve ao forno por cerca de 30-40 minutos ou até a superfície estar dourada e borbulhante.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/11999925/pexels-photo-11999925.jpeg'
    },
    {
      id: 15,
      name: 'Coxinha de Frango',
      ingredients: ['1kg de farinha de trigo', '1 litro de caldo do cozimento do frango', '2 colheres de sopa de manteiga', 'Sal a gosto', '500g de frango cozido e desfiado para o recheio', 'Ovos e farinha de rosca para empanar', 'Óleo para fritar'],
      instructions: 'Aqueça o caldo de frango com a manteiga e o sal. Quando ferver, adicione a farinha de trigo de uma só vez, mexendo vigorosamente até a massa desgrudar do fundo da panela. Sove a massa ainda morna. Abra pequenas porções da massa na mão, recheie com o frango desfiado temperado, modele no formato de coxinha. Passe as coxinhas em ovos batidos e depois na farinha de rosca. Frite em óleo quente até dourar.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/10748782/pexels-photo-10748782.jpeg'
    },
    {
      id: 16,
      name: 'Escondidinho de Carne Seca',
      ingredients: ['500g de carne seca dessalgada e desfiada', '1kg de mandioca cozida e amassada', '1 cebola picada', '2 colheres de sopa de manteiga de garrafa', '1/2 xícara de leite de coco', 'Queijo coalho ralado a gosto', 'Sal, pimenta e cheiro-verde'],
      instructions: 'Refogue a cebola na manteiga de garrafa e junte a carne seca desfiada. Tempere com pimenta e cheiro-verde. Reserve. Em outra panela, misture a mandioca amassada com um pouco de manteiga e o leite de coco até formar um purê cremoso. Tempere com sal. Em um refratário, coloque a carne seca refogada e cubra com o purê de mandioca. Polvilhe queijo coalho por cima e leve ao forno pré-aquecido a 200°C para gratinar.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg'
    },
    {
      id: 17,
      name: 'Pizza Margherita',
      ingredients: ['1 disco de massa para pizza', '1/2 xícara de molho de tomate', '200g de queijo muçarela de búfala ou comum', 'Tomates cereja cortados ao meio', 'Folhas de manjericão fresco', 'Azeite extra virgem', 'Orégano e sal a gosto'],
      instructions: 'Pré-aqueça o forno na temperatura máxima. Abra a massa em uma forma. Espalhe o molho de tomate sobre a massa, deixando uma borda. Distribua o queijo muçarela, os tomates cereja e tempere com sal e orégano. Regue com um fio de azeite. Leve ao forno por 10-15 minutos ou até a massa estar crocante e o queijo derretido. Retire do forno e finalize com folhas de manjericão fresco.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg'
    },
    {
      id: 18,
      name: 'Torta de Limão',
      ingredients: ['1 pacote de biscoito maisena triturado', '100g de manteiga derretida', '1 lata de leite condensado', '1/2 xícara de suco de limão', 'Raspas de limão', '3 claras de ovo', '3 colheres de sopa de açúcar para o merengue'],
      instructions: 'Misture o biscoito triturado com a manteiga até formar uma farofa úmida. Forre o fundo e as laterais de uma forma de torta e asse por 10 minutos a 180°C. Para o recheio, misture o leite condensado com o suco e as raspas de limão e despeje sobre a massa. Para o merengue, bata as claras em neve e adicione o açúcar aos poucos até formar picos firmes. Cubra a torta com o merengue e leve ao forno novamente apenas para dourar.',
      flavor: 'Doce',
      image: 'https://images.pexels.com/photos/2067399/pexels-photo-2067399.jpeg'
    },
    {
      id: 19,
      name: 'Arroz de Forno Cremoso',
      ingredients: ['3 xícaras de arroz cozido', '200g de presunto em cubos', '200g de queijo muçarela em cubos', '1 lata de milho verde', '1 lata de ervilha', '1 copo de requeijão cremoso', '1/2 xícara de queijo parmesão ralado'],
      instructions: 'Em uma tigela, misture o arroz cozido, presunto, queijo muçarela, milho e ervilha. Adicione o requeijão cremoso e misture delicadamente até incorporar. Transfira para um refratário, polvilhe com queijo parmesão ralado por cima. Leve ao forno pré-aquecido a 180°C por cerca de 20 minutos ou até o queijo derreter e gratinar.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/8118431/pexels-photo-8118431.jpeg'
    },
    {
      id: 20,
      name: 'Salmão Grelhado com Alcaparras',
      ingredients: ['2 postas de salmão', 'Suco de 1 limão', 'Sal e pimenta do reino a gosto', '2 colheres de sopa de azeite', '2 colheres de sopa de manteiga', '2 colheres de sopa de alcaparras'],
      instructions: 'Tempere o salmão com sal, pimenta e suco de limão. Aqueça o azeite em uma frigideira antiaderente e grelhe o salmão por cerca de 4-5 minutos de cada lado. Retire o salmão e reserve. Na mesma frigideira, derreta a manteiga e adicione as alcaparras, refogando por 1 minuto. Regue o molho sobre as postas de salmão e sirva.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg'
    },
    {
      id: 21,
      name: 'Moqueca Baiana',
      ingredients: ['1kg de peixe branco em postas (cação, robalo)', '2 tomates picados', '1 pimentão amarelo picado', '1 pimentão vermelho picado', '2 cebolas picadas', 'Coentro e cebolinha a gosto', '400ml de leite de coco', '2 colheres de sopa de azeite de dendê', 'Suco de 1 limão', 'Sal e pimenta'],
      instructions: 'Tempere o peixe com sal, pimenta e limão. Em uma panela de barro, faça uma camada com metade da cebola, tomate e pimentões. Acomode as postas de peixe sobre essa camada. Cubra com o restante dos vegetais. Regue com o leite de coco e o azeite de dendê. Cozinhe em fogo médio por cerca de 20-25 minutos. Finalize com coentro e cebolinha picados. Sirva com arroz branco e pirão.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/14881335/pexels-photo-14881335.jpeg'
    },
    {
      id: 22,
      name: 'Bife à Parmegiana',
      ingredients: ['4 bifes de filé mignon ou contrafilé', 'Sal e alho para temperar', '2 ovos batidos', 'Farinha de trigo e farinha de rosca para empanar', 'Óleo para fritar', 'Molho de tomate', '250g de queijo muçarela fatiado', 'Queijo parmesão ralado'],
      instructions: 'Tempere os bifes com sal e alho. Passe cada bife na farinha de trigo, depois nos ovos batidos e por último na farinha de rosca. Frite em óleo quente até dourar ambos os lados. Disponha os bifes em um refratário, cubra com molho de tomate, fatias de muçarela e polvilhe parmesão. Leve ao forno a 200°C até o queijo derreter e gratinar.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/1352270/pexels-photo-1352270.jpeg'
    },
    {
      id: 23,
      name: 'Cuscuz Nordestino com Ovo',
      ingredients: ['1 xícara de flocão de milho', '1/2 xícara de água', 'Sal a gosto', '2 ovos', 'Manteiga de garrafa ou comum'],
      instructions: 'Em uma tigela, umedeça o flocão de milho com a água e o sal. Deixe hidratar por 10 minutos. Coloque a massa na cuscuzeira e cozinhe no vapor por cerca de 15 minutos. Enquanto isso, frite os ovos em uma frigideira com manteiga. Sirva o cuscuz quente com os ovos fritos por cima e um pouco mais de manteiga derretida.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/127160/pexels-photo-127160.jpeg'
    },
    {
      id: 24,
      name: 'Pudim de Leite Condensado',
      ingredients: ['1 lata de leite condensado', 'A mesma medida (da lata) de leite', '3 ovos', '1 xícara de açúcar para a calda'],
      instructions: 'Em uma forma de pudim, derreta o açúcar em fogo baixo até virar um caramelo dourado. Espalhe por toda a forma e reserve. No liquidificador, bata o leite condensado, o leite e os ovos por 3 minutos. Despeje a mistura na forma caramelizada. Asse em banho-maria em forno pré-aquecido a 180°C por cerca de 1 hora e 30 minutos. Deixe esfriar completamente para desenformar.',
      flavor: 'Doce',
      image: 'https://images.pexels.com/photos/5945847/pexels-photo-5945847.jpeg'
    },
    {
      id: 25,
      name: 'Bruschetta de Tomate e Manjericão',
      ingredients: ['4 fatias de pão italiano', '2 tomates maduros sem sementes, em cubos', '1 dente de alho', 'Folhas de manjericão fresco', 'Azeite extra virgem', 'Sal e pimenta do reino'],
      instructions: 'Toste as fatias de pão no forno ou em uma grelha. Esfregue levemente o dente de alho em cada fatia de pão tostado. Em uma tigela, misture os tomates picados, as folhas de manjericão rasgadas, sal e pimenta. Regue com azeite e misture. Coloque a mistura de tomate sobre as fatias de pão e sirva imediatamente.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/4057761/pexels-photo-4057761.jpeg'
    },
    {
      id: 26,
      name: 'Sopa de Abóbora com Gengibre',
      ingredients: ['1kg de abóbora cabotiá em cubos', '1 cebola picada', '1 colher de sopa de gengibre fresco ralado', '1 litro de caldo de legumes', 'Azeite', 'Sal e pimenta do reino', 'Salsinha picada para decorar'],
      instructions: 'Em uma panela grande, aqueça o azeite e refogue a cebola até ficar transparente. Adicione o gengibre e refogue por mais um minuto. Junte a abóbora e o caldo de legumes. Cozinhe até a abóbora ficar bem macia. Bata tudo com um mixer ou no liquidificador até obter um creme liso. Volte para a panela, tempere com sal e pimenta e aqueça bem. Sirva com salsinha picada.',
      flavor: 'Salgado e Picante',
      image: 'https://images.pexels.com/photos/539447/pexels-photo-539447.jpeg'
    },
    {
      id: 27,
      name: 'Batata Gratinada',
      ingredients: ['5 batatas grandes fatiadas finamente', '1 lata de creme de leite', '200g de queijo muçarela ralado', '100g de queijo parmesão ralado', 'Sal, pimenta do reino e noz-moscada a gosto'],
      instructions: 'Pré-aqueça o forno a 200°C. Em um refratário untado, faça uma camada com metade das batatas fatiadas. Tempere com sal, pimenta e noz-moscada. Espalhe metade do creme de leite e metade do queijo muçarela. Repita as camadas. Finalize com o queijo parmesão ralado por cima. Cubra com papel alumínio e asse por 30 minutos. Retire o papel e asse por mais 20 minutos ou até dourar.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/1435889/pexels-photo-1435889.jpeg'
    },
    {
      id: 28,
      name: 'Guacamole',
      ingredients: ['2 abacates maduros amassados', '1 tomate sem sementes picado', '1/2 cebola roxa picada', 'Suco de 1 limão', 'Coentro picado a gosto', 'Sal e pimenta do reino'],
      instructions: 'Em uma tigela, amasse os abacates com um garfo, deixando alguns pedaços. Adicione a cebola, o tomate, o coentro e o suco de limão. Misture bem. Tempere com sal e pimenta a gosto. Sirva imediatamente com nachos ou torradas.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/4062276/pexels-photo-4062276.jpeg'
    },
    {
      id: 29,
      name: 'Brownie de Chocolate',
      ingredients: ['200g de chocolate meio amargo picado', '100g de manteiga sem sal', '1 xícara de açúcar', '2 ovos', '1/2 xícara de farinha de trigo', '1/2 xícara de nozes picadas (opcional)'],
      instructions: 'Derreta o chocolate com a manteiga em banho-maria ou no micro-ondas. Em uma tigela, bata os ovos com o açúcar até obter um creme claro. Incorpore a mistura de chocolate derretido. Adicione a farinha e as nozes, misturando delicadamente. Despeje em uma forma quadrada forrada com papel manteiga. Asse em forno pré-aquecido a 180°C por 25-30 minutos (o interior deve ficar úmido).',
      flavor: 'Doce',
      image: 'https://images.pexels.com/photos/4449068/pexels-photo-4449068.jpeg'
    },
    {
      id: 30,
      name: 'Caipirinha',
      ingredients: ['1 limão taiti', '2 colheres de sopa de açúcar', '60ml de cachaça', 'Gelo a gosto'],
      instructions: 'Corte o limão em 8 pedaços, retirando a parte branca do meio. Em um copo baixo, macere os pedaços de limão com o açúcar. Adicione a cachaça e o gelo. Mexa bem ou use uma coqueteleira para misturar. Sirva imediatamente.',
      flavor: 'Doce',
      image: 'https://images.pexels.com/photos/4038850/pexels-photo-4038850.jpeg'
    },
    // --- Receitas Bônus Locais (Salvador/BA) ---
    {
      id: 31,
      name: 'Acarajé',
      ingredients: ['500g de feijão fradinho', '1 cebola grande', 'Sal a gosto', 'Azeite de dendê para fritar', 'Vatapá e camarão seco para rechear'],
      instructions: 'Deixe o feijão de molho de um dia para o outro. Descasque o feijão e bata no liquidificador com a cebola até formar uma massa homogênea. Tempere com sal. Bata a massa com uma colher de pau para incorporar ar e deixá-la fofa. Com uma colher, modele os bolinhos e frite em azeite de dendê quente. Sirva quente com vatapá, camarão seco e salada (pimenta opcional).',
      flavor: 'Salgado e Picante',
      image: 'https://images.pexels.com/photos/5630656/pexels-photo-5630656.jpeg'
    },
    {
      id: 32,
      name: 'Vatapá Baiano',
      ingredients: ['250g de pão francês amanhecido', '500ml de leite de coco', '100g de camarão seco', '50g de castanha de caju', '1 cebola', 'Gengibre ralado a gosto', 'Azeite de dendê', 'Sal e pimenta'],
      instructions: 'Amoleça o pão no leite de coco. Bata no liquidificador com o camarão seco, a castanha, a cebola e o gengibre até virar um creme. Leve ao fogo em uma panela, adicione azeite de dendê a gosto e cozinhe, mexendo sempre, até engrossar e desgrudar do fundo da panela. Tempere com sal e pimenta.',
      flavor: 'Salgado',
      image: 'https://images.pexels.com/photos/17651347/pexels-photo-17651347.jpeg'
    }
  ];

  getAllRecipes(): Observable<Recipe[]> {
    return of(this.recipes);
  }

  getRecipeById(id: number): Observable<Recipe | undefined> {
    return of(this.recipes.find(r => r.id === id));
  }
}