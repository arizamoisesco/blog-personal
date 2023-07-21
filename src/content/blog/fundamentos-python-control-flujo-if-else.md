---
title: Python para principiantes. Estructuras de control de flujo - Condicionales if - else.
author: Moises Ariza
pubDatetime: 2023-07-20T06:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - tipos de datos
  - condicionales
  - if
  - Programación
  - Python
ogImage: "https://i.postimg.cc/bJXz3F9L/Pythoncontrol-flujo-if-else.png"
description: "Controla el flujo de tus aplicaciones para que tus script tomen mejores decisiones haciendo uso del condicional if - else."
---
👋Hola a todos, bienvenidos a este nuevo artículo 👀.

Como hemos aprendido de momento, todo programa informático es un conjunto de **algoritmos**, es decir, un conjunto de instrucciones para poder realizar alguna tarea. Estas instrucciones se ejecutan de *manera secuencial* de arriba hacia abajo, este orden se lo denominamos el **flujo del programa**. Este flujo lo podemos controlar dependiendo de las “decisiones” que requerimos que ejecute nuestro programa y para esto tenemos las llamadas **estructuras de control de flujo**.

## **Consideraciones previas**

- Si es tu primera vez por acá recomiendo que veas los artículos anteriores:
    - **[Variables y tipos de datos](https://arizamoises.co/posts/python-para-principiantes-variables-y-tipos-de-datos/)**
    - **[Operadores y expresiones](https://arizamoises.co/posts/python-para-principiantes-operadores-y-expresiones/)**
    - [**Conversión de tipos de datos**](https://arizamoises.co/posts/python-para-principiantes-conversi%C3%B3n-de-tipos-de-datos-b%C3%A1sicos/)
    - [**Métodos para Strings**](https://arizamoises.co/posts/python-para-principiantes-m%C3%A9todos-para-tipos-de-datos-string/)
- En este artículo nos concentraremos en entender lo que son las estructuras de control de flujo y como se usa el condicional if - else
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## ¿Qué son las estructuras de control de flujo?

Las estructuras de control de flujo son **sentencias** que nos permite cambiar el flujo secuencial de nuestro código para que tome otros “caminos” o repita ciertas instrucciones. Estas se pueden dividir en:

- Condicionales
- Ciclos

## Condicionales

Las sentencias condicionales son aquellas que permiten que dentro del flujo del programa se tomen **diferentes caminos** para ejecutar bloques de código en función de **condiciones establecidas**. 

Puedes imaginar esto como una carretera en la cual encuentras diversas vías.

![Foto de Mareks Steins tomada de Unplash](https://i.postimg.cc/BQgHkRbh/mareks-steins-8arr-Lr-W-s-Hg-unsplash.jpg)

Dependiendo del letrero que tenga cada una o según el objetivo de tu viaje decides irte por uno u otro camino. 

![No hay que tomar ese camino 🙊](https://i.postimg.cc/xTtNtHph/Untitled-9.png)

En Python contamos con dos formas de manejar las sentencias condicionales `if - else` y `match - case`.

Ya teniendo claro lo que en términos generales significa un condicional, conozcamos la sentencia `if - else` a profundidad.

## ¿Cómo se usa la sentencia if - else?

Esta sentencia tiene la siguiente estructura:

![Estructura básica de la sentencia if - else](https://i.postimg.cc/ZRtWCL0B/Untitled-10.png)

Estructura básica de la sentencia if - else

Para escribir las condiciones se debe emplear las expresiones de comparación. Si requieres recordar cuáles son en este [artículo](https://arizamoises.co/posts/python-para-principiantes-operadores-y-expresiones/), puedes profundizar al respecto.

Veamos un ejemplo, supongamos que deseamos preparar un pastel y para hornearlo tenemos como temperatura estándar  350 °C

```python
temperatura = 350 
```

Creamos un condicional que se encargue de enviarnos un mensaje cuando la temperatura sea normal 😃.

```python
temperatura = 350 

if temperatura <= 350:
	print("Los niveles de temperatura estan normales 🍰")
```

Pero cuando la temperatura sea muy alta nos envíe una alerta de que se nos va a quemar el pastel 😱.

```python
temperatura = 500 

if temperatura <= 350:
	print("Los niveles de temperatura estan normales 🍰")
else:
	print("⚠️ ¡La temperatura esta muy alta se va a quemar el pastel! ⚠️")
```

> ℹ️ En Python no es necesario incluir paréntesis al escribir las condiciones. Pero es muy recomendable utilizarlo para legibilidad o para establecer prioridades.
> 

### Sentencias if - else anidadas

Puede ocurrir que a la hora de tomar una camino en un condicional este tenga múltiples decisiones más, por lo cual cuando a base de una decisión se debe pasar por otras, estas las tenemos que organizar a través de condicionales anidadas.

![Foto de John Lockwood tomada de Unplash.](https://i.postimg.cc/9fthYPJq/john-lockwood-Fc-Lq69-V7-Rsc-unsplash.jpg)

Continuemos con nuestro ejemplo que nos permite analizar la temperatura a la cual se debe cocinar el pastel. Ahora estableceremos alertas con colores según se cumplan las siguientes condiciones:

- Si los niveles de temperatura es exactamente 350° tendrá un nivel de color verde
- Si los niveles de temperatura están por debajo de 350°, tendrán un nivel de color azul
- Si los niveles de temperatura están por encima de 350°, tendrán un nivel de color rojo

```python
temperatura = 500 

if temperatura == 350:
	if temperatura < 350:
		print("Nivel de color azul 🔵")
	else:
		print("Nivel de color verde 🟢")
else:
	print("Nivel de color rojo 🔴")
```

### Sentencia if - elif - else

Cuando ya tenemos varios `if-else` anidados corremos el riesgo de dificultar la legibilidad del mismo, por eso Python nos ofrece una sentencia para manejar estas situaciones conocida como `elif`.

![De esta manera considero que no olvidarás esta sentencia. 😂](https://i.postimg.cc/BZ15V8cv/Untitled-11.png)

El anterior ejemplo va a tener estos nuevos requerimientos:

- Si los niveles de temperatura es exactamente 350° tendrá un nivel de color verde
- Si los niveles de temperatura están por debajo de 200°, tendrán un nivel de color azul
- Si los niveles de temperatura son iguales a 400°, tendrán un nivel de color naranja
- Si los niveles de temperatura son mayores a 400°, tendrán un nivel de color rojo

```python
temperatura = 500 

if temperatura == 350:
	print("Nivel de color verde 🟢")
elif temperatura < 200:
	print("Nivel de color azul 🔵")
elif temperatura == 400:
	print("Nivel de color naranja 🟠")
else:
	print("Nivel de color rojo 🔴")
```

Como vez cuando usas la sentencia `elif` hay que establecer el condicional que deseas analizar al igual que con la sentencia `if`.

Con esto ya tienes tu primera herramienta para controlar el flujo de tu aplicación. Nos queda pendiente ver como se emplea la sentencia `match - case` y los ciclos, pero eso será para una próxima publicación.

## Reto 😎

1. Construye un script que le solicite al usuario un *nombre de usuario* y *contraseña.* Si los datos ingresados son correcto mostrará el mensaje *“¡Bienvenido!”*, de lo contrario mostrará el mensaje de *“Acceso fallido”*. Ten en cuenta que los datos válidos para ingresar son:
    
    ```python
    Nombre de usuario: root
    contraseña: 12345toor
    ```
    
2. Construye un script que determine el peso de una persona en cualquier planeta del sistema solar. Para esto hay que pedirle al usuario que proporcione el peso y el planeta escogido. 

**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en Twitter.**