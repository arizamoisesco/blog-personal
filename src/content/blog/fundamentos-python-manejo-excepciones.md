---
title: Python para principiantes. Excepciones.
author: Moises Ariza
pubDatetime: 2023-12-04T07:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - excepciones
  - Programación
  - Python
  - Curso de python principiantes
ogImage: "g"
description: "📢🚢 ¡Navega por las complejidades de las excepciones!

🌟 Descubre su magia: manejo elegante de errores que mantiene tus programas a flote con eficiencia y evitando los posibles contratiempos! 🚀🐍"
---
¡Bienvenidos, entusiastas programadores, a una nueva aventura en el mundo de Python! En esta entrega, nos sumergiremos en un tema fundamental y poderoso: el manejo de excepciones en Python. 

Prepárense para descubrir cómo sortear obstáculos y mantener sus proyectos a flote. 

## **Consideraciones previas**

- Si es tu primera vez por acá recomiendo que veas los artículos anteriores:
    - **[Variables y tipos de datos](https://arizamoises.co/posts/python-para-principiantes-variables-y-tipos-de-datos/)**
    - **[Operadores y expresiones](https://arizamoises.co/posts/python-para-principiantes-operadores-y-expresiones/)**
    - [**Conversión de tipos de datos**](https://arizamoises.co/posts/python-para-principiantes-conversi%C3%B3n-de-tipos-de-datos-b%C3%A1sicos/)
    - [**Métodos para Strings**](https://arizamoises.co/posts/python-para-principiantes-m%C3%A9todos-para-tipos-de-datos-string/)
    - **[Condicional if - else](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---condicionales-if---else/)**
    - [**Condicional match - case**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---condicionales-match---case/)
    - **[Ciclo for](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---bucle-for/)**
    - [**Ciclo while**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---bucle-while/)
    - **[Listas](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-de-datos---listas/)**
    - **[Tuplas](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-datos---tuplas/)**
    - [**Diccionarios**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-datos---diccionarios/)
    - [**Funciones**](https://arizamoises.co/posts/python-para-principiantes-funciones/)
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## ¿Qué son las excepciones?

En el vasto océano de la programación, los errores son como tormentas inesperadas. Pero no teman, las excepciones en Python son nuestros salvavidas. **Permiten que nuestros programas detecten y respondan a errores de manera controlada**, evitando que se bloqueen, se cierre de manera inesperada y ayudándonos a comprender lo que salió mal.

![Imagen de maninero generada con IA.jpeg](https://i.postimg.cc/nLJ6KXNF/Imagen-marinero.jpg)

## Tipos de excepciones en Python

Las excepciones más comunes que pode podemos encontrar en Python son:

- **`SyntaxError`:** Ocurre cuando hay un error de sintaxis en el código. Por ejemplo, olvidar, cerrar una comilla o paréntesis.
- **`ZeroDivisionError`:** Se genera cuando intentamos dividir un número por cero.
- **`NameError`:** Sucede cuando se utiliza una variable o función que no ha sido definida previamente.
- **`TypeError`:** Se produce cuando se realiza una operación en un tipo de dato incorrecto.
- **`ValueError`:** Ocurre cuando una función recibe un argumento del tipo correcto pero con un valor incorrecto.
- **`FileNotFoundError`**: Sucede al intentar abrir un archivo que no existe

## Sintaxis para controlar las excepciones en python

La manera de controlar las excepciones es agrupando el código en 3 bloques:

- **`try`**: Agrupa el bloque de código en el que se puede presentar la excepción
- **`except`**: Contiene el código a ejecutar en caso de que la excepción haya sido lanzada
- **`else`**: Posee el código a ejecutar si no hay excepciones
- **`finally`** (opcional): permite ejecutar un bloque de código siempre, sin importar si se ha capturado o no una excepción

Veamos algunos ejemplos:

1. Vamos a realizar una función para realizar una división segura, para lo cual usaremos los bloques `try` y `except`
    
    ```python
    def division_segura(dividendo, divisor):
        try:
            resultado = dividendo / divisor
        except ZeroDivisionError:
            print("¡Error! División por cero.")
            resultado = None
        return resultado
    
    # Ejemplo de uso
    resultado_division = division_segura(10, 0)
    
    if resultado_division is not None:
        print(f"Resultado de la división: {resultado_division}")
    else:
        print("No se puede calcular el resultado debido a errores.")
    ```
    

1. Ahora realicemos un manejo de excepciones para una suma, para esta usaremos los bloques `try`, `except` y `else`
    
    ```python
    def suma(a, b):
        try:
            resultado = a + b
        except TypeError:
            print("¡Error! Tipo de dato incorrecto en la operación de suma.")
        else:
            print(f"La suma de {a} y {b} es: {resultado}")
    
    # Ejemplo de uso
    suma(5, 3)
    suma("5", 3)
    ```
    
2. Ahora vamos a manejar una excepción para cuando queramos abrir un archivo con Python. Aquí usaremos `try`, `except` y `finally`.
    
    ```python
    def abrir_archivo(nombre_archivo):
        try:
            archivo = open(nombre_archivo, "r")
            contenido = archivo.read()
            print("Contenido del archivo:", contenido)
        except FileNotFoundError:
            print("¡Error! El archivo no fue encontrado.")
        finally:
            if 'archivo' in locals():
                archivo.close()
                print("Archivo cerrado exitosamente.")
    
    # Ejemplo de uso
    abrir_archivo("archivo.txt")
    abrir_archivo("archivo_inexistente.txt")
    ```
    

También es posible lanzar excepciones de manera controlada mediante la sentencia `raise`:

```python
raise NameError("¡Soy una excepción")
```

## **Conclusiones**

El manejo de excepciones en Python es como un **timón sólido en medio de una tormenta.** Nos brinda el control necesario para enfrentar los errores con gracia y determinación. Al comprender cómo trabajar con excepciones, tú como programador pueden escribir código más preparado para enfrentar cualquier desafío.

![Imagen de marinero enfrentando una serpiente marina en el mar generada con IA](https://i.postimg.cc/fLp498NF/timon-serpiente-marina.jpg)

Bueno, ¡momento de practicar!, vamos con un pequeño ejercicio.

## Reto 🧑🏻‍🏭

1. Crea una función que solicite al usuario dos números y realice la división. Maneja la excepción si el usuario ingresa un valor no numérico o si intenta dividir por cero.
2. Crea un programa que acceda a la posición que el usuario indique de la siguiente lista: [6,14,11,3,2,1,15,19]. No olvides capturar las excepciones que puedan surgir en caso de que el usuario introduzca un índice incorrecto o que no exista en la lista.

No olvides, dejar tus dudas y respuestas en comentarios. 👇


**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en X (Twitter).**