# Tema 2: 2. Herramientas para pruebas automatizadas (Selenium, JUnit)

<!-- 
RUTA DE ASSETS: @/assets/curso/tema2/
DISEÑO DE REFERENCIA: tema2.png

INSTRUCCIONES:
- Numerar assets secuencialmente: 1.png, 2.svg, 3.png, etc.
- Usar **texto** para negritas (se renderiza como #[strong texto])
- Respetar orden exacto de marcadores //texto, //color, //assets
- Especificar distribución de columnas cuando sea necesario: 5:7, 4:8, 6:6

.bg-color
  &-1
    background-color: #CDD9F7
  &-2
    background-color: #FCEEB5
  &-3
    background-color: #5C2C88
  &-4
    background-color:**** #B6FBF3
  &-5
    background-color: #062678
  &-6
    background-color: #EDDBFD
-->

## BLOQUE: texto-iconobloque-imagen 8:4
//assets: 1.svg, 2.png

//texto
En el marco del aseguramiento de la calidad del software, la automatización de pruebas se ha convertido en una práctica fundamental que permite reducir tiempos, aumentar la cobertura de pruebas y detectar errores de manera temprana. 

//color 2
Las herramientas más empleadas en este ámbito, especialmente en ecosistemas Java, son Selenium para pruebas funcionales en la interfaz de usuario y JUnit para pruebas unitarias. Ambas permiten implementar estrategias de validación robustas, repetibles y fácilmente integrables en pipelines de entrega continua (CI/CD).

## BLOQUE: titulo-segundo
2.1 Selenium. Automatización de pruebas en interfaces web
La automatización de pruebas funcionales es un componente clave en los procesos de aseguramiento de calidad del software moderno.



## BLOQUE: img-anexo
//assets: 3.png

### Selenium.
En el PDF Selenium, se estudia esta poderosa herramienta de código abierto, que permite simular la interacción de un usuario con aplicaciones web para validar su correcto funcionamiento en distintos escenarios. A lo largo del documento se exploran sus componentes, ventajas, limitaciones y ejemplos aplicados, con el fin de comprender su implementación en entornos reales de desarrollo e integración continua.

Anexo_1.pdf

## BLOQUE: titulo-segundo

2.2 JUnit. Automatización de pruebas unitarias en Java

## BLOQUE: color-texto-imagen
//assets: 4.png

//color 4
JUnit es un framework de pruebas unitarias ampliamente adoptado en el ecosistema Java. Diseñado para verificar la funcionalidad de métodos y clases de forma automatizada, JUnit permite escribir pruebas que se ejecutan de forma aislada para asegurar la estabilidad y corrección del software. Su relevancia se debe a su integración con entornos de desarrollo modernos, soporte para múltiples versiones del lenguaje Java, y compatibilidad con sistemas de integración continua.

//texto
El enfoque de JUnit está alineado con las metodologías de desarrollo como TDD (Test Driven Development), en la cual las pruebas se escriben antes del código funcional, promoviendo software más robusto desde sus cimientos.

## BLOQUE: img-acordeon
//assets: 5.png

//acordeon
**Principios de las pruebas unitarias**

  Las pruebas unitarias buscan aislar y verificar la unidad más pequeña de una aplicación: una función o método. Para que una prueba unitaria sea eficaz, debe cumplir con estas condiciones:

  //lista-flechas
  - **Ser automática:** no debe requerir intervención humana para ejecutarse.
  - **Ser determinista:** siempre debe producir el mismo resultado dadas las mismas condiciones.
  - **Ejecutarse rápidamente:** para facilitar ejecuciones frecuentes.
  - **Ser independiente:** no debe depender de otras pruebas.

  En Java, estas pruebas se estructuran como clases con métodos anotados con @Test, los cuales contienen llamadas a métodos de aserción que validan condiciones esperadas.

---

Evolución de JUnit

  **JUnit 3:** era dependiente de herencia y carecía de anotaciones.
  **JUnit 4:** introdujo anotaciones como @Test, @Before, @After.
  **JUnit 5 (Jupiter):** actual arquitectura modular, soporte extendido para pruebas parametrizadas, condiciones de ejecución dinámica, y extensibilidad mediante APIs.

  La versión moderna y recomendada para nuevos proyectos es JUnit 5, también conocida como JUnit Jupiter.

---

Configuración e instalación con Maven

Requisitos.
  //lista-flechas
  - Java JDK 11 o superior.
  - Maven como gestor de dependencias.
  - IDE como IntelliJ IDEA, Eclipse o NetBeans.
  
  Dependencia en pom.xml:
  //agregar imagen acordeon_1.png




## BLOQUE: acordeon-img
//assets: 6.png

//acordeon
Estructura de una prueba unitaria con JUnit 5

  **Clase bajo prueba:**
  //agregar imagen acordeon_2.png

  **Clase de prueba:**
  //agregar imagen acordeon_3.png

---

Anotaciones disponibles en JUnit 5

  **@Test** → Define un método de prueba.
  **@BeforeEach** → Ejecutado antes de cada prueba individual.
  **@AfterEac**h → Ejecutado después de cada prueba.
  **@BeforeAll** → Ejecutado una vez antes de todas las pruebas.
  **@AfterAll** → Ejecutado una vez después de todas las pruebas.
  **@Disabled** → Deshabilita temporalmente una prueba.

---

Tipos de aserciones en JUnit

  //lista-flechas
  - assertEquals(expected, actual).
  - assertNotEquals(expected, actual).
  - assertTrue(condition) / assertFalse(condition).
  - assertNull(obj) / assertNotNull(obj).
  - assertThrows(Exception.class, () -> {...}).

  Las aserciones permiten confirmar que el comportamiento del software es el esperado. Un fallo en la aserción indica un defecto potencial.



## BLOQUE

## Integración continua con JUnit

## BLOQUE: imagen-texto-color 4:8
//assets: 7.png

//texto
JUnit se integra con herramientas como Jenkins, GitHub Actions, Travis CI y Bamboo. Los resultados pueden visualizarse en formato HTML, XML o mediante reportes como Allure.

//color 15
Ejemplo en Jenkins (con Maven):
  //lista-flechas
  - Instalar plugin de JUnit.
  - Configurar mvn test como paso de ejecución.
  - Publicar resultados desde la ruta target/surefire-reports/*.xml.


//texto
JUnit es un componente esencial para implementar pruebas automatizadas de forma eficiente y estructurada en el desarrollo Java. Su uso adecuado fortalece la calidad del software, reduce el número de errores en producción y permite una mayor confianza en la evolución del sistema. Al integrar JUnit con herramientas de automatización de despliegue y validación continua, se logra una estrategia de calidad robusta y alineada con las exigencias de la industria.

## BLOQUE: bloque-material-complementario

Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511 

Code Master (2024, 12 de noviembre) Pruebas Unitarias en Java con Mockito: Mini Tutorial 🚀 [Video] YouTube. https://youtu.be/IrLpQY6VgE8?si=_7OnF2UW6Yf6YG2Z 
