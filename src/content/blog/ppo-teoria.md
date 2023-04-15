---
title: Introducción rápida a lo que es la Programación Orientada a Objetos y sus características
author: Moises Ariza
pubDatetime: 2022-10-29T02:05:51Z
featured: false
draft: false
tags:
  - POO
  - Programación
ogImage: ""
description: "Introducción a los conceptos de la programación orientada a objetos"
---

Actualmente, muchos los lenguajes cuentan con soporte para la Programación Orientada a Objetos y siendo uno de los paradigmas más utilizado, este se encuentra guiado por 4 pilares.
Vamos a conocerlos y comprenderlos con ejemplos sencillos.

## Pero Primero, ¿Qué es un paradigma?
Es una forma para resolver problemas comunes en programación. Imagínalo como una receta para poder preparar tu comida (tu código).
Teniendo claro esto, en la Programación Orientada a Objetos (POO) los ingredientes son el código que vas a escribir y sus herramientas, estos los vamos a identificar como clases, atributos, métodos y, el protagonista principal, objetos.
¿Entonces esos son los pilares? No, pero para comprender a los pilares debemos entender primero las partes que conforman a la POO, entonces calma y continuemos:

### Clases
Las clases son la plantilla con el que construimos los objetos. Este molde cuenta tanto con características como con acciones que podrá realizar el objeto tan pronto exista. Imagina el molde con el que puedes crear galletas.

### Atributos
Los atributos son las características que tiene la clase u objeto. Siguiendo el ejemplo de las galletas sería el tamaño, color, olor u sabor.

### Métodos
Los métodos son las acciones que los objetos pueden efectuar. Cómo es preocupante pensar en galletas que se muevan, mejor imagina un pez, sus métodos serian nadar o comer.

### Objetos
Cuando usas una plantilla (la clase) y volviendo a la analogía del pez, creas uno, como por ejemplo un pez payaso, entonces ya estás ante un objeto que ya tiene una identidad más especifica, con sus propias características (atributos y métodos) y que puedes aprovechar de diversas maneras.

Bueno, entendiendo lo anterior ya estamos listo para los 4 pilares de la POO. Los cuales son:

- Encapsulamiento
- Abstracción
- Herencia
- Polimorfismo

¿Qué quiere decir todo esto y cómo lo podemos asociar? A continuación lo descubriremos.

## 💊 Pilar del encapsulamiento
Básicamente, significa que hay atributos y métodos de una clase a los cuales no se tiene acceso ni se puede editar desde afuera de la clase.

Imagina la caja fuerte (la clase) de un banco en donde se busca proteger el dinero (atributos), solo personal autorizado puede ingresar para revisar o sacar sumas de dinero específicas, pero nadie debería alterar el funcionamiento de la caja fuerte.

## 🧰 Pilar de la abstracción
Aquí se busca ocultar la complejidad que una clase pueda tener para así concentrarse en las funcionalidades que son “fáciles de usar”.

Piensa en una TV que es un dispositivo complejo, ¿imaginas que para pasar un canal te tocara saber como funciona cada circuito? Pues se nos da un control remoto como interfaz que nos abstrae de esa complejidad y nos permite controlarlo con unos cuantos botones.

## 👨 👦 👦Pilar de la herencia
Es un proceso que crea una clase hija que hereda de una clase padre. Esto le permite compartir sus métodos y atributos. Incluso se puede sobreescribir o definir nuevos.

Este es fácil de asociar, tú cuentas con características físicas heredadas de tus padres como el color de ojos, cabello, piel, etc. Pero dependiendo de tu personalidad tendrás un estilo diferente o pensamiento diferentes (sobrescritura de atributos y métodos).

## 🥷Pilar del polimorfismo
Los objetos que nazcan de clases que tengan herencia en común tiene la habilidad de cambiar su forma o sus tipos según se les necesite.

Volvamos a la comida, un huevo tiene una estructura simple, pero puede ser preparado de diversas formas, revuelto, tibio, estrellado, etc. Todos estos platillos son diferentes, pero tienen un mismo origen, el huevo (herencia común).

Ahora con estos conocimientos teóricos ya estás listo para probar todo esto en código real, pero lo haremos en una próxima publicación. 😉