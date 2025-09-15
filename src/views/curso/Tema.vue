<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'Tema X: Título del tema'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // ===================================
      // CONTENIDO EDUCATIVO DEL TEMA
      // ===================================
      // Aquí van todos los bloques de contenido usando snippets:
      // - titulo-segundo
      // - imagen-texto-color
      // - tarjetas-boton
      // - acordeon
      // - slyder-a
      // - tabla
      // - figura-completa
      // - audio-imagen
      // - etc.
      
      p(data-aos="fade-left") [Contenido educativo del tema va aquí usando snippets de pug.json]
      
      // ===================================
      // ACTIVIDAD INTERACTIVA (OBLIGATORIA)
      // ===================================
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario="cuestionario"/>

      // ===================================
      // MATERIAL COMPLEMENTARIO (OBLIGATORIO AL FINAL)
      // ===================================
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.
              
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="URL_ENLACE_1" target="_blank" rel="noopener noreferrer") Título del primer enlace
              
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="URL_ENLACE_2" target="_blank" rel="noopener noreferrer") Título del segundo enlace (video)
              
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
// ===================================
// IMPORTS OBLIGATORIOS PARA ACTIVIDAD
// ===================================
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'TemaX', // Cambiar X por número del tema (Tema1, Tema2, Tema3, etc.)

  // ===================================
  // COMPONENT REGISTRATION
  // ===================================
  components: {
    Actividad,
  },

  // ===================================
  // DATA CON CUESTIONARIO
  // ===================================
  data() {
    return {
      // IMPORTANTE: Cambiar 'temaX' por el tema correspondiente:
      // tema1 → cuestionarios.tema1
      // tema2 → cuestionarios.tema2
      // tema3 → cuestionarios.tema3
      cuestionario: cuestionarios.temaX,
    }
  },

  // ===================================
  // LIFECYCLE - AOS REFRESH OBLIGATORIO
  // ===================================
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
// Estilos específicos del tema si son necesarios
// Generalmente se deja vacío ya que los estilos vienen de _custom.sass
</style>
