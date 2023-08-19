---
title: Python para principiantes. Estructuras de control de flujo - Bucle for.
author: Moises Ariza
pubDatetime: 2023-08-19T07:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - tipos de datos
  - bucles
  - ciclos
  - for
  - Programación
  - Python
ogImage: "https://i.postimg.cc/VLFMC45t/Pythoncontrol-flujo-for.png"
description: "Automátiza tareas rutinarias en tu código con los bucles o ciclos en python"
---
Hola de nuevo 👋, hoy conoceremos lo que son los ciclos en programación, sus beneficios y como implementarlos en python. 

## **Consideraciones previas**

- Si es tu primera vez por acá recomiendo que veas los artículos anteriores:
    - **[Variables y tipos de datos](https://arizamoises.co/posts/python-para-principiantes-variables-y-tipos-de-datos/)**
    - **[Operadores y expresiones](https://arizamoises.co/posts/python-para-principiantes-operadores-y-expresiones/)**
    - [**Conversión de tipos de datos**](https://arizamoises.co/posts/python-para-principiantes-conversi%C3%B3n-de-tipos-de-datos-b%C3%A1sicos/)
    - [**Métodos para Strings**](https://arizamoises.co/posts/python-para-principiantes-m%C3%A9todos-para-tipos-de-datos-string/)
    - **[Condicional if - else](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---condicionales-if---else/)**
    - [**Condicional match - case**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---condicionales-match---case/)
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## ¿Qué son los ciclos?

Los ciclos son sentencias que nos permiten automatizar la repetición de tareas de manera más eficiente.

![Fotográfia de Tine Ivanič Unplash](https://i.postimg.cc/Jz6RZWRX/ciclos.webp)

Usemos la siguiente analogía, tienes que realizar una gran cena por lo cual hay mucho por hacer y una de las tareas implica cortar 10 papas, por más destreza que tengas con el cuchillo, cortar una por una podría llevar mucho tiempo y sería tedioso ¿verdad?, si pudieras dividirte esta tarea entre 10 personas cortar las papas sería muchísimo más rápido.

Lo mismo pasa con el código, puede ocurrir que queremos que una tarea se ejecute varias veces, pero no queremos escribir una y otra vez las sentencias necesarias, pues para esto los lenguajes de programación nos ofrecen sentencias para crear estos ciclos, automatizando la repetición de las tareas según los parámetros que establezcamos.  

## ¿Qué tipo de sentencias tenemos en python para hacer ciclos?

En python podemos encontrar dos tipos de sentencias:

- `For`
- `while`

En el artículo de hoy nos concentraremos en la sentencia `for`.

## ¿Cómo funciona la sentencia for?

El ciclo for permite recorrer aquellos tipos de datos que sean iterables. Los tipos de datos que pueden ser iterables son:

- Cadenas de texto
- listas
- diccionarios
- ficheros
- Entre otros

> 📝 Nota: Iterar es poder realizar **una acción varias veces**. La acción que se puede realizar es tomar uno a uno cada elemento.
> 

## ¿Cómo utilizar las sentencia for?

La estructura que presenta la sentencia es la siguiente:

![Estructura base de un ciclo for](https://i.postimg.cc/hjhzTrFD/estructura-ciclo.png)

Estructura base de un ciclo for

Veamos un ejemplo, queremos crear un script que deletree una palabra dada por el usuario, en este caso va a ser “Pollo” con el ciclo for podemos conseguirlo de la siguiente manera:

```python
palabra = "Pollo"

for letra in palabra:
	print(letra)
```

La variable o iterador `letra` en cada recorrido lo que hará es moverse por la palabra en cada iteración y tomará cada una de las letras que haya en *“pollo”.*

## ¿Cómo romper un bucle for?

A veces no es necesario que el ciclo se cumpla dependiendo de la cantidad de elementos que tenga el dato iterable y para eso podemos establecer que termine según una condición específica, esto se logra a través de la sentencia `break`.

Tomemos nuestro ejemplo anterior:

```python
palabra = "Pollo"

for letra in palabra:
	if letra == "l":
		break 
	print(letra)
```

Ahora cuando llegue a la primera letra “*l*” se va a terminar el ciclo. 

## Generar una secuencias de números

Podemos generar una lista de números “bajo demanda” (según el rango especificado) haciendo uso de la función `range()` en el ciclo `for`.  La función tiene la siguiente estructura:

```python
range(start, stop, step)
```

- **start:** Es opcional por defecto tiene el valor de 0
- **stop:** Es obligatorio, en este caso la secuencia de números termina antes de llegar a este valor
- **step:** Es opcional por defecto tiene el valor de 1

Bueno, mucha cháchara pasemos a ver ejemplos de como se aplica:

```python
for i in range(3)
	print(i)
```

En el anterior código estamos solo especificando el tamaño de la lista de números, es decir, el parámetro **stop,** el cual en este caso deberá dar la lista [0,1,2]. Ahora especifiquemos de donde hasta donde debe terminar el ciclo con el parámetro **start** y **stop**.

```python
for i in range(1, 5)
	print(i)
```

Como resultado de esta tendremos la lista de números [1,2,3,4].

Si ahora lo que quisiéramos es **generar una lista de números impares** debemos jugar con todos los parámetros que nos permite la función que son **start**, **stop** y **step**.

```python
for i in range(1,11,2):
	print(i)
```

Lo anterior nos daría como resultado la lista de números [1,3,5,7,9] esto porque con el parámetro **step** le decimos que vaya generándolos de dos en dos.

## Enumerar una secuencia de elementos dentro del ciclo

Con la anterior función se puede generar una lista de números independientes, pero si lo que quisiéramos es numerar una lista de elementos como por ejemplo una lista de postres y que nos muestre esos postres podemos hacer uso de otra función conocida como `enumerate()`. Veámosla en acción:

```python
postres = ["Pastel de chocolate", "Helado de vainilla", "Tarta de frutas", "Flan de caramelo"]

print("¡Nuestro menú de postres!\n")
for idx, postre in enumerate(postres, start=1):
    print(f"{idx}. {postre}")
print("\n¿Cuál vas a elegir?")
```

Lo que hace es traer los elementos de la lista junto con sus respectivos índices, entendamos los parámetros con los que trabaja `enumerate()`

- **<iterable>**: Es obligatorio y puede ser cualquier valor iterable en Python como puede ser una lista o una tupla.
- **start:** Es opcional, sirve para controlar el índice en el que comienza el conteo. Por defecto el valor es 0

## Uso del guion bajo dentro de un bucle for

Hay ocasiones en las que queremos repetir una acción un número determinado de veces sin necesidades de implementar ninguna variable en nuestro bucle. Para esas situaciones se recomienda usar el guion bajo (_). Atento al siguiente ejemplo:

```python
for _ in range(10):
	print("¡Alerta! Sobreclaentamiento de pastel")
```

Al omitir la creación de una variable que no vamos a usar, evitamos consumir ese espacio en memoria, por lo cual empezamos a tener nuestro **código más eficiente**.

## Conclusión

Como podemos ver, los ciclos nos ayudan a omitir la creación de código duplicado y, en el caso del ciclo `for`, no resulta difícil su implementación, pero hay situaciones en donde no es la sentencia más práctica y ahí es donde entra nuestra otra opción para crear ciclos que es `while`, Aunque eso será en una próxima publicación.

## Reto

Con todo lo aprendido hoy, crea los scripts que correspondan para los siguientes ejercicios:

1. Determina si un número dado por un usuario es primo.
2. Índica cuantas vocales puede tener una cadena de texto dada por el usuario

Recuerda que la práctica hace al maestro y no basta solo con leer, sino que debes ponerte a tirar código, así que ¡mucho ánimo!  👐.

**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en X (Twitter).**