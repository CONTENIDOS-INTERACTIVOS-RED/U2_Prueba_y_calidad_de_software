# Tema 5: 5. Técnicas de caja blanca y caja negra


<!-- 
RUTA DE ASSETS: @/assets/curso/tema5/
DISEÑO DE REFERENCIA: tema5.png
-->

## BLOQUE: 

Las técnicas de diseño de casos de prueba permiten construir pruebas de manera sistemática, con base en diferentes criterios. Las más conocidas son las técnicas de caja blanca y caja negra, que se diferencian principalmente en el nivel de conocimiento que el evaluador tiene sobre el código fuente del sistema a probar.

Estas técnicas no son excluyentes: se pueden complementar entre sí, según el contexto. Su elección depende del tipo de prueba, el nivel del sistema que se está evaluando y los objetivos del proceso de validación.

## BLOQUE: titulo-segundo

5.1 Técnica de caja blanca

También conocida como técnica estructural o de cristal, la caja blanca parte del supuesto de que el evaluador tiene acceso completo al código fuente y puede diseñar pruebas basadas en la estructura lógica del sistema.

## BLOQUE: img-acordeon 4:8
//assets: 1.png

**Principales características**
//lista-flechas
- Permite conocer rutas lógicas, decisiones, bucles, variables, condiciones.
- Útil para validar la cobertura del código (instrucciones, decisiones, condiciones múltiples).
- Altamente efectiva para pruebas unitarias.
- Utiliza métricas como cobertura de código (Statement Coverage, Branch Coverage, Path Coverage).

---

**Ejemplo de caja blanca en Java**
img 2.png

---

**Pruebas de caja blanca**

- edad = 15 → "Menor de edad".
- edad = 30 → "Adulto".
- edad = 70 → "Adulto mayor".

Estas pruebas están diseñadas para cubrir todas las rutas lógicas del método.

---

**Herramientas útiles**
- JaCoCo: genera reportes de cobertura de código.
- SonarQube: análisis estático que incluye cobertura de pruebas.
- IntelliJ IDEA / Eclipse: ofrecen métricas de cobertura integradas.


## BLOQUE: titulo-segundo

5.2 Técnica de caja negra


## BLOQUE: texto-color-imagen
//assets: 3.png

//texto
Conocida como técnica funcional, la caja negra asume que el evaluador no conoce la estructura interna del código, y diseña los casos de prueba únicamente a partir de:

//color
    //lista-flechas
  - Requisitos funcionales.
  - Documentación del sistema.
  - Interfaz pública disponible (API, formularios, endpoints REST).


## BLOQUE: imagen-color
//assets: 4.png

//color
**Características claves:**
  - Se enfoca en entradas y salidas.
  - Detecta errores de funcionalidad, validaciones, y respuestas incorrectas.
  - Es útil en pruebas de sistema, pruebas de aceptación y pruebas funcionales.
  - Incluye técnicas como partición de equivalencia, análisis de valores límite, tablas de decisión, pruebas de transición de estados.

**Ejemplo de caja negra:**
    Supongamos un endpoint REST /usuarios que valida que el correo electrónico no esté vacío.

**Casos de prueba diseñados sin ver el código:**
  - Entrada válida: { "nombre": "Ana", "correo": "ana@correo.com" } → Esperado: HTTP 200 OK.
  - Entrada inválida: { "nombre": "Ana" } → Esperado: HTTP 400 Bad Request.

  Ventajas:
  - Reproduce el punto de vista del usuario.
  - No requiere conocimiento técnico del código.
  - Detecta errores en interfaces y especificaciones.


## BLOQUE: 
Ahora, la siguiente tabla nos presenta una comparación entre caja blanca y caja negra:

## BLOQUE: tabla

Tabla 2. Comparación caja blanca y caja negra

**Criterio**
**Caja blanca**
**Caja negra**

**Conocimiento del código.**
Requiere acceso al código fuente.
No necesita conocer el código.

**Nivel de prueba.**
Bajo nivel (unidad, componente).
Alto nivel (sistema, funcionalidad).

**Objetivo.**
Validar la lógica interna.
Validar funcionalidad observable.

**Detección de errores.**
Errores de programación.
Errores de comportamiento funcional.

**Tipos de prueba.**
Unitarias, cobertura, integración.
Aceptación, sistema, regresión.



## BLOQUE: slyderf-cards 8:4
Buenas prácticas al aplicar ambas técnicas:

//assets: 5.svg, 6.svg, 7.svg, 8.svg, 9.svg, 10.png

Diseñar primero con caja negra (en base a los requisitos), y luego refinar con caja blanca (en base al código).

No asumir que una técnica reemplaza a la otra: ambas se complementan.

Automatizar los casos de prueba para su reutilización.

Usar herramientas que brinden trazabilidad de requisitos y casos de prueba.

Documentar qué rutas o criterios de partición se cubren con cada caso.



## BLOQUE: bg-full-icono-texto
//assets: 11.svg

Las técnicas de caja blanca y negra son la base del diseño estructurado de pruebas. Su aplicación combinada permite lograr una cobertura más completa del sistema, mejorar la calidad del software y reducir significativamente el riesgo de errores en producción.

## BLOQUE: actividad

## BLOQUE: material-complementario


Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389 

Miw-upm. (2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube. https://www.youtube.com/watch?v=Lnw1Ftp-x1g 


