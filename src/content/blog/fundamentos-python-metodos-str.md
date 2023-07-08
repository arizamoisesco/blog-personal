---
title: Python para principiantes. Métodos para tipos de datos String.
author: Moises Ariza
pubDatetime: 2023-07-08T06:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - tipos de datos
  - str
  - string
  - Programación
  - Python
ogImage: "https://i.postimg.cc/gJN06bCH/Pythonmetodos-str.png"
description: "Conoce y aprovecha los métodos que te ofrece python para los tipos de datos String y así facilitarte tus tareas en programación."
---
Ya para este punto conocemos muy bien los tipos de variables básicas con las que podemos trabajar en python. Es momento de ver los métodos que nos ofrece cada uno de los tipos de datos, para este artículo vamos a trabajar con algunos métodos **str.** 

## **Consideraciones previas**

- Si es tu primera vez por acá recomiendo que veas los artículos anteriores:
    - **[Variables y tipos de datos](https://arizamoises.co/posts/python-para-principiantes-variables-y-tipos-de-datos/)**
    - **[Operadores y expresiones](https://arizamoises.co/posts/python-para-principiantes-operadores-y-expresiones/)**
    - [**Conversión de tipos de datos**](https://arizamoises.co/posts/python-para-principiantes-conversi%C3%B3n-de-tipos-de-datos-b%C3%A1sicos/)
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

> ***💡 Recomendación:** Visualiza los métodos de ahora en adelante como ayudas que tiene el lenguaje para facilitarnos ciertas tareas comunes que realizamos a la hora de programar.*
> 

## Métodos comunes para tipo de datos str

Para las  cadenas de caracteres o los tipos de dato str en python se pueden hacer las siguientes operaciones.

### Mostrar uno o varios caracteres específicos de una cadena

Puedes acceder a caracteres individuales dentro de una cadena haciendo su de su índice, esto se conoce como indexación.

```python
cadena = "Python"
print(cadena[0])   
```

Lo anterior nos dará como salida la letra ***“P”.*** Además, podrás extra subcadenas de caracteres mediante la **segmentación o slicing.** Por ejemplo:

```python
cadena = "Python"
print(cadena[2:5])  
```

Las líneas de código anterior dará como resultado el conjunto de caracteres ***“tho”.***

### Saber la longitud de una cadena

Para esto se hace empleo del método `len()` el cual nos devuelve un número que es la longitud de caracteres que tenga nuestra cadena. 

```python
dulce = "Barra de chocolate"
len(dulce)
```

Con el anterior ejemplo tendremos como resultado el número  **18,** es crucial que sepas que los espacios entre letras también se cuentan como un carácter. 

### Dividir una cadena según sus caracteres

Podemos dividir una cadena de texto según el tipo de *separador* que deseemos. En Python podemos hacer uso del método `split()`.

```python
proverbio = "No hay mal que por bien o venga"
proverbio.split()
```

Si se usa la función de esta manera se separan los caracteres teniendo en cuenta el espacio vacío que haya entre cada uno de ellos. Si, por el contrario, deseas especificar el carácter de separación, puedes hacerlo poniéndolo entre los paréntesis del método.

```python
herramientas = "Matillo,Sierra,Destronillador"
herramientas.split(',')
```

El método `split()` nos devuelve los caracteres en una lista, el cual es un tipo de dato en python que veremos más adelante en próximas publicaciones. 

### Reemplazar elementos

Puedes emplear la función `replace()` indicando la subcadena a reemplazar y cuantas instancias se deben reemplazar. 

```python
proverbio = "Quien mal anda mal acaba"
proverbio.replace("mal", "bien", 1)
```

Ten en cuenta que si no se especifica cuantas veces será reemplazada, la sustitución se hará en todas las instancias encontradas que coincidan con el criterio de sustitución.

```python
proverbio = "Quien mal anda mal acaba"
proverbio.replace("mal", "bien") 
```

### Manejo de mayúsculas y minúsculas

Python te permite realizar variaciones en los caracteres de una cadena de texto entre mayúscula y minúscula. 

- Con `capitalize()` la primera letra de la cadena de caracteres se coloca en mayúscula
    
    ```python
    proverbio = "quien mal anda mal acaba"
    proverbio.capitalize()
    ```
    
- Con `title()` la primera letra de cada grupo de caracteres después de un espacio se colocan en mayúscula
    
    ```python
    proverbio = "quien mal anda mal acaba"
    proverbio.title()
    ```
    
- Con `upper()` todos los caracteres de la cadena se colocan en mayúscula
    
    ```python
    proverbio = "quien mal anda mal acaba"
    proverbio.upper()
    ```
    
- Con `lower()` todos los caracteres de la cadena se colocan en minúscula
    
    ```python
    proverbio = "QUIEN MAL ANDA MAL ACABA"
    proverbio.lower()
    ```
    

### Mostrar un mensaje en consola

Este lo hemos visto ya muchas veces y es básicamente el método `print()` que nos permita dar un mensaje en consola.

```python
comida_rapida = "Hamburguesa"
print(comida_rapida)
```

### Leer datos desde el teclado

Para esto se implementa el método `input()` que permite que puedas interactuar con el usuario y solicitar la información que tú desees y aprovecharlo como necesites.

```python
nombre_pedido = input("Introduzca el pedido que desea en nuestro restaurante: ")
```

Dos cosas que no puedes olvidar:

- Se puede especificar el mensaje que desee, lo cuales muy recomendable para que el usuario tenga contexto de que debe escribir en el teclado
- El método `input()` siempre nos va a devolver un objeto de tipo cadena de texto o str

### Limpiar una cadena de caracteres no requeridos

Cuando recibimos información por parte del usuario o de cualquier fuente externa, es muy probable que se incluyan *“caracteres de relleno”* al comienzo y al final. Por lo cual python nos ofrece el método `strip()` de eliminar esos caracteres u otros que necesitemos.

- Si no se especifican los caracteres de `strip()` elimina cualquier combinación de espacios en blanco, saltos de línea `\n` o tabuladores `\t`
    
    ```python
    numero_pedido = "\n\t  \n 48374983274832 \n\n\t \t \n"
    numero_pedido.strip() #48374983274832
    ```
    
- Para hacer limpieza al principio de la cadena, lo que significa a la izquierda de la cadena,  podemos hacer uso de `lstrip()`
    
    ```python
    numero_pedido = "\n\t  \n 48374983274832 \n\n\t \t \n"
    numero_pedido.lstrip() #48374983274832 \n\n\t \t \n
    ```
    
- Para hacer limpieza al final de la cadena, lo que significa a la derecha de la cadena,  podemos hacer uso de `rstrip()`
    
    ```python
    numero_pedido = "\n\t  \n 48374983274832 \n\n\t \t \n"
    numero_pedido.rstrip() #\n\t  \n 48374983274832
    ```
    

Existen muchos más métodos para manejar strings con python por lo cual te invito a que los revises en este [link](https://docs.python.org/3/library/stdtypes.html#string-methods) a la documentación oficial. 

## Reto 🧑🏻‍🏭

Realiza los siguientes ejercicios para poner en práctica lo aprendido en este artículo: 

1. Realizar un script que le solicite al usuario dos números y una frase. Con la anterior información se generará un substring que cumpla con los siguientes criterios:
    1.  El primer número nos indicará a la posición de inicio del substring con base en la frase ingresada
    2. El segundo nos indicará la longitud del substring
2. Crea un script que le solicite al usuario una frase cualquiera. A continuación solicitará una letra que desee el usuario reemplazar y por cuál letra debe ser reemplazada. Ten en cuenta también estos criterios:
    1. Se mostrará en pantalla el número de veces que la letra está presente en la frase
    2. Se mostrará en pantalla la nueva frase generada

**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en Twitter.**