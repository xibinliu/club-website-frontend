import { Routes } from '@angular/router';

import { PublicinfoComponent } from './publicinfo/publicinfo.component';

//Import routing paths
import { generalinfoRoutingPath, faqRoutingPath, eventRoutingPath, keynoteRoutingPath, articleRoutingPath,  } from './publicinfo/publicinfo-routing.path';

export const PublicinfoRoutes: Routes = [
  { path: 'publicinfo',
    component: PublicinfoComponent,
    children: [
      {path: '',  redirectTo: 'generalinfo', pathMatch: 'full'},

      { path: "generalinfo",
        children: generalinfoRoutingPath,
        data: {"mraLevel": 1, "item": "generalinfo"}
      },
      { path: "faq",
        children: faqRoutingPath,
        data: {"mraLevel": 1, "item": "faq"}
      },
      { path: "event",
        children: eventRoutingPath,
        data: {"mraLevel": 1, "item": "event"}
      },
      { path: "keynote",
        children: keynoteRoutingPath,
        data: {"mraLevel": 1, "item": "keynote"}
      },
      { path: "article",
        children: articleRoutingPath,
        data: {"mraLevel": 1, "item": "article"}
      },
    ]
  }
];

export const publicinfo_server_root_uri:string = "/api/publicinfo";
/*>>> Please check this recent updates and merge with existing ones***
**Date: Mon Dec 23 2019 22:13:44 GMT-0800 (Pacific Standard Time)

import { Routes } from '@angular/router';

import { PublicinfoComponent } from './publicinfo/publicinfo.component';

//Import routing paths
import { generalinfoRoutingPath, faqRoutingPath, eventRoutingPath, keynoteRoutingPath, articleRoutingPath,  } from './publicinfo/publicinfo-routing.path';

export const PublicinfoRoutes: Routes = [
  { path: 'publicinfo',
    component: PublicinfoComponent,
    children: [
      {path: '',  redirectTo: 'generalinfo', pathMatch: 'full'},

      { path: "generalinfo",
        children: generalinfoRoutingPath,
        data: {"mraLevel": 1, "item": "generalinfo"}
      },
      { path: "faq",
        children: faqRoutingPath,
        data: {"mraLevel": 1, "item": "faq"}
      },
      { path: "event",
        children: eventRoutingPath,
        data: {"mraLevel": 1, "item": "event"}
      },
      { path: "keynote",
        children: keynoteRoutingPath,
        data: {"mraLevel": 1, "item": "keynote"}
      },
      { path: "article",
        children: articleRoutingPath,
        data: {"mraLevel": 1, "item": "article"}
      },
    ]
  }
];

export const publicinfo_server_root_uri:string = "/api/publicinfo";
**** End of recent updates.<<<*/
