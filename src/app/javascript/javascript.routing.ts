import {RouterModule} from '@angular/router';

import {JavascriptComponent} from './javascript.component';
import {OopComponent} from "./oop/oop.component";
import {JsonComponent} from "./json/json.component";
import {AjaxComponent} from "./ajax/ajax.component";
import {PapaBFormComponent} from "./papa-b-form/papa-b-form.component";

export const JavascriptRouting = RouterModule.forChild([
  {path: 'javascript', component: JavascriptComponent},
  {path: 'oop', component: OopComponent},
  {path: 'json', component: JsonComponent},
  {path: 'ajax', component: AjaxComponent},
  {path: 'papa-b-form', component: PapaBFormComponent}
])
