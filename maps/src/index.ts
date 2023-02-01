// console.log('hi there!');
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMaps";

let usuario = new User();
let company = new Company();

let customMap = new CustomMap('mapita');
customMap.addMarker(usuario);
customMap.addMarker(company);


