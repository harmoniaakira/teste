# clean-code-javascript

## �ndice
  1. [Introdu��o](#introdu��o)
  2. [Vari�veis](#vari�veis)
  3. [Fun��es](#fun��es)
  4. [Objetos e Estruturas de Dados](#objetos-e-estruturas-de-dados)
  5. [Classes](#classes)
  6. [SOLID](#solid)
  7. [Testes](#testes)
  8. [Concorr�ncia](#concorr�ncia)
  9. [Tratamento de Erros](#tratamento-de-erros)
  10. [Formata��o](#formata��o)
  11. [Coment�rios](#coment�rios)
  12. [Tradu��es](#tradu��es)

## Introdu��o
![Imagem humor�stica da estimativa de qualidade do software baseado na contagem de quantos palavr�es voc� gritou enquanto lia o c�digo.](http://www.osnews.com/images/comics/wtfm.jpg)

Princ�pios da Engenharia de Software, do livro de Robert C. Martin
[*C�digo Limpo*](https://www.amazon.com.br/C%C3%B3digo-Limpo-Habilidades-Pr%C3%A1ticas-Software/dp/8576082675),
adaptados para JavaScript. Isto n�o � um guia de estilos. � um guia para se produzir c�digo [leg�vel, reutiliz�vel e refator�vel](https://github.com/ryanmcdermott/3rs-of-software-architecture) em JavaScript.

Nem todo princ�pio demonstrado deve ser seguido rigorosamente, e ainda menos s�o os que possuem consenso universal. S�o orienta��es e nada mais, entretanto, foram usadas em c�digo durante muitos anos de experi�ncia coletiva pelos autores de *C�digo limpo*.

Nosso of�cio de engenharia de software tem pouco mais de 50 anos e ainda estamos aprendendo muito. Quando a arquitetura de software for t�o velha quanto a pr�pria arquitetura, talvez ent�o tenhamos regras mais r�gidas para seguir. Por enquanto, deixe que estas orienta��es sirvam como crit�rio para se avaliar a qualidade de c�digo JavaScript que tanto voc� e o seu time produzirem.

Mais uma coisa: aprender isto n�o ir�lhe transformar imediatamente em um desenvolvedor de software melhor e trabalhar com eles por muitos anos n�o quer dizer que voc� n�o cometer� erros. Toda por��o de c�digo come�a com um rascunho, como argila molhada sendo moldada em sua forma final. Finalmente, talhamos as imperfei��es quando revisamos com nossos colegas. N�o se bata pelos primeiros rascunhos que ainda precisam de melhorias. Ao inv�s, bata em seu c�digo.

## **Vari�veis**
### Use nomes de vari�veis que tenham significado e sejam pronunci�veis

**Ruim:**
```javascript
const yyyymmdstr = moment().format('YYYY/MM/DD');
```

**Bom:**
```javascript
const currentDate = moment().format('YYYY/MM/DD');
```
**[? voltar ao topo](#�ndice)**

### Use o mesmo vocabul�rio para o mesmo tipo de vari�vel

**Ruim:**
```javascript
getUserInfo();
getClientData();
getCustomerRecord();
```

**Bom:**
```javascript
getUser();
```
**[? voltar ao topo](#�ndice)**

### Use nomes pesquis�veis
N�s iremos ler mais c�digo que escrever. � importante que o c�digo que escrevemos seja leg�vel e pesquis�vel. *N�o* dando nomes em vari�veis que sejam significativos para entender nosso programa, machucamos nossos leitores. Torne seus nomes pesquis�veis. Ferramentas como [buddy.js](https://github.com/danielstjules/buddy.js) e [ESLint](https://github.com/eslint/eslint/blob/660e0918933e6e7fede26bc675a0763a6b357c94/docs/rules/no-magic-numbers.md) podem ajudar a identificar constantes sem nome.

**Ruim:**
```javascript
// Para que diabos serve 86400000?
setTimeout(blastOff, 86400000);

```

**Bom:**
```javascript
// Declare-as como `const` global em letras mai�sculas.
const MILLISECONDS_IN_A_DAY = 86400000;

setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

```
**[? voltar ao topo](#�ndice)**

### Use vari�veis explicativas
**Ruim:**
```javascript
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
saveCityZipCode(address.match(cityZipCodeRegex)[1], address.match(cityZipCodeRegex)[2]);
```

**Bom:**
```javascript
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```
**[? voltar ao topo](#�ndice)**

### Evite Mapeamento Mental
Explicito � melhor que impl�cito.

**Ruim:**
```javascript
const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((l) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  // Espera, para que serve o `l` mesmo?
  dispatch(l);
});
```

**Bom:**
```javascript
const locations = ['Austin', 'New York', 'San Francisco'];
locations.forEach((location) => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
```
**[? voltar ao topo](#�ndice)**

### N�o adicione contextos desnecess�rios
Se o nome de sua classe/objeto j� lhe diz alguma coisa, n�o as repita nos nomes de suas vari�veis.

**Ruim:**
```javascript
const Car = {
  carMake: 'Honda',
  carModel: 'Accord',
  carColor: 'Blue'
};

function paintCar(car) {
  car.carColor = 'Red';
}
```

**Bom:**
```javascript
const Car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue'
};

function paintCar(car) {
  car.color = 'Red';
}
```
**[? voltar ao topo](#�ndice)**

### Use argumentos padr�es ao inv�s de curto circuitar ou usar condicionais

Argumentos padr�es s�o geralmente mais limpos do que curto circuitos. Esteja ciente que se voc� us�-los, sua fun��o apenas ir� fornecer valores padr�es para argumentos `undefined`. Outros valores "falsos" como `''`, `""`, `false`, `null`, `0`, e `NaN`, n�o ser�o substituidos por valores padr�es.

**Ruim:**
```javascript
function createMicrobrewery(name) {
  const breweryName = name || 'Hipster Brew Co.';
  // ...
}

```

**Bom:**
```javascript
function createMicrobrewery(breweryName = 'Hipster Brew Co.') {
  // ...
}

```
**[? voltar ao topo](#�ndice)**

## **Fun��es**
### Argumentos de fun��es (idealmente 2 ou menos)
Limitar a quantidade de par�metros de uma fun��o � incrivelmente importante porque torna mais f�cil test�-la. Ter mais que tr�s leva a uma explos�o combinat�ria onde voc� tem que testar muitos casos diferentes com cada argumento separadamente.

Um ou dois argumentos � o caso ideal, e tr�s devem ser evitados se poss�vel. Qualquer coisa a mais que isso deve ser consolidada. Geralmente, se voc� tem mais que dois argumentos ent�o sua fun��o est� tentando fazer muitas coisas. Nos casos em que n�o est�, na maioria das vezes um objeto � suficiente como argumento.

J� que JavaScript lhe permite criar objetos instantaneamente, sem ter que escrever muita coisa, voc� pode usar um objeto se voc� se pegar precisando usar muitos argumentos.

Para tornar mais �bvio quais as propriedades que as fun��es esperam, voc� pode usar a sintaxe de desestrutura��o (destructuring) do ES2015/ES6. Ela possui algumas vantagens:


1. Quando algu�m olha para a assinatura de uma fun��o, fica imediatamente claro quais propriedades s�o usadas.
2. Desestrutura��o tamb�m clona os valores primitivos espec�ficos do objeto passado como argumento para a fun��o. Isso pode ajudar a evitar efeitos colaterais. Nota: objetos e vetores que s�o desestruturados a partir do objeto passado por argumento N�O s�o clonados.
3. Linters podem te alertar sobre propriedades n�o utilizadas, o que seria imposs�vel sem usar desestrutura��o.

**Ruim:**
```javascript
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
```

**Bom:**
```javascript
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});

```
**[? voltar ao topo](#�ndice)**


### Fun��es devem fazer uma coisa
Essa � de longe a regra mais importante em engenharia de software. Quando fun��es fazem mais que uma coisa, elas se tornam dif�ceis de serem compostas, testadas e raciocinadas. Quando voc� pode isolar uma fun��o para realizar apenas uma a��o, elas podem ser refatoradas facilmente e seu c�digo ficar� muito mais limpo. Se voc� n�o levar mais nada desse guia al�m disso, voc� j� estar� na frente de muitos desenvolvedores.

**Ruim:**
```javascript
function emailClients(clients) {
  clients.forEach((client) => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```

**Bom:**
```javascript
function emailActiveClients(clients) {
  clients
    .filter(isActiveClient)
    .forEach(email);
}

function isActiveClient(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```
**[? voltar ao topo](#�ndice)**

### Nomes de fun��es devem dizer o que elas fazem

**Ruim:**
```javascript
function addToDate(date, month) {
  // ...
}

const date = new Date();

// � dif�cil dizer pelo nome da fun��o o que � adicionado
addToDate(date, 1);
```

**Bom:**
```javascript
function addMonthToDate(month, date) {
  // ...
}

const date = new Date();
addMonthToDate(1, date);
```
**[? voltar ao topo](#�ndice)**

### Fun��es devem ter apenas um n�vel de abstra��o
Quando voc� tem mais de um n�vel de abstra��o sua fun��o provavelmente esta fazendo coisas demais. Dividir suas fun��es leva a reutiliza��o e testes mais f�ceis.

**Ruim:**
```javascript
function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      // ...
    });
  });

  const ast = [];
  tokens.forEach((token) => {
    // lex...
  });

  ast.forEach((node) => {
    // parse...
  });
}
```

**Bom:**
```javascript
function tokenize(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach((REGEX) => {
    statements.forEach((statement) => {
      tokens.push( /* ... */ );
    });
  });

  return tokens;
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach((token) => {
    ast.push( /* ... */ );
  });

  return ast;
}

function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach((node) => {
    // parse...
  });
}
```
**[? voltar ao topo](#�ndice)**

### Remova c�digo duplicado
Fa�a absolutamente seu melhor para evitar c�digo duplicado. C�digo duplicado quer dizer que existe mais de um lugar onde voc� dever� alterar algo se precisar mudar alguma l�gica.

Imagine que voc� � dono de um restaurante e voc� toma conta do seu estoque: todos os seus tomates, cebolas, alhos, temperos, etc. Se voc� tem multiplas listas onde guarda estas informa��es, ent�o voc� ter� que atualizar todas elas quando servir um prato que tenha tomates. Se voc� tivesse apenas uma lista, teria apenas um lugar para atualizar!

Frequentemente, voc� possui c�digo duplicado porque voc� tem duas ou mais
coisas levemente diferentes, que possuem muito em comum, mas suas diferen�as lhe for�am a ter mais duas ou tr�s fun��es que fazem muito das mesmas coisas. Remover c�digo duplicado significa criar uma abstra��o que seja capaz de lidar com este conjunto de coisas diferentes com apenas uma fun��o/m�dulo/classe.

Conseguir a abstra��o correta � cr�tico, por isso que voc� deveria seguir os princ�pios SOLID descritos na se��o *Classes*. Abstra��es ruins podem ser piores do que c�digo duplicado, ent�o tome cuidado! Dito isto, se voc� puder fazer uma boa abstra��o, fa�a-a! N�o repita a si mesmo, caso contr�rio voc� se pegar� atualizando muitos lugares toda vez que precisar mudar qualquer coisinha.

**Ruim:**
```javascript
function showDeveloperList(developers) {
  developers.forEach((developer) => {
    const expectedSalary = developer.calculateExpectedSalary();
    const experience = developer.getExperience();
    const githubLink = developer.getGithubLink();
    const data = {
      expectedSalary,
      experience,
      githubLink
    };

    render(data);
  });
}

function showManagerList(managers) {
  managers.forEach((manager) => {
    const expectedSalary = manager.calculateExpectedSalary();
    const experience = manager.getExperience();
    const portfolio = manager.getMBAProjects();
    const data = {
      expectedSalary,
      experience,
      portfolio
    };

    render(data);
  });
}
```

**Bom:**
```javascript
function showEmployeeList(employees) {
  employees.forEach((employee) => {
    const expectedSalary = employee.calculateExpectedSalary();
    const experience = employee.getExperience();

    const data = {
      expectedSalary,
      experience
    };

    switch(employee.type){
      case 'manager':
        data.portfolio = employee.getMBAProjects();
        break;
      case 'developer':
        data.githubLink = employee.getGithubLink();
        break;
    }

    render(data);
  });
}
```
**[? voltar ao topo](#�ndice)**

### Defina (set) objetos padr�es com Object.assign

**Ruim:**
```javascript
const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};

function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true;
}

createMenu(menuConfig);
```

**Bom:**
```javascript
const menuConfig = {
  title: 'Order',
  // Usu�rio n�o incluiu a chave 'body'
  buttonText: 'Send',
  cancellable: true
};

function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  }, config);

  // configura��o agora �: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}

createMenu(menuConfig);
```
**[? voltar ao topo](#�ndice)**


### N�o use flags como par�metros de fun��es
Flags falam para o seu usu�rio que sua fun��o faz mais de uma coisa. Fun��es devem fazer apenas uma coisa. Divida suas fun��es se elas est�o seguindo caminhos de c�digo diferentes baseadas em um valor boleano.

**Ruim:**
```javascript
function createFile(name, temp) {
  if (temp) {
    fs.create(`./temp/${name}`);
  } else {
    fs.create(name);
  }
}
```

**Bom:**
```javascript
function createFile(name) {
  fs.create(name);
}

function createTempFile(name) {
  createFile(`./temp/${name}`);
}
```
**[? voltar ao topo](#�ndice)**

### Evite Efeitos Colaterais (parte 1)
Uma fun��o produz um efeito colateral se ela faz alguma coisa que n�o seja receber um valor de entrada e retornar outro(s) valor(es). Um efeito colateral pode ser escrever em um arquivo, modificar uma vari�vel global, ou acidentalmente transferir todo seu dinheiro para um estranho.

Agora, voc� precisa de efeitos colaterais ocasionalmente no seu programa. Como no exemplo anterior, voc� pode precisar escrever em um arquivo. O que voc� quer fazer � centralizar aonde est� fazendo isto. N�o tenha diversas fun��es e classes que escrevam para um arquivo em particular. Tenha um servi�o que fa�a isso. Um e apenas um.

O ponto principal � evitar armadilhas como compartilhar o estado entre objetos sem nenhuma estrutura, usando tipos de dados mut�veis que podem ser escritos por qualquer coisa, e n�o centralizando onde seu efeito colateral acontece. Se voc� conseguir fazer isto, voc� ser� muito mais feliz que a grande maioria dos outros programadores.

**Ruim:**
```javascript
// Vari�vel global referenciada pela fun��o seguinte
// Se tiv�ssemos outra fun��o que usa esse nome, ent�o seria um vetor (array) e poderia quebrar seu c�digo
let name = 'Ryan McDermott';

function splitIntoFirstAndLastName() {
  name = name.split(' ');
}

splitIntoFirstAndLastName();

console.log(name); // ['Ryan', 'McDermott'];
```

**Bom:**
```javascript
function splitIntoFirstAndLastName(name) {
  return name.split(' ');
}

const name = 'Ryan McDermott';
const newName = splitIntoFirstAndLastName(name);

console.log(name); // 'Ryan McDermott';
console.log(newName); // ['Ryan', 'McDermott'];
```
**[? voltar ao topo](#�ndice)**

### Evite Efeitos Colaterais (parte 2)
Em JavaScript, tipos primitivos s�o passados por valor e objetos/vetores s�o passados por refer�ncia. No caso de objetos e vetores, se sua fun��o faz uma mudan�a em um vetor de um carrinho de compras, por exemplo, adicionando um item para ser comprado, ent�o qualquer outra fun��o que use o vetor `cart` tamb�m ser� afetada por essa adi��o. Isso pode ser �timo, mas tamb�m pode ser ruim. Vamos imaginar uma situa��o ruim:

O usu�rio clica no bot�o "Comprar", bot�o que invoca a fun��o `purchase` que dispara uma s�rie de requisi��es e manda o vetor `cart` para o servidor. Devido a uma conex�o ruim de internet, a fun��o `purchase` precisa fazer novamente a requisi��o. Agora, imagine que nesse meio tempo o usu�rio acidentalmente clique no bot�o `Adicionar ao carrinho` em um produto que ele n�o queria antes da requisi��o come�ar. Se isto acontecer e a requisi��o for enviada novamente, ent�o a fun��o `purchase` ir� enviar acidentalmente o vetor com o novo produto adicionado porque existe uma refer�ncia para o vetor `cart` que a fun��o `addItemToCart` modificou adicionando um produto indesejado.

Uma �tima solu��o seria que a fun��o `addCartToItem` sempre clonasse o vetor `cart`, editasse-o, e ent�o retornasse seu clone. Isso garante que nenhuma outra fun��o que possua uma refer�ncia para o carrinho de compras seja afetada por qualquer mudan�a feita.

Duas ressalvas desta abordagem:

  1. Podem haver casos onde voc� realmente quer mudar o objeto de entrada, mas quando voc� adota este tipo de programa��o, voc� vai descobrir que estes casos s�o bastante raros. A maioria das coisas podem ser refatoradas para n�o terem efeitos colaterais.

  2. Clonar objetos grandes pode ser bastante caro em termos de desempenho. Com sorte, na pr�tica isso n�o � um problema, porque existem [�timas bibliotecas](https://facebook.github.io/immutable-js/) que permitem que este tipo de programa��o seja r�pida e n�o seja t�o intensa no uso de mem�ria quanto seria se voc� clonasse manualmente objetos e vetores.


**Ruim:**
```javascript
const addItemToCart = (cart, item) => {
  cart.push({ item, date: Date.now() });
};
```

**Bom:**
```javascript
const addItemToCart = (cart, item) => {
  return [...cart, { item, date: Date.now() }];
};
```

### N�o escreva em fun��es globais
Poluir globais � uma pratica ruim em JavaScript porque voc� pode causar conflito com outra biblioteca e o usu�rio da sua API n�o faria a menor ideia at� que ele tivesse um exce��o sendo levantada em produ��o. Vamos pensar em um exemplo: e se voc� quisesse estender o m�todo nativo Array do JavaScript para ter um m�todo `diff` que poderia mostrar a diferen�a entre dois vetores? Voc� poderia escrever sua nova fun��o em `Array.prototype`, mas poderia colidir com outra biblioteca que tentou fazer a mesma coisa. E se esta outra biblioteca estava apenas usando `diff` para achar a diferen�a entre o primeiro e �ltimo elemento de um vetor? � por isso que seria muito melhor usar as classes padr�es do ES2015/ES6 e apenas estender o `Array` global.

**Ruim:**
```javascript
Array.prototype.diff = function diff(comparisonArray) {
  const hash = new Set(comparisonArray);
  return this.filter(elem => !hash.has(elem));
};
```

**Bom:**
```javascript
class SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray);
    return this.filter(elem => !hash.has(elem));
  }
}
```
**[? voltar ao topo](#�ndice)**

### Favore�a programa��o funcional sobre programa��o imperativa
JavaScript n�o � uma linguagem funcional da mesma forma que Haskell �, mas tem um toque de funcional em si. Linguagens funcionais s�o mais limpas e f�ceis de se testar. Favore�a esse tipo de programa��o quando puder.

**Ruim:**
```javascript
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

let totalOutput = 0;

for (let i = 0; i < programmerOutput.length; i++) {
  totalOutput += programmerOutput[i].linesOfCode;
}
```

**Bom:**
```javascript
const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

const INITIAL_VALUE = 0;

const totalOutput = programmerOutput
  .map((programmer) => programmer.linesOfCode)
  .reduce((acc, linesOfCode) => acc + linesOfCode, INITIAL_VALUE);
```
**[? volta ao topo](#�ndice)**

### Encapsule condicionais

**Ruim:**
```javascript
if (fsm.state === 'fetching' && isEmpty(listNode)) {
  // ...
}
```

**Bom:**
```javascript
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === 'fetching' && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```
**[? voltar ao topo](#�ndice)**

### Evite nega��es de condicionais

**Ruim:**
```javascript
function isDOMNodeNotPresent(node) {
  // ...
}

if (!isDOMNodeNotPresent(node)) {
  // ...
}
```

**Bom:**
```javascript
function isDOMNodePresent(node) {
  // ...
}

if (isDOMNodePresent(node)) {
  // ...
}
```
**[? voltar ao topo](#�ndice)**

### Evite condicionais
Esta parece ser uma tarefa imposs�vel. Da primeira vez que as pessoas escutam isso, a maioria diz, �como eu supostamente faria alguma coisa sem usar `if`? � A resposta � que voc� pode usar polimorfismo para realizar a mesma tarefa em diversos casos. A segunda quest�o � geralmente, �bom, isso � �timo, mas porque eu deveria fazer isso?� A resposta � um conceito de c�digo limpo aprendido previamente: uma fun��o deve fazer apenas uma coisa. Quando voc� tem classes e fun��es que tem declara��es `if`, voc� esta dizendo para seu usu�rio que sua fun��o faz mais de uma coisa. Relembre-se, apenas uma coisa.

**Ruim:**
```javascript
class Airplane {
  // ...
  getCruisingAltitude() {
    switch (this.type) {
      case '777':
        return this.getMaxAltitude() - this.getPassengerCount();
      case 'Air Force One':
        return this.getMaxAltitude();
      case 'Cessna':
        return this.getMaxAltitude() - this.getFuelExpenditure();
    }
  }
}
```

**Bom:**
```javascript
class Airplane {
  // ...
}

class Boeing777 extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getPassengerCount();
  }
}

class AirForceOne extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude();
  }
}

class Cessna extends Airplane {
  // ...
  getCruisingAltitude() {
    return this.getMaxAltitude() - this.getFuelExpenditure();
  }
}
```
**[? voltar ao topo](#�ndice)**

### Evite checagem de tipos (parte 1)
JavaScript n�o possui tipos, o que significa que suas fun��es podem receber qualquer tipo de argumento. Algumas vezes esta liberdade pode te morder, e se torna tentador fazer checagem de tipos em suas fun��es. Existem muitas formas de evitar ter que fazer isso. A primeira coisa a se considerar s�o APIs consistentes.

**Ruim:**
```javascript
function travelToTexas(vehicle) {
  if (vehicle instanceof Bicycle) {
    vehicle.pedal(this.currentLocation, new Location('texas'));
  } else if (vehicle instanceof Car) {
    vehicle.drive(this.currentLocation, new Location('texas'));
  }
}
```

**Bom:**
```javascript
function travelToTexas(vehicle) {
  vehicle.move(this.currentLocation, new Location('texas'));
}
```
**[? voltar ao topo](#�ndice)**

### Evite checagem de tipos (parte 2)
Se voc� estiver trabalhando com valores primitivos b�sicos como strings e inteiros, e voc� n�o pode usar polimorfismo, mas ainda sente a necessidade de checar o tipo, voc� deveria considerar usar TypeScript. � uma excelente alternativa para o JavaScript normal, j� que fornece uma tipagem est�tica sobre a sintaxe  padr�o do JavaScript. O problema com checagem manual em JavaScript � que para se fazer bem feito requer tanta verborragia extra que a falsa �tipagem-segura� que voc� consegue n�o compensa pela perca de legibilidade. Mantenha seu JavaScript limpo, escreve bons testes, e tenha boas revis�es de c�digo. Ou, de outra forma, fa�a tudo isso mas com TypeScript (que, como eu falei, � uma �tima alternativa!).

**Ruim:**
```javascript
function combine(val1, val2) {
  if (typeof val1 === 'number' && typeof val2 === 'number' ||
      typeof val1 === 'string' && typeof val2 === 'string') {
    return val1 + val2;
  }

  throw new Error('Must be of type String or Number');
}
```

**Bom:**
```javascript
function combine(val1, val2) {
  return val1 + val2;
}
```
**[? voltar ao topo](#�ndice)**

### N�o otimize demais
Navegadores modernos fazem muitas otimiza��es por debaixo dos panos em tempo de execu��o. Muitas vezes, se voc� estiver otimizando, est� apenas perdendo o seu tempo. [Existem bons recursos](https://github.com/petkaantonov/bluebird/wiki/Optimization-killers) para se verificar onde falta otimiza��o. Foque nesses por enquanto, at� que eles sejam consertados caso seja poss�vel.

**Ruim:**
```javascript

// Em navegadores antigos, cada itera��o de `list.length` n�o cacheada seria custosa
// devido a recomputa��o de `list.length`. Em navegadores modernos, isto � otimizado.
for (let i = 0, len = list.length; i < len; i++) {
  // ...
}
```

**Bom:**
```javascript
for (let i = 0; i < list.length; i++) {
  // ...
}
```
**[? voltar ao topo](#�ndice)**

### Remova c�digo morto
C�digo morto � t�o ruim quanto c�digo duplicado. N�o existe nenhum motivo para deix�-lo em seu c�digo. Se ele n�o estiver sendo chamado, livre-se dele. Ele ainda estar� a salvo no seu hist�rico de versionamento se ainda precisar dele.

**Ruim:**
```javascript
function oldRequestModule(url) {
  // ...
}

function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');

```

**Bom:**
```javascript
function newRequestModule(url) {
  // ...
}

const req = newRequestModule;
inventoryTracker('apples', req, 'www.inventory-awesome.io');
```
**[? voltar ao topo](#�ndice)**

## **Objetos e Estruturas de Dados**
### Use getters e setters
Usar getters e setters para acessar dados em objetos � bem melhor que simplesmente procurar por uma propriedade em um objeto. "Por qu�?", voc� deve perguntar. Bem, aqui vai uma lista desorganizada de motivos:

* Quando voc� quer fazer mais al�m de pegar (get) a propriedade de um objeto, voc� n�o tem que procurar e mudar todos os acessores do seu c�digo;
* Torna mais f�cil fazer valida��o quando estiver dando um `set`;
* Encapsula a representa��o interna;
* Mais f�cil de adicionar logs e tratamento de erros quando dando get and set;
* Voc� pode usar lazy loading nas propriedades de seu objeto, digamos, por exemplo, pegando ele de um servidor.


**Ruim:**
```javascript
function makeBankAccount() {
  // ...

  return {
    balance: 0,
    // ...
  };
}

const account = makeBankAccount();
account.balance = 100;
```

**Bom:**
```javascript
function makeBankAccount() {
  // este � privado
  let balance = 0;

  // um "getter", feito p�blico atrav�s do objeto retornado abaixo
  function getBalance() {
    return balance;
  }

  // um "setter", feito p�blico atrav�s do objeto retornado abaixo
  function setBalance(amount) {
    // ... validate before updating the balance
    balance = amount;
  }

  return {
    // ...
    getBalance,
    setBalance,
  };
}

const account = makeBankAccount();
account.setBalance(100);

```
**[? voltar ao topo](#�ndice)**


### Fa�a objetos terem membros privados
Isto pode ser alcan�ado atrav�s de closures (para ES5 e al�m).

**Ruim:**
```javascript

const Employee = function(name) {
  this.name = name;
};

Employee.prototype.getName = function getName() {
  return this.name;
};

const employee = new Employee('John Doe');
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: undefined
```

**Bom:**
```javascript
function makeEmployee(name) {
  return {
    getName() {
      return name;
    },
  };
}

const employee = makeEmployee('John Doe');
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
delete employee.name;
console.log(`Employee name: ${employee.getName()}`); // Employee name: John Doe
```
**[? voltar ao topo](#�ndice)**


## **Classes**
### Prefira classes do ES2015/ES6 ao inv�s de fun��es simples do ES5
� muito dif�cil conseguir que heran�a de classe, construtores, e defini��es de m�todos sejam leg�veis para classes de ES5 cl�ssicas. Se voc� precisa de heran�a (e esteja ciente que voc� talvez n�o precise), ent�o prefira classes ES2015/ES6. Entretanto, prefira fun��es pequenas ao inv�s de classes at� que voc� precise de objetos maiores e mais complexos.

**Ruim:**
```javascript
const Animal = function(age) {
  if (!(this instanceof Animal)) {
    throw new Error('Instantiate Animal with `new`');
  }

  this.age = age;
};

Animal.prototype.move = function move() {};

const Mammal = function(age, furColor) {
  if (!(this instanceof Mammal)) {
    throw new Error('Instantiate Mammal with `new`');
  }

  Animal.call(this, age);
  this.furColor = furColor;
};

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.constructor = Mammal;
Mammal.prototype.liveBirth = function liveBirth() {};

const Human = function(age, furColor, languageSpoken) {
  if (!(this instanceof Human)) {
    throw new Error('Instantiate Human with `new`');
  }

  Mammal.call(this, age, furColor);
  this.languageSpoken = languageSpoken;
};

Human.prototype = Object.create(Mammal.prototype);
Human.prototype.constructor = Human;
Human.prototype.speak = function speak() {};
```

**Bom:**
```javascript
class Animal {
  constructor(age) {
    this.age = age;
  }

  move() { /* ... */ }
}

class Mammal extends Animal {
  constructor(age, furColor) {
    super(age);
    this.furColor = furColor;
  }

  liveBirth() { /* ... */ }
}

class Human extends Mammal {
  constructor(age, furColor, languageSpoken) {
    super(age, furColor);
    this.languageSpoken = languageSpoken;
  }

  speak() { /* ... */ }
}
```
**[? voltar ao topo](#�ndice)**


### Use encadeamento de m�todos
Este padr�o � muito �til em JavaScript e voc� o ver� em muitas bibliotecas como jQuery e Lodash. Ele permite que seu c�digo seja expressivo e menos verboso. Por esse motivo, eu digo, use encadeamento de m�todos e d� uma olhada em como o seu c�digo ficar� mais limpo. Em suas fun��es de classes, apenas retorne `this` no final de cada fun��o, e voc� poder� encadear mais m�todos de classe nele.

**Ruim:**
```javascript
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
  }

  setModel(model) {
    this.model = model;
  }

  setColor(color) {
    this.color = color;
  }

  save() {
    console.log(this.make, this.model, this.color);
  }
}

const car = new Car('Ford','F-150','red');
car.setColor('pink');
car.save();
```

**Bom:**
```javascript
class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
  }

  setMake(make) {
    this.make = make;
    // NOTA: Retorne this para encadear
    return this;
  }

  setModel(model) {
    this.model = model;
    // NOTA: Retorne this para encadear
    return this;
  }

  setColor(color) {
    this.color = color;
    // NOTA: Retorne this para encadear
    return this;
  }

  save() {
    console.log(this.make, this.model, this.color);
    // NOTA: Retorne this para encadear
    return this;
  }
}

const car = new Car('Ford','F-150','red')
  .setColor('pink')
  .save();
```
**[? voltar ao topo](#�ndice)**

### Prefira composi��o ao inv�s de heran�a
Como dito famosamente em [*Padr�o de projeto*](https://pt.wikipedia.org/wiki/Padr%C3%A3o_de_projeto_de_software) pela Gangue dos Quatro, voc� deve preferir composi��o sobre heran�a onde voc� puder. Existem muitas boas raz�es para usar heran�a e muitas boas raz�es para se usar composi��o. O ponto principal para essa m�xima � que se sua mente for instintivamente para a heran�a, tente pensar se composi��o poderia modelar melhor o seu problema. Em alguns casos pode.

Voc� deve estar pensando ent�o, "quando eu deveria usar heran�a?" Isso depende especificamente do seu problema, mas essa � uma lista decente de quando heran�a faz mais sentido que composi��o:

1. Sua heran�a representa uma rela��o de "isto-�" e n�o uma rela��o de "isto-tem" (Human?Animal vs. User->UserDetails)
2. Voc� pode reutilizar c�digo de classes de base (Humanos podem se mover como todos os animais).
3. Voc� quer fazer mudan�as globais para classes derivadas mudando apenas a classe base. (Mudar o custo cal�rico para todos os animais quando se movem).

**Ruim:**
```javascript
class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  // ...
}

// Ruim porque Employees (Empregados) "tem" dados de impostos. EmployeeTaxData n�o � um tipo de Employee
class EmployeeTaxData extends Employee {
  constructor(ssn, salary) {
    super();
    this.ssn = ssn;
    this.salary = salary;
  }

  // ...
}
```

**Bom:**
```javascript
class EmployeeTaxData {
  constructor(ssn, salary) {
    this.ssn = ssn;
    this.salary = salary;
  }

  // ...
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  setTaxData(ssn, salary) {
    this.taxData = new EmployeeTaxData(ssn, salary);
  }
  // ...
}
```
**[? voltar ao topo](#�ndice)**

## **SOLID**
### Princ�pio da Responsabilidade �nica (SRP)
Como dito em C�digo Limpo, "Nunca deveria haver mais de um motivo para uma classe ter que mudar". � tentador empacotar uma classe em excesso com muitas funcionalidades, como quando voc� pode levar apenas uma mala em seu voo. O problema com isso � que sua classe n�o ser� conceitualmente coesa e dar-lhe-� diversos motivos para mud�-la. Minimizar o n�mero de vezes que voc� precisa mudar uma classe � importante, porque, se muitas funcionalidades est�o em uma classe e voc� mudar uma por��o dela, pode ser dif�cil entender como isto afetar� outras m�dulos que dependem dela no seu c�digo.

**Ruim:**
```javascript
class UserSettings {
  constructor(user) {
    this.user = user;
  }

  changeSettings(settings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }

  verifyCredentials() {
    // ...
  }
}
```

**Bom:**
```javascript
class UserAuth {
  constructor(user) {
    this.user = user;
  }

  verifyCredentials() {
    // ...
  }
}


class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }

  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```
**[? voltar ao topo](#�ndice)**

### Princ�pio do Aberto/Fechado (OCP)
Como foi dito por Bertrand Meyer, "entidades de software (classes, m�dulos, fun��es, etc.) devem se manter abertas para extens�es, mas fechadas para modifica��es." Mas o que isso significa? Esse princ�pio basicamente diz que voc� deve permitir que usu�rios adicionem novas funcionalidades sem mudar c�digo j� existente.

**Ruim:**
```javascript
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(url).then((response) => {
        // transforma a resposta e retorna
      });
    } else if (this.adapter.name === 'httpNodeAdapter') {
      return makeHttpCall(url).then((response) => {
        // transforma a resposta e retorna
      });
    }
  }
}

function makeAjaxCall(url) {
  // faz a request e retorna a promessa
}

function makeHttpCall(url) {
  // faz a request e retorna a promessa
}
```

**Bom:**
```javascript
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }

  request(url) {
    // faz a request e retorna a promessa
  }
}

class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }

  request(url) {
    // faz a request e retorna a promessa
  }
}

class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }

  fetch(url) {
    return this.adapter.request(url).then((response) => {
      // transforma a resposta e retorna
    });
  }
}
```
**[? voltar ao topo](#�ndice)**


### Princ�pio de Substitui��o de Liskov (LSP)
Esse � um termo assustador para um conceito extremamente simples. � formalmente definido como �Se S � um subtipo de T, ent�o objetos do tipo T podem ser substitu�dos por objetos com o tipo S (i.e., objetos do tipo S podem substituir objetos do tipo T) sem alterar nenhuma das propriedades desej�veis de um programa (corretude, desempenho em tarefas, etc.).� Esta � uma defini��o ainda mais assustadora.

A melhor explica��o para este conceito � se voc� tiver uma classe pai e uma classe filha, ent�o a classe base e a classe filha pode ser usadas indistintamente sem ter resultados incorretos. Isso ainda pode ser confuso, ent�o vamos dar uma olhada no exemplo cl�ssico do Quadrado-Ret�ngulo (Square-Rectangle). Matematicamente, um quadrado � um ret�ngulo, mas se voc� model�-lo usando uma rela��o �isto-� atrav�s de heran�a, voc� rapidamente ter� problemas.

**Ruim:**
```javascript
class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }

  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}

function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea(); // RUIM: Retorna 25 para o Quadrado. Deveria ser 20.
    rectangle.render(area);
  });
}

const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);
```

**Bom:**
```javascript
class Shape {
  setColor(color) {
    // ...
  }

  render(area) {
    // ...
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  getArea() {
    return this.length * this.length;
  }
}

function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}

const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
```
**[? voltar ao topo](#�ndice)**

### Princ�pio da Segrega��o de Interface (ISP)
JavaScript n�o possui interfaces ent�o esse princ�pio n�o se aplica estritamente como os outros. Entretanto, � importante e relevante at� mesmo com a falta de um sistema de tipos em JavaScript.

ISP diz que "Clientes n�o devem ser forcados a depender de interfaces que eles n�o usam." Interfaces s�o contratos impl�citos em JavaScript devido a sua tipagem pato (duck typing).

Um bom exemplo para se observar que demonstra esse princ�pio em JavaScript � de classes que requerem objetos de configura��es grandes. N�o pedir para clientes definirem grandes quantidades de op��es � ben�fico, porque na maioria das vezes eles n�o precisar�o de todas as configura��es. Torn�-las opcionais ajuda a prevenir uma �interfer�ncia gorda�.

**Ruim:**
```javascript
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.animationModule.setup();
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  animationModule() {} //  Na maioria das vezes, n�o precisamos animar enquanto atravessamos (traversing).
  // ...
});

```

**Bom:**
```javascript
class DOMTraverser {
  constructor(settings) {
    this.settings = settings;
    this.options = settings.options;
    this.setup();
  }

  setup() {
    this.rootNode = this.settings.rootNode;
    this.setupOptions();
  }

  setupOptions() {
    if (this.options.animationModule) {
      // ...
    }
  }

  traverse() {
    // ...
  }
}

const $ = new DOMTraverser({
  rootNode: document.getElementsByTagName('body'),
  options: {
    animationModule() {}
  }
});
```
**[? voltar ao topo](#�ndice)**

### Princ�pio da Invers�o de Depend�ncia  (DIP)
Este princ�pio nos diz duas coisas essenciais:
1. M�dulos de alto n�vel n�o devem depender de m�dulos de baixo n�vel. Ambos devem depender de abstra��es.
2. Abstra��es n�o devem depender de detalhes. Detalhes devem depender de abstra��es.

Isso pode ser dif�cil de entender a princ�pio, mas se voc� j� trabalhou com AngularJS, voc� j� viu uma implementa��o deste princ�pio na forma de inje��o de depend�ncia (DI). Apesar de n�o serem conceitos id�nticos, DIP n�o deixa m�dulos de alto n�vel saber os detalhes de seus m�dulos de baixo n�vel, assim como configur�-los. Isso pode ser alcan�ado atrav�s de DI. Um grande beneficio � que reduz o acoplamento entre os m�dulos. Acoplamento � um padr�o de desenvolvimento muito ruim porque torna seu c�digo mais dif�cil de ser refatorado.

Como dito anteriormente, JavaScript n�o possui interfaces, ent�o as abstra��es que s�o necess�rias s�o contratos impl�citos. Que quer dizer que, os m�todos e as classes que um objeto/classe exp�e para outros objeto/classe. No exemplo abaixo, o contrato impl�cito � que qualquer m�dulo de Request  para `InventoryTracker` ter� um m�todo `requestItems`:

**Ruim:**
```javascript
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryTracker {
  constructor(items) {
    this.items = items;

    // Ruim: N�s criamos uma depend�ncia numa implementa��o de request especifica.
    // N�s deveriamos apenas ter requestItems dependendo de um m�todo de request: `request`
    this.requester = new InventoryRequester();
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();
```

**Bom:**
```javascript
class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }

  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}

class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }

  requestItem(item) {
    // ...
  }
}

class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ['WS'];
  }

  requestItem(item) {
    // ...
  }
}

// Construindo nossas depend�ncias externamente e injetando-as, podemos facilmente
// substituir nosso m�dulo de request por um novo mais chique que usa WebSockets
const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTracker.requestItems();
```
**[? voltar ao topo](#�ndice)**

## **Testes**
Testes s�o mais importantes que entregas. Se voc� n�o possui testes ou um quantidade inadequada, ent�o toda vez que voc� entregar seu c�digo voc� n�o ter� certeza se voc� n�o quebrou alguma coisa. Decidir o que constitui uma quantidade adequada � responsabilidade do seu time, mas ter 100% de cobertura (todas as senten�as e branches) � a maneira que se alcan�a uma alta confian�a e uma paz de espirito em desenvolvimento. Isso quer dizer que al�m de ter um �timo framework de testes, voc� tamb�m precisa usar uma [boa ferramenta de cobertura](http://gotwarlost.github.io/istanbul/).

N�o existe desculpa para n�o escrever testes. Existem [diversos frameworks de testes em JS �timos](http://jstherightway.org/#testing-tools), ent�o encontre um que seu time prefira. Quando voc� encontrar um que funciona para seu time, ent�o tenha como objetivo sempre escrever testes para cada nova funcionalidade/m�dulo que voc� introduzir. Se seu m�todo preferido for Desenvolvimento Orientado a Testes (TDD), isso � �timo, mas o ponto principal � apenas ter certeza que voc� est� alcan�ado suas metas de cobertura antes de lan�ar qualquer funcionalidade, ou refatorar uma j� existente.

### Um conceito por teste

**Ruim:**
```javascript
import assert from 'assert';

describe('MakeMomentJSGreatAgain', () => {
  it('handles date boundaries', () => {
    let date;

    date = new MakeMomentJSGreatAgain('1/1/2015');
    date.addDays(30);
    assert.equal('1/31/2015', date);

    date = new MakeMomentJSGreatAgain('2/1/2016');
    date.addDays(28);
    assert.equal('02/29/2016', date);

    date = new MakeMomentJSGreatAgain('2/1/2015');
    date.addDays(28);
    assert.equal('03/01/2015', date);
  });
});
```

**Bom:**
```javascript
import assert from 'assert';

describe('MakeMomentJSGreatAgain', () => {
  it('handles 30-day months', () => {
    const date = new MakeMomentJSGreatAgain('1/1/2015');
    date.addDays(30);
    assert.equal('1/31/2015', date);
  });

  it('handles leap year', () => {
    const date = new MakeMomentJSGreatAgain('2/1/2016');
    date.addDays(28);
    assert.equal('02/29/2016', date);
  });

  it('handles non-leap year', () => {
    const date = new MakeMomentJSGreatAgain('2/1/2015');
    date.addDays(28);
    assert.equal('03/01/2015', date);
  });
});
```
**[? voltar ao topo](#�ndice)**

## **Concorr�ncia**
### Use Promessas, n�o callbacks
Callbacks n�o s�o limpos, e eles causam uma quantidade excessiva de aninhamentos. A partir de ES2015/ES6, Promessas s�o um tipo nativo global. Use-as!

**Ruim:**
```javascript
import { get } from 'request';
import { writeFile } from 'fs';

get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', (requestErr, response) => {
  if (requestErr) {
    console.error(requestErr);
  } else {
    writeFile('article.html', response.body, (writeErr) => {
      if (writeErr) {
        console.error(writeErr);
      } else {
        console.log('File written');
      }
    });
  }
});

```

**Bom:**
```javascript
import { get } from 'request';
import { writeFile } from 'fs';

get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
  .then((response) => {
    return writeFile('article.html', response);
  })
  .then(() => {
    console.log('File written');
  })
  .catch((err) => {
    console.error(err);
  });

```
**[? voltar ao topo](#�ndice)**

### Async/Await s�o ainda mais limpas que Promessas
Promessas s�o uma alternativa bem mais limpa que callbacks, mas o ES2017/ES8 traz `async` e `await` que oferecem uma solu��o ainda mais limpa. Tudo o que voc� precisa � uma fun��o que tem como prefixo a palavra-chave `async`, e ent�o voc� pode escrever sua logica imperativamente sem usar `then` para encadear suas fun��es. Use isto se voc� puder tirar vantagem das funcionalidades do  ES2017/ES8 hoje!

**Ruim:**
```javascript
import { get } from 'request-promise';
import { writeFile } from 'fs-promise';

get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
  .then((response) => {
    return writeFile('article.html', response);
  })
  .then(() => {
    console.log('File written');
  })
  .catch((err) => {
    console.error(err);
  });

```

**Bom:**
```javascript
import { get } from 'request-promise';
import { writeFile } from 'fs-promise';

async function getCleanCodeArticle() {
  try {
    const response = await get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin');
    await writeFile('article.html', response);
    console.log('File written');
  } catch(err) {
    console.error(err);
  }
}
```
**[? voltar ao topo](#�ndice)**


## **Tratamento de Erros**
`throw error` � uma coisa boa! Eles significam que o programa identificou
com sucesso quando algo deu errado e est� permitindo que voc� saiba parando
a execu��o da fun��o no processo atual, fechando o processo (em Node), e
notificando voc� no console com a pilha de processos.

### N�o ignore erros capturados
N�o fazer nada com um erro capturado n�o te d� a habilidade de resolv�-lo ou
reagir ao erro informado. Exibir um log no console(`console.log`) n�o � muito
melhor porque muitas vezes ele pode ficar perdido entre um monte de outras
coisas impressas no console. Se voc� envolver qualquer peda�o de c�digo em um
`try/catch` isso significa que voc� acredita que um erro pode ocorrer l� e ent�o
voc� deveria ter um plano, ou criar caminho de c�digo para quando isso ocorrer.

**Ruim:**
```javascript
try {
  functionThatMightThrow();
} catch (error) {
  console.log(error);
}
```

**Bom:**
```javascript
try {
  functionThatMightThrow();
} catch (error) {
 �// Uma op��o (mais chamativa que console.log):
  console.error(error);
 �// Outra op��o:
  notifyUserOfError(error);
 �// Outra op��o:
  reportErrorToService(error);
 �// OU as tr�s!
}
```

### N�o ignore promessas rejeitadas
Pela mesma raz�o que voc� n�o deveria ignorar erros
caputados de `try/catch`

**Ruim:**
```javascript
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    console.log(error);
  });
```

**Bom:**
```javascript
getdata()
  .then((data) => {
    functionThatMightThrow(data);
  })
  .catch((error) => {
    // One option (more noisy than console.log):
    console.error(error);
    // Another option:
    notifyUserOfError(error);
    // Another option:
    reportErrorToService(error);
    // OR do all three!
  });

```

**[? voltar ao topo](#�ndice)**


## **Formata��o**
Formata��o � subjetiva. Como muitas regras aqui, n�o h� nenhuma regra fixa e
r�pida que voc� precisa seguir. O ponto principal � N�O DISCUTA sobre formata��o.
Existem [muitas ferramentas](http://standardjs.com/rules.html) para automatizar isso.
Utilize uma! � um desperdicio de tempo e dinheiro para engenheiros discutirem sobre
formata��o.

Para coisas que n�o possam utilizar formata��o autom�tica (identa��o, tabs vs. espa�os,
aspas simples vs. duplas, etc.) olhe aqui para alguma orienta��o.

### Utilize capitaliza��o consistente
JavaScript n�o � uma linguagem tipada, ent�o a capitaliza��o diz muito sobre
suas vari�veis, fun��es, etc. Estas regras s�o subjetivas, ent�o sua equipe
pode escolher o que quiserem. O ponto �, n�o importa o que voc�s todos escolham,
apenas seja consistente.

**Ruim:**
```javascript
const DAYS_IN_WEEK = 7;
const daysInMonth = 30;

const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const Artists = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase() {}
function restore_database() {}

class animal {}
class Alpaca {}
```

**Bom:**
```javascript
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;

const SONGS = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const ARTISTS = ['ACDC', 'Led Zeppelin', 'The Beatles'];

function eraseDatabase() {}
function restoreDatabase() {}

class Animal {}
class Alpaca {}
```
**[? voltar ao topo](#�ndice)**


### Fun��es e chamadas de fun��es devem estar pr�ximas
Se uma fun��o chamar outra, mantenha estas fun��es verticalmente pr�ximas no arquivo
fonte. Em um cen�rio ideal, manter a chamada logo acima da fun��o. N�s tendemos a
ler c�digos de cima para baixo, como num jornal. Por causa disso, fa�a o seu c�digo
desta maneira.

**Ruim:**
```javascript
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  lookupPeers() {
    return db.lookup(this.employee, 'peers');
  }

  lookupManager() {
    return db.lookup(this.employee, 'manager');
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();
```

**Bom:**
```javascript
class PerformanceReview {
  constructor(employee) {
    this.employee = employee;
  }

  perfReview() {
    this.getPeerReviews();
    this.getManagerReview();
    this.getSelfReview();
  }

  getPeerReviews() {
    const peers = this.lookupPeers();
    // ...
  }

  lookupPeers() {
    return db.lookup(this.employee, 'peers');
  }

  getManagerReview() {
    const manager = this.lookupManager();
  }

  lookupManager() {
    return db.lookup(this.employee, 'manager');
  }

  getSelfReview() {
    // ...
  }
}

const review = new PerformanceReview(employee);
review.perfReview();
```

**[? voltar ao topo](#�ndice)**

## **Coment�rios**
### Apenas comente coisas que tenham complexidade de l�gica de neg�cio.
Coment�rios s�o uma desculpa, n�o um requisito. Um bom c�digo documenta-se, *a maior parte*, por si s�.

**Ruim:**
```javascript
function hashIt(data) {
  // A hash
  let hash = 0;

  // Tamanho da string
  const length = data.length;

  // Loop em cada caracter da informa��o
  for (let i = 0; i < length; i++) {
 � �// Pega o c�digo do caracter.
    const char = data.charCodeAt(i);
    // Cria a hash
    hash = ((hash << 5) - hash) + char;
    // Converte para um integer 32-bit
    hash &= hash;
  }
}
```

**Bom:**
```javascript

function hashIt(data) {
  let hash = 0;
  const length = data.length;

  for (let i = 0; i < length; i++) {
    const char = data.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;

    // Converte para um integer 32-bit
    hash &= hash;
  }
}

```
**[? voltar ao topo](#�ndice)**

### N�o deixe c�digo comentado na sua base de c�digo
Controle de vers�o existe por uma raz�o. Deixar c�digos velhos no seu hist�rico.

**Ruim:**
```javascript
doStuff();
// doOtherStuff();
// doSomeMoreStuff();
// doSoMuchStuff();
```

**Bom:**
```javascript
doStuff();
```
**[? voltar ao topo](#�ndice)**

### N�o comente registro de altera��es
Lembre-se, utilize controle de vers�o! N�o tem necessidade em deixar c�digos
inutlizados, c�digos comentados e especialmente registros de altera��es.
Utilize `git log` para pegar o hist�rico!

**Ruim:**
```javascript
/**
 * 2016-12-20: Removidas monads, n�o entendia elas (RM)
 * 2016-10-01: Melhoria utilizando monads especiais (JP)
 * 2016-02-03: Removido checagem de tipos (LI)
 * 2015-03-14: Adicionada checagem de tipos (JR)
 */
function combine(a, b) {
  return a + b;
}
```

**Bom:**
```javascript
function combine(a, b) {
  return a + b;
}
```
**[? voltar ao topo](#�ndice)**

### Evite marcadores de posi��o
Eles geralmente criam ru�dos. Deixe que as fun��es e nomes de vari�veis em conjunto
com a devida identa��o e formata��o deem a estrutura visual para o seu c�digo.

**Ruim:**
```javascript
////////////////////////////////////////////////////////////////////////////////
// Intancia��o do Scope Model
////////////////////////////////////////////////////////////////////////////////
$scope.model = {
  menu: 'foo',
  nav: 'bar'
};

////////////////////////////////////////////////////////////////////////////////
// Configura��o da Action
////////////////////////////////////////////////////////////////////////////////
const actions = function() {
  // ...
};
```

**Bom:**
```javascript
$scope.model = {
  menu: 'foo',
  nav: 'bar'
};

const actions = function() {
  // ...
};
```
**[? voltar ao topo](#�ndice)**
