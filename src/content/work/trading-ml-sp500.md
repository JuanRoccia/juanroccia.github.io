---
title: "Estrategia de Trading Algorítmica con Machine Learning sobre el S&P500"
date: 2025-07-14
description: "Proyecto final de la Tecnicatura en Programación: análisis y optimización de portafolios usando clustering y datos históricos del S&P500."
image: "/assets/newplot.png"
notebook: "/assets/Proyecto_Final_ML&BD.ipynb"
---

## Resumen

Este proyecto fue realizado como trabajo final de la carrera de Tecnologías en Programación. Consiste en el desarrollo de una estrategia de trading algorítmica utilizando técnicas de aprendizaje no supervisado (K-Means) para analizar y seleccionar activos del S&P500, optimizando portafolios y comparando su rendimiento con el índice.

### Objetivos
- Descargar y procesar datos históricos de precios del S&P500.
- Calcular indicadores técnicos y características relevantes para cada acción.
- Seleccionar los 150 activos más líquidos cada mes.
- Calcular rentabilidades mensuales para distintos horizontes temporales.
- Descargar factores Fama-French y calcular betas móviles.
- Agrupar activos similares usando K-Means y construir portafolios óptimos (max Sharpe ratio).
- Comparar el rendimiento del portafolio con el S&P500.

### Tecnologías y librerías utilizadas
- Python (Pandas, Numpy, Matplotlib, yfinance, sklearn, PyPortfolioOpt, pandas_ta, statsmodels, pandas_datareader)
- Jupyter Notebook

## Metodología

1. **Descarga y limpieza de datos:** Se obtuvieron los precios históricos de las acciones del S&P500 y se calcularon indicadores técnicos como volatilidad, RSI, bandas de Bollinger, ATR, MACD y volumen en dólares.
2. **Filtrado de liquidez:** Se seleccionaron los 150 activos más líquidos por mes para asegurar operatividad realista.
3. **Cálculo de rentabilidades:** Se calcularon retornos mensuales para distintos horizontes temporales, controlando valores atípicos.
4. **Factores de riesgo:** Se descargaron los factores Fama-French y se calcularon betas móviles para cada activo.
5. **Clustering y optimización:** Se aplicó K-Means para agrupar activos y se construyeron portafolios óptimos usando la frontera eficiente (max Sharpe ratio).
6. **Comparación de resultados:** Se comparó el rendimiento del portafolio con el índice S&P500.

## Resultados

![Gráfica de resultados](/assets/newplot.png)

El portafolio optimizado logró resultados competitivos frente al S&P500, mostrando la utilidad de combinar técnicas de Machine Learning con análisis financiero tradicional.

## Acceso al notebook completo

[Descargar notebook (Jupyter)](/assets/Proyecto_Final_ML&BD.ipynb)

---

> Proyecto realizado en 2025 para la Tecnicatura en Programación, orientado a la aplicación práctica de Machine Learning y Big Data en finanzas.
