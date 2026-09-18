# Control Conceptual de Señales No Autorizadas en Centros Penitenciarios

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un simulador web conceptual para analizar cómo diferentes materiales pueden atenuar señales de telecomunicaciones dentro de un entorno controlado, como un centro penitenciario.

El enfoque del proyecto es estrictamente académico y pasivo. No se utilizan inhibidores de señal, jammers ni ningún mecanismo activo de interferencia. La propuesta se basa en demostrar cómo una señal pierde potencia al propagarse y atravesar materiales físicos como ladrillo, concreto reforzado, malla metálica o una jaula de Faraday.

## Contexto del problema

En Guatemala, el uso no autorizado de dispositivos de comunicación dentro de centros penitenciarios representa un problema de seguridad. Sin embargo, bloquear señales mediante interferencia activa puede afectar comunicaciones legítimas fuera del perímetro del centro penal.

Por esta razón, el proyecto propone un enfoque basado en atenuación pasiva, utilizando materiales físicos para reducir la potencia de una señal sin emitir interferencia hacia el exterior.

## Objetivo general

Diseñar un simulador web que permita visualizar cómo la frecuencia, la distancia, el grosor del obstáculo y el tipo de material influyen en la pérdida de potencia de una señal de telecomunicaciones.

## Objetivos específicos

- Analizar el comportamiento de señales 2G, 3G, 4G y 5G.
- Comparar la atenuación generada por distintos materiales.
- Calcular una pérdida estimada de señal usando conceptos de propagación.
- Clasificar la señal como funcional, débil o bloqueada.
- Mantener un enfoque académico, legal y estrictamente pasivo.

## Tecnologías consideradas

El simulador trabaja con tecnologías de referencia como:

- 2G - 850 MHz
- 3G - 1900 MHz
- 4G - 2100 MHz
- 5G Sub-6 - 3.5 GHz
- 5G mmWave - 28 GHz

## Materiales considerados

- Ladrillo
- Concreto reforzado
- Malla metálica
- Jaula de Faraday

## Modelo conceptual utilizado

El simulador utiliza una estimación basada en pérdida por espacio libre y atenuación por material.

Fórmula general:

Pfinal = Pinicial - FSPL - Amaterial

Donde:

- Pfinal representa la potencia final recibida.
- Pinicial representa la potencia inicial de la señal.
- FSPL representa la pérdida por propagación en espacio libre.
- Amaterial representa la pérdida causada por el material seleccionado.

## Criterio de evaluación

El simulador clasifica la señal en tres estados:

- Señal funcional
- Señal débil
- Señal bloqueada o inutilizable

Para efectos del proyecto, se toma como referencia un umbral de -95 dBm. Si la potencia final queda por debajo de ese valor, la señal se considera degradada o inutilizable.

## Tecnologías utilizadas para el desarrollo

- HTML5
- CSS3
- JavaScript Vanilla
- GitHub Pages para despliegue público

## Estructura del proyecto

```text
Proyecto-Inicial/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

## Funcionamiento general

El usuario selecciona una tecnología de comunicación, un material, una distancia, el grosor del obstáculo y una potencia inicial. Con esos valores, el simulador calcula una pérdida aproximada de señal y muestra el resultado final en dBm.

Luego clasifica el estado de la señal como funcional, débil o bloqueada.

## Despliegue público

El proyecto se encuentra publicado mediante GitHub Pages.

Enlace del simulador:  
https://anesturadobarriosg.github.io/Proyecto-Inicial/

## Restricción legal y ética

Este proyecto no busca bloquear señales reales ni interferir comunicaciones públicas o privadas. Su finalidad es únicamente educativa y conceptual.

No se construyen, adquieren ni utilizan inhibidores de señal activos. El enfoque se mantiene en la atenuación pasiva y en el análisis del comportamiento de las señales frente a obstáculos físicos.

## Estado del proyecto

Primera versión funcional del simulador web con:

- Selección de tecnología.
- Selección de material.
- Ajuste de distancia.
- Ajuste de grosor del obstáculo.
- Ajuste de potencia inicial.
- Cálculo estimado de pérdida de señal.
- Clasificación del estado de la señal.

## Autor

Proyecto académico desarrollado por Angel Barrios para el curso de Telecomunicaciones.
