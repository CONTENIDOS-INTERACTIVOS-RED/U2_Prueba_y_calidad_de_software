<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Desarrollo de scripts de prueba'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/14: imagen-texto-iconobloque
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 El desarrollo de scripts de prueba es una de las actividades claves en el aseguramiento de calidad del software, especialmente en contextos donde la automatización se convierte en un pilar para validar grandes volúmenes de funcionalidades con frecuencia. Un script de prueba automatizado consiste en un conjunto de instrucciones escritas en un lenguaje de programación (como Java o Python) que simulan la interacción de un usuario con el sistema, evalúan resultados esperados y reportan errores o incongruencias.

        .bg-color-4.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los indicadores ágiles son herramientas cuantitativas y cualitativas que facilitan la toma de decisiones basadas en datos reales y objetivos. A diferencia de métricas tradicionales rígidas, los indicadores en entornos ágiles están diseñados para ser flexibles, adaptables y alineados con los valores de transparencia, colaboración y entrega de valor continuo.

    // Bloque 2/14: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-12.p-4(data-aos="fade-left").mb-4
          p.mb-0 En proyectos ágiles y de integración continua, los scripts de prueba permiten validar rápidamente si una funcionalidad nueva ha roto alguna parte del sistema existente (pruebas de regresión), asegurando la estabilidad de las versiones liberadas. Por ello, dominar el desarrollo de scripts no solo implica conocer la sintaxis de Selenium o JUnit, sino entender profundamente cómo estructurar, diseñar, mantener y ejecutar scripts eficaces y escalables.

        p(data-aos="fade-left") Un buen script de prueba debe seguir principios de ingeniería de software: modularidad, reusabilidad, claridad y separación de responsabilidades. En automatización, esto se traduce en prácticas como:

      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")

    // Bloque 3/14: infografia
    .bg-full-width.bg-color-info.mb-5
      .px-4.px-md-5.pt-4.pt-md-5
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/infografia.svg', alt='', style="max-width: 970px;").mx-auto
              .tarjeta.color-primario.p-3(x="30%" y="46%" numero="+")
                p.mb-0 Uso de patrones de diseño como Page Object Model (POM) para mantener la mantenibilidad.
              .tarjeta.color-primario.p-3(x="74%" y="15%" numero="+")
                p.mb-0 Manejo adecuado de datos de prueba desde fuentes externas.
              .tarjeta.color-primario.p-3(x="40%" y="7%" numero="+")
                p.mb-0 Control de tiempos de carga y elementos dinámicos con mecanismos de espera.
              .tarjeta.color-primario.p-3(x="67%" y="40%" numero="+")
                p.mb-0 Validación precisa mediante aserciones lógicas y significativas.
              .tarjeta.color-primario.p-3(x="10%" y="32%" numero="+")
                p.mb-0 Ejecución automatizada mediante pipelines CI/CD.

    // Bloque 4/14: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 Desarrollar scripts no debe considerarse un proceso técnico aislado, sino como una extensión natural del análisis funcional y de los criterios de aceptación definidos por los requerimientos del sistema.

        p(data-aos="fade-left") Paso a paso: desarrollo e implementación de un script de prueba

      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")

    // Bloque 5/14: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema3/5.png", alt="").mb-4.mb-lg-0
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p 1. Configurar el entorno de desarrollo.
            p 2. Instalar Java JDK 11 o superior.
            p 3. Instalar IDE (IntelliJ, Eclipse).
            p 4. Configurar Maven.
            p 5. Agregar dependencias en pom.xml:
            figure
              img(src="@/assets/curso/tema3/6.png", alt="", style="max-width: 775px")

          .div(titulo="Paso 2:")
            p Crear estructura del proyecto

            ul.lista-ul--color.color-dark.mb-4
              li.mb-0
                i.fas.fa-arrow-circle-right
                | src/main/java: clases de páginas (POM).
              li.mb-0
                i.fas.fa-arrow-circle-right
                | src/test/java: clases de prueba.

            p Después de tener el proyecto estructurado y la librería agregada se va a realizar el paso a paso de las clases (Código).

    // Bloque 6/14: texto
    .row.justify-content-center
      .col-12
        h2 Ejemplo inicio de sesión

    // Bloque 7/14: slider-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-lg-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-6.order-lg-1
              h3 Clase LoginPage
              p Esta clase representa la página de login. Cada By identifica un campo en la interfaz. El método iniciarSesion() encapsula la lógica de interacción con la UI.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-lg-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-6.order-lg-1
              h3 Clase de prueba LoginTest
              p Esta clase organiza la ejecución de la prueba, válida el mensaje recibido tras el login y cierra el navegador al finalizar.

    // Bloque 8/14: texto
    .row.justify-content-center.mb-4
      .col-12
        h2 Diseño de scripts orientados a datos
        p #[strong Ventaja.] Separar los datos de prueba del código mejora la flexibilidad y reutilización. Por ejemplo, se puede usar un archivo .csv para iterar sobre múltiples usuarios.

    // Bloque 9/14: figura-completa
    .titulo-figura.mb-2
      h5 Figura 1. 
      span Script orientado a datos. Fuente: Aguilar, J. 2025

    figure.bg-color-1.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in", style="max-width: 900px").mx-auto

    // Bloque 10/14: texto
    .row.justify-content-center
      .col-12
        h2.mb-5 Manejo de errores y validaciones condicionales
        h4.mb-4 a) Validar campo vacío

    // Bloque 11/14: figura-completa
    .titulo-figura.mb-2
      h5 Figura 2. 
      span Validando campos

    figure.bg-color-1.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in", style="max-width: 900px").mx-auto

    // Bloque 12/14: texto
    .row.justify-content-center
      .col-12
        h4.mb-4 b) Captura de pantalla al fallar la prueba

    // Bloque 13/14: figura-completa
    .titulo-figura.mb-2
      h5 Figura 2. 
      span Validando campos

    figure.bg-color-1.p-4.p-md-5.mb-5
      img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in", style="max-width: 900px").mx-auto

    // Bloque 14/14: bloque-material-complementario
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
              a(href="https://www.youtube.com/watch?v=Lnw1Ftp-x1g" target="_blank" rel="noopener noreferrer") miw-upm. (2020, 15 de septiembre). Test con JUnit en práctica [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
