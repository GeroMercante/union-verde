## Proceso de limpieza hecho 
`Test.js`
`logo.svg`
`ReportWebVitals.js`
`SetUpTest.js`

## Distribución de la estructura del proyecto
`Pages`
`Components`

## Estilos globales en el App.css

## Instalacion de librerías 
`npm install styled-components`
`npm install remixicons`
`npm install slick-carousel`
`npm i react-router-dom`
`npm i normalize.css` 
`npm i locomotive-scroll`
`npm i framer-motion`  
`npm i gsap`
`npm i react-locomotive-scroll`  

## Inicialando componentes Reutilizables
`Header`
`NavBar`
`Footer`


PASO 1:
Empezar a animar ciertos elementos con LocomotiveScrollProvider y empezar a pasar mediante props, estilos para su reutilización con styled-components.
Componentes de tipo funcionales. snippets:(rafce)
Incorporé un video en el componente CoverVideo, que es llamado en el home, el video funciona como un banner de entrada a la visualizacion del sitio.
Incorporé el NavBar y el Logo, en componentes distintos, para su presentación en toda la screen inicial.


function App(){

    const containerRef = useRef(null);

return (
    <>
      <GlobalStyles />                      /*! importamos nuestro componente de estilos globales con el metodo recibido de styled-components*/
      <ThemeProvider theme={dark} >         /*! usamos una etiqueta de styled-components para pasar mediante props, estilos a componenetes children*/
        <LocomotiveScrollProvider           /*! usamos una librería que nos permite animar elementos al realizar scroll en la pagina*/
          options={{                        /*! por default, como sacamos de la librería*/
              smooth: true,             
              // ... all available Locomotive Scroll instance options 
            }}
          watch={                            /*! por default, como sacamos de la librería*/                           
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
              <Home />                                  /*! En esta sección, colocamos nuestra App.*/  
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}


Motion: 

    svg animacion convertida en objeto js.

     initial={{
         opacity: 0,
         pathLength: 0,
     }}
     animate={{
         opacity: 1,
         pathLength: 1,
     }}
     transition={{
         duration: 2,
         ease: 'easeInOut'
     }}
