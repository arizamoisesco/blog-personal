---
title: Python para principiantes. Variables y tipos de datos
author: Moises Ariza
pubDatetime: 2023-05-29T02:06:51Z
featured: false
draft: false
tags:
  - variables
  - Programación
  - Python
ogImage: "https://i.postimg.cc/sgnWVDY8/Pythonvariables.png"
description: "Aprende que son las variables y los tipos de datos básicos que se pueden manejar con python"
---
Bienvenidos aventureros interesados a ingresar al maravilloso mundo de la programación, el día de hoy nos concentraremos en comprender un concepto fundamental en la programación, las variables, los ingredientes con los cuales nosotros realizamos nuestros programas. Sin más preámbulos, ¡comencemos!

## Consideraciones previas

- Se usarán varias analogías relacionadas con algunos alimentos 🍰, así que te recomiendo comer antes 🙊
- Iniciaremos con una introducción teórica y así luego pasaremos a la práctica
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍

## ¿Qué es una variable?

Las variables son un espacio en memoria RAM que te permite almacenar los datos del script o programa que estés haciendo para así manipularlo según tus necesidades. Un concepto más sencillo para asociarlo es imaginar las variables como **cajas** en donde vas a guardar un dato a la vez. 

![representacion-variable.png](https://i.postimg.cc/Z5973Rbk/1.png)

Estas cajas o “espacios” en la memoria RAM en python son considerados objetos, que en este lenguaje **todo son objetos,** lo cual va a permitirnos aprovechar los atributos y métodos que podemos este no puede proporcionar. Las variables presentan la siguiente estructura:

- Un **tipo de dato** que va a contener, es decir, que puede guardar la caja: números, letras, etc.
- El nombre que le damos a una variable se conoce como un **identificador.**
- El valor que va a contener, el cual será consistente según el tipo de dato que tenga se conoce con el nombre de **literal**
    
    ![2.png](https://i.postimg.cc/05KyWg8p/2-min.png)
    

## Reglas para nombrar el identificador de una variable

Los identificadores de cada variable deben respetar lo siguiente para que el compilador de cualquier lenguaje pueda procesarlos adecuadamente.

- Deben comenzar con una letra o guion bajo
- El resto del identificador debe poseer números, letras o guiones bajos
- No puede haber espacios en el identificador de la variable
- Los identificadores son *case sensitive,* esto significa que no es lo mismo una variable que tenga como identificador ***pastel*** que otra que se llama ***PASTEL***
- En todos los lenguajes programación hay identificadores que no se pueden usar porque ya están reservados, esto quiere decir, que ya son usados internamente para gestionar o representar otras instrucciones. En python son las llamadas *keywords*, para poder ver cuales son haces uso del siguiente línea de código:
    
    ```python
    help('keywords')
    ```
    

## Convenciones o guía para nombres en python

Las anteriores reglas, **si se usan** en nuestro código para definir una variable, no deberían generarnos algún tipo de error, pero existen ciertas convenciones que pueden ayudar a la legibilidad de nuestras variables, las cuales no son obligatorias, pero en python ayudarán a que sean mucho más legible y organizado, entre las más comunes podemos encontrar:

- usar nombres descriptivos en minúscula  y separados por guiones bajos, es decir, usar *[snake_case](https://es.wikipedia.org/wiki/Snake_case)*
- Antes y después del signo igual ( = ) debe haber solo un espacio en blanco

Puedes profundizar sobre la guía de estilos que tiene python en la [PEP 8](https://www.python.org/dev/peps/pep-0008/) (En otra publicación analizaremos esta y otras listas de estilos 😌).

## Tipos de datos de las variables con las que podemos trabajar en python

Las variables pueden almacenar datos de distintos tipos, es decir, las *“cajas”* que hablamos anteriormente pueden guardar ingredientes diferentes, los cuales pueden ser textos, letras, números, elementos booleanos (falso o verdadero). Entonces lo que llamamos tipos de datos los podemos ver como las **etiquetas de las cajas** que nos permiten identificar el interior de ese contenido. 

En algunos lenguajes es necesario definir explícitamente el contenido de la variable, como podemos observar en la línea de código del python a continuación:

```python
 ingrediente1: str = "chocolate"
```

En cambio, en python al ser un lenguaje de tipo dinámico no es necesario escribir previamente el tipo, ya que su intérprete es capaz de recibir el dato y deducir implícitamente cuál es el tipo de este.

```python
ingrediente1 = "chocolate"
```

A continuación vamos a ver los tipos de datos y las acciones que podemos realizar con ellos.

### ¿Cómo poder ver el tipo de dato de una variable?

Podemos ver el tipo de dato de una variable haciendo uso de la función **type.**

```python
ingrediente1 = "chocolate"
print(type(ingrediente1))
```

El resultado del ejercicio anterior nos debe proporcionar como respuestas el tipo de dato **str** el cual es string o cadena de texto en python.

Vamos a ver ahora sobre los tipos de datos más elementales que hay en python, si bien quedarán faltando varios, a estos les dedicaremos un espacio exclusivo en próximas publicaciones.

### Tipo numéricos (int, float, complex)

Como bien dice, su nombre hace referencia a las variables que poseen un número en su interior, el cual en python pueden ser:

- Un número entero (int),
    
    ```python
    
    entero = 5
    ```
    
- Un número de coma flotante (float)
    
    ```python
    
    flotante = 2.3
    ```
    
- Un número complejo (complex).
    
    ```python
    
    Complejo = 5 + 3j
    ```
    
### Tipo cadenas de texto (str)

Las cadenas de texto pueden ser desde una letra hasta una frase larga. Para poderlas definir se emplean las comillas simples (’ ’) o de las comillas dobles (” ”).

```python
ingrediente_pastel_1 = "azucar"
ingrediente_pastel_2 = 'harina'
```

También puedes agregar cadenas de texto que tengan múltiples líneas, para lograrlo se implementa las triples comillas ( ‘’’ ‘’’ ).

```python
ingredientes_pastel = ''' - huevos 
- azucar
- harina
- vainilla
- levadura
- leche
- sal
'''
```


### Tipo booleano (bool)

Las variables de tipo booleano se usan para trabajar con lógica binaria, lo cual significa que solo puede tomar dos tipos de valores discretos verdadero (True) o falso (False).

Ejemplo de sus usos:

```python
esta_cocinado = True
print(esta_cocinado)

tiene_azucar = False
print(tiene_azucar)
```

Analicemos el ejemplo anterior:

- La primera variable ***`esta_cocinado`*** está representando el hecho de que un alimento esté cocinando, y al tomar el valor de True se concluye que sí.
- La segunda variable ***`tiene_azucar`*** nos indica si una bebida tiene azúcar, tomando el valor de False, se puede concluir con esto que la bebida no lleva azúcar.

⚠️ Importante: No olvides que en python los valores bool True y false son case-sensative, por lo cual la primera letra debe ir en mayúscula.


Ahora que ya comprendes lo que son las variables y sus tipos (al menos los más básicos) estás listo para ponerlo en práctica. 

## Reto

En el editor de código que prefieras vas a realizar los siguientes ejercicios:

1. Desarrolla un script que posea las siguientes variables:
    1. nombre: tipo str y literal será `“Michael Jordan”`
    2. edad: tipo int y el literal será `50` 
    3. media_puntos: tipo float y su literal será `28.5`
    4. activo: su literal será `False`

El script debe mostrar en pantalla todos los valores.