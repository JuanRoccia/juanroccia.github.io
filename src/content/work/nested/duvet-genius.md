---
title: AudioGPT
publishDate: 2020-03-04 00:00:00
img: /assets/stock-3.jpg
img_alt: Pearls of silky soft white cotton, bubble up under vibrant lighting
description: |
  Aplicación de Inteligencia Artificial del tipo Chatbot Conversacional.
tags:
  - Chatbot
  - AI
  - Text Generation
---

# AudioGPT

AudioGPT es una aplicación web que permite a los usuarios interactuar con un modelo de IA conversacional al estilo de GPT, pero utilizando modelos de GPT4All y todo enfocado al audio.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
.
├── modelos
│   └── orca-mini-3b.ggmlv3.q4_0.bin
├── static
│   ├── img
│   │   ├── (archivos de imágenes)
│   │   └── favicon
│   │       └── (archivos de favicon)
│   └── script.js
├── templates
│   └── index.html
├── main.py
└── README.md
```

## Cómo Funciona

La aplicación utiliza la síntesis de voz y el reconocimiento de voz del navegador para interactuar con el usuario. Cuando el usuario habla, su voz se transcribe a texto y se envía a un modelo de IA en el servidor. El modelo de IA genera una respuesta, que luego se convierte en voz y se reproduce para el usuario.

## Código

El proyecto es una aplicación Flask. El archivo `main.py` contiene el servidor Flask y la lógica de la aplicación. El archivo `script.js` contiene el código JavaScript para la interacción del usuario en el front-end. El archivo `index.html` es la plantilla HTML para la interfaz de usuario.

## Uso

Para usar la aplicación, los usuarios simplemente necesitan visitar la URL de la aplicación en su navegador. Actualmente solo pueden interactuar con el chatbot utilizando el reconocimiento de voz.

## Despliegue

Para finalizar el desarrollo y deploy de la aplicación use Replit y está disponible 24/7 en la siguiente URL: https://audio-gpt-juanroccia.replit.app/

## Estado Actual y Futuro del Proyecto

Aunque el proyecto ha avanzado mucho y ahora utiliza un modelo de IA más grande, todavía se encuentra en una etapa inicial. Puede haber fallas, demoras, etc. Sin embargo, el proyecto está en continuo desarrollo y habrá nuevas versiones con mejoras e implementaciones en el futuro.