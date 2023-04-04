---
title: POO para principiantes. Aprende el pilar del encapsulamiento con Python
author: Moises Ariza
pubDatetime: 2023-04-03T02:05:51Z
featured: false
draft: false
tags:
  - POO
  - Programación
  - Python
ogImage: ""
description: "Aprende el pilar del encapsulamiento con Python"
---

En mi [publicación anterior](https://arizamoises.co/posts/introducci%C3%B3n-r%C3%A1pida-a-lo-que-es-la-programaci%C3%B3n-orientada-a-objetos-y-sus-caracter%C3%ADsticas/) comprendimos los principios teóricos del paradigma de POO, llego el momento de ponerlo en práctica, hoy nos concentraremos en el pilar del **encapsulamiento y** haremos uso de mi lenguaje favorito que es python 🐍.

# Herramientas que necesitas

- Un editor de código o IDE (Haré uso de [visual studio code](https://code.visualstudio.com/))
- Contar con Python instalado en tu computador
- En caso de no tener instalado Python, puedes hacer uso de [replit.com](https://replit.com/) (no necesitas instalar nada ;) )

# Encapsulamiento con Python

El encapsulamiento es un mecanismo que permite ocultar los detalles de implementación de un objeto y exponer solo una interfaz pública para interactuar con él. En Python, se utiliza el prefijo de doble guion bajo para marcar un atributo o método como privado y que solo pueda ser accedido desde dentro de la clase.

👀 Observa el siguiente código:

```python
class carro:
    def __init__(self, marca, modelo, precio):
        self.__marca = marca
        self.__modelo = modelo
        self.__precio = precio

    def get_precio(self):
        return self.__precio
```

En este ejemplo, la clase *carro* tiene tres atributos: 

- M*arca*
- *Modelo*
- *Precio*

Todos los atributos anteriores están marcados como privados gracias a la utilización del **doble guion bajo al principio**, por lo que no pueden ser accedidos directamente desde fuera de la clase. 

Entonces, ¿cómo puedo emplearlos?, bueno para el caso que desees saber el precio del vehículo se ha definido el método ***get_precio()*** que devuelve ese valor. De esta manera, se protege el atributo *precio* y se evita que se modifique accidentalmente desde fuera de la clase.

# ¡Pongámoslo a prueba! 🔥

1. Crearemos un automóvil **mustang** instanciando nuestra clase *Carro* 

```python
class Carro:
    def __init__(self, marca, modelo, precio):
        self.__marca = marca
        self.__modelo = modelo
        self.__precio = precio

    def get_precio(self):
        return self.__precio

mustang = Carro("Ford", "Mustang", 50000)
```

1. Luego probaremos acceder al precio con nuestro método
    
    ```python
    class Carro:
        def __init__(self, marca, modelo, precio):
            self.__marca = marca
            self.__modelo = modelo
            self.__precio = precio
    
        def get_precio(self):
            return self.__precio
    
    mustang = Carro("Ford", "Mustang", 50000)
    print(coche.get_precio()
    ```
    

En consola debe salir el valor de *5000*

1. En caso de que tengas dudas prueba acceder al atributo directamente
    
    ```python
    class Carro:
        def __init__(self, marca, modelo, precio):
            self.__marca = marca
            self.__modelo = modelo
            self.__precio = precio
    
        def get_precio(self):
            return self.__precio
    
    mustang = Carro("Ford", "Mustang", 50000)
    print(coche.get_precio())
    print(coche.__precio) 
    ```
    

Te debe generar el siguiente error  ***AttributeError: 'Carro' object has no attribute '__precio,*** El cual básicamente nos dice que no existe ese atributo, eso debido a que es PRIVADO 😎.

🎉 ¡Muchas felicidades acabas de aplicar el primer pilar de la programación orientada a objetos, el encapsulamiento!

En nuestro próximo artículo aprenderemos sobre la **herencia con Python.**

# 🤓 Reto

Crea tu propia clase del tema que prefieras, con sus respectivos atributos privados e incluso en otro lenguaje de programación y déjalo en comentarios.

1. Herencia

La herencia es un mecanismo que permite crear una clase nueva basada en una clase existente, conservando todas las características de la clase original y agregando nuevas funcionalidades. La clase nueva se llama clase derivada o subclase, mientras que la clase original se llama clase base o superclase. En Python, se utiliza la palabra clave **`class`** seguida del nombre de la subclase y el nombre de la superclase entre paréntesis.

```python
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

class Coche(Vehiculo):
    def __init__(self, marca, modelo, precio):
        super().__init__(marca, modelo)
        self.precio = precio

coche = Coche("Ford", "Mustang", 50000)
print(coche.marca) # Ford
print(coche.modelo) # Mustang
print(coche.precio) # 50000
```

En este ejemplo, la clase **`Coche`**
 se define como una subclase de la clase **`Vehiculo`**
. La subclase **`Coche`**
 hereda los atributos **`marca`**
 y **`modelo`**
 de la superclase **`Vehiculo`**
 mediante el uso de la función **`super()`**
. Además, se ha añadido un atributo adicional **`precio`**
 que es específico de la clase **`Coche`**
.

## **Polimorfismo**

El polimorfismo es la capacidad de objetos de diferentes clases para responder al mismo mensaje. En otras palabras, dos objetos de diferentes clases pueden tener métodos con el mismo nombre, y ambos métodos pueden ser llamados con el mismo código. El polimorfismo es una forma de lograr una mayor flexibilidad en nuestro código.

Veamos un ejemplo:

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

animals = [Dog("Fido"), Cat("Fluffy"), Cow("Betsy")]

for animal in animals:
    print(animal.name + " says " + animal.make_sound())
```

En este ejemplo, creamos una clase base **`Animal`** y tres subclases **`Dog`**, **`Cat`** y **`Cow`**. Cada una de estas subclases tiene su propio método **`make_sound()`**. Sin embargo, cuando iteramos sobre una lista de objetos de estas clases, podemos llamar al método **`make_sound()`** en cada uno de ellos sin tener que preocuparnos por la clase específica.

Este es el poder del polimorfismo. Permite que diferentes objetos se comporten de manera similar, lo que hace que nuestro código sea más flexible y fácil de mantener.

## **Abstracción**

La abstracción es el proceso de enfocarse en los aspectos importantes de un objeto y omitir los detalles irrelevantes. En la programación orientada a objetos, la abstracción se utiliza para crear clases y objetos que se centran en los detalles importantes y ocultan los detalles irrelevantes.

Veamos un ejemplo:

```python
class Car:
    def __init__(self, make, model, year):
        self.make = make
        self.model = model
        self.year = year

    def start(self):
        print("Starting the car")

    def stop(self):
        print("Stopping the car")

my_car = Car("Toyota", "Corolla", 2022)

print(my_car.make)
print(my_car.model)
print(my_car.year)

my_car.start()
my_car.stop()
```

En este ejemplo, creamos una clase **`Car`** que tiene tres atributos **`make`**, **`model`** y **`year`**. También tiene dos métodos **`start()`** y **`stop()`** que imprimen mensajes de texto.

Podemos crear objetos de la clase **`Car`** y acceder a sus atributos y métodos sin necesidad de saber cómo funcionan internamente. Esto es abstracción. Nos permite utilizar objetos complejos sin tener que preocuparnos por los detalles de su implementación.

## **Conclusión**

En este artículo, hemos discutido los cuatro pilares de la programación orientada a objetos: encapsulamiento, herencia, polimorfismo y abstracción. Estos conceptos son fundamentales para entender cómo funciona la programación orientada a objetos y cómo podemos utilizarla para crear programas más flexibles y fáciles de mantener.

Hemos utilizado ejemplos en Python para ilustrar cada uno de estos conceptos y esperamos que esto haya ayudado a entenderlos mejor. En general, la programación orientada a objetos es una herramienta muy poderosa que puede ayudarn