# Códigos cli

DEPLOY GITHUB

Subir repositorio online en github por cli (SOLO SIRVE PARA ANGULAR VERSION 8.0 O INFERIOR)

npm i angular-cli-ghpages --save-dev (para instalar ghpages)
ng build --prod --base-href=/NOMBREREPOSITORIO/ (para construir el archivo dist, debe tener el nombre en minusculas el cual contendra la compilacion de nuestro proyecto)
npx ngh --dir dist/NOMBREREPOSITORIO (para subir al servidor online de github)

----------------------------------------------------------------------------------------------------------------------------------
MDB 

angular.json (agregar los iguiente en styles para tener font awesome 5 entre otros...)

ng new project_name --style=scss
npm install angular-bootstrap-md@8.8.1

to app.module.ts add
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
    imports: [
        MDBBootstrapModule.forRoot()
    ],
    schemas: [ NO_ERRORS_SCHEMA ]
});

npm install --save-dev @fortawesome/fontawesome-free (con esto isntalamos iconos gratis)

"styles": [
              "node_modules/@fortawesome/fontawesome-free/scss/fontawesome.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/solid.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/regular.scss",
              "node_modules/@fortawesome/fontawesome-free/scss/brands.scss",
              "node_modules/angular-bootstrap-md/assets/scss/bootstrap/bootstrap.scss",
              "node_modules/angular-bootstrap-md/assets/scss/mdb.scss",
              "src/assets/scss/styles.scss"
            ],

-----------------------------------------------------------------------------------------------------------------------------------
ANGULAR

ng new nombre = para crear nuevo proyecto angular con node.js

Emular servidor en navegador = ng serve -o (para el primer uso de la app) / ng serve



Crear carpetas automaticas = ng g c components/nombre
							-is(para no crear carpeta de style)

Instalar bootstrap:

npm install bootstrap --save
npm install jquery --save
npm install popper.js --save

EVENTOS ANGULAR CON JAVASCRIPT

<button (click)="borrarMarca(indice)">Borrar</button> (Con esto llamamos al evento click desde su metodo para borrar un elemento)

borrarMarca(index){
	//delete this.marcas[index]; (Con el evento delete podemos borrar un elemento)
	this.marcas.splice(index, 1); (Con el evento splice podemos borrar un elemento e indicarle la cantidad que se quiere borrar al presionar)
}

<button (click)="addMarca()">Añadir</button> (Con esto podemos añadir un elemento)

addMarca{
	this.marcas.push(this.mi_marca); (Con el evento push se pueden agregar elementos)
}

RUTAS

IMPORTANTE: <base href="/"> (Debe estar en el html del index)

Crear archivo app.routing.ts

Se debe importar lo siguiente:

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

Y luego los componentes...

---------------------------------------------------------------------------------------------------------------------------
NODE.JS

Para crear backend con node debemos crear un archivo llamado backend en nuestro proyecto e instalar las siguientes librerias:

npm init
npm install express --save (sirve para trabajar http y rutas)
npm install body-parser --save (sirve para convertir las peticiones rest a json par ael uso de mongodb)
npm install connect-multiparty --save (permite subir archivos)
npm install mongoose --save (permite trabajar con mongodb)
npm install nodemon --save-dev (permite refrescar la pagina solo localmente)
npm install mongoose-unique-validator --save (para validar errores)
npm install bcryptjs (para encriptar contraseñas de una sola línea)
npm install jsonwebtoken --save (para instalar token web)
npm install --save express-fileupload (libreria para subir archivos)
npm install google-auth-library --save (libreria de google sign in)

Luego se crea un script en package.json que es la siguiente:

"test": ... ...,
"start": "nodemon index.js"
---------------------------------------------------------------------------------------------------------------------------
CORS

npm install cors

const cors = require("cors");

//CORS
app.use(cors());

//app.options('*', cors());

---------------------------------------------------------------------------------------------------------------------------
Variables de entorno:

npm i cross-env (Para instalar modulo que permite ocultar información como passwords)
npm i dotenv (Para poder utilizar el archivo .env, donde se utilizara la funcion dle modulo cross-env)
npm install -g win-node-env (Instalar de forma global env evitara futuros errores de producción con variables de entorno)

Se debe crar un arrchivo llamado .env
-----------------------------------------------------------------------------------------------------------------------------
Crear servidor rápido:

npm install lite-server --save-dev(servidor para pruebas rapido)
npm run dev (para hacer correr el servidor)

npm i -s bcryptjs jsonwebtoken (Opcionalmente para crear login)

luego se crea un archivo index.js

Libreria de node para angular: npm install --save rxjs-compat 

----------------------------------------------------------------------------------------------------------------------------------
Dependecias en npm para generar PDF con javascript:

npm install jspdf --save

npm install @types/jspdf -dev

Importación en el componente a utilizar

import * as jsPDF from 'jspdf';

Agregar tabla a nuestro PDF:

npm install jspdf jspdf-autotable

Importación en el componente:

import autoTable from 'jspdf-autotable'
