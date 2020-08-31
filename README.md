# Curso Fundamentos de Node JS

_Cusro de fundamentos de Node JS brindado por Platzi. Node JS es un entorno de ejecución de JavaScript fuera del navegador. Esto significa que se puede ejecutar en servidores, para construir herramientas (transpiladores, scraping, automatización)_

### Características

**Concurrente**
- Monohilo, con entradas y salidas asíncronas. De esta manera podemos tener un único proceso corriendo dentro del procesador que va a programar todas las peticiones que van a llegar y las mandará de forma asíncrona para no quedarse bloqueando, esto permite tener muchísimas conexiones. Lo importante a tener en cuente con esta característica (Monohilo) es que cuando hay un error nuestro proceso se para por completo, debemos tener mucho cuidado con los error en NodeJS. IMPORTANTE

**Motor V8**
- Entorno de ejecución de JS creado por Google, y libre desde 2008.
- Escrito en C++
- Convierte JS en código máquina en lugar de interpretarlo en tiempo real.

**Módulos**
- Todo lo que no sea sintáxis de programación, son módulos.
- Muchos módulos vienen por defecto en el paquete de Node.
- Puedes crear tus propios módulos.

**Orientado a eventos**
- Hay un bucle de eventos que se ejecuta constantemente.
- Puedes orientar tu código de forma reactiva.

### EventLoop: asincronía por diseño

_Es un proceso con un **bucle** que gestiona, de forma asíncrona (diferencia principal respecto a los otros lenguajes de servidor), todos los eventos de tu aplicación_

- **Event Queue**: Contiene todos los eventos que se generan por nuestro código (Funciones, peticiones, etc.), estos eventos quedan en una cola que van pasando uno a uno al Event Loop.

- **Event Loop**: Se encarga de resolver los eventos ultra rápidos que llegan desde el Event Queue. En caso de no poder resolverse rápido, enviá el evento al Thread Pool.

- **Thread Pool**: Se encarga de gestionar los eventos de forma asíncrona. Una vez terminado lo devuelve al Event Loop. El Event Loop verá si lo pasa a Event Queue o no.

### Módulos del core de Node

**Globals**

_En Node tenemos el objeto global que contiene los métodos y propiedades básicas que usamos en Node; ej(setTimeOut)_
`**global** es un equivalente a **this** en el navegador`
En node **this** es un alias de **global**

`this === global // true`

Algunos métodos que se incluyen en el global onjetc son:

- **setTimeOut:** Se encarga de llamar a otra función después de un período de tiempo.
- **setInterval:** Llama a otra función cada intervalo de tiempo.
- **setImmediate:** Equivalente a setTimeOut pero con tiempo 0
- **claerTimeOut:** Detiene setTimeOut
- **clearInterval:** Detiene un setInterval
- También tenemos otras como `reqire()`, `process`, `__dirname`, `__filename`.

_Si es posible es mejor(de no ser necesario) **no crear** variables globales. Es mejor crear módulos._

**File System (fs)**

_Nos permite acceder a archivos del sistema. Nos permite crear, acceder, leer, modificarlos, etc. Útil cuando trabajamos con precompiladores, cualquier cosa que requiera hacer un grabado a disco, bases de datos, etc._

Lo invocamos con `const fs = require('fs')`

Algunos de los métodos que tenemos en fs son:

- **readFile:** Recibe una ruta y una function como parámetros. La function(callback) a su vez tiene dos parámetros, `error` y `data`. La data la devuelve en forma de **buffer**, para ver la info del archivo en cuestión (file.txt) haremos que devuelva la data en forma de string con `console.log(data.toString())`

- **writeFile:** Recibe una ruta, un contenido y una function como parámetros. La function devuelve un error y otra data que no viene al caso. Al ejecutar esto, se nos crea un nuevo archivo con el contenido que le pasamos.

- **unlink:** Así como podemos leer y escribir con unlink borramos archivos. Le debemos pasar como parámetros la ruta y la function que ejecutará luego del borrado. Cuando se ejecute eliminará el archivo

**Console**

_Siempre que debuggeamos, siempre que queremos volver a ver un valor que queremos entender como es su funcionamiento estamos utilizando console, normalmente el más utilizado es `console.log`, pero este no es el único hay varios más._

- **console.log:** Nos permite imprimir cualquier cosa en consola.
- **console.info:** Hace lo mismo que el anterior, pero puede ser utilizado para dar info que algo pasó por tal lugar.
- **console.error:** Lo utilizamos para informar algún error (algunas consolas te lo pueden pintar de otro color)
- **console.warn:** Sirve para informar potenciales errores, son advertencias.
- **console.table:** Muestra datos en forma de tabla. Muy útil para hacer log de datos muy largos.
- **console.group:**: Permite agrupar un montón de logs para decir que forman parte de una cosa. Para cerrar un console.group lo hacemos con `console.groupEnd(nombreDelGrupo)`
- **console.count:** Nos dice las veces que estamos ejecutando una misma cosa. Para resetar el contador utilizamos `console.countReset(nombreCount)`

**Errors**

