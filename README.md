# CRUISE LINE
<p align="center">
  <img src= https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white alt="Visual Studio Code">
  <img src=https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) alt="HTML5">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
  <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white">
   
</p>

## Índice

* [1. Definición del proyecto](#1-definición-del-proyecto)
* [2. Funcionalidades](#2-funcionalidades)
* [3. Historias de usuario](#3-historias-de-usuario)
* [4. Generación de datos](#4-generación-de-datos)
* [5. Diseño de la Interfaz de Usuaria](#5-diseño-de-la-interfaz-de-usuaria)
* [6. Estructura del proyecto](#6-estructura-del-proyecto)
* [7. Criterios de aceptación mínimos del proyecto](#7-criterios-de-aceptación-mínimos-del-proyecto)
* [8. Objetivos de aprendizaje](#8-objetivos-de-aprendizaje)
* [9. Pistas, tips y lecturas complementarias](#9-pistas-tips-y-lecturas-complementarias)
* [10. Consideraciones para el Project Feedback](#10-Consideraciones-para-el-Project-Feedback)

***

## 1. Definición del proyecto

En este proyecto se **construyó una página web de cruceros en donde se visualiza un  _conjunto (set) de datos_** generados con la herramienta de Inteligencia Articial [ChatGPT](https://openai.com/chatgpt).

## 2. Funcionalidades

La página web que permite **visualizar la data,
filtrarla, ordenarla y calcular el promedio de precios de los cruceros.** 

### Visualización

* Para la visualización de la data generada en [ChatGPT](https://openai.com/chatgpt) se utilizó un componente UI conocido como tarjeta (card) que resalta los valores de las propiedades de la data que le interesaría a los usuarios ver como: imagen, nombre, precio y puerto de salida o embarque del crucero. 

### Filtrado
* Los usuarios pueden filtrar la data de los cruceros por su propiedad de precio en los siguientes rangos: 
  - **Price $1000-$1500.**  
  - **Price $1200-$2000.** 
  - **Price $2000-$2500.**
  - **Price $2500-$3000.**

### Ordenado
* **Ordenado por nombre:** Los usuarios pueden ordenar la data con la propiedad de nombre alfabéticamente de forma ascendente (A-Z) o de forma descendente (Z-A).

* **Ordenamiento por precio:** Los usuarios pueden ordenar la lista de cruceros según el precio de cada uno, lo que facilita la búsqueda de cruceros económicos al proporcionar una ruta eficiente de la información deseada. 

Las funciones de ordenado por nombre y precio operan sobre la data filtrada.

### Estadísticas
* **Promedio de precio de los cruceros:** Al hacer click en el botón de estadística los usuarios puede visualizar el promedio de los precios de los cruceros. Ésta función también permite ver el promedio en nuestra data filtrada.

### Limpiar (Clear)
* Se agregó el botón de limpiar que permite a los usuarios reiniciar la página web, limpiando filtros, ordenamiento y estadísticas.

Las funciones de filtrar, ordenar, estaditísticas y limpiar agregan el contenido de una manera dinámica utilizando JavaScript.

## 3. Historias de usuario
En el proyecto realizaron tres historias de usuarios para describir las funcionalidades de la página web desde la perpectiva de los usuarios finales.

### 3.1. Primera historia de usuario

Los usuarios quieren ir de vacaciones en un crucero de Cruise Lines y desean ver un listado con información detallada de todos los cruceros disponibles en la página web.

- **Criterios de Aceptación de usuario.**
  - La página web estará en ingles.
  - La información de cada crucero se visualiza utilizando el componente UI de tarjetas que están distribuidas en forma de grilla.
  - Cada crucero proporciona la siguiente información: imagen, nombre, el puerto de salida y el precio por persona del crucero.
  - No hay ningún elemento interactivo en la pantalla.

- **Pasos para cumplir con los criterios de aceptación**
  - Generación de la data con chat GPT.
  - Diseño del prototipo de media fidelidad.
  - Estructurar el HTML.
  - Darle estilos a la página con CSS.
  - Subir la información a Github.

- **Definiciones de terminado (para el equipo):**
  - Todo el código está subido a la rama del repositorio en GitHub.
  - Se realizan 2 pruebas con usuarios para saber que entiendan todo.

<p align="center">
<img src= historia-usuario-1.png alt="historia de usuario 1">
</p>

### 3.2. Segunda historia de usuario

Los usuarios quieren ir de vacaciones en un crucero de Cruise Lines para ello desean conocer los cruceros disponibles y poder filtrarlos por un rango de precio y ordenarlos de forma ascendente y descendente por su propiedad de precio (económico-caro) y su propiedad de nombre (alfabéticamente).

- **Criterios de Aceptación de usuario.**
  - La información de cada crucero se visualiza utilizando el componente UI de tarjetas que están distribuidas en forma de grilla.
  - Se tiene un menú en la parte superior donde se puede filtrar la información de los cruceros por rango de precios.
  - Se puede ordenar los crucero en orden alfabético ascendente (A-Z) y descendente(Z-A) los nombres de cruceros.
   - Se puede ordenar la información utilizando su propiedad de precio de manera ascendente (económico-caro) y descendente(caro-económico).

- **Pasos para cumplir con los criterios de aceptación**
  - Colocar un menú  en la pagina principal que contenga la función de filtrado por rango de precios, la función de ordenado de forma ascendente y descendente utilizando las propiedades de nombre y precio de la data.
  - Realizar la función de filtrado `(filterData)` en JavaScript por rango de precios de los cruceros.
  - Realizar las funciones de ordenado `(sortData)` y `(sortDataByPrice)` que ordenan la data por orden  ascendente y descendente de acuerdo a las propiedades de precio y nombre en la página principal.
  - Subir la información a Github.

- **Definiciones de terminado (para el equipo):**
  - Todo el código está subido a la rama del repositorio en GitHub.
  - Se publica la página web en GitHub Pages.
  - Se realizan 2 pruebas con usuarios para saber que entiendan todo.

<p align="center">
<img src= historia-usuario-2.png alt="historia de usuario 2">
</p>

### 3.3. Tercera historia de usuario

Los usuarios quieren ir de vacaciones en un crucero de Cruise Lines para ello desean conocer los cruceros disponibles y poder filtrarlos por un rango de precio y ordenarlos de forma ascendente y descendente por su propiedad de precio (económico-caro) y su propiedad de nombre (alfabéticamente).Así mismo, tener un botón de limpiar que vuelva la página a su estado inicial sin aplicar ningún filtro. Además de tener un botón que me permita calcular el promedio de precios de los cruceros al inicio de la página y cada vez que se filtre la información.

- **Criterios de Aceptación de usuario.**
  - La información de cada crucero se visualiza utilizando el componente UI de tarjetas que están distribuidas en forma de grilla.
  - Se tiene un menú en la parte superior donde se puede filtrar la información de los cruceros por rango de precios.
  - Se puede ordenar los crucero en orden alfabético ascendente (A-Z) y descendente(Z-A) los nombres de cruceros.
   - Se puede ordenar la información utilizando su propiedad de precio de manera ascendente (económico-caro) y descendente(caro-económico).
   - Tener un botón que me permita calcular el promedio de precios de los cruceros. El promedio también se debe calcular cuando se filtre la información.
   - Tener botón de limpiar que permita volver todo a la página inicial.

- **Pasos para cumplir con los criterios de aceptación**
  - Colocar en menú el botón CLEAR.
  - Asignarle a la función al botón CLEAR por medio de JavaScript que al momento de presionarlo vuelva a la pàgina inicial sin haber aplicado ningún filtro u orden.
  - Colocar un botón STATISTICS debajo del menú principal.
  - Asignarle al botón STATISTICS la funcionalidad mediante JavaScript que nos permita calcular el promedio de precios de los cruceros en la página principal y cuando se apliquen los filtros.
  - Subir la información a Github.

- **Definiciones de terminado (para el equipo):**
  - Todo el código está subido a la rama del repositorio en GitHub.
  - Se publica la página web en GitHub Pages.
  - Se realizan 2 pruebas con usuarios para saber que entiendan todo.

<p align="center">
<img src= historia-usuario-3.png alt="historia de usuario 3">
</p>

## 4. Generación de datos

En la generación de datos debemos tener un arreglo con 24 objetos. Y la estructura de cada objeto es la siguiente:

* `id`: Identificador único. Debe ser un string de no más de 32 characteres, en minúscula, compuesto solo por letras, números, underscore (`_`) o guión (`-`). 
* `name`: El nombre de nuestro crucero.
* `shortDescription`: Descripción corta del crucero. Esta descripción tiene como máximo 20 palabras.
* `description`: Descripción extendida del crucero. Esta descripción tiene entre 80 y 100 palabras. 
* `imageUrl`: URL de la imagen de cada crucero. Esta imagen fue generada a través de inteligencia artifical utilizando el
[generador de imágenes de Bing](https://www.bing.com/create). 
* `facts`: Cada crucero tiene **7** propiedades:

  ```js 
      facts: {
      shipSize: 362,
      shipClass: 'Clase Oasis',
      visitingPorts: 'Port Canaveral, CocoCay, Nassau, Cozumel, Roatán, Falmouth',
      departurePort: 'Port Canaveral',
      durationInDays: 7,
      cruisePrice: 1750,
      cruiseDate: '2024-08-01'
    }
  
  ```   
  Los _valores de las propiedades_, son de tipo `number`, `boolean` o un `string` y no tienen más de 64 caracteres.

La data final de nuestro proyecto, según los requisitos anteriores es la siguiente:

```js
const data = [
  {
    id: '1',
    name: 'Symphony of the Seas',
    shortDescription: 'Descubre la grandeza en Symphony of the Seas, el crucero más grande del mundo. ¡Aventuras emocionantes te esperan!',
    description: 'Symphony of the Seas, parte de la flota de Royal Caribbean Group, es el crucero más grande del mundo. Con un ambiente lujoso y emocionante, ofrece una experiencia única de primer nivel. Explora destinos exóticos, disfruta de deliciosa gastronomía y participa en actividades emocionantes. Con una eslora impresionante, este barco ha sido construido con tecnología de vanguardia. Disfruta de tus vacaciones con comodidades de primera clase y un itinerario que te llevará a lugares inolvidables como Miami, Cococay, Cozumel, Roatán, Puerto Costa Maya.',
    imageUrl: 'https://github.com/Wendy-Alejandra/DEV013-dataverse/blob/main/src/data/images/symphonyOfTheSeasCaribe.jpeg?raw=true',
    facts: {
      shipSize: 362,
      shipClass: 'Clase Oasis',
      visitingPorts: 'Miami, Cococay, Cozumel, Roatán, Puerto Costa Maya',
      departurePort: 'Miami',
      durationInDays: 7,
      cruisePrice: 1500,
      cruiseDate: '2024-05-01'
    }
  },
  //... 23 objetos más
]
```

### 4.1. Prompt utilizado

<p align="center">
<img src= prompting-1.png alt="prompting 1">
<img src= prompting-2.png alt="prompting 2">
<img src= prompting-3.png alt="prompting 3">
</p>

## 5. Diseño de la Interfaz de Usuaria
El diseño de interfaz de usuario es esencial para crear experiencias web efectivas y satisfactorias para los usuarios, teniendo en cuenta aspectos estéticos, funcionales y de usabilidad.

En el presente proyecto se realizaron en [Figma](https://www.figma.com/file/V5doEKg8V9PpNrpNUzrGH3/Prototipos-HU1?type=design&node-id=0%3A1&mode=design&t=QLpp7qFZiz18dmBt-1) dos prototipos de alta fidelidad con la metodología Mobile First.

### 5.1. Prototipo de baja fidelidad
<p align="center">
<img src= low-fidelity-mobile-prototipe.png alt="low fidelity mobile prototipe">
<img src= low-fidelity-desktop-prototipe.png alt="hilowgh fidelity desktop prototipe">
</p>

### 5.2. Prototipo de alta fidelidad
<p align="center">
<img src= mobile-prototipe.png alt="high fidelity mobile prototipe">
<img src= desktop-prototipe.png alt="high fidelity desktop prototipe">
</p>

## 6. Estructura del Proyecto

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── README.md
├── package.json
├── src
|  ├── data 
|  |  └── dataset.js (La que hayas generado con la IA)
|  ├── dataFunctions.js
|  ├── view.js
|  ├── index.html
|  ├── main.js
|  └── style.css
└── test
   └── data.js
   └── dataFunctions.spec.js
   └── tests-read-only

```

## 7. Criterios de aceptación mínimos del proyecto

### Criterios de código

Prueba de cada grupo de objetivos de aprendizaje de manera
individual con los siguientes comandos:

``` sh
npm run test:oas-html
npm run test:oas-css
npm run test:oas-web-api
npm run test:oas-js
npm run test:oas-prompting
npm run test:oas // Esto es para correr todos los tests de OAs
```

#### HTML

* **Uso de HTML semántico**

  - [x] Tiene un `<header>` con `<h1>`
  - [x] Tiene un `<footer>`
  - [x] Tiene un `<main>` con `<h2>`
  - [x] Todas las etiquetas de controles (inputs, selects, radio, etc) tienen `<label>`
  - [x] `<ul>` esta usado para dibujar la data
  - [x] Los hijos de `<li>` usan attributos de microdata `itemscope` e `itemprop`

#### CSS

* **Uso de selectores de CSS**

  - [x] Uso de selector class para los items <li>
  - [x] Uso de flexbox en sentido `row` y `column`
  - [x] Uso de flexbox para el elemento que contiene los items
  - [x] Uso de flexbox para el elemento que contiene los UI inputs

#### Web APIs

* **Uso de selectores del DOM**

  - [x] La aplicación usa [`querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
    para buscar los elementos del DOM
  
* **Manejo de eventos del DOM (listeners, propagación, delegación)**

  - [x] `addEventListener` con callback que tiene parámetro de `event`,
    lo que permite el uso del objeto [`event`](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_objects)
    con `event.target` o `event.currentTarget`
  - [x] La aplicación registra [Event Listeners](https://developer.mozilla.org/en/docs/Web/API/EventTarget/addEventListener)
    para escuchar `click`, `change`, `keyup` dependiendo del evento que
    se quiere escuchar

* **Manipulación dinámica del DOM**

  - [x] La aplicación actualiza el atributo [`innerHTML`](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML).
  - [x] La aplicación usa `createElement` y `appendChild`, o template strings
    para crear elementos

#### JavaScript

* **Variables (declaración, asignación, ámbito)**

  - [x] La aplicación declara variables con [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
    y [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
    en manera adecuada

* **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  - [x] La aplicación usa el statement
    [`if..else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
      para evaluar condiciones

* **Uso de bucles/ciclos (while, for, for..of)**

  - [x] La aplicación usa el statement [`for`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
    o método [`forEach`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
    para iterar

* **Funciones (params, args, return)**

  En el archivo `dataFunctions.js` define las siguientes funciones:
  - [x] una función `sortBy` que tiene 3 parámetros (`data`, `sortBy`, `sortOrder`)
    y devuelve el arreglo ordenado
  - [x] una función `filterBy` que tiene 3 parámetros (`data`, `filterBy`, `value`)
    y devuelve el arreglo filtrado
  - [x] una función `computeStats` que tiene al menos un parámetro (`data`)
    y devuelve un valor computado

  Más sobre estos puntos en [la sección dataFunctions.js](#src/dataFunctions.js)

* **Arrays (arreglos)**

  - [x] Uso de [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/04-arrays)
  - [x] Uso de [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    o [Array.prototype.toSorted - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
  - [x] Uso de [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  - [ ] Uso de [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  - [x] Uso de [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  - [x] Uso de [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

* **Objetos**

  - [x] Uso de notación de punto para [acceder propiedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)
  - [x] Uso de notación de brackets para [acceder propiedades](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors)

* **Módulos de ECMAScript (ES Modules)**

  - [x] La aplicación usa [`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
    y [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
    para importar y exportar valores desde un modulo JavaScript.


#### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye pruebas unitarias (_tests_), así que se realiza las pruebas unitarias para testear las funciones de _visualizar_, _filtrar_ y _ordenar_ la data, así como _calcular el promedio de precio de los cruceros_. 

Se usó el framework [Jest](https://jestjs.io/) para ejecutar las pruebas unitarias dando cobertura del 91.48% de _statements_
(_sentencias_), 100% _functions_ (_funciones_), 90.47% _lines_ (_líneas_), y 80.55% _branches_ (_ramas_) del archivo `src/dataFunctions.js` que contiene las funciones. 

## 8. Objetivos de aprendizaje

### HTML

- [x] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [x] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [x] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [x] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

- [x] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/dom/1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [x] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [x] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [x] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [x] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [x] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/objects/objects)
</p></details>

- [x] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/basics/values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/basics/variables)
</p></details>

- [x] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [x] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [x] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/functions/arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [x] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

- [x] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

- [x] **Uso de linter (ESLINT)**

- [x] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [x] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

### Control de Versiones (Git y GitHub)

- [x] **Git: Instalación y configuración**

- [x] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [x] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

- [x] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [x] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [x] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [x] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [x] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [x] **Seguir los principios básicos de diseño visual**

### Investigación

- [x] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

### AI Prompting

- [x] **Dando Instrucciones**

  <details><summary>Links</summary><p>

  * [Dando Instrucciones | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/instructions)
</p></details>

- [x] **Few shot prompting**

  <details><summary>Links</summary><p>

  * [Few shot prompting | Learn Prompting: Your Guide to Communicating with AI](https://learnprompting.org/es/docs/basics/few_shot)
</p></details>

## 9. Pistas, tips y lecturas complementarias

#### Desarrollo Front-end

* [Tópicos en la currícula de Laboratoria](https://curriculum.laboratoria.la/es/web-dev/topics)
  testing, arreglos, objetos, funciones, DOM en Browser Javascript.
* [Buscando elementos con querySelector*](https://es.javascript.info/searching-elements-dom)
* [Objeto del evento](https://es.javascript.info/introduction-browser-events#objeto-del-evento)
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.toSorted en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSorted)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Atributos de datos](https://developer.mozilla.org/es/docs/Learn/HTML/Howto/Use_data_attributes)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [Datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Módulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Módulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diferencia entre array y objetos](https://youtu.be/mJJloQY7A8Y)
* [¿Cómo puedo recorrer un objeto?](https://youtube.com/01RHn23Bn_0)
* [`map`, `filter`, `sort` y `reduce` también son métodos para objetos](https://youtu.be/bUl1R2lQvKo)
* [Diferencia entre expression y statements](https://youtu.be/wlukoWco2zk)
* [Diferencia entre createElement e innerHTML](https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml-vs-createelement/)
* [¿Qué es el Scope?](https://youtu.be/s-7C09ymzK8)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Para preguntas sobre Git recomendamos ver este playlist](https://www.youtube.com/watch?v=F1EoBbvhaqU&list=PLiAEe0-R7u8k9o3PbT3_QdyoBW_RX8rnV)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)

## 10. Consideraciones para el Project Feedback

Antes de agendar tu Project Feedback con un coach, asegúrate que tu proyecto:

* [x] Cumple con todos los criterios mínimos de aceptación al ejecutar `npm run test:oas`
* [x] Cumple con todas las pruebas _end to end_ al ejecutar `npm run test:e2e`
* [x] Cumple con todas las pruebas unitarias al ejecutar `npm run test` y
  que tienen una cobertura del 70% de _statements_ (_sentencias_),
  _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
* [x] Esta libre de _errores_ de `eslint` al ejecutar `npm run pretest`
* [x] Está subido a GitHub y desplegado en GitHub Pages
* [x] Captura de pantalla del prompt utilizado para generar los datos.
* Tiene un `README.md` con la siguente:
  - [x] _Definición del producto_ clara e informativa
  - [x] Historias de usuario
  - [x] Un _Diseño de la Interfaz de Usuaria_ (prototipo de alta fidelidad)
  - [x] El listado de problemas que detectaste a través de tests
    de usabilidad en el `README.md`
* Tiene un UI que cumple las funcionalidades:
  - [x] Muestra lista con datos y/o indicadores
  - [x] Permite ordenar data por uno o más campos (asc y desc)
  - [x] Permite filtrar data con base en una condición
  - [x] Permite limpiar los filtros con un botón
  - [x] Es _responsive_

Autoevaluación de _objetivos de aprendizaje_ y _life skills_ completados.
