// import userAvatar1 from '../Theme/Images/avatars/client_1.png';
import pabloPerez from '../Theme/Images/avatars/pablo-perez.png';
import kukli from '../Theme/Images/avatars/kukli.png';
import salazar from '../Theme/Images/avatars/salazar.png';
// import cocacola from '../Theme/Images/logos/cocacola.png';
import famin from '../Theme/Images/logos/famin.png';
import logistica from '../Theme/Images/logos/logistica.png';
// import pl3 from '../Theme/Images/logos/3pl.png';
import lobarnechea from '../Theme/Images/logos/lobarnechea.png';
import { mdiLinkedin, mdiTwitter } from '@mdi/js';
export const TESTIMONIALS = [
  {
    name: 'Sebastián Salazar',
    avatar: salazar,
    testimony:
      '“La plataforma Drivetech nos ha permitido tener un mayor control y gestión de nuestra flota, por su simplicidad de uso y administración. Además, gracias a los reportes que se pueden configurar y generar, nos ha permitido construir indicadores para la toma de decisiones. Cabe mencionar, que al proveer un API, también nos ha permitido integrar nuestros desarrollos con su plataforma.”',
    logo: logistica,
    charge: 'SubGerente TI',
  },
  {
    name: 'Pablo Pérez',
    avatar: pabloPerez,
    testimony:
      '“Drivetech, a diferencia del resto, ha logrado darnos lo que necesitamos que es seguridad y tranquilidad, ya que después de sufrir algunos robos, Drivetech instaló un sistema que nos permite saber siempre dónde están las máquinas, bloquearlas a distancia, se detienen si tratan de inhibir la señal, alarmas sonoras si el conductor sobepasa la velocidad permitida, y un sin fin de reportes que nos ayudan a tener todo bajo control.”',
    logo: famin,
    charge: 'Jefe de Administración y Maquinarias',
  },
  // {
  //   name: 'Gabriel Palomo',
  //   avatar: userAvatar1,
  //   testimony:
  //     'Instapage gives us the ability to tailor our landing page content and layout to tell a unique story for each geographical target. The platform also enables us to create different variations with content that performs well for each unique channel. Every marketing team needs this!',
  //   logo: pl3,
  //   charge: 'Head of Marketing',
  // },
  {
    name: 'Sebastián Kukli',
    avatar: kukli,
    testimony:
      '“Con Drivetech tenemos posicionados a todos los patrulleros en tiempo real. Ante un procedimiento, es vital contar con la geolocalización exacta de nuestros medios, ya que nos ayuda a reducir nuestros tiempos de respuesta y hacer más eficiente el patrullaje en nuestra comuna. Es impresionante la flexibilidad que tienen para poder integrarse con otros software, o para desarrollar nuevos requerimientos, plasmando nuestras ideas en su plataforma”',
    logo: lobarnechea,
    charge: 'Director de tecnologías y sistemas',
  },
];

export const TELEPHONES = [
  {
    country: 'Chile',
    flag: 'cl',
    phone: '+56 323 610 611',
  },
  {
    country: 'Perú',
    flag: 'pe',
    phone: '+51 994 269 673',
  },
];

export const SOCIAL = [
  {
    icon: mdiTwitter,
    link: 'https://twitter.com/drivetechis',
  },
  {
    icon: mdiLinkedin,
    link: 'https://www.linkedin.com/company/drivetechis/?originalSubdomain=cl',
  },
];
