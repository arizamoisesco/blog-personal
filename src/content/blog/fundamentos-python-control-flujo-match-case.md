---
title: Python para principiantes. Estructuras de control de flujo - Condicionales match - case.
author: Moises Ariza
pubDatetime: 2023-08-07T06:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - tipos de datos
  - condicionales
  - match - case
  - Programación
  - Python
ogImage: "https://i.postimg.cc/rFQCHQq2/Pythoncontrol-flujo-match-case.png"
description: "Controla el flujo de tus aplicaciones para que tus script tomen mejores decisiones haciendo uso del nuevo condicional match - case."
---
Bienvenido de nuevo 👋, es un placer que estés de regreso en este nuevo artículo para poder aprender sobre los fundamentos de Python. 

El día de hoy conoceremos una estructura condicional relativamente nueva en el lenguaje conocida como `match - case`

## **Consideraciones previas**

- Si es tu primera vez por acá recomiendo que veas los artículos anteriores:
    - **[Variables y tipos de datos](https://arizamoises.co/posts/python-para-principiantes-variables-y-tipos-de-datos/)**
    - **[Operadores y expresiones](https://arizamoises.co/posts/python-para-principiantes-operadores-y-expresiones/)**
    - [**Conversión de tipos de datos**](https://arizamoises.co/posts/python-para-principiantes-conversi%C3%B3n-de-tipos-de-datos-b%C3%A1sicos/)
    - [**Métodos para Strings**](https://arizamoises.co/posts/python-para-principiantes-m%C3%A9todos-para-tipos-de-datos-string/)
    - **[Condicional if - else](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-control-de-flujo---condicionales-if---else/)**
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## ¿Qué es la sentencia de match - case?

Puedes verlo como el equivalente de la sentencia `switch` que ya hay en otros lenguajes. Originalmente, Python solo contaba con la sentencia `if - else` para el manejo de condicionales en el flujo de la aplicación, pero desde Python 3.10 se introdujo la novedad del ***Structural Pattern Matching*** y con eso la sentencia `match - case`. 

Puedes encontrar más información al respecto del porqué de la razón de su implementación en el [PEP 365](https://peps.python.org/pep-0635/).

> 📝 Nota: PEP son las siglas de "Python Enhancement Proposal" (Propuesta de Mejora de Python) el cual es un mecanismo abierto y colaborativo para mejorar el lenguaje Python tanto de manera estructurada como consensuada.
> 

## ¿Cómo utilizar las sentencia match - case?

La estructura que presenta la sentencia es la siguiente:

![Estructura del condicional match - case](https://i.postimg.cc/kXJNYsgb/match-case.png)

Veamos un ejemplo, supongamos que queremos construir un temporizador para hornear galletas y brownies, para lo cual necesitamos diferentes tiempos de cocción según el tipo de postre. Entonces los parámetros a tener en cuenta son:

- Sí se quiere galletas el tiempo será de 15 min
- Si se quiere brownies el tiempo será de 25 min

```python
postre = "galletas"

match postre:
	case "galletas":
	  tiempo_coccion = 15
	case "brownies":
	  tiempo_coccion = 25
	case _:
	  tiempo_coccion = 0
```

Puedes darte cuenta de que el último case hace uso de un guion bajo (`_`) este es un comodín que se usa cuando no se cumplen los casos anteriores, considéralo el `else` de la sentencia `if - else`. 

Hablando de la sentencia `if - else`, ambas sentencias de control de flujo pueden ir de la mano, observa como puedes complementar nuestro ejemplo anterior.

```python
postre = "galletas"

match postre:
	case "galletas":
	  tiempo_coccion = 15
	case "brownies":
	  tiempo_coccion = 25
	case _:
	  tiempo_coccion = 0
    
if tiempo_coccion > 0:
  print(f"Horneando {postre} por {tiempo_coccion} minutos.")
else:
  print("Postre no reconocido.")
```

Ahora ya tenemos un mensaje listo para nuestro temporizador para hornear ⏲️.

La sentencia `match - case` no solo sirve para comparar valores, sino para deconstruir estructuras de datos, capturar elementos o mapear valores. 

Por ejemplo, vamos a verificar diversas combinaciones de ingredientes. Si los ingredientes coinciden con alguno de los casos específicos, se imprimirá el tipo de pizza correspondiente. Si no coincide con ninguno de los casos, el último caso comodín (**`_`**) se ejecutará, lo que indica que la pizza es desconocida.

```python
ingredientes = "tomate", "mozzarella", "pepperoni" 

match ingredientes:
    case "tomate", "mozzarella":
        print("Pizza Margarita")
    case "tomate", "mozzarella", "pepperoni":
        print("Pizza Pepperoni")
    case "tomate", "mozzarella", "champiñones":
        print("Pizza de Champiñones")
    case _:
        print("Pizza desconocida")
```

¿Se te hace extraño que la variable ingredientes pueda guardar más de un solo valor?, bueno, esto se debe a que no es una variable, sino que es un **tupla**, una estructura de manejo de datos que veremos más adelante en este curso. 

## Conclusión

Como puedes ver, la sentencia `match - case` es una forma bastante interesante, poderosa y me atrevería a decir más legible para hacer condicionales, ¿eso significa que es mejor que la sentencia `if - else`?, no, nos apresuremos, cada una tiene su lugar y es tu trabajo como programador decidir en cuáles casos usar una u otra o, por el contrario, combinarlas. 

Para lograr determinar que decisión tomar hay que practicar y por eso es que llego el momento de nuestro reto de la semana 💪. 

## Reto

1. Escribe un script que acepte la opción de dos jugadores en el juego de “Piedra, papel y tijera” y determine cuál de las dos ganas.
2. Desarrolla un script que acepte tres números y muestre en pantalla cuál es el más “pequeño”
3. Desarrolla un script que acepte edad, peso, pulso y plaquetas y determine si una persona es apta o no para donar sangre.

No olvides que los scripts anteriores hay que realizarlos son la sentencia `match - case`.

Nos vemos en una próxima publicación 👐.

**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en X (Twitter).**