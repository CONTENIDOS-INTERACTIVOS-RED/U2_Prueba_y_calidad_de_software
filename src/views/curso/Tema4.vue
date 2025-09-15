<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Integración de pruebas automatizadas en pipelines CI/CD'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-5 Para comenzar con el estudio de este tema, lo invitamos a ver el siguiente video.

    // Bloque 1/5: video-fondo
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/fBEKxW5VjI4?si=KFBoMXI0Wpf3BhMM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    // Bloque 2/5: tabla
    .titulo-figura.mb-2
      h5 Tabla 1. 
      span Tipos de pruebas en CI/CD

    .tabla-a.color-acento-contenido.mb-5
      table
        caption Tabla comparativa de tipos de pruebas en CI/CD
        thead
          tr
            th.bg-color-tabla.text-white Tipo de prueba
            th.bg-color-tabla.text-white Ejecutada en CI
            th.bg-color-tabla.text-white Ejecutada en CD
        tbody
          tr
            td Pruebas unitarias.
            td ✓
            td Opcional
          tr
            td Pruebas de integración.
            td ✓
            td ✓
          tr
            td Pruebas funcionales.
            td ✓
            td ✓
          tr
            td Pruebas E2E (UI).
            td Opcional
            td ✓
          tr
            td Pruebas de seguridad.
            td Opcional
            td ✓

    // Bloque 3/5: texto (contenido complejo)
    .row.justify-content-center
      .col-12
        h2 Ejemplo completo paso a paso de pruebas con CI/CD

        .alert.alert-info.mb-5

          p #[strong Escenario.] Validación automatizada de un microservicio REST con Spring Boot, JUnit y Jenkins

          p #[strong Objetivo.] Integrar un flujo completo de pruebas unitarias y de integración para un servicio REST usando Jenkins como motor de CI.


        h4 Paso 1. Crear el microservicio

        p 1. Desde start.spring.io, generar un proyecto con dependencias: Spring Web, Spring Boot DevTools, Spring Boot Starter Test.

        p 2. Crear el servicio:

        pre.mb-5
          code
            | @RestController
            | @RequestMapping("/api")
            | public class SaludoController {
            |     @GetMapping("/saludo")
            |     public ResponseEntity&lt;String&gt; saludo(@RequestParam(defaultValue = "mundo") String nombre) {
            |         return ResponseEntity.ok("Hola " + nombre);
            |     }
            | }

        h4 Paso 2. Crear la clase de prueba JUnit

        //agregar imagen 1.png
        figure
          img(src="@/assets/curso/tema4/1.png", alt="", style="max-width: 775px")

        p.mb-5 Clase test para probar el servicio. Fuente: Aguilar, J.2025

        h4 Paso 3. Preparar pom.xml para pruebas

        //agregar imagen 2.png
        figure
          img(src="@/assets/curso/tema4/2.png", alt="", style="max-width: 775px")

        p.mb-5 POM para la prueba. Fuente: Aguilar, J. 2025

        h4 Paso 4. Crear Jenkinsfile

        //agregar imagen 3.png
        figure
          img(src="@/assets/curso/tema4/3.png", alt="", style="max-width: 775px")

        p.mb-5 Archivo Jenkins. Fuente: Aguilar, J. 2025

        h4 Paso 5. Crear el pipeline en Jenkins

        p 1. Abrir Jenkins > Nuevo elemento > Pipeline.
        p 2. En "Pipeline script", colocar el contenido de Jenkinsfile.
        p.mb-5 3. Guardar y ejecutar.


        .alert.alert-success.mb-5

          h4 Resultado esperado

          ul.lista-ul--color.color-dark.mb-4
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Se clona el proyecto desde Git.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Se compila y ejecutan las pruebas unitarias.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Los resultados de las pruebas se visualizan en el dashboard de Jenkins.

    // Bloque 4/6: bg-full-icono-texto
    .bg-full-width.bg-color-16.text-white
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema4/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Integrar pruebas automatizadas en los pipelines de CI/CD es una estrategia indispensable para sostener la calidad del software en contextos de entrega continua. Automatizar desde pruebas unitarias hasta pruebas end-to-end permite validar los sistemas de forma confiable, rápida y reproducible. Herramientas como Jenkins, GitHub Actions o GitLab CI ofrecen flexibilidad para que los equipos de desarrollo y QA mantengan productos de alta calidad con despliegues seguros y frecuentes.

    // Bloque 5/6: actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          <Actividad :cuestionario="cuestionario"/>

    // Bloque 6/6: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389" target="_blank" rel="noopener noreferrer") Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=Lnw1Ftp-x1g" target="_blank" rel="noopener noreferrer") Miw-upm. (2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema4,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
