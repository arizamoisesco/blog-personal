---
title: Python para principiantes. Estructuras de datos - Tuplas.
author: Moises Ariza
pubDatetime: 2023-10-01T07:00:51Z
featured: false
draft: false
tags:
  - fundamentos
  - tipos de datos
  - estructuras de datos
  - tuplas
  - colecciones
  - Programación
  - Python
ogImage: "https://i.postimg.cc/MHh0NCf6/Pythontuplas.png"
description: "Descubre la magia de estas colecciones ordenadas e inmutables que desbloquean infinitas posibilidades para tener un buen nivel de eficiencia en tus proyectos! 🚀🐍✨"
---
Hola y bienvenido el “capítulo de hoy” de nuestro curso vamos a continuar aprendiendo sobre las colecciones que tenemos disponibles con Python y le corresponde el turno a las Tuplas.

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
    - [**Listas**](https://arizamoises.co/posts/python-para-principiantes-estructuras-de-de-datos---listas/)
- El lenguaje escogido para explicar los conceptos de codificación será python 🐍
- Realiza los retos propuestos porque práctica es lo que va a ayudarte a reforzar el conocimiento aprendido

## **¿Qué Son las Tuplas?**

Imagina que estás cocinando una pizza y necesitas mantener una lista de los ingredientes principales: masa, salsa de tomate, queso y pepperoni. Una forma de hacerlo en Python es utilizando una **tupla**. Las tuplas son similares a las listas, pero con una diferencia clave: son **inmutables**, es decir, una vez que las creas, no puedes cambiar su contenido.

Para crear una tupla en Python, simplemente agrupa tus elementos entre paréntesis:

```python
ingredientes_pizza = ("masa", "salsa de tomate", "queso", "pepperoni")
```

También puedes omitir el uso de los paréntesis y Python lo reconocerá como tupla:

```python
ingredientes_pizza = "masa", "salsa de tomate", "queso", "pepperoni"
```

## **Características de las tuplas**

Entonces, ¿por qué deberías usar tuplas en lugar de listas? Las tuplas tienen su lugar en Python por varias razones:

### **1. Integridad de Datos**

Como son inmutables, las tuplas son ideales para almacenar datos que no deben modificarse accidentalmente. Esto es útil en situaciones donde la integridad de los datos es crítica.

### **2. Uso como Clave en Diccionarios**

Dado que las tuplas son inmutables, se pueden utilizar como claves en diccionarios de Python, mientras que las listas no pueden.

### **3. Eficiencia**

Las tuplas son más eficientes en cuanto a memoria que las listas, ya que Python no necesita reservar espacio adicional para cambios futuros en los elementos.

### **4. Secuencia Ordenada**

Cuando necesitas mantener un orden estricto en tus datos, las tuplas son la elección perfecta.

### 5. **Admiten diferentes tipos de datos**

Al igual que con las listas, las tuplas pueden almacenar diferentes tipos de datos como cadenas de texto, números, etc.

## **Métodos y Operaciones con Listas**

### **1. Concatenación de Tuplas**

Puedes combinar tuplas para crear una nueva tupla:

```python

tupla1 = (1, 2, 3)
tupla2 = (4, 5, 6)
tupla_resultante = tupla1 + tupla2  # Devuelve: (1, 2, 3, 4, 5, 6)
```

### **2. Repetición de Tuplas**

Puedes repetir una tupla varias veces haciendo uso del operador de multiplicación (***)**:

```python
tupla_repetida = ("a", "b") * 3  # Devuelve: ("a", "b", "a", "b", "a", "b")
```

### **3. Longitud de una Tupla**

Obtén la cantidad de elementos en una tupla utilizando la función **`len()`**:

```python
num_elementos = len(tupla_resultante)  # Devuelve: 6
```

### **4. Contar la cantidad de ocurrencias de un elemento**

Este método **`count()`** te permite contar cuántas veces aparece un elemento en la tupla:

```python
ingredientes_pizza.count("queso") # Devuelve: 1
```

### **5. Encontrar el índice de un elemento**

El método **`index()`** te muestra el índice del primer elemento coincidente en la tupla:

```python
ingredientes_pizza.index("pepperoni") # Devuelve: 3
```

## **Conclusiones**

En resumen, las tuplas en Python son como platos bien preparados en un banquete de datos. Son inmutables, ordenadas y versátiles, lo que las hace ideales para ciertas situaciones donde tanto la integridad como el orden de los datos son esenciales. Ahora, con esto tienes una comprensión sólida de las tuplas para que puedas implementarlas en tus proyectos.

¡Llego el momento de a ponerlo en práctica con un reto!

## Reto

1. Vas a crear un script para una aplicación de geometría en el cual necesitas representar puntos en un plano cartesiano. Que debe cumplir con los siguientes requerimientos:
    - Crea una tupla para cada punto y luego almacena estas tuplas en una listas
    - Cada punto se describe mediante sus coordenadas `(x, y)`
    - El script debe poder calcular la distancia euclidiana entre dos puntos dados `(x1, x2)` y `(x2, y2)` para hacer la operación haz uso de la siguiente fórmula:
        
        `distancia = sqrt((x2 - x1)^2 + (y2 - y1)^2)`
        


**Si tienes alguna duda no dudes en escribirme en [@arizamoisesco](https://twitter.com/arizamoisesCO) en X (Twitter).**