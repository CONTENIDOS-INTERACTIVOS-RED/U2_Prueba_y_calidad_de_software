<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Herramientas para pruebas automatizadas (Selenium, JUnit)'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/9: texto-iconobloque-imagen 8:4
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 En el marco del aseguramiento de la calidad del software, la automatización de pruebas se ha convertido en una práctica fundamental que permite reducir tiempos, aumentar la cobertura de pruebas y detectar errores de manera temprana.

        .bg-color-2.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las herramientas más empleadas en este ámbito, especialmente en ecosistemas Java, son Selenium para pruebas funcionales en la interfaz de usuario y JUnit para pruebas unitarias. Ambas permiten implementar estrategias de validación robustas, repetibles y fácilmente integrables en pipelines de entrega continua (CI/CD).

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")

    // Bloque 2/9: titulo-segundo
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Selenium. Automatización de pruebas en interfaces web

    // Bloque 3/9: párrafo normal
    .row.justify-content-center
      .col-12
        p(data-aos="fade-left") La automatización de pruebas funcionales es un componente clave en los procesos de aseguramiento de calidad del software moderno.

    // Bloque 4/9: img-anexo
    .bg-full-width.bg-color-5.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") #[strong Selenium.]
            p.mb-4(data-aos="fade-right") En el PDF Selenium, se estudia esta poderosa herramienta de código abierto, que permite simular la interacción de un usuario con aplicaciones web para validar su correcto funcionamiento en distintos escenarios. A lo largo del documento se exploran sus componentes, ventajas, limitaciones y ejemplos aplicados, con el fin de comprender su implementación en entornos reales de desarrollo e integración continua.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Selenium

    // Bloque 5/9: titulo-segundo
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] JUnit. Automatización de pruebas unitarias en Java

    // Bloque 6/9: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-4.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 JUnit es un framework de pruebas unitarias ampliamente adoptado en el ecosistema Java. Diseñado para verificar la funcionalidad de métodos y clases de forma automatizada, JUnit permite escribir pruebas que se ejecutan de forma aislada para asegurar la estabilidad y corrección del software. Su relevancia se debe a su integración con entornos de desarrollo modernos, soporte para múltiples versiones del lenguaje Java, y compatibilidad con sistemas de integración continua.

        p(data-aos="fade-left") El enfoque de JUnit está alineado con las metodologías de desarrollo como TDD (Test Driven Development), en la cual las pruebas se escriben antes del código funcional, promoviendo software más robusto desde sus cimientos.

      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in").mb-4.mb-lg-0

    // Bloque 7/9: img-acordeon
    .row.align-items-start.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Principios de las pruebas unitarias")
            p Las pruebas unitarias buscan aislar y verificar la unidad más pequeña de una aplicación: una función o método. Para que una prueba unitaria sea eficaz, debe cumplir con estas condiciones:
            
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[strong Ser automática:] no debe requerir intervención humana para ejecutarse.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[strong Ser determinista:] siempre debe producir el mismo resultado dadas las mismas condiciones.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[strong Ejecutarse rápidamente:] para facilitar ejecuciones frecuentes.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | #[strong Ser independiente:] no debe depender de otras pruebas.

            p En Java, estas pruebas se estructuran como clases con métodos anotados con @Test, los cuales contienen llamadas a métodos de aserción que validan condiciones esperadas.

          .div(titulo="Evolución de JUnit")
            p #[strong JUnit 3:] era dependiente de herencia y carecía de anotaciones.
            p #[strong JUnit 4:] introdujo anotaciones como @Test, @Before, @After.
            p #[strong JUnit 5 (Jupiter):] actual arquitectura modular, soporte extendido para pruebas parametrizadas, condiciones de ejecución dinámica, y extensibilidad mediante APIs.
            p La versión moderna y recomendada para nuevos proyectos es JUnit 5, también conocida como JUnit Jupiter.

          .div(titulo="Configuración e instalación con Maven")
            p #[strong Requisitos.]
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Java JDK 11 o superior.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | Maven como gestor de dependencias.
              li.mb-0
                i.fas.fa-arrow-circle-right
                | IDE como IntelliJ IDEA, Eclipse o NetBeans.

            p Dependencia en pom.xml:
            //agregar imagen acordeon_1.png
            figure
              img(src="@/assets/curso/tema2/acordeon_1.png", alt="", style="max-width: 775px")

    // Bloque 8/9: acordeon-img
    .row.align-items-start.mb-4
      .col-lg-8
        AcordionA(tipo="b").mb-5
          .div(titulo="Estructura de una prueba unitaria con JUnit 5")
            p #[strong Clase bajo prueba:]
            //agregar imagen acordeon_2.png
            figure.mb-4
              img(src="@/assets/curso/tema2/acordeon_2.png", alt="", style="max-width: 775px")
            p #[strong Clase de prueba:]
            //agregar imagen acordeon_3.png
            figure
              img(src="@/assets/curso/tema2/acordeon_3.png", alt="", style="max-width: 775px")

          .div(titulo="Anotaciones disponibles en JUnit 5")
            p #[strong @Test] → Define un método de prueba.
            p #[strong @BeforeEach] → Ejecutado antes de cada prueba individual.
            p #[strong @AfterEach] → Ejecutado después de cada prueba.
            p #[strong @BeforeAll] → Ejecutado una vez antes de todas las pruebas.
            p #[strong @AfterAll] → Ejecutado una vez después de todas las pruebas.
            p #[strong @Disabled] → Deshabilita temporalmente una prueba.

          .div(titulo="Tipos de aserciones en JUnit")
            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | assertEquals(expected, actual).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | assertNotEquals(expected, actual).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | assertTrue(condition) / assertFalse(condition).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | assertNull(obj) / assertNotNull(obj).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | assertThrows(Exception.class, () -> {...}).

            p Las aserciones permiten confirmar que el comportamiento del software es el esperado. Un fallo en la aserción indica un defecto potencial.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/6.png", alt="")

    // Bloque 9/9: párrafo normal (título)
    .row.justify-content-center.mb-5
      .col-12
        h2 Integración continua con JUnit

    // Bloque 10/9: imagen-texto-color 4:8
    .row.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 JUnit se integra con herramientas como Jenkins, GitHub Actions, Travis CI y Bamboo. Los resultados pueden visualizarse en formato HTML, XML o mediante reportes como Allure.

        .bg-color-15.p-4(data-aos="fade-left").mb-4
          p.mb-3 Ejemplo en Jenkins (con Maven):
          ul.lista-ul--color.color-dark.mb-0
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Instalar plugin de JUnit.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Configurar mvn test como paso de ejecución.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Publicar resultados desde la ruta target/surefire-reports/*.xml.

        p(data-aos="fade-left") JUnit es un componente esencial para implementar pruebas automatizadas de forma eficiente y estructurada en el desarrollo Java. Su uso adecuado fortalece la calidad del software, reduce el número de errores en producción y permite una mayor confianza en la evolución del sistema. Al integrar JUnit con herramientas de automatización de despliegue y validación continua, se logra una estrategia de calidad robusta y alineada con las exigencias de la industria.

    // Bloque 11/9: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511" target="_blank" rel="noopener noreferrer") Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/IrLpQY6VgE8?si=_7OnF2UW6Yf6YG2Z" target="_blank" rel="noopener noreferrer") Code Master (2024, 12 de noviembre) Pruebas Unitarias en Java con Mockito: Mini Tutorial 🚀 [Video] YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
