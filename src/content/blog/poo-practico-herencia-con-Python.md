---
title: POO para principiantes. Aprende el pilar de la herencia con Python
author: Moises Ariza
pubDatetime: 2023-04-15T02:05:51Z
featured: false
draft: false
tags:
  - POO
  - Programación
  - Python
ogImage: "https://i.postimg.cc/9QhxsvJY/Dev-to-5.png"
description: "Aprende el pilar de la herencia con Python"
---

En la [publicación anterior](https://arizamoises.co/posts/poo-para-principiantes-aprende-el-pilar-del-encapsulamiento-con-python/) aprendimos el principio del encapsulamiento. Hoy nos corresponde entender lo que es la **herencia.** 

## La teoría que necesitas

En caso de que sea tu primera vez con el tema de Programación Orientada Objetos, te recomiendo que vayas a esta [publicación](https://arizamoises.co/posts/introducci%C3%B3n-r%C3%A1pida-a-lo-que-es-la-programaci%C3%B3n-orientada-a-objetos-y-sus-caracter%C3%ADsticas/) donde vimos los conceptos más importantes para poderlo entender mejor. 

## Herramientas que necesitas

- Un editor de código o IDE (Haré uso de [visual studio code](https://code.visualstudio.com/))
- Contar con Python instalado en tu computador
- En caso de no tener instalado Python, puedes hacer uso de [replit.com](https://replit.com/) (no necesitas instalar nada ;) )

Si ya estás listo ¡COMENCEMOS!
<div style="width:100%;height:0;padding-bottom:94%;position:relative;"><iframe src="https://giphy.com/embed/CjmvTCZf2U3p09Cn0h" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>

## Herencia con Python

Para realizar herencia con Python tengamos en cuenta los siguientes puntos claves:

- La herencia es un mecanismo que permite **crear una clase nueva basada en una clase existente**, conservando todas las características de la clase original y agregando nuevas funcionalidades.
- La clase nueva se llama **subclase**, mientras que la clase original se llama **superclase**.
- En Python, se utiliza la palabra clave **`class`** seguida del nombre de la subclase y el nombre de la superclase entre paréntesis.
- Los nombres de las clases hacen uso de CamelCase

👀 Atento al siguiente código:

```python
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

class Carro:
		pass
```

Definimos la clase **`Vehiculo`** la cual será la superclase o clase padre, esta posee los atributos de:

- Marca
- Modelo

La clase siguiente que se genera se llama **`Carro`** y esta será la subclase o clase hija con la cual vamos a hacer el ejercicio de la herencia.

ℹ️ *Para tener en cuenta: La instrucción pass se usa para poder hacer que un bloque de código que no posee nada en su interior no nos genere error mientras agregamos lo que queremos.*


## ¡Pongámoslo a prueba! 🔥

1. Al nombre de la clase le vas a agregar al final, antes de los dos puntos un paréntesis y dentro de él vas a colocar el nombre de la superclase de la cual se quiere heredar. En este caso será **`Vehiculo`**.
    
    ```python
    class Vehiculo:
        def __init__(self, marca, modelo):
            self.marca = marca
            self.modelo = modelo
    
    class Carro(Vehiculo):
        pass
    ```
    
2. Definimos el constructor de la clase Carro y a través del uso de la función **`super()`** hacemos que herede los atributos de marca y modelo de la superclase **`Vehiculo`**
    
    ```python
    class Vehiculo:
        def __init__(self, marca, modelo):
            self.marca = marca
            self.modelo = modelo
    
    class Carro(Vehiculo):
        def __init__(self, marca, modelo, precio):
            super().__init__(marca, modelo)
    ```
    
3. Las subclases también pueden tener sus propios atributos, por lo cual vamos a agregar el atributo de "precio" a la clase de **`Carro`**
    
    ```python
    class Vehiculo:
        def __init__(self, marca, modelo):
            self.marca = marca
            self.modelo = modelo
    
    class Carro(Vehiculo):
        def __init__(self, marca, modelo, precio):
            super().__init__(marca, modelo)
            self.precio = precio
    
    ```
    
4. Procedamos instanciar la clase **`Carro`** y a darle el valor a los atributos de marca, modelo y precio
    
    ```python
    class Vehiculo:
        def __init__(self, marca, modelo):
            self.marca = marca
            self.modelo = modelo
    
    class Carro(Vehiculo):
        def __init__(self, marca, modelo, precio):
            super().__init__(marca, modelo)
            self.precio = precio
    
    carro = Carro("Ford", "Mustang", 50000)
    ```
    
5. Finalmente, vamos a probar que nos devuelva los valores de los atributos que esperamos para nuestro objeto
    
    ```python
    class Vehiculo:
        def __init__(self, marca, modelo):
            self.marca = marca
            self.modelo = modelo
    
    class Carro(Vehiculo):
        def __init__(self, marca, modelo, precio):
            super().__init__(marca, modelo)
            self.precio = precio
    
    carro = Carro("Ford", "Mustang", 50000)
    print(carro.marca) # Ford
    print(carro.modelo) # Mustang
    print(carro.precio) # 50000
    ```
    

Eso es todo, de esta manera puedes aplicar el pilar de la herencia de la programación orientada a objetos con python. ¿Fácil no?

En nuestro próximo artículo aprenderemos sobre el **polimorfismo con Python.**

## 🤓 Reto

Crea nuevas clases que hereden de vehículo y agrégale al menos un atributo propio a cada una de ellas.