_Podemos manejarlos con `try and catch` esto nos permite tener un buen manejo de los errores para que nuestra aplicación siga corriendo en caso de que falle. Para funciones asíncronas es recomendable manejar el try and catch dentro de ellas, ya que pertenecen a otro hila del event loop y por tanto si una function asíncrona falla dentendrá la ejecución de la app._

**Child Process**

_Nos proporciona la capacidad de ejecutar procesos hijos en el sistema. Además de trabajar con los hilos principales de nuestra app también podemos correr proceso hijos. Un proceso es algo que se ejecuta y termina en algún momento. Podemos levantar otros procesos, con Node, Python, con variables del sistema con script, con cualquier cosa._

- **exec:** Nos permite ejecutar cualquier comando de nuestra terminal. Recibe como primer parámetro el comando que queremos ejecutar y como segundo parámetro un function que a su vez recibe un `error`, `stdout` que nos dice la data del comando y `sterr` nos dice si hubo un error.
- **spawn:** Lo utilizamos para procesos más complejos. Nos permite invocar un nuevo preoceso. Literalmente crea un proceso nuevo de Node

**C++ Native Module**

1. Instala `node-gyp`. Hay que hacerlo de forma global. Para eso, ejecuta:

```npm i -g node-gyp```

_Dependiendo del sistema de archivos, y los permisos, puede que tengas que usar sudo en linux y mac, o ejecutar como administrador en windows_

