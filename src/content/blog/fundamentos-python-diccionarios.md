---
title: Python para principiantes. Estructuras de datos - Diccionarios.
author: Moises Ariza
pubDatetime: 2023-11-04T07:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - tipos de datos
  - estructuras de datos
  - diccionarios
  - colecciones
  - Programación
  - Python
ogImage: "https://i.postimg.cc/GpYH5vRM/Pythondiccionarios.png"
description: "📢 ¡Sumérgete en el mundo de los diccionarios!
🌟 Explora su versatilidad: estructuras de datos elegantes que organizan información con precisión y eficiencia 🚀🐍✨"
---
Bienvenidos nuevamente al penúltimo capítulo de nuestro curso básico de python. Me había tomado un pequeño descanso antes de terminarlo, así que sin más preámbulo vamos a entrar en materia con la última estructura de datos o colección de la que hablaremos, los cuales son los **diccionarios**.

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
    - [**Listas**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-de-datos---listas/)
    - [**Tuplas**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-datos---tuplas/)
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## **¿Qué son los diccionarios?**

En Python, un diccionario es una estructura de datos que permite almacenar pares de **clave-valor**. Imagina un diccionario de cocina donde cada ingrediente tiene una *etiqueta* (clave) y una *descripción* (valor). Veamos un ejemplo para entenderlo mejor

```python
ingredientes = {
    "harina": "Ingrediente básico para hacer pan y pasteles.",
    "azúcar": "Endulzante común en la repostería.",
    "huevo": "Ingrediente esencial para la mayoría de las recetas de repostería.",
    "chocolate": "Ingrediente delicioso para hacer postres y bebidas.",
}
```

Es muy importante tener en cuenta que para crear un diccionario en python debes hacer una de llaves **`{}`** y separar las claves y valores con dos puntos **`:`**. 

## **Características de los Diccionarios en Python**

Las principales características que tiene un diccionario son:

### 1. Mutabilidad

Los diccionarios son mutables, lo que significa que puedes modificar, agregar y eliminar elementos después de haber sido creados.

### 2. Elementos no ordenados

Los diccionarios en Python no tienen un orden específico. Los elementos no se almacenan en un orden predecible, a diferencia de las listas.

### 3. Claves únicas

Cada clave en un diccionario debe ser única. No puede haber duplicados de claves en un mismo diccionario.

### 4. Flexibilidad

Los valores de un diccionario pueden ser de cualquier tipo de datos: números, cadenas, listas e incluso otros diccionarios.

### 5. Eficiencia

Los diccionarios en Python están implementados como tablas *hash*, lo que permite un acceso rápido a los elementos a través de sus claves.

## **Métodos y Operadores en Diccionarios**

### **1. Algunos métodos de Diccionarios**

- **`keys()`:** Devuelve una lista de todas las claves en el diccionario.
    
    ```python
    
    print(ingredientes.keys())
    # Salida: dict_keys(['harina', 'azúcar', 'huevo', 'chocolate'])
    ```
    

- **`values()`:** Devuelve una lista de todos los valores en el diccionario.
    
    ```python
    
    print(ingredientes.values())
    # Salida: dict_values(['Ingrediente básico...', 'Endulzante común...', 'Ingrediente esencial...', 'Ingrediente delicioso...'])
    ```
    
- **`items()`:** Devuelve una lista de *tuplas* que contienen las claves y valores del diccionario.
    
    ```python
    print(ingredientes.items())
    # Salida: dict_items([('harina', 'Ingrediente básico...'), ('azúcar', 'Endulzante común...'), ...])
    ```
    

### **2. Algunos operadores en Diccionarios**

- **`in`:** Verifica si una clave específica está presente en el diccionario.
    
    ```python
    print("azúcar" in ingredientes)
    # Salida: True
    ```
    
- **`del`:** Elimina un elemento del diccionario usando su clave.
    
    ```python
    del ingredientes["chocolate"]
    ```
    

## **Conclusiones**

Como podemos ver, los diccionarios en Python son herramientas fundamentales para cualquier programador porque nos permiten representar los datos de manera significativa haciendo uso de un sistema clave - valor que permite acceder rápidamente a los valores asociados, lo cual es vital en tareas como el **análisis de datos**, **gestión de base de datos** y **creación de aplicaciones interactivas.**

Bueno, ¡momento de practicar!, vamos con un pequeño ejercicio.

## Reto 🧑🏻‍🏭

1. Crea un diccionario con tus ingredientes de cocina favoritos y sus cantidades.
2. Utiliza el método **`keys()`** para imprimir todas las claves del diccionario que creaste en el ejercicio anterior.
3. Elimina un elemento del diccionario que creaste en el ejercicio 1 usando el operador **`del`**.

**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en X (Twitter).**