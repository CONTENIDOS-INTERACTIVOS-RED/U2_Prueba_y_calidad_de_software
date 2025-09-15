<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Automatización de pruebas'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
    
    // Bloque 1/2: iconobloque-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto actual de desarrollo ágil y despliegues continuos, la automatización de pruebas se ha consolidado como una práctica esencial para garantizar la calidad del software de manera eficiente, repetible y escalable. Esta unidad explora en profundidad las herramientas, prácticas y estructuras fundamentales para implementar pruebas automatizadas, desde los frameworks más populares hasta su integración en pipelines de CI/CD.

        p(data-aos="fade-left") Automatizar pruebas no solo acelera la validación de funcionalidades, sino que también reduce la intervención humana en tareas repetitivas, minimiza errores y permite retroalimentación rápida en cada iteración de desarrollo.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")

    // Bloque 2/2: bloque-material-complementario
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
              a(href="https://www.youtube.com/watch?v=GVegCwwfBZ0" target="_blank" rel="noopener noreferrer") Juan V. Carrillo (jvprofe). (2017, 2 de mayo). Prueba del camino básico. Pruebas de caja blanca [Video]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