2. Crea tu archivo fuente. Un ejemplo lo puedes encontrar en [la documentación de node](https://nodejs.org/api/addons.html#addons_hello_world)

3. Crea un `binding.gyp` en la raiz del módulo.

4. En la carpeta raiz del módulo, ejecuta:

```node-gyp configure```

5. Se habrá generado un directorio build.

6. En la carpeta raiz del módulo, ejecuta:

```node-gyp build```

7. El módulo se compilará. y podrás importarlo en javascript. Puedes revisar que exista el archivo `build/Release/addon.node` _(es un binario, así que no podrás abrirlo)_

8. Para usarlo, crea un archivo js. Para importarlo:

```const addon = require('./build/Release/addon');```

y para usarlo:

```addon.hola()```

deberí­a imprimir `mundo`

**HTTP**

_Es el módulo que nos permite crear o conectarnos con servidores externos directamente desde nodeJS sin tener que pasar por ningún sitio_

- **createServer:** Con este método creamos un servidor, el método recibe una function como parámetro que a su vez recibe dos parámetros, `request` y `response`.

**OS (operative system)**

_Con este módulo podemos acceder a todos los componentes de nuestro sistema operativo, memoria ram, cantidad de núcleos del procesador, etc. Este módulo nos permite acceder a cosas que son de muy bajo nivel pero que son cosas que nos pueden interesar en algún momento_

- **arch:** Nos dice la arquitectura de nuestro pc (x64, x32, etc)
- **plataform:** Nos dice el sistema operativo
- **cpus:** Accedemos a la info de las cpus que tenemos en el sistema.
- **constants:** Nos da los errores del sistema.
- **freemen:** Nos dice la cantidad de memoria (en bytes) que tenemos libre.
- **totalmen:** Nos dice toda la memoria RAM que tenemos
- **homedir:** Nos dice el directorio raíz del usuario
- **tmpdir:** Nos dice donde está el directorio temporal (tmp) del usuario
- **hostname:** Con este podemos ver el nombre de la máquina
- **networkInterfaces:** Aquí vemos todas las interfases de red que tiene la máquina

**Process**

_Este módulo no lo vamos a requerir ya que es un módulo del core de Node. Con el podemos escuchar eventos y decirle lo que queremos hacer cuando ellos ocurran._

Algunos de los eventos son:

- **exit:** Informa que el proceso terminó. Una vez termina el exit ya nos salimos del eventLoop. 
- **beforeExit:** Evento que sucede antes de que el proceso termine
- **uncaughtException:** Nos permite capturar cualquier error que no fue capturado previamente. Esto evita que Node cierre todos hilos al encontrar un error no manejado.

### Utilizar los módulos y paquetes externos

**Gestión de paquetes: NPM y package.json**

_NPM es un gestor de paquetes, hasta ahora todos los módulos que utilizamos vienen en el core de Node. NPM es uno de los registros de paquetes más populares. NPM nos permite tener paquetes para prácticamente todo._

Utilizar paquetes por más que sea para una tarea muy chiquita y que parezca insignificante suele ser una muy buena práctica en Node. Importante tener en cuenta la cantidad de dependencias que tiene un paquete antes de instalarlo y también observar que versión tiene (no utilizar versiones 0.n ya que pueden ser versiones beta) y hace cuanto fue actualizado.

_Para iniciar NPM en consola, parados en la carpeta que lo queremos inicializar, escribimos `npm init` y nos inicia npm con un archivo package.json con todos los datos de nuestro npm._

**Construir nuestros propios módulos: Require e Import**

_Está bien trabajar con módulos ajenos pero cuando queremos crear un software grande, robusto y con muchas funcionalidades para poder también trabajar en equipo, lo mejor es crear nuestros propios módulos que hagan muchas cosas._

Actualmente en Node no podemos importar y exportar de la forma que lo hacemos en ES6 (esto está activo de forma experimental, por lo tanto no es recomendable hacerlo).

**Módulos útiles**

- **bcrypt:** Es un módulo que añade un montón de utilidades y funciones que te permiten cifrar y comparar muchos resultados. Por ejemplo nos va a permitir cifrar una contraseña que nos envíe un usuario a travéz de una petición http. Tiene el método `hash(password, n, callback(err, hash))` esto va a encriptar la password. También tiene el método `compare(pass, hash, callback(err, res))` nos dirá true si la comparación es correcta o false si la password y el hash no coinciden.

- **moment:** Nos facilita para trabajar con fechas. JavaScript no es muy útil con las fechas, por lo cual este módulo es muy bueno para eso. Tiene muchos métodos para manipular la fecha uno es `moment.format('YYYY/MM/DD - HH:mm')` con esto imprimimos la fecha y hora de esta manera `2020/08/27 - 23:00`. Tienen muchísimas funciones para trabajar con fechas.

- **sharp:** Trabaja con una librería de manejo de imágenes en C++ que nos permite trabajar con imágenes. Con `resize(80)` por ejemplo podemos redimensionar la imágen, y con `toFile('resize.png')` le pasamos el nuevo nombre del archivo. También tenemos por ejemplo `grayscale()` que pasa nuestra imagen a escala de grises.

**Datos almacenados vs en memoria**

_Los datos guardados en memoria van mucho más rápido pero perduran mucho menos en el tiempo debido a la baja memoria que estas tienen, sin embargo los datos almacenados en disco ocurren mucho más lento pero tienen una perdurancia en el tiempo mucha más duradera y tienen capacidad de guardar muchas cantidad de información._

**Buffers**

_Los buffers son datos en binarios(datos crudos) que van viniendo y se mueven de un lado para otro. El buffer nos permite trabajar con los datos en la versión más cruda que tiene. Son solo datos que vienen y datos que van. Para ver que trae podríamos parsearlo con `.toString()`. Los buffers son muy útiles porque usualmentes no vienen solos sino que vienen acompañados por un **stream**_

**Streams**

_Son el paso de datos entre un punto y otro. Hay dos tipos de streams(o tres):_

- **streams de lectura:** Es donde yo tengo un orígen y el strema me va soltando datos desde el orígen hacia donde lo queramos recoger.

- **streams de escritura:** Es donde tenemos un stream con un destino y lo que hacemos es meter datos y el destino los recoge y hace lo que tenga que hacer con ellos

- **streams de doble sentido:** Hacen ambas cosas, meten y sacan datos y luego se hace lo que se tenga que hacer con ellos.

### Conocer trucos de Node JS

**Banchmarking (console time y timeEnd)**

_Sirve para evaluar cuanto tarde en ejecutarse sierta tarea y así poder detectar procesos que sean mucho más lentos de lo que deberían. Con `console.time(timeName)` definimos desde dónde parte el time y con `console.timeEnd(timeName)` definimos dónde termina, esto nos dice en consola el tiempo que tradó en ejecutarse el blocque de código que queda dentro de estos consoles. Funciona también con funciones asíncronas._

**Debugger**

_NodeJS viene integrado con un modo debug para poder conectarnos desde cualquier herramienta de inspección de código a nuestro código en NodeJS._

**Error First Callbacks**

_Esto nos define que cuando tenemos un callback, el primer parámetro siempre debería ser una error. Esto es una convención que se genera pensando en que "todo puede fallar" y tenemos que estar pendientes de esto y ser capaces de controlarlo. Así que una cosa que debemos hacer es que en todos los módulos que generemos el primer parámetro siempre sea el error._

Tener en cuenta: En caso de querer usar `throw` para manejar el error no nos funcionará correctamente en funciones asíncronas, este patrón funciona bien en funciones síncronas pero nos rompe el código en funciones asíncronas.

### Manejar herramientas con Node

**Scraping**

_Web scraping es una técnica utilizada mediante programas de software para extraer información de sitios web. Usualmente, estos programas simulan la navegación de un humano en la Wrold Widw Web ya sea utlizando el protocolo http manualmente, o incrustando un navegador en una aplicación._

**Automatización de procesos**

_Nos perimite automatizar todos los procesos que tengamos, desde NodeJS, ya sean pocesos de consola, procesos donde tengamos paquetes externos, etc, da igual lo que sea. Vamos a automatizarlo para que ejecutando un comando se haga todo lo que tenga que hacer la app. Hay muchas herramientas, webpack(más orientado al frontEnd), gulp, grump y muchas más._

**Aplicaciones de Escritorio**

_Con Node podemos hacer todo, entre ello está aplicaciones de escritorio. Uno de los paquetes de Node más potentes y más poderosos se llama **Electron**. Lo que nos permite es convertir webs en aplicaciones de escritorio. Es las herramientas más sencillas que hay para convertir webs en aplicaciones nativas. Slack utiliza Electron_
