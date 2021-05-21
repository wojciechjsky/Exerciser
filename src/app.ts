import { MathCustom as MC } from "./resources/example";
import * as DB from './resources/data.json';
require('./index.html')


const MathCustom = new MC();

const r = MathCustom.multiplyBy2(2)
const r1 = MathCustom.divideBy2(4);
const r2 = MathCustom.squarePower(4);

const IDs = DB.data.map(e => e.Id)

console.log(IDs);

