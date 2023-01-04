<div align="center"> 
  <h1> Muhammad Gilang Nur Haliz - 1207050074 </h1> 
  <p>Untuk Memenuhi Ujian Akhir Semester Mata Kuliah Pengembangan Aplikasi Web</p>
  <p>Teknik Informatika Kelas D </p> 
  
  [Teknik Informatika](http://if.uinsgd.ac.id/) || [UIN Sunan Gunung Djati Bandung](https://uinsgd.ac.id/) 
  
</div>


### Clone repository dan masuk folder backend
```sh
git clone https://github.com/mgilangnurhlz/2223-IF215007_8-pengembangan-aplikasi-web.git
```

### Install node module dan library
```sh
npm install
```

### Membuat database auth_db pada http://localhost/phpmyadmin/
```sql
CREATE DATABASE auth_db;
```

### Menyesuaikan database
```js
import { Sequelize } from "sequelize";

const db = new Sequelize("auth_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
```

### Jalankan program
```sh
nodemon index.js
```

### Demo backend
https://user-images.githubusercontent.com/100754364/210526255-527aec42-87f1-4979-82a1-8f27ea057cc6.mp4

<h3 align="center">Languages and Tools:</h3>
<p align="center"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> </a> <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a>  </a> </p>
