# Tema 3: 3. Desarrollo de scripts de prueba


<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->

## BLOQUE: imagen-texto-iconobloque
//assets: 1.png, 2.svg

//texto
 El desarrollo de scripts de prueba es una de las actividades claves en el aseguramiento de calidad del software, especialmente en contextos donde la automatización se convierte en un pilar para validar grandes volúmenes de funcionalidades con frecuencia. Un script de prueba automatizado consiste en un conjunto de instrucciones escritas en un lenguaje de programación (como Java o Python) que simulan la interacción de un usuario con el sistema, evalúan resultados esperados y reportan errores o incongruencias.

//iconobloque 4
Los indicadores ágiles son herramientas cuantitativas y cualitativas que facilitan la toma de decisiones basadas en datos reales y objetivos. A diferencia de métricas tradicionales rígidas, los indicadores en entornos ágiles están diseñados para ser flexibles, adaptables y alineados con los valores de transparencia, colaboración y entrega de valor continuo. 


## BLOQUE: color-texto-imagen
//assets: 3.png

//color 12
En proyectos ágiles y de integración continua, los scripts de prueba permiten validar rápidamente si una funcionalidad nueva ha roto alguna parte del sistema existente (pruebas de regresión), asegurando la estabilidad de las versiones liberadas. Por ello, dominar el desarrollo de scripts no solo implica conocer la sintaxis de Selenium o JUnit, sino entender profundamente cómo estructurar, diseñar, mantener y ejecutar scripts eficaces y escalables.

//texto
Un buen script de prueba debe seguir principios de ingeniería de software: modularidad, reusabilidad, claridad y separación de responsabilidades. En automatización, esto se traduce en prácticas como:

## BLOQUE: infografia
//assets: infografia.svg

0% 0%
Uso de patrones de diseño como Page Object Model (POM) para mantener la mantenibilidad.

---

10% 10%
Manejo adecuado de datos de prueba desde fuentes externas.

---

20% 20%
Control de tiempos de carga y elementos dinámicos con mecanismos de espera.

---

30% 30%
Validación precisa mediante aserciones lógicas y significativas.
Ejecución automatizada mediante pipelines CI/CD.



## BLOQUE: color-texto-imagen
//assets: 4.png

//color 2
Desarrollar scripts no debe considerarse un proceso técnico aislado, sino como una extensión natural del análisis funcional y de los criterios de aceptación definidos por los requerimientos del sistema.

//texto
Paso a paso: desarrollo e implementación de un script de prueba

## BLOQUE: img-acordeon
//assets: 5.png

//acordeon

Paso 1

    1. Configurar el entorno de desarrollo.
    2. Instalar Java JDK 11 o superior.
    3. Instalar IDE (IntelliJ, Eclipse).
    4. Configurar Maven.
    5. Agregar dependencias en pom.xml:
        //agregar imagen 6.png

---

Paso 2:
    Crear estructura del proyecto

    //lista-flechas
    - src/main/java: clases de páginas (POM).
    - src/test/java: clases de prueba.

    Después de tener el proyecto estructurado y la librería agregada se va a realizar el paso a paso de las clases (Código).



## BLOQUE: texto

## Ejemplo inicio de sesión


## BLOQUE: slider-a
//assets: 7.png, 8.png

### Clase LoginPage

Esta clase representa la página de login. Cada By identifica un campo en la interfaz. El método iniciarSesion() encapsula la lógica de interacción con la UI.

---

### Clase de prueba LoginTest

Esta clase organiza la ejecución de la prueba, válida el mensaje recibido tras el login y cierra el navegador al finalizar.

## BLOQUE: texto

## Diseño de scripts orientados a datos

**Ventaja.** Separar los datos de prueba del código mejora la flexibilidad y reutilización. Por ejemplo, se puede usar un archivo .csv para iterar sobre múltiples usuarios.

## BLOQUE: figura-completa
//assets: 9.png

Figura 1. Script orientado a datos. Fuente: Aguilar, J. 2025


## BLOQUE: texto

## Manejo de errores y validaciones condicionales

### a) Validar campo vacío


## BLOQUE: figura-completa
//assets: 10.png

Figura 2. Validando campos



## BLOQUE: texto

### b) Captura de pantalla al fallar la prueba

## BLOQUE: figura-completa
//assets: 11.png

Figura 2. Validando campos





## BLOQUE: bloque-material-complementario

Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389 

miw-upm.[@miwupm](2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube. https://www.youtube.com/watch?v=Lnw1Ftp-x1g 