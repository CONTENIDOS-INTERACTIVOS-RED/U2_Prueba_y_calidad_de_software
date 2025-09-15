<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/4: imagen-texto-color 4:8
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 En el contexto actual del desarrollo de software, donde la agilidad, la velocidad de entrega y la calidad del producto, son factores determinantes, la automatización de pruebas se ha consolidado como una competencia esencial. Esta unidad se centra en la incorporación de herramientas y técnicas que permiten ejecutar pruebas de manera automatizada, con el fin de optimizar procesos, detectar errores de forma temprana y fortalecer la confiabilidad del software construido.

        .bg-color-1.p-4(data-aos="fade-left")
          p.mb-0 A lo largo del desarrollo de la unidad, se espera que el estudiante adquiera conocimientos prácticos y conceptuales sobre el uso de herramientas especializadas como Selenium y JUnit, así como habilidades para desarrollar scripts de prueba efectivos y escalables. Asimismo, se brindarán fundamentos para integrar estas pruebas en flujos automatizados de desarrollo, mediante la implementación de pipelines CI/CD con herramientas como Jenkins o GitHub Actions. Al finalizar la unidad, se prevé que el estudiante sea capaz de diseñar, ejecutar e integrar pruebas automatizadas dentro de un entorno de desarrollo ágil y colaborativo.

    // Bloque 2/4: iconobloque-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-4.p-4.mb-4.py-lg-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La importancia de este tema radica en su aplicabilidad directa en entornos reales de trabajo, donde la automatización de pruebas contribuye no solo a reducir errores, sino también a garantizar la calidad continua del producto en cada etapa del ciclo de vida del software. Esta práctica es ampliamente demandada en perfiles profesionales vinculados al aseguramiento de la calidad, desarrollo backend, DevOps e ingeniería de software en general.

        p(data-aos="fade-left") La unidad se estructura en tres temas claves:

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/3.png", data-aos="zoom-in")

    // Bloque 3/4: iconos-color 4:4:4 (3 columnas)
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .bg-color-16.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Tema 1]
              p.mb-0 Herramientas para pruebas automatizadas.
      .col-lg-4
        .bg-color-16.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Tema 2]
              p.mb-0 Desarrollo de scripts de prueba.
      .col-lg-4
        .bg-color-16.p-4(data-aos="fade-left").h-100
          .row.align-items-center.text-white
            .col-lg-auto
              img(src="@/assets/curso/intro/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 #[strong Tema 3]
              p.mb-0 Integración de pruebas en pipelines CI/CD.

    // Bloque 4/4: bg-full-color
    .bg-full-width.bg-color-1
      .px-4.px-md-5.py-4
        p.mb-3 Cada subtema incluye conceptos, ejemplos, proyectos guiados y ejercicios prácticos orientados al fortalecimiento de habilidades técnicas.
        p.mb-0 Se recomienda al estudiante avanzar de forma progresiva, participar activamente en las actividades propuestas y repasar los conceptos previos de pruebas manuales, control de versiones y fundamentos de programación orientada a objetos, a fin de obtener el mayor aprovechamiento del contenido abordado.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
