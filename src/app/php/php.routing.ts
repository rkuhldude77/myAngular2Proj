import {RouterModule} from '@angular/router';

import {PHPComponent} from './php.component';

export const PHPRouting = RouterModule.forChild([
  {path: 'php', component: PHPComponent}
])
