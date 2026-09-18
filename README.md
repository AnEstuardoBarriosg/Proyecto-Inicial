# Control Conceptual de Señales No Autorizadas en Centros Penitenciarios

## Descripción del proyecto

Este proyecto consiste en el desarrollo de un simulador web conceptual para analizar cómo diferentes materiales pueden atenuar señales de telecomunicaciones dentro de un entorno controlado, como un centro penitenciario.

El enfoque del proyecto es estrictamente académico y pasivo. No se utilizan inhibidores de señal, jammers ni ningún mecanismo activo de interferencia. La propuesta se basa en demostrar cómo la señal pierde potencia al propagarse y atravesar materiales físicos como ladrillo, concreto reforzado, malla metálica o una jaula de Faraday.

## Objetivo general

Diseñar un simulador web que permita visualizar de forma sencilla cómo la frecuencia, la distancia, el grosor del obstáculo y el tipo de material influyen en la pérdida de potencia de una señal.

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

## Modelo conceptual

El simulador utiliza una estimación basada en pérdida por espacio libre y atenuación por material:

```text
Pfinal = Pinicial - FSPL - Amaterial
