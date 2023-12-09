# KumaSushi

### Integrantes del proyecto

* Bernat López Munar
* Ana María Saavedra Yandún

## Objetivo

El objetivo de este proyecto consiste en realizar tres paginas _(.html)_ con su respectiva hoja de estilos _(.css)._
Dentro de cada de ellas debíamos conservar aspectos vistos en clase, y orientarlos en la práctica a la flexibilidad y adaptabilidad de la web. Para que el usuario goce visualmente de su contenido por su estructuración y legibilidad.

## Idea base del Proyecto

La idea del proyecto radica en un restaurante de comida japonesa, que trata de darle visibilidad a productos adecuados de esta cultura. Con esta idea se pretende venderle al usuario **(consumidor)** el concepto de un negocio acogedor, abierto a todo el público.
Cuenta con tres conceptos elementales de _la restauración, la introducción al negocio, la carta y la información de contacto para reservas._

## Estructura de carpetas y archivos que conforman la página web.

La página web se consta de una carpeta principal llamda "**KumaSushi**" dentro de esta se encuentran subcarpetas y archivos: 
1. Carpetas con imágenes _(.png)_ _(.jpg)_ y videos _(.gif)_ _(.mp4)_:
   * Carta
   * Reservas
   * Imágenes
2. Páginas _(.html)_:
   * **Home.html**
   * **Carta.html**
   * **Reserva.html**
4. Hoja de estilos _(.css)_:
   * **KumaSushi.css**
5. Una carpeta llamada "**README**" que contiene:
   * El documento aquí expuesto de explicación.
   * Una carpeta de imágenes llamada "**Capturas**".

## Aspecto a evaluar en cada página

Teniendo en cuenta la idea y el objetivo del proyecto. Se desarrollan tres páginas:

1. **Home**: Se refiere a la página principal, contiene datos de origen, imágenes y contenido del lugar

![image](Capturas\principal.png)


2. **Carta**: Consta de los platos y bebidas vendidos en el lugar. Se tiene en cuenta imagen, detalles del producto y precio
   
![image](Capturas\Carta2.png)


3. **Reserva**: Cuenta con información esencial para concretar una reserva. Números de contacto, dirección de correo electrónico, mapa de ubicación del restaurante y horarios de atención
   
![image](Capturas\reservas.png)


## Maquetación y contenido

Cada página cuenta con elementos semánticos, distribuidos en distintas secciones con clases o selectores diferentes según las necesidades de la misma: 


* ### Algunos elementos de bloque más utilizados: 

* **Titulos**:
  
  ![image](Capturas\Titulos.png)

* **Párrafos**:
  
  ![image](Capturas\Parrafos.png)

* **Listas**:
  
  ![image](Capturas\Listas.png)


* ### Elementos semánticos: 

  * **Header**: Encontramos el menú de navegación, lo conforman el logo y los enlaces de las otras páginas
    
    * **Código**

      ![Header](Capturas\Header.png)

  
  * **Main**: Foco principal de cada página, encontramos generalmente la información más relevante que le queremos enseñar al cliente

    * **Código**
    
      ![Main](Capturas\Main.png)

  
  * **Footer**: El pie de página es una recapitulación de todo lo visto anteriormente, guarda un apartado de información de 
    la empresa, ubicación, redes y datos de contacto. Así como una sección de Política de privacidad

     * **Código**
    
      ![Footer](Capturas\footer.png)


  * **Section**: Se utiliza para agrupar contenido relacionado y se puede pensar como un grupo temático de contenido. Nos permitió clasificar la información dentro de la web.  

    * **Código**

      ![image](Capturas\Section.png)

      

  * **Nav**: Su propósito es estructurar y marcar claramente la parte del contenido que contiene los enlaces de navegación principal. Fue importante en el desarrollo de la barra de navegación de la página que se ubica en el header. Esta contiene enlaces como el inicio, carta y reserva.

    * **Código**

      ![image](Capturas\nav.png)


