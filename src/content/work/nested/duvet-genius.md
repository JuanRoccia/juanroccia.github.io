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

### Tecnologías y Herramientas:

Hugging Face, Orca Mini Nomic, GPT4ALL, Flask, Tailwind CSS, SpeechRecognition, Web Speech API, HTML, CSS, JavaScript, Python.

# AudioGPT

AudioGPT es una innovadora aplicación web que permite a los usuarios interactuar con un chatbot conversacional utilizando solo su voz. Durante el desarrollo de este proyecto, exploré y probé varios modelos de Hugging Face antes de decidirme por GPT4ALL, específicamente el modelo Orca Mini de Nomic, debido a su eficiencia y precisión en la generación de texto.

### Ruta de Desarrollo

La aplicación fue desarrollada utilizando Flask, un microframework de Python, que me permitió integrar y comunicar el modelo de IA con la interfaz de usuario. Para capturar la voz del usuario, implementé una funcionalidad que utiliza las capacidades de grabación de voz del navegador. Una vez que el usuario proporciona su entrada de voz, esta se transcribe a texto, proceso que se realiza con una librería que convierte el audio en texto legible. Posteriormente, este texto se envía al modelo de IA para generar una respuesta adecuada.

### Respuesta del Modelo

Una vez que el modelo proporciona la respuesta, esta se convierte nuevamente en audio para que el usuario pueda escucharla. Además, la respuesta también se muestra en un chat en la interfaz de usuario, ofreciendo así dos modalidades de interacción: auditiva y visual.

### Diseño UI/UX

En cuanto al diseño y estética de la aplicación, utilicé Tailwind CSS, un marco de diseño de utilidad de vanguardia, para crear una interfaz amigable y moderna. Esta elección no solo mejoró la apariencia de la aplicación, sino que también optimizó la experiencia del usuario, haciendo que la interacción con el chatbot fuera fluida y agradable.

### Conclusión

En resumen, AudioGPT es el resultado de una cuidadosa selección de tecnologías y herramientas, todas elegidas con el objetivo de proporcionar una experiencia de chatbot por voz única y efectiva.


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

### Cómo Funciona

La aplicación utiliza la síntesis de voz y el reconocimiento de voz del navegador para interactuar con el usuario. Cuando el usuario habla, su voz se transcribe a texto y se envía a un modelo de IA en el servidor. El modelo de IA genera una respuesta, que luego se convierte en voz y se reproduce para el usuario.

### Código

El proyecto es una aplicación Flask. El archivo `main.py` contiene el servidor Flask y la lógica de la aplicación. El archivo `script.js` contiene el código JavaScript para la interacción del usuario en el front-end. El archivo `index.html` es la plantilla HTML para la interfaz de usuario.

### Uso

Para usar la aplicación, los usuarios simplemente necesitan visitar la URL de la aplicación en su navegador. Actualmente solo pueden interactuar con el chatbot utilizando el reconocimiento de voz.

## Despliegue

Para finalizar el desarrollo y deploy de la aplicación use Replit y esta disponible en la siguiente URL del Deployment: 

https://audio-gpt-juanroccia.replit.app/ 

Y en el caso de quedarse sin fondos también esta disponible la URL del Webview: 

https://audiogpt.juanroccia.repl.co/

### Estado Actual y Futuro del Proyecto

Aunque el proyecto ha avanzado mucho y ahora utiliza un modelo de IA más grande, todavía se encuentra en una etapa inicial. Puede haber fallas, demoras, etc. Sin embargo, el proyecto está en continuo desarrollo y habrá nuevas versiones con mejoras e implementaciones en el futuro.