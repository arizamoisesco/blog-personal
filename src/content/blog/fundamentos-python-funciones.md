---
title: Python para principiantes. Funciones.
author: Moises Ariza
pubDatetime: 2023-11-18T07:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - funciones   
  - Programación
  - Python
ogImage: "https://i.postimg.cc/cLZQmK11/Pythonfunciones.png"
description: "📢 ¡Explora la potencia de las funciones en mi última entrega del curso de #Python para Principiantes!
🌟 Descubre su magia: eficiencia, modularidad y precisión, transformando tu código en una línea de montaje de resultados. 🚀🐍"
---
Bienvenidos, apasionados por la programación, a una nueva entrega de mi curso de ¡#Python para principiantes! En esta lección, nos vamos a sumergir en las **funciones** una herramienta clave para aprender a modularizar nuestro código, así que vamos a darle. 

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
    - **[Listas](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-de-datos---listas/)**
    - **[Tuplas](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-datos---tuplas/)**
    - [**Diccionarios**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-datos---diccionarios/)
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## **Introducción a las Funciones**

Una función es un **bloque de código reutilizable** que realiza una **tarea específica**. Imagina a las funciones como una máquina de producción industrial, la cual realiza un proceso o acción repetitiva por ti cada vez que la enciendes.

![Maquina de montaje para imaginar así las funciones](https://i.postimg.cc/Pqxw7qrs/a426814b-2c4c-423e-80d8-ce76aea402b8.jpg)

En Python la sintaxis para crear una función es la siguiente:

```python
def NOMBRE_DE_LA_FUNCION(PARAMETRO A RECIBIR):
	BLOQUE_CODIGO
```

Se escribe la palabra reservada `def` seguida del **nombre de la función** y los **parámetros** con los que va a trabajar entre paréntesis seguido del bloque de código que queremos que haga la función.

## **Características de las funciones en Python**

Las funciones traen aspectos interesantes para nuestro código que voy a ejemplificar con situaciones culinarias 🍽️:

- **Reutilización de Código:** Las funciones nos permiten escribir código una vez y usarlo varias veces. Una receta que tienes lista y probada para preparar muchos platos.
- **Modularidad:** Al dividir el código en funciones, se mejora la organización y la legibilidad. Es como tener secciones bien definidas en una cocina: una para cortar, otra para cocinar, y así sucesivamente.
- **Parámetros y Retornos:** Las funciones pueden aceptar parámetros (ingredientes) y devolver un resultado (plato terminado). Esto añade flexibilidad y versatilidad.

## Llamar o inicializar una función

Vamos a crear una función muy sencilla que reciba el nombre de un usuario para así lo concatenemos y genere un saludo personalizado.

```python
def saludo(nombre):
	print("Hola " + nombre)
```

Para poder hacer uso de una función solo hay que escribir el nombre de la función seguida de los paréntesis y dentro de ellos los parámetros (si son necesarios). 

```python
saludo("Pedro")
#RESULTADO: Hola Pedro
```

Recuerda que una función es una máquina que **si no enciende no se va a poder utilizar**, por eso es clave inicializarla cuando la necesites.

![Imagen: Las maquinas de montaje funcionando](https://i.postimg.cc/Hs8phjN5/0da63d77-d499-488e-976e-48b5a408b8e7.jpg)

## Asignar un valor por defecto a un parámetro

En ocasiones podemos encontrarnos ante la situación de que un usuario no proporcione ningún parámetro y si es requerido por la función, esta va a fallar parando el funcionamiento de todo nuestro código. Para prevenirlo podemos hacer lo siguiente:

```python
def saludo(nombre = "Anónimo"):
	print("Hola " + nombre)

saludo("Martha") #RESULTADO: Hola Martha
saludo() #RESULTADO: Hola Anónimo
```

## Tipos de parámetros para una función

Existen dos posibles tipos de parámetros que podemos proporcionarle a una función, los cuales son:

### Parámetros posicionales

Aquí es muy importante el **orden en que se pasan los parámetros**. Es la manera más común con la que trabajamos con las funciones.

```python
def suma(numero1, numero2):
	resultado = numero1 + numero2
	print(resultado)

suma(45, 20)
```

### Parámetros con palabra clave (keyword arguments)

Aquí la posición no importa, pero lo que se hace es i**ndicarle una clave para cada parámetro**.

```python
def suma(numero1, numero2):
	resultado = numero1 + numero2
	print(resultado)

suma(numero2 = 20, numero1 = 45)
```

## Tipos de funciones

Vamos a diferenciar el tipo de funciones que nos podemos encontrar:

### Funciones sin parámetros o vacías

Son aquellas que no requieren recibir ningún tipo de parámetro o *input* incluso sin necesidad de generar un *output* o return

```python
def estacion_limpieza():
    """Esta función simula una estación de limpieza en una línea de montaje."""
    print("Limpieza completada.")
```

### **Funciones con retorno**

Estas funciones reciben una entrada (*inputs)*, realizan una tarea y devuelven un resultado (*output*). Para hacerlo se hace uso de la palabra reservada `return`. Tan pronto se ha devuelto un valor, la función finaliza su ejecución

```python
def suma (numero1, numero2):
	resultado = numero1 + numero2
	return resultado

print(suma(4,5)) #RESULTADO: 9
```

### Funciones con argumentos múltiples

En ocasiones no sabemos cuantos parámetros podemos recibir en nuestra función, para esos casos podemos hacer uso de:

- ` *args`
    
    Con esto podemos crear **funciones genéricas** que se adaptan al número de parámetros con los que son llamados. Para lograr este cometido, los parámetros recibidos se guardarán en **tuplas**
    
    ```python
    def suma(*args):
    	resultado = 0
    	for arg in args:
    		resultado += arg
    		return resultado
    
    suma(1,3,4,2) # RESULTADO: 10 
    
    suma(1,1) # RESULTADO: 2
    ```
    
    El uso de la palabra *args* viene de la contracción de *arguments* en inglés y es una convención que se usa de manera arbitraria, por lo que no es necesario poner la palabra *args* lo importante es que adelante de la palabra vaya un asterisco (*)
    
- `**kwargs`
    
    Tiene la misma funcionalidad de *args,* pero en este caso l**os parámetros serán almacenados en un diccionario***.* También su la palabra *kwargs* es una convención, solo debes respetar que adelante de ella vayan dos asteriscos (**) y que a tu función le pases **parámetros con palabras claves.**
    
    ```python
    def suma(**kwargs):
    	resultado = 0
    	for key, value in kwargs.items():
    		print(key, "=", value)
    		resultado += value
    		return resultado
    
    suma(a=3, b=10, c=3) 
    # RESULTADO: 10 
    # a = 3
    # b = 10
    # c = 3
    # 16
    ```
    

> Aunque te mencioné que args y kwargs no tienen que ser nombradas exactamente asi procura mantener esta convención ya que facilita la comprensión del código.
> 

## Ámbito de las variables (Scope)

Cuando trabajamos con las funciones es importante entender el concepto del ***scope*** el cual se refiere a la zona del programa donde una variable “existe.”. Fuera de ese ámbito no podremos acceder a su valor ni manejarla. 

Lo anterior significa que **los parámetros y las variables definidas en una función no serán accesibles fuera de la función**, quedarán aislados en el llamado **ámbito local,** aquí los valores de las variables serán olvidados cada vez de se use la función.  

## **Conclusiones**

Las funciones resultan ser una herramienta indispensable para el programador en la búsqueda, modularizar para tener un código más organizado y eficiente, además hay algo a destacar las funciones son claves para el uso de paradigmas de programación como la [Programación Orientada a Objetos](https://arizamoises.co/posts/introducci%C3%B3n-r%C3%A1pida-a-lo-que-es-la-programaci%C3%B3n-orientada-a-objetos-y-sus-caracter%C3%ADsticas/).

Llegó el momento de tomar un rol más activo, pasemos a la sección de ejercicios prácticos. 👇🏽

## **Reto 🧑🏻‍🏭**

1. Crea un programa que determine si un número es primo o no. Deberás crear la función con el nombre de **`esPrimo()`** que reciba como parámetro un número y devuelva *True* o *False*.
2. Crea un programa que genere un número aleatorio del 1 al 10.  El usuario tendrá que adivinarlo, y el programa tras cada intento le indicará al usuario si el número es más alto, bajo o si ha acertado. La lógica para dar la respuesta al usuario deberá estar incluida en una función a la que se llamará tras cada intento.
    
    > **Pista:** Para generar los números aleatorios haz uso de la librería **random**
    >


**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en X (Twitter).**