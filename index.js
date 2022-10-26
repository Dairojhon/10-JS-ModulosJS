import {suma, multiplica} from './controller/controller.js';
import chalk from 'chalk';

const suma1= suma(1,2)
console.log(suma1)

const suma2 = suma(4,5)
console.log(chalk.blue(suma2))

const producto = multiplica(suma1,suma2)
console.log(chalk.green(producto))


