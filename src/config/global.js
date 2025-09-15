export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Automatización de pruebas',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Automatización de pruebas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas para pruebas automatizadas (Selenium, JUnit)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Desarrollo de scripts de prueba',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Integración de pruebas automatizadas en pipelines CI/CD',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ortega Candel, J. M. (2018). Seguridad en aplicaciones Web Java: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106511',
    },
    {
      referencia:
        'Piattini Velthuis, M. & Garzás Parra, J. (2015). Fábricas de software: experiencias, tecnologías y organización: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/106389',
    },
    {
      referencia:
        'Omaña, M. (2012). Manufactura esbelta: una contribución para el desarrollo de software con calidad: ( ed.). Red Enlace.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/98547',
    },
  ],
  glosario: [
    {
      termino: 'API',
      significado:
        'Interfaz que permite la comunicación entre diferentes sistemas o componentes.',
    },
    {
      termino: 'Automatización',
      significado:
        'Proceso de ejecutar tareas sin intervención manual mediante scripts o herramientas.',
    },
    {
      termino: 'Build',
      significado:
        'Proceso de compilar el código fuente para generar un ejecutable o artefacto.',
    },
    {
      termino: 'CD',
      significado:
        'Entrega Continua, automatiza la preparación de builds para producción.',
    },
    {
      termino: 'CI',
      significado:
        'Integración Continua, práctica de fusionar cambios frecuentes en el código base.',
    },
    {
      termino: 'Commit',
      significado: 'Registro de cambios en el sistema de control de versiones.',
    },
    {
      termino: 'Coverage',
      significado:
        'Métrica que indica qué porcentaje del código es cubierto por pruebas.',
    },
    {
      termino: 'Despliegue',
      significado:
        'Acción de publicar una versión del software en un entorno determinado.',
    },
    {
      termino: 'DevOps',
      significado:
        'Cultura que integra desarrollo y operaciones para entregas continuas.',
    },
    {
      termino: 'Headless',
      significado:
        'Modo de ejecutar navegadores sin interfaz gráfica, usado en pruebas automatizadas.',
    },
    {
      termino: 'JUnit',
      significado: 'Framework de pruebas unitarias para Java.',
    },
    {
      termino: 'Jenkins',
      significado:
        'Herramienta de automatización para CI/CD ampliamente usada en proyectos DevOps.',
    },
    {
      termino: 'Mock',
      significado:
        'Objeto simulado utilizado para pruebas aisladas de componentes.',
    },
    {
      termino: 'Pipeline',
      significado:
        'Flujo automatizado que define etapas de compilación, prueba y despliegue.',
    },
    {
      termino: 'Pull Request',
      significado:
        'Solicitud de revisión de código antes de fusionarlo con la rama principal.',
    },
    {
      termino: 'Repositorio',
      significado:
        'Espacio centralizado donde se almacena y gestiona el código fuente.',
    },
    {
      termino: 'Selenium',
      significado: 'Herramienta para automatizar pruebas en interfaces web.',
    },
    {
      termino: 'Test Suite',
      significado: 'Conjunto agrupado de casos de prueba relacionados.',
    },
    {
      termino: 'WebDriver',
      significado:
        'API que permite controlar navegadores web desde scripts automatizados.',
    },
    {
      termino: 'YAML',
      significado:
        'Lenguaje de configuración utilizado en pipelines como los de GitHub Actions.',
    },
  ],
}
