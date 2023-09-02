---
title: Python para principiantes. Estructuras de control de flujo - Bucle while.
author: Moises Ariza
pubDatetime: 2023-09-02T07:00:51Z
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
ogImage: "https://i.postimg.cc/HLsPP8Jc/Pythoncontrol-flujo-while.png"
description: "Aprende a dominar el poder del ciclo while y automatiza tus tareas repetitivas cuando no es clara la cantidad de veces que deseas que se repita la tarea"
---
¡Bienvenidos, entusiastas de la programación y Python! 👋, hoy continuaremos con la sentencia para ciclos que teníamos pendiente que es `while`.

## **Consideraciones previas**

- Si es tu primera vez por acá recomiendo que veas los artículos anteriores:
    - **[Variables y tipos de datos](https://arizamoises.co/posts/python-para-principiantes-variables-y-tipos-de-datos/)**
    - **[Operadores y expresiones](https://arizamoises.co/posts/python-para-principiantes-operadores-y-expresiones/)**
    - [**Conversión de tipos de datos**](https://arizamoises.co/posts/python-para-principiantes-conversi%C3%B3n-de-tipos-de-datos-b%C3%A1sicos/)
    - [**Métodos para Strings**](https://arizamoises.co/posts/python-para-principiantes-m%C3%A9todos-para-tipos-de-datos-string/)
    - **[Condicional if - else](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---condicionales-if---else/)**
    - [**Condicional match - case**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---condicionales-match---case/)
    - **[Ciclo for](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---bucle-for/)**
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## ¿Cómo funciona la sentencia `while`?

En el mundo de la programación, un ciclo **`while`** es como una receta que se repite hasta que se cumple una condición específica. Imagina que estás cocinando una deliciosa sopa de pollo y quieres que hierva hasta que las zanahorias estén tiernas. Aquí, la condición para detener la cocción sería: *"mientras las zanahorias no estén tiernas, sigue hirviendo"*. En Python, esta lógica se traduce en un ciclo **`while`**.

## ¿Cuál es la sintaxis del Ciclo `while`?

La estructura que presenta la sentencia es la siguiente:

![Estructura de la sentencia while](https://i.postimg.cc/rFqVFg3v/sentencia-while.png)

La **`condicion`** es una expresión booleana que se evalúa antes de cada iteración. Si la condición es **`True`**, el código dentro del ciclo **`while`** se ejecutará una y otra vez. Si en algún momento la condición se vuelve **`False`**, el ciclo se detiene y el programa continúa con la siguiente instrucción.

Veamos a continuación un ejemplo, si alguna vez cocinaste arroz y te diste cuenta de que se quema si lo dejas en el fuego demasiado tiempo, entenderás la importancia de establecer límites en un ciclo **`while`.**

```python
minutos_en_el_fuego = 0

while minutos_en_el_fuego < 10:
    cocinar_arroz()
    minutos_en_el_fuego += 1
```

## Romper los ciclos

Al igual que paso con el ciclo `for` podemos usar la sentencia `break` para romper o finalizar el bucle antes de que se cumpla la condición de parada al principio en nuestro `while`. Mira el siguiente ejemplo:

```python
want_exit = 'N'
number_questions = 0

while want_exit == 'N':
	print("Bienvenido")
	want_exit = input("¿Deseas salir? [S/N]")
	number_questions += 1
	if number_questions == 4:
		print('Máximo número de preguntas alcanzado')
		break
print("Gracias por usarme :)")
```

Logramos establecer el límite de preguntas que se puede realizar al usuario antes de salir a través del `break`, si no lo hubiéramos establecido dicho límite, el bucle hubiera seguido al infinito hasta que el usuario pusiera la letra *‘N’* para salir. Ahora que pasaría, si no pudiéramos detener el ciclo, bueno, estaríamos ante el peligroso bucle infinito 😵. 

## ¡Cuidado con los ciclos infinitos! 😱

Así como en la cocina, donde dejar una olla en el fuego demasiado tiempo puede causar estragos, en la programación, un ciclo **`while`** mal diseñado puede resultar en un **bucle infinito**, una situación en la que el programa nunca se detiene de forma natural. Esto puede consumir recursos de la computadora hasta que se termine el espacio en memoria RAM.

Imagina que queremos hervir agua hasta que alcance 100 grados Celsius:

```python
temperatura_agua = 25  

while temperatura_agua < 100:
    hervir_agua()  
```

Nunca establecemos que la temperatura del agua aumente dentro de nuestro ciclo `while` por consiguiente se repetirá hasta bloquear el equipo o hasta que interrumpamos su ejecución. Por si acaso, **con CTRL + C interrumpes la ejecución del código anterior en consola**.

## ¿Cuál es la diferencia entre el ciclo `for` y el `while`?

Por último, es importante conocer la diferencia entre **`for`** y **`while`** en Python. Mientras que el ciclo **`while`** se basa en una condición, el ciclo **`for`** se utiliza cuando se conoce la cantidad exacta de iteraciones que se deben realizar. Imagina que quieres cortar 10 rodajas de pan:

```python
for corte in range(10):
    cortar_rodaja()
```

En este caso, usamos un ciclo **`for`** para especificar las 10 rodajas que queremos cortar. El ciclo **`for`** es **ideal cuando sabemos cuántas veces queremos repetir una acción**. 

## **Conclusiones**

Hemos recorrido los conceptos básicos del ciclo **`while`** en Python en donde ya sabes que lo puedes aprovechar para las situaciones en las cuales **no hay cantidad de repeticiones predeterminada**,  recuerda la programación, requiere práctica y paciencia para perfeccionar tus habilidades por eso a continuación queda realizar los retos de esta semana.

## Reto

Crea un programa que le solicite al usuario un nombre de usuario y contraseña. 

Ten en cuenta los siguientes requerimientos:

- El programa mostrará el mensaje “Bienvenido” si el usuario introduce los siguientes datos:
    - Nombre de usuario: *root*
    - Contraseña: *toor*
- Si los datos de acceso son incorrectos, mostrará el mensaje “Acceso incorrecto. Te quedan X intentos” donde la **X** representa la cantidad de intentos disponibles
- Tras el tercer fallo, el programa mostrará el mensaje “Has agotado todos tus intentos” y finalizará

**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en X (Twitter).**