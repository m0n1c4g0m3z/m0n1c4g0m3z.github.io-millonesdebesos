{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 let startTime;\
let kisses = [];\
\
function setup() \{\
  createCanvas(600, 300);\
  textAlign(CENTER, CENTER);\
  textSize(48);\
  fill(255);\
\
  // Guardar o recuperar el tiempo inicial\
  if (localStorage.getItem('startTime')) \{\
    startTime = int(localStorage.getItem('startTime'));\
  \} else \{\
    startTime = Date.now();\
    localStorage.setItem('startTime', startTime);\
  \}\
\}\
\
function draw() \{\
  background(0);\
\
  // Tiempo transcurrido en segundos\
  let now = Date.now();\
  let secondsPassed = floor((now - startTime) / 1000);\
\
  // Estremecimiento suave con el mouse\
  let shakeX = map(mouseX, 0, width, -2, 2);\
  let shakeY = map(mouseY, 0, height, -2, 2);\
\
  // Dibujar el contador con movimiento\
  text(secondsPassed + " kisses", width / 2 + shakeX, height / 2 + shakeY);\
\
  // Dibujar los besos que aparecen al hacer clic\
  for (let i = 0; i < kisses.length; i++) \{\
    textSize(32);\
    text("\uc0\u55357 \u56459 ", kisses[i].x, kisses[i].y);\
\
    kisses[i].y -= 0.5;\
    kisses[i].life -= 1;\
\
    if (kisses[i].life <= 0) \{\
      kisses.splice(i, 1);\
      i--;\
    \}\
  \}\
\}\
\
function mousePressed() \{\
  kisses.push(\{ x: mouseX, y: mouseY, life: 120 \});\
\}}