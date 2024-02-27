<h1>Client vs. Server Paradigm</h1>
<h3>What do these terms actually mean?</h3>

<li> The client refers to the device you are currently using such a smartphone or computer, the device (client) sends requests to the server and displays the interfice that we can then interact with.💻 </li>
<li>The server is essentially just a computer device but it is equipped with a strong configuration and remains operational continuously. It's where all the code for our application is stored.📈</li>
<br>
<main>So when the client, meaning our device, sends a request. The server perfoms the necessary computations and sends back the required outcome </main>
<br>
Does the component require user interactivity?
If the answer (YES) - client component
If the answer (NO) - server component


What do you need to do?
<h1> SERVER COMPONENT</h1>
<li>  Fetch data
</li>
<li> access backend resources
</li>
<li>Keep sensitive information on the server (access to tokens, API keys, etc.)</li>
<li> Keep large dependencies on the server / Reduce client side javascript</li>
<br>

<h1>CLIENT COMPONENT</h1>

- Add interactivity  and event listeners (onclick(), onchange(), etc.)

- Use State and lifecycle effects (useState(), useReducer(), useEffect(), etc.)
- Use browser-only API
- Use custom hooks that depend on state effects or browser-only API
- Use React Class components
<br>
<b>All Components  are automatically considered <i>server components</i></b>

Write "use client" it's a straightforward way to indicate that the component change to client.
<br>
When use Client component - next preerender twise time to render our components and improve our performance



<b>What are the different types of components in NEXT JS, and explain their differences?</b>

- Client Components:
Se refiere al navegador del dispositivo de un usuario que envia una solicitud a un servidor para su codigo de aplicacion. Luego convierte la respuesta del servidor en una interfaz de usuario.

HISTORIA: Los desarrolladores tenian que utilizar diferentes idiomas(javascript, php) y marcos al escribir codigo para el servidor y el cliente. Con REACT, los desarrolladores pueden utilizar codifo para el servidor y el cliente. Con React, los desarrolladores pueden utilizar el mismo lengueje(JAVASCRIPT) y el mismo marco(Siguiente.js os su marco de eleccion). Esta flexibilidad le permite escribir codigo sin problemas para ambos entornos sin conmutacion de contexto.


Sin embargo cada entorno tiene su propio conjunto de capacidades y limitaciones. Por lo tanto, el codigo que escribe para el servidor y el cliente no siempre es el mismo. Hay ciertas operaciones(datos que obtienen o gestionan el estado de usuario) que son mas adecuadas para un entorno sobre la otra.

Entender estas diferencians es clave para usar eficazmente REACT y NEXTJS.

<b>solicitud-Respuesta Lifecycle</b>
El ciclo de vida de solicitud/respuesta se refiere al flujo de datos entre el servidor y el cliente. 

1.  Accion de Usuario: El usuario interactua con una aplicacion web. Esto podria ser hacer clic en un enlace, enviar un formulario, o escribir una URL directamente en la barra de direccione del navegador.
2. Solicitud HTTP: El cliente envia un HTTP solicitar al servidor que contenga la informacion necesaria sobre recursos se solicitan, que metodos es esta utlizando(GET o POST) y datos adicionales si es necesario.

3. Servidor: El servidor procesa la solicitud y responde con los recursos apropiados. Este proceso puede tomasr una par de pasos como enrutar, obtener datos, etc.

4. Respuesta HTTP: Despues de procesar la solicitud, el servidor envia una respuesta HTTP de vuelta al cliente. Esta respuesta contiene un codigo de estado(que le dice al cliente si la solicitud fue exitosa o no) y recursos solicitados(HTML,CSS, JS, archivos estaticos, etc.).

5. Cliente: El cliente analiza los recursos para renderzar la interfaz de usuario.
6. Accion de usuario: Una vez que la interfaz de usuario se rendere, al usuario puede interactuar con ella, y todo el proceso comienza de nuevo.



