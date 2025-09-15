# Tema 4: 4. Integración de pruebas automatizadas en pipelines CI/CD

<!-- 
RUTA DE ASSETS: @/assets/curso/tema3/
DISEÑO DE REFERENCIA: tema3.png
-->

## BLOQUE: video-fondo

//video
[ video-fondo](https://www.youtube.com/embed/fBEKxW5VjI4?si=KFBoMXI0Wpf3BhMM)

## BLOQUE: tabla

Tabla 1. Tipos de pruebas en CI/CD

Tipo de prueba
Ejecutada en CI
Ejecutada en CD

Pruebas unitarias.
✓
Opcional

Pruebas de integración.
✓
✓

Pruebas funcionales.
✓
✓

Pruebas E2E (UI).
Opcional
✓

Pruebas de seguridad.
Opcional
✓

## BLOQUE: texto

## Ejemplo completo paso a paso de pruebas con CI/CD

**Escenario.** Validación automatizada de un microservicio REST con Spring Boot, JUnit y Jenkins

**Objetivo.** Integrar un flujo completo de pruebas unitarias y de integración para un servicio REST usando Jenkins como motor de CI.

#### Paso 1. Crear el microservicio

1. Desde start.spring.io, generar un proyecto con dependencias: Spring Web, Spring Boot DevTools, Spring Boot Starter Test.
   
2. Crear el servicio:

    ``` Java
    @RestController
    @RequestMapping("/api")
    public class SaludoController {
        @GetMapping("/saludo")
        public ResponseEntity<String> saludo(@RequestParam(defaultValue = "mundo") String nombre) {
            return ResponseEntity.ok("Hola " + nombre);
        }
    }
    ```

#### Paso 2. Crear la clase de prueba JUnit

//agregar imagen 1.png 
Clase test para probar el servicio. Fuente:  Aguilar, J.2025


#### Paso 3. Preparar pom.xml para pruebas
//agregar imagen 2.png 
POM para la prueba. Fuente: Aguilar, J. 2025

#### Paso 4. Crear Jenkinsfile
//agregar imagen 3.png 
Archivo Jenkins. Fuente: Aguilar, J. 2025


#### Paso 5. Crear el pipeline en Jenkins

1. Abrir Jenkins > Nuevo elemento > Pipeline.
2. En "Pipeline script", colocar el contenido de Jenkinsfile.
3. Guardar y ejecutar.


### Resultado esperado
//lista-flechas
    - Se clona el proyecto desde Git.
    - Se compila y ejecutan las pruebas unitarias.
    - Los resultados de las pruebas se visualizan en el dashboard de Jenkins.


## BLOQUE: bg-full-icono-texto
//assets: 4.svg

Integrar pruebas automatizadas en los pipelines de CI/CD es una estrategia indispensable para sostener la calidad del software en contextos de entrega continua. Automatizar desde pruebas unitarias hasta pruebas end-to-end permite validar los sistemas de forma confiable, rápida y reproducible. Herramientas como Jenkins, GitHub Actions o GitLab CI ofrecen flexibilidad para que los equipos de desarrollo y QA mantengan productos de alta calidad con despliegues seguros y frecuentes.

## BLOQUE: actividad

## BLOQUE: material-complementario

Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial. https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389 

miw-upm.[@miwupm](2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube. https://www.youtube.com/watch?v=Lnw1Ftp-x1g 
