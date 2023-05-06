---
title: POO para principiantes. Aprende el pilar de la abstracción con Python
author: Moises Ariza
pubDatetime: 2023-05-16T02:05:51Z
featured: false
draft: false
tags:
  - POO
  - Programación
  - Python
ogImage: "https://i.postimg.cc/rpdY3XhV/abstracci-n.png"
description: "Aprende el pilar de la abstracción con Python"
---
## **Abstracción**

Hemos llegado al último pilar de la Programación Orientada Objetos, si te perdiste alguna de las publicaciones anteriores te dejo a continuación la lista para que puedas acceder cómodamente.

- [Introducción teórica a la POO](https://arizamoises.co/posts/introducci%C3%B3n-r%C3%A1pida-a-lo-que-es-la-programaci%C3%B3n-orientada-a-objetos-y-sus-caracter%C3%ADsticas/)
- [Polimorfismo](https://arizamoises.co/posts/poo-para-principiantes-aprende-el-pilar-del-polimorfismo-con-python/)
- [Herencia](https://arizamoises.co/posts/poo-para-principiantes-aprende-el-pilar-de-la-herencia-con-python/)
- [Encapsulamiento](https://arizamoises.co/posts/poo-para-principiantes-aprende-el-pilar-del-encapsulamiento-con-python/)

! Sin más preámbulo comencemos ¡

## Recordemos que es la abstracción

Es muy importante que recordemos que la abstracción es el proceso de enfocarse en los aspectos importantes de un objeto y omitir los detalles irrelevantes. Esto significa que nos concentramos solo en que podemos hacer con el o mejor dicho, como aprovechar su implementación sin necesidad de conocer su funcionamiento interno. Básicamente con la abstracción construimos una **caja negra.**

Listo pasemos a la práctica.

## Herramientas que necesitas

- Un editor de código o IDE (Haré uso de [visual studio code](https://code.visualstudio.com/))
- Contar con Python instalado en tu computador
- En caso de no tener instalado Python, puedes hacer uso de [replit.com](https://replit.com/) (no necesitas instalar nada ;) )

## Abstracción con Python

Mucha atención al siguiente código:

```python
class Vehicle:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def drive(self):
        pass

#Clase Carro
class Car(Vehicle):
    def drive(self):
        print("Conduciendo el " + self.make + " " + self.model)

#Clase Camion
class Truck(Vehicle):
    def drive(self):
        print("Conduciendo el " + self.make + " " + self.model)
```

En este ejemplo, la clase **`Vehicle`** representa la abstracción de un vehículo en general. La clase tiene dos atributos: la **marca** y el **modelo** del vehículo. También tiene un método **`drive()`** que es una función vacía y se sobrescribe en las subclases. Las clases **`Car`** y **`Truck`**son subclases de **`Vehicle`** y tienen sus propios métodos **`drive()`** que deben imprimir un mensaje específico para el tipo de vehículo.

## ¡Pongámoslo a prueba! 🔥

1. Instanciamos las clases **`Car`** y **`Truck`**
    
    ```python
    car = Car("Toyota", "Corolla")
    truck = Truck("Ford", "F-150")
    ```
    
2. Llamamos al método **`drive()`** para verificar se esté llamando a los objetos correctos
    
    ```python
    
    car = Car("Toyota", "Corolla")
    truck = Truck("Ford", "F-150")
    
    car.drive() 
    truck.drive() 
    ```
    
3. Si todo salió bien debemos tener el siguiente mensaje:
    
    ```python
    Conduciendo el Toyota Corolla
    Conduciendo el Ford F-150
    ```
    

Este fue un ejemplo extremadamente simple, pero como puedes darte cuenta la idea de la abstracción es que tú puedas hacer las modificaciones que necesites en tus **métodos sin que estas afecten como se están implementando la clase**.

¡Felicidades, ya conoces las bases de POO!, aunque hay aún “mucha tela que cortar” ya puedes empezar a poner en práctica todo lo aprendido en tu próximo proyecto. 

![https://media.giphy.com/media/g9582DNuQppxC/giphy-downsized-large.gif](https://media.giphy.com/media/g9582DNuQppxC/giphy-downsized-large.gif)

Te dejo el [repositorio a github](https://github.com/arizamoisesco/small-scripts-poo-python) donde están todos los scripts que hemos trabajado durante las últimas publicaciones, además encontraras ahí una carpeta llamada “Retos” donde puedes realizar un fork y ahí colocar tu solución a cada uno de ellos.

Eso sí, antes de irnos vamos a nuestra última sección: 

# 🤓 Reto

Ahora llego tu turno, crea nuevas abstracciones que aprovechen las características de la clase padre **`Vehicle`** para crear nuevos vehículos. 