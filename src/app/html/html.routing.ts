import {RouterModule} from '@angular/router';

import {HTMLComponent} from './html.component';

export const HTMLRouting = RouterModule.forChild([
  {path: 'html', component: HTMLComponent}
])
