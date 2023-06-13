---
title: Python para principiantes. Operadores y expresiones
author: Moises Ariza
pubDatetime: 2023-06-13T02:06:51Z
featured: false
draft: false
tags:
  - fundamentos
  - operadores
  - Programación
  - Python
ogImage: "https://i.postimg.cc/1R7TGQk7/Pythonoperadores.png"
description: "Aprende aprende a manipular la información de las variables con sus operadores."
---
Hola a todos en la publicación anterior vimos cuáles son los ingredientes básicos con los que trabajan nuestros programas, las variables, hoy nos concentraremos en como aprovecharlos y esto será a través del uso de los operadores de cada tipo de dato.

## Consideraciones previas

- Si es tu primera vez aprendiendo programación te recomiendo pasar primero por el articulo de [variables y tipos de datos](https://arizamoises.co/posts/python-para-principiantes-variables-y-tipos-de-datos/)
- Iniciaremos con una introducción teórica y así luego pasaremos a la práctica
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## ¿Qué son los operadores?

Los operadores son básicamente **símbolos reservados** por el intérprete del lenguaje de programación, los cuales se usan para realizar operaciones que van a variar dependiendo del tipo de dato que tengan sus **operandos**, estos pueden ser variables, valores literales o incluso valores obtenidos de funciones. 

🤨 Ok tal vez no te dice mucho la anterior definición así que vamos a analizar caso por caso de cada tipo de dato 🤠. 

## Operadores aritméticos

Estos operadores se utilizan para hacer operaciones matemáticas. En la siguiente tabla vas a encontrar los operadores. 

| Operador | Uso | Descripción |
| --- | --- | --- |
| + | numero1 + numero2 | Adición  |
| - | numero1 - numero2 | Resta o sustracción |
| * | numero1 * numero2 | Multiplicación |
| / | numero1 / numero2 | División |
| // | numero1 // numero2 | Cociente de la división |
| % | numero1 % numero2 | Módulo |
| ** | numero1 ** numero2 | Potenciación |

**Ejemplo:**

```python
numero_1 = 8
numero_2 = 3

numero1 + numero2 # Suma 
numero1 - numero2 # Resta
numero1 * numero2 # Multiplicación
numero1 / numero2 # División 
numero1 // numero2 # Cociente
numero1 % numero2 # Módulo
numero1 ** numero2 # Potencia

```

## Operadores de cadenas de caracteres

En el caso de los str podemos hacer uso de algunos operadores para manipular las cadenas de caracteres, entre los cuales puedes encontrar:

| Operador | Uso | Descripción |
| --- | --- | --- |
| + | “a” + ”b” | Concatenar uno o varios str |
| , | “a” , ”b” | Concatenar uno o varios str |
| * | “a” * 4 | Crear una cantidad específica de una cadena de caracteres |

### **Ejemplo**

```python
platillo = "Bandeja paisa"
bebida = "Jugo de lulo"

almuerzo = platillo + 'y ' + bebida #Concatenamos 3 str con el operador +
tipo_jugo = bebida , " en leche" #Concatenamos 2 str con el operador ,
repetir_platillo = platillo * 4 #Hacemos que se repita 4 veces la cadena de caracteres
```

## Operadores lógicos o booleanos

Cuando vamos a trabajar con valores de tipo `bool`, tenemos a nuestra disposición los siguientes operadores.

| Operador | Uso | Descripción |
| --- | --- | --- |
| and | a and b | Evalúa si los dos operandos o variables son verdaderos, entonces devuelve True. |
| or | a or b | Evalúa si uno de los dos operandos es verdadero, si es así, devuelve True |
| not | not b | Cambia el tipo bool que tenga el operando, si es True pasa a False y viceversa.  |

### **Ejemplo**

Creamos dos variables que representan dos posibles estados para un pedido en un restaurante.

```python
tiene_sal = True
tiene_ensalada = False
```

- Haciendo uso del operador `and` tendremos como resultado el booleano `False`.
    
    ```python
    tiene_sal = True
    tiene_ensalada = False
    
    print(tiene_sal and tiene_ensalada)
    ```
    
- Si utilizamos el operador `or` nuestro resultado booleano será `True`.
    
    ```python
    tiene_sal = True
    tiene_ensalada = False
    
    print(tiene_sal or tiene_ensalada)
    ```
    
- Si implementamos el operador `not` entonces nuestro resultado para la variable `tiene_sal` pasará de `True` a `False`
    
    ```python
    tiene_sal = True
    tiene_ensalada = False
    
    print(not tiene_sal)
    ```
    

## Operadores relacionales o de comparación

Estos operadores son empleados para comparar dos o más valores, lo cual nos dará como resultado dos posibles respuestas `True` o `False`. Estos operadores serán clave cuando estes trabajando con estructuras de control de flujo como condicionales o ciclos.

| Operador | Uso | Descripción |
| --- | --- | --- |
| > | a > b | Evalúa si a es mayor que b |
| ≥ | a >= b | Evalúa si a es mayor o igual que b |
| < | a < b | Evalúa si a es menor que b |
| ≤ | a ≤ b | Evalúa si a es menor o igual que b |
| == | a == b | Evalúa si a es igual que b |
| ≠  | a ≠ b | Evalúa si a es diferente de b |

### **Ejemplo**

Comparemos la cantidad de pasteles que podemos tener en una tienda con respecto a la cantidad de pedidos recibidos. Una analogía para entender estos operadores es que se usan para responder preguntas, como las que veremos a continuación:

- ¿La cantidad de pasteles es mayor a la cantidad de pedidos?, al ser verdadera esta afirmación nos debe devolver `True`.
    
    ```python
    cantidad_pasteles = 10
    cantidad_pedidos = 5
    
    print(cantidad_pasteles > cantidad_pedidos)
    ```
    
- ¿La cantidad de pasteles es igual a la cantidad de pedidos?, al ser falsa esta afirmación nos debe devolver `False`.
    
    ```python
    cantidad_pasteles = 10
    cantidad_pedidos = 5
    
    print(cantidad_pasteles == cantidad_pedidos)
    ```
    

## Operadores de asignación

Estos operadores son empleados para asignar un literal o una variable a otra variable o hacer operaciones básicas con ellos.

| Operador | Uso | Equivalencia |
| --- | --- | --- |
| =  | a = “prueba” | Asigna el literal a la variable a |
| += | a += 1 | a = a + 1 |
| -= | a -= 1 | a = a - 1 |
| *= | a *= 1 | a = a * 1 |
| /= | a /= 1 | a = a / 1 |
| //= | a //= b | a = a // 1 |
| %= | a %= b | a = a % 1 |
| **= | a **= b | a = a ** 1 |

Como puedes darte cuenta, los operadores de asignación que van acompañados de un operador aritmético son básicamente una manera más corta para porder hacer estas operaciones (mientras sean sencillas). Para estos no va a realizarse ejemplo, pero con lo que ya sabes no te quedará nada difícil aprovecharlos 😉.

Llegamos al final de nuestro post del día de hoy, pero como siempre prepárate porque se viene ¡nuestro reto! 

## Reto 🤓

En el editor de código que prefieras vas a realizar los siguientes ejercicios:

1. Vas a crear un script que le solicite al usuario un número del 1 al 10 y en pantalla debe mostrar la tabla de multiplicar que corresponde a ese número teniendo en cuenta que va desde el 1 hasta el 10.
2. Vamos con la clásica calculadora, vas a realizar un nuevo script que le solicite al usuario dos números y estos serán utilizados para realizar las operaciones de suma, resta, multiplicación, división y potenciación.

Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en Twitter.