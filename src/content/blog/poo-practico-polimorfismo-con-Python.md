---
title: POO para principiantes. Aprende el pilar del polimorfismo con Python
author: Moises Ariza
pubDatetime: 2023-05-01T02:05:51Z
featured: false
draft: false
tags:
  - POO
  - Programación
  - Python
ogImage: "https://i.postimg.cc/mrRDNcYT/polimorfismo.png"
description: "Aprende el pilar del polimorfismo con Python"
---

Ya para este punto conocemos de la Programación Orientada a Objetos dos pilares, [**el encapsulamiento**](https://arizamoises.co/posts/poo-para-principiantes-aprende-el-pilar-del-encapsulamiento-con-python/) y la [**herencia**](https://arizamoises.co/posts/poo-para-principiantes-aprende-el-pilar-de-la-herencia-con-python/). El día de hoy nos concentraremos en el llamado **polimorfismo**.

## La teoría de que necesitas

Ten en cuenta lo siguiente en cuanto al polimorfismo:

- El polimorfismo es la capacidad de objetos de diferentes clases para responder al mismo mensaje. En otras palabras, **dos objetos de diferentes** clases pueden tener **métodos con el mismo nombre**, y ambos métodos pueden ser llamados con el mismo código, dando **respuestas diferentes**.
- El polimorfismo es una forma de lograr una mayor flexibilidad en nuestro código.

Si deseas profundizar más al respecto, te recomiendo que vayas a mi publicación anterior donde vimos los conceptos más importantes para poderlo entender mejor. 

## Herramientas que necesitas

- Un editor de código o IDE (Haré uso de [visual studio code](https://code.visualstudio.com/))
- Contar con Python instalado en tu computador
- En caso de no tener instalado Python, puedes hacer uso de [replit.com](https://replit.com/) (no necesitas instalar nada 😄 )

## **Polimorfismo con Python**

Presta mucha atención al siguiente código:

```python
class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        pass

class Dog(Animal):
    def make_sound(self):
        return "woof"

class Cat(Animal):
    def make_sound(self):
        return "meow"

class Cow(Animal):
    def make_sound(self):
        return "moo"
```

En el anterior ejemplo, pasa lo siguiente:

- Creamos, una superclase **`Animal`** y tres subclases **`Dog`**, **`Cat`** y **`Cow`**
- Las tres subclases van a heredar de la clase base.
- Cada una de ellas tiene su propio método **`make_sound()`**  la cual genera como mensaje el sonido respectivo del animal.

## ¡Pongámoslo a prueba! 🔥

1. Vas a crear una lista de objetos (nuestros animales) a las cuales les pondremos sus respectivos nombres
    
    ```python
    
    animals = [Dog("Gala"), Cat("Manet"), Cow("Betsy")]
    ```
    
2. Como lo guardamos en una lista vamos a realizar un ciclo que nos permita recorrer y llamar al método **`make_sound()`** de cada una de las subclases
    
    ```python
    
    animals = [Dog("Gala"), Cat("Manet"), Cow("Betsy")]
    
    for animal in animals:
        print(animal.name + " dice " + animal.make_sound())
    ```
    
3. Si todo salió bien debemos obtener el siguiente resultado
    
    ```python
    Gala dice woof
    Manet dice meow
    Betsy dice moo
    ```

Eso es todo, ¡este es el poder del polimorfismo!. Permite que diferentes objetos se comporten de manera similar, básicamente que adquieran “diferentes formas”, lo que hace que nuestro código sea más flexible y fácil de mantener.

En nuestro próximo artículo aprenderemos el último de los pilares que nos falta conocer que es la **asbtracción con Python.**

## 🤓 Reto

No podemos olvidar que la programación se aprende programando, poniendo manos a la obra. Por lo cual en el reto de hoy te invito a que a la superclase **`Animal`** le agregues nuevos métodos y que estos tengan su propia versión para cada uno de los animales propuestos anteriormente.