* ### Contenedores:

  * **div**
    Se almacenan los elementos en contenedores como **div** para facilitar el movimiento y organización del contenido.
    
    ![image](Capturas\div.png)


  * **span**
    Se utiliza como un contenedor en línea para agrupar y aplicar estilos a elementos en línea.
    
    ![image](Capturas\span.png)

    ## CSS

* ### Selectores:

  * **Selector universal**: Selecciona todos los elementos en una página. Se utiliza para aplicar estilos globales que afectan a todos los elementos.
    
    ![image](Capturas\selectUni.png)


  * **Selector de etiqueta**: El selector de etiqueta selecciona todos los elementos que coinciden con una etiqueta HTML específica.

    ![image](Capturas\selectoretiqueta.png)


  * **Selector de clase**: El selector de clase se utiliza para seleccionar elementos que tienen un atributo de clase específico. Se define con un punto seguido del nombre de la clase.

    ![image](Capturas\clases.png)


  * **Selector de tipo id**: El selector de tipo ID se utiliza para seleccionar un elemento específico que tiene un atributo de id único. Se define con un hash seguido del nombre del ID.

    ![image](Capturas\SelectID.png)


* ### Modelo de cajas mayormente utilizados: 
   
   *  #### Bloques de Contenido (width, height): Se refiere al área de contenido de un elemento, que puede especificarse con propiedades como width y height.

    * #### Margen Exterior (margin): Define el espacio fuera del borde del elemento.
   
    * #### Relleno (padding): Define el espacio entre el contenido del elemento y su borde.

    * #### Borde (border): Define el borde alrededor del contenido y el relleno.

      ![image](Capturas\Modelodecajas2.png)

      ![image](Capturas\border.png)


* ### Cajas flexibles: 

    Esto permite un diseño más _flexible y control_ sobre cómo se organizan y se distribuyen los elementos secundarios dentro de estos contenedores.

    ![image](Capturas\flex.png)



* ### (Media Queries) Estilos responsivos: 

    El objetivo principal es que la interfaz de un sitio web se adapte de manera fluida y eficiente a distintas resoluciones, desde grandes pantallas de escritorio hasta dispositivos móviles más pequeños.

    En  nuestro caso, decidimos emplear queries para distintos dispositivos como de menor tamaño, resolución de smarthphones y tablets.

![image](Capturas\Responsive.png)

![image](Capturas\responsivefooter.png)

  

## Tecnológias utilizadas en el desarrollo de la página 

#### GitHub

Esta es una plataforma de desarrollo colaborativo, la utilizamos para almacenar y gestionar el código fuente del proyecto. Creamos un repositorio llamado "**KumaSushi**"y actualizamos el contenido con la opción "**Commits**".

![image](Capturas\Github.png)


#### VisualStudioCode

Es un editor de código fuente que proporciona herramientas y características avanzadas para el desarrollo de la web. En esta administramos y coordinamos _la maquetación y estilos de la página_. Gracias a extensiones como "**Live Share**" tuvimos una previsualización de cada uno de los documentos _(.html)._

![image](Capturas\vsc.png)


#### Google Fonts

Es un servicio que ofrece una amplia variedad de fuentes tipográficas, permite agregar el código en la sección de encabezado del HTML. En nuestro caso, utilizamos la fuente "**Monserrat**" 

![image](Capturas\gfont.png)


#### Navegadores (Inspección de elementos)

Son fundamentales para visualizar y probar la web, además de que nos permite la búsqueda de contenido.
Cabe de destacar, que cuenta con herramientas que resultaron importantes en el desarrollo de la página. En aspectos como el responsive y la maquetación:

* **Inspección de elementos**: Permite modificar y examinar elementos _HTML Y CSS._

* **Depuración**: Utiliza la consola del navegador para detectar errores y realizar pruebas de rendimiento.

![image](Capturas\inspeccion.png)


## Distribución de tareas

|Tarea|Responsable |
|-------|-----|
|Css (KumaSushi.css) | Bernat López y Ana Saavedra |
|Página 1 (html) Home |Bernat López |
|Página 2 (html) Carta |Ana Saavedra |
|Página 3 (html) Reservas |Ana Saavedra |
|Responsive (Adaptabilidad de la Web)|Bernat López |
