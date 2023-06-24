---
title: Python para principiantes. Conversión de tipos de datos básicos
author: Moises Ariza
pubDatetime: 2023-06-26T06:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - tipos de datos
  - Programación
  - Python
ogImage: "https://i.postimg.cc/9f8bdfct/Pythonconversion-tipos.png"
description: "Comprende lo que es la conversión implícita y explicita de datos que tienen nuestras variables. "
---
La conversión de tipos es un aspecto fundamental en cualquier lenguaje de programación, y #python no es una excepción. Este lenguaje nos ofrece una gran flexibilidad para convertir valores de un tipo de datos a otro. Vamos a aprender sobre esto el día de hoy. 

## Consideraciones previas

- Si es tu primera vez por acá recomiendo que veas los artículos anteriores:
    - [Variables y tipos de datos](https://arizamoises.co/posts/python-para-principiantes-variables-y-tipos-de-datos/)
    - [Operadores y expresiones](https://arizamoises.co/posts/python-para-principiantes-operadores-y-expresiones/)
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

En Python, existen dos tipos de conversiones de tipos: **implícita** y **explícita**. Veamos como se diferencian a continuación. 

## Conversión implícita

La conversión implícita ocurre **automáticamente** cuando Python realiza una operación entre diferentes tipos de datos y lo convierte según el valor del tipo de “mayor rango”. La conversión implícita se puede resumir en la siguiente tabla:

| Tipo 1 | Tipo 2 | Resultado |
| --- | --- | --- |
| bool  | int | int |
| bool |  float | float |
| int | float | float |

Bueno, revisemos lo anterior con un ejemplo en el cual ejecutaremos conversión implícita entre un booleano y un número entero.

```python
valor_bool = True
Valor_int = 25

resultado = valor_bool + valor_int
print(resultado)
```

Podemos darnos cuenta de que el valor numérico “está por encima” del valor booleano, en el caso de estos el literal de **True** se convierte a **1** y si tuviéramos **False** entonces su valor cambiaria a **0.**

## Conversión explícita

En el caso de esta conversión, el programador debe especificar la conversión a hacer haciendo uso de funciones o métodos. 

### Convertir un valor a un número entero

Para cumplir este propósito se empleó el **int().** Toma un argumento y devuelve el valor entero equivalente. Si el argumento no puede ser convertido en un entero válido, se generará una excepción `ValueError`. Por ejemplo:

```python
numero_str = "10"
numero_int = int(numero_str)
print(numero_int)  # Salida: 10
```

### Convertir un valor a un número de punto flotante

Para poder hacer esta operación se emplea el método **float()**. Al igual que *int()*, toma un argumento y devuelve el valor flotante equivalente. Si el argumento no puede ser convertido en un flotante válido, también se generará una excepción `ValueError`. Ejemplo:

```python
numero_str = "3.14"
numero_float = float(numero_str)
print(numero_float)  # Salida: 3.14
```

### Convertir un valor a una cadena de texto

El método **str()** se utiliza para convertir un valor en una cadena de texto. Toma un argumento y devuelve una representación en forma de cadena del valor. Puede ser empleado para convertir números, booleanos u otros tipos de datos en cadenas. Ejemplo:

```python
numero = 42
numero_str = str(numero)
print(numero_str)  # Salida: "42"
```

### Convertir un valor a un booleano

Para esta tarea tenemos el método **bool()**. Acepta un argumento y devuelve **`True`** si el argumento es evaluado como verdadero, y `False` si es evaluado como falso. Por ejemplo:

```python
valor_str = "True"
valor_bool = bool(valor_str)
print(valor_bool)  # Salida: True

valor_int = 0
valor_bool = bool(valor_int)
print(valor_bool)  # Salida: False
```

Estos son solo algunos de los métodos básicos empleados para la conversión explícita de datos en Python. A medida que te familiarices con Python, podrás descubrir otros métodos y funciones para convertir entre diferentes tipos de datos de manera eficiente.

## Reto 🤓

Momento de poner lo aprendido en práctica, realiza los siguientes ejercicios en el editor que prefieras.

1. Escribe un programa que solicite al usuario ingresar una temperatura en grados Celsius como un número de punto flotante. Convierte esa temperatura a grados Fahrenheit utilizando la fórmula: Fahrenheit = $(Celsius * 9/5) + 32.$ Imprime el resultado en pantalla.
2. Crea un script que solicite al usuario ingresar un número entero y lo convierta en una cadena de texto. Luego, agrega el prefijo *"El número es: "* a la cadena y finalmente imprime el resultado.
3. Desarrolla un script que solicite al usuario ingresar su edad como un número entero. Luego, convierte esa edad en un número de punto flotante y calcula la edad promedio entre su edad actual y el doble de su edad. Imprime el resultado.
4. Solicita al usuario ingresar un valor booleano (`True` o `False`) como una cadena de texto. Convierte esa cadena en un valor booleano e imprime el valor inverso, es decir, si ingresan `True`, imprime `False` y viceversa

**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en Twitter.**