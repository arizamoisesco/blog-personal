---
title: Python para principiantes. Estructuras de de datos - Listas.
author: Moises Ariza
pubDatetime: 2023-09-17T07:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - tipos de datos
  - estructuras de datos
  - listas
  - Programación
  - Python
ogImage: "https://i.postimg.cc/tC7DQ5GZ/Pythonlistas.png"
description: "Descubre el sorprendente mundo de las listas en Python, una herramienta poderosa para organizar y manipular datos de manera flexible.🚀"
---
Hola a todos, espero inicien una excelente semana 😋, continuando con nuestro curso de Python vamos a conocer las estructuras de datos  y el potencial que estas tienen. 

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
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## ¿Qué son las estructuras de datos?

También llamadas colecciones, son **varias cajas unidas y organizados que te permiten tanto almacenar como gestionar diversos datos**. Cuando vimos los tipos de datos nos dimos cuenta de que las variables solo podían almacenar únicamente un elemento, por el contrario, con las estructuras de datos podemos almacenar muchos más y de varios tipos.

## Tipos de estructuras de datos

En Python podemos encontrar las siguientes:

- Listas
- Tuplas
- Diccionarios
- Sets

Hoy nos concentraremos en las listas.

## ¿Qué son las listas?

Empecemos con un ejemplo de una vez, imagina que estás cocinando una ensalada y necesitas tener una lista de ingredientes: lechuga, tomates, aceitunas, queso y aderezo. Una forma de hacerlo en Python es utilizando una **lista**. 

Para crear una lista en Python, simplemente agrupa tus elementos entre corchetes:

```python
ingredientes_ensalada = ["lechuga", "tomates", "aceitunas", "queso", "aderezo"]
```

Esta estructura de datos o colección tiene su propio tipo de dato que en Python se conoce como `list`

## **Características de las Listas**

Ahora que tenemos nuestra bandeja de ingredientes, exploremos las características clave de las listas:

- **Mutabilidad:** las listas pueden modificarse después de su creación. Puedes agregar nuevos ingredientes, quitar ingredientes no deseados o cambiar los existentes en cualquier momento.
- **Indexación:** Puedes acceder a elementos individuales de una lista utilizando índices. Por ejemplo, **`ingredientes_ensalada[0]`** te dará *"lechuga"* teniendo en cuenta nuestra lista anterior.
- **Orden:** Los elementos en una lista se mantienen en el orden en el que los defines. Esto es útil cuando necesitas mantener la secuencia correcta de los datos.
- **Flexibilidad:** Las listas pueden contener diferentes tipos de datos, como cadenas, números, otras listas e incluso objetos personalizados. Esto te permite crear combinaciones variadas de ingredientes en tu receta de datos.

## **Métodos y Operaciones con Listas**

Las listas en Python ofrecen una amplia gama de métodos y operaciones para trabajar con los datos:

### **1. Agregar Elementos**

Puedes agregar elementos a una lista usando el método `append()` o `insert()`:

```python

ingredientes_ensalada.append("cebolla") #Añada al final de la lista
ingredientes_ensalada.insert(2, "pepinos")#Se puede usar para añadir en cualquier posición
```

### **2. Eliminar Elementos específicos**

Puedes eliminar elementos de una lista utilizando los métodos `remove()` o `pop()`:

```python

ingredientes_ensalada.remove("tomates")
ingredientes_ensalada.pop(3)
```

### 3. Eliminar todos los elementos de una lista

Puedes eliminar todos los elementos de una lista de golpe haciendo uso el método `clear()`o reinicializando la lista con corchetes vacíos `[ ]`

```python
ingredientes_ensalada.clear() 
ingredientes_ensalada = []
```

### 4. Ordenar e invertir

Puedes ordenar una lista con el método `sort()` e invertirla con el método `reverse()`:

```python

ingredientes_ensalada.sort()
ingredientes_ensalada.reverse()
```

### 5. Longitud de una Lista

Obtén la cantidad de elementos en una lista utilizando la función `len()`:

```python

num_ingredientes = len(ingredientes_ensalada)
```

### 6. Encontrar un elemento

Puedes encontrar el índice que le corresponde a un determinado valor dentro de nuestra lista, haces uso del método `index()`:

```python
ingredientes_ensalada.index("cebolla")
```

### 7. Contar la cantidad de veces que aparece una lista

Para encontrar el número de ocurrencias de un valor de la lista haz uso del método `count()`:

```python
ingredientes_ensalada.count("queso")
```

### 8. Combinar listas

Puedes combinar elementos a la lista con el operador `+` o `+=` además de mediante el método **`extend()`**

```python
ingredientes_ensalada = ["lechuga", "tomates", "aceitunas", "queso", "aderezo"]
ingredientes_sopa = ["zanahoria", "pimiento rojo", "brócoli", "tomate", "calabacín"]

lista_compras1 = ingredientes_ensalada + ingredientes_sopa
lista_compras2 = ingredientes_ensalada.extend(ingredientes_sopa)
```

### 9. Recorrer una lista

Podemos ver uno a uno los elementos de una lista haciendo uso del ciclo **`for`** :

```python
for producto in ingredientes_ensalada:
	print(producto)
```

## **Conclusiones**

En resumen, las listas  **son mutables, ordenadas y altamente versátiles** para los diversos algoritmos que encontraremos en nuestro camino como programadores. Por eso ahora que tienes una comprensión de los fundamentos de las listas, ¡estás listo para utilizarlas en tus propios proyectos con Python! 🍽️🐍

## Reto

1. Crea un script para que el usuario pueda hacer una lista de compras y agregar el mismo sus productos. Al final debe mostrarse todos los elementos que posea la lista.
2. Crea una lista llamada *“numeros_primos”* que contenga los primeros diez números primos. Luego, muestra los valores agregados a la lista.

**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en X (Twitter).**