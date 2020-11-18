import paths from './paths';

import {
  mdiShieldCheckOutline,
  mdiOrderBoolAscendingVariant,
  mdiMapMarkerPath,
} from '@mdi/js';

export default [
  {
    title: 'Soluciones',
    subRoutes: [
      {
        title: 'Seguridad',
        icon: mdiShieldCheckOutline,
        path: paths.SECURITY,
      },
      {
        title: 'Control y gestión',
        icon: mdiOrderBoolAscendingVariant,
        path: paths.CONTROL,
      },
      {
        title: 'Trazabilidad de entregas',
        icon: mdiMapMarkerPath,
        path: paths.TRACKING,
      },
    ],
  },
  {
    title: 'Recursos',
    subRoutes: [
      {
        title: 'Blog',
        icon: mdiShieldCheckOutline,
        url: 'https://blog.drivetech.pro/',
      },
      {
        title: 'Medios',
        icon: mdiOrderBoolAscendingVariant,
        url: 'https://blog.drivetech.pro/press/',
      },
      {
        title: 'API Docs',
        icon: mdiMapMarkerPath,
        url: 'https://apidoc.drivetech.pro/',
      },
    ],
  },
  {
    title: 'Nosotros',
    subRoutes: [
      // {
      //   title: 'Equipo',
      //   icon: mdiShieldCheckOutline,
      //   path: paths.TEAM,
      // },
      {
        title: 'Trabaja con nosotros',
        icon: mdiOrderBoolAscendingVariant,
        path: paths.WORK_WITH_US,
      },
    ],
  },
  {
    title: 'Ingresar',
    url: 'https://app.drivetech.pro/accounts/login/',
  },
];