<h1>Limite de la red</h1>
En el desarrollo de la web, la forntera de la Red es una linea conceptual que separa los diferentes entornos. Por ejemplo el cliente y el servidor, o el servidor y la tienda de datos.


En React, usted elige donde colocar el limite de la red cliente servidor dondequeirea que tenga mas sentido.

Detras de las escenas, el trbajo se divide en dos partes:
- Grafico del modulo cliente y grafico del modulo del servidor. 

El grafico del modulo del servidor contienen todos los componentes que se presentan en el servidor y el grafico del modulo cliente contiene todos los componentes que se representan en le cliente.

Puede ser utili pensar que los fraficos del modulo como una presentacion visual de como los archivos en su aplicacion dependen unos de otros.

SE puede usar REACT "use client" convencion para definir las pronteras. Tambien jay un "use server" convencion, que le dice a REACT que haga algun trabajo computacional en el servidor.


<h1>APLICACIONES HIBRIB</h1>
Cuando se trabaja en estos entornos, es util pensar que el flujo de codigo en su aplicacion como unidireccional. En otras palabras, furante la respuesta, el codigo de us aplicacion flueye en una direccion: desde el servidor al cliente.
Si necesita acceder al servidor desde el cliente, enviar una nueva solicitud al servidor en lugar de volver a utlizar sus componentes y donde colocar la frontera de la red.
 En la practica, este modelo anima a los desarroladores a pensar primero en lo que quieren ejecutar en el servidor, antes de enviar el resultado al cliente y hacer interactiva la aplicacion.

- Server Components:  Le permite escribir en el servidor. En NEXTJS el trabajo de renderiazdo se divide aun mas por segmentos de rutas para permitir el streaming y la represntacion parcial, y  hay estrategias diferentes de renferizado  de servidores: 

- Renderizacion estatica:
- Renderizacion dinamica:
- Streaming:
<br>

<b>What are the benefits of server side rendering?</b> (SEO)
Beneficios trabajo de renderizado en el servidor:

- Buscando datos: Los componentes del servidor le permiten mover la busqueda de datos al setvidor, mas cerca de su fuente de datos. Esto puede mejorar el rendimiento reduciendo el tiempo que se tarda en obtener los datos necesarios para renderzar, y la cantidad de solucitudes que el cliente necesita hacer.

- Seguridad: Los componenets del servidor le permiten mantener datos sensibles y la logica en el servidor, como fichas y claves de API, sin el riesgo de exponerlas al cliente

- Caching: Al renderizar en el servidor, el reusltado se puede almacenar y reutilizar en las solicitudes posteriores y entre los usuarios.Esto puede mejorar el rendimiento y reducir el costo reduciendo la cantidad de renderizado y la obtencion de datos hechos en cada solicitud.


- Tamaños de Bundle: Componentes de servidor le permiten mantener grandes dependencia que antes impactaran en tamaño del paque te de JS dle cliente en el servidor. Esto es beneficioso para los usuarios con dipositivos mas lentos o menos potentes, ya que el cliente no tiene que descargar, analizar y ejecutar ningun javascript para componentes del servidor.

- Carga de pagina Inicial y primera pintura contenido: En el servidor podemos generar HTML para permitir a los usuarios ver la pagina inmediatamente, sin esperar a que el cliente descargue, analice y ejecute el javascript necesario para renderizar la pagina.

SEARCH ENGINE OPTIMIZATION AND SOCIAL NETWORK SHAREABILITY: El HTML renderizado se puede utilizar por los robots del motor de vistas previas  de tarjetas sociales para sus paginas.

SREAMING: Componentes del servidor le permiten dividir el trabajo de renderizado en trozos y transmitirlos al cliente a medida que se preparan. Esto permite al usuario ver partes de la página antes sin tener que esperar a que toda la página sea renderizado en el servidor.
<b>What are the latest features of the app directory regarding the client/ server rendering? </b>

