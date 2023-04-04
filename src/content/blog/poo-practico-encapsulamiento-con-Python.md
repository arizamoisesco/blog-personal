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

- *Marca*
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

2. Luego probaremos acceder al precio con nuestro método
    
    ```python
        def get_precio(self):
            return self.__precio
    
    mustang = Carro("Ford", "Mustang", 50000)
    print(coche.get_precio())
    ```

En consola debe salir el valor de *5000*

3. En caso de que tengas dudas prueba acceder al atributo directamente
    
    ```python
    print(coche.__precio) 
    ```

Te debe generar el siguiente error  ***AttributeError: 'Carro' object has no attribute '__precio,*** El cual básicamente nos dice que no existe ese atributo, eso debido a que es PRIVADO 😎.

🎉 ¡Muchas felicidades acabas de aplicar el primer pilar de la programación orientada a objetos, el encapsulamiento!

En nuestro próximo artículo aprenderemos sobre la **herencia con Python.**

# 🤓 Reto

Crea tu propia clase del tema que prefieras, con sus respectivos atributos privados e incluso en otro lenguaje de programación y déjalo en comentarios.

