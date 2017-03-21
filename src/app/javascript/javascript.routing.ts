import {RouterModule} from '@angular/router';

import {JavascriptComponent} from './javascript.component';
import {OopComponent} from "./oop/oop.component";
import {JsonComponent} from "./json/json.component";

export const JavascriptRouting = RouterModule.forChild([
  {path: 'javascript', component: JavascriptComponent},
  {path: 'oop', component: OopComponent},
  {path: 'json', component: JsonComponent}
])
