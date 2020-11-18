// Icons gallery https://materialdesignicons.com/
import {
  mdiAlarmLightOutline,
  mdiCarKey,
  mdiWifiLock,
  mdiTruckTrailer,
  mdiGestureTapButton,
  mdiShieldCar,
  mdiAccountKey,
  mdiCalendarClock,
  mdiMapMarkerAlertOutline,
  mdiAccountAlertOutline,
  mdiCommentAlertOutline,
  mdiSpeedometer,
  mdiSeatbelt,
  mdiAccountVoice,
  mdiThermometerAlert,
  mdiVectorSquare,
  mdiMapMarkerPath,
  mdiChartBox,
  mdiAccountPlus,
  mdiClipboardAccount,
  mdiTools,
  mdiFileChart,
  mdiFileClock,
  mdiAccountSettings,
  mdiMagnify,
  mdiBellRing,
  mdiThumbUp,
  mdiStar,
} from '@mdi/js';

import home_hardware from '../../Theme/Images/sections/home/home_hardware.jpg';
import tracking_bg from '../../Theme/Images/sections/tracking/tracking_bg.jpg';
import security_bg from '../../Theme/Images/sections/security/security_bg.jpg';
import security_secure_route from '../../Theme/Images/sections/security/security_secure_route.png';
import security_cargo_compartment from '../../Theme/Images/sections/security/security_cargo_compartment.jpg';
import security_fatigue_sensor from '../../Theme/Images/sections/security/security_fatigue_sensor.jpg';
import security_cabin_communication from '../../Theme/Images/sections/security/security_cabin_communication.jpg';
import security_immobilize from '../../Theme/Images/sections/security/security_immobilize.jpg';
import control_cool_chain from '../../Theme/Images/sections/control/control_cool_chain.png';
import control_geofences_routes from '../../Theme/Images/sections/control/control_geofences_routes.png';
import control_online_history from '../../Theme/Images/sections/control/control_online_history.png';
import control_drivers from '../../Theme/Images/sections/control/control_drivers.png';
import control_users from '../../Theme/Images/sections/control/control_users.png';
import control_maintenance from '../../Theme/Images/sections/control/control_maintenance.png';
import control_fuel from '../../Theme/Images/sections/control/control_fuel.png';
import tracking_search from '../../Theme/Images/sections/tracking/tracking_search.png';
import tracking_cool_chain from '../../Theme/Images/sections/tracking/tracking_cool_chain.png';
import tracking_qualification from '../../Theme/Images/sections/tracking/tracking_qualification.png';
import tracking_notifications from '../../Theme/Images/sections/tracking/tracking_notifications.png';
import tracking_shipping_proof from '../../Theme/Images/sections/tracking/tracking_shipping_proof.png';
import default_bg from '../../Theme/Images/sections/home/home_bg.jpg';

export default {
  screenGroups: {
    home: {
      name: 'Inicio',
      path: '',
      screens: {
        home: {
          name: 'Inicio',
          path: '/',
          mainSection: {
            title: 'Tu flota y conductores seguros y controlados',
            subtitle:
              'Disminuye robos y accidentes, entrega visibilidad y continuidad a tu operación con información de calidad y en tiempo real.',
            baitTitle: 'Tres soluciones, una plataforma',
            baitSubtitle:
              'Toda la información de tus vehículos en el mismo lugar, con cientos de funcionalidades desarrolladas específicamente para hacer tu operación más segura y eficiente.',
            bgImage: default_bg,
          },
          brandsSection: {
            title: 'Ellos confían en nosotros',
          },
          productsSection: {
            title: 'Tres soluciones, una plataforma',
            subtitle:
              'Toda la información de tus vehículos en el mismo lugar, con cientos de funcionalidades desarrolladas específicamente para hacer tu operación más segura y eficiente.',
            products: {
              security: {
                title: 'Seguridad',
                description:
                  'De los vehículos y la carga que transportan, como de los conductores, controlando su comportamiento en ruta.',
              },
              control: {
                title: 'Control y gestión',
                description:
                  'Información de calidad, estudiada y disponibilizada a medida para tomar mejores decisiones de forma oportuna.',
              },
              tracking: {
                title: 'Trazabilidad de entregas',
                description:
                  'Da visibilidad a tu operación y mejora la calidad del servicio de entregas. Mantén a tus clientes felices.',
              },
            },
          },
          howTheyWork: {
            title: 'Cómo te podemos ayudar',
            description:
              'Hardware -> Alertas en tiempo real -> Información de calidad -> Buenas decisiones -> Visibilidad y continuidad operacional',
            security: {
              name: 'Seguridad',
              title: 'Alertas en tiempo real: Reacciona a tiempo',
              description:
                'Disminuye robos y accidentes reaccionando a tiempo con alertas y seguimiento en línea. ¡Decide qué alertas recibir y cómo recibirlas! Anti-Jammers, Inmovilización y aperturas remotas, entre otras herramientas.',
            },
            control: {
              name: 'Control y gestión',
              title: 'Información de calidad: Mejores decisiones',
              description:
                'Generamos información de calidad y la entregamos en reportes consolidados y customizables para entender el comportamiento de la flota y conductores; y así tomar mejores decisiones.',
            },
            tracking: {
              name: 'Trazabilidad de entregas',
              title: 'Visibilidad de tu operación: Confianza de tus clientes',
              description:
                'Tú y tus clientes informados de forma transparente del estado de tus servicios, permite mejorar la calidad de tu sevicio de entregas.',
            },
            hardware: {
              name: 'Integración de Hardware',
              image: home_hardware,
              title: 'Y esto... ¿Cómo es posible?',
              description:
                'Mediante hardware especializado y sensores específicos, logramos una comunicación bidireccional entre los vehículos y la plataforma, que nos permite obtener información de calidad y en tiempo real, para reaccionar a tiempo y tomar buenas decisiones.',
            },
          },
          testimonials: {
            title: 'Lo que dicen de nosotros',
          },
          getStarted: {
            title: 'Toma el control de tus vehículos hoy',
          },
        },
      },
    },
    solutions: {
      name: 'Soluciones',
      screens: {
        security: {
          name: 'Inicio',
          path: 'seguridad',
          mainSection: {
            name: 'Seguridad',
            title: 'Alertas en tiempo real',
            subtitle:
              'Cada usuario define qué quiere que se le notifique y cómo, según sus preferencias: Correo electrónico, sms y notificaciones push a nuestra app.',
            bgImage: security_bg,
          },
          sections: [
            {
              id: 'secureRoute',
              icon: mdiAlarmLightOutline,
              image: security_secure_route,
              title: 'Ruta Segura',
              description:
                'Parametriza eventos y alertas, asigna gravedad y recibe tickets para ser gestionados. Visualiza la eficiencia de tus operadores al gestionar los tickets.',
            },
            {
              id: 'remoteBlocking',
              icon: mdiCarKey,
              image: security_immobilize,
              title: 'Inmovilización remota: Parada segura',
              description:
                'Inmoviliza con sólo un click tus vehículos de forma segura, ante cualquier situación de emergencia o de forma preventiva.',
            },
            {
              id: 'antiJammers',
              icon: mdiWifiLock,
              title: 'Anti-Jammers',
              description:
                'Ante la presencia de un inhibidor de señal GPS/GPRS/3G (Jammer), se inmoviliza el vehículo de forma local y se enciende sirena y baliza de forma disuasiva.',
            },
            {
              id: 'remoteContainerUnlock',
              icon: mdiTruckTrailer,
              image: security_cargo_compartment,
              title: 'Apertura remota de compartimentos de carga',
              description:
                'Controla la apertura de los compartimientos de carga de forma remota y reduce los robos efectivos hasta en un 92%.',
            },
            {
              id: 'panicButton',
              icon: mdiGestureTapButton,
              title: 'Botón de pánico',
              description:
                'Entérate al instante de cualquier situación de riesgo o emergencia a la que se vean expuestos tus conductores.',
            },
            {
              title: 'Protocolos de seguridad',
              description:
                'Establece condiciones y acciones locales para ejecutar en los vehículos,  de manera de dificultar posibles robos.',
              icon: mdiShieldCar,
              id: 'securityProtocols',
            },
            {
              title: 'Control de acceso de conductores',
              description:
                'Restringe la conducción de tus vehículos solo a los conductores autorizados y evitar usos indebidos o de personal no autorizado.',
              icon: mdiAccountKey,
              id: 'driversControlAccess',
            },
            {
              title: 'Tiempo Cercas',
              description:
                'Restringe el uso de tus vehículos en determinados horarios y evitar usos indebidos.',
              icon: mdiCalendarClock,
              id: 'fencesTime',
            },
            {
              title: 'Geocercas de acción automática',
              description:
                'Define acciones a ejecutarse cuando se entra o sale a tus geocercas de acción automática.  La plataforma actúa a tiempo cuando tu no puedes.',
              icon: mdiMapMarkerAlertOutline,
              id: 'automaticGeofences',
            },
            {
              title: 'Comportamientos bruscos',
              description:
                'Entérate de los conductores que conducen bruscamente y capacítalos para disminuir la probabilidad de accidentes y el consumo de combustible.',
              icon: mdiAccountAlertOutline,
              id: 'abruptBehavior',
            },
            {
              id: 'fatigueSensor',
              icon: mdiCommentAlertOutline,
              image: security_fatigue_sensor,
              title: 'Sensor de fatiga full integrado en plataforma',
              description:
                'Sensor de fatiga DS03 notifica a plataforma eventos de fatiga, cigarro, distracción y llamada, enviando imagen de respaldo.',
            },
            {
              title: 'Excesos de velocidad',
              description:
                'Configura excesos de velocidad generales y por geocercas. Además, notificamos excesos de velocidad por calles según regulación vigente. Configura buzzer sonoro en cabina para activarse en situaciones de exceso de velocidad y hasta restringe velocidades.',
              icon: mdiSpeedometer,
              id: 'speedExcess',
            },
            {
              title: 'Conducción sin cinturón de seguridad',
              description:
                'Entérate cuando los conductores conducen sin cinturón de seguridad y por cuánto tiempo. Capacítalos para una conducción más responsable y así disminuir accidentes graves.',
              icon: mdiSeatbelt,
              id: 'seatBelt',
            },
            {
              id: 'cabinCommunication',
              icon: mdiAccountVoice,
              image: security_cabin_communication,
              title: 'Comunicación directa con la cabina',
              description:
                'Llama a tu vehículo y entérate de lo que está ocurriendo en la cabina sin depender del celular del conductor.',
            },
          ],
        },
        control: {
          name: 'Inicio',
          path: 'control-y-gestion',
          mainSection: {
            name: 'Control y gestión',
            title: 'Monitoreo en línea de los vehículos',
            description:
              'Conoce la posición y estado exacto de los vehículos 24/7 desde nuestros paneles de monitoreo y aplicaciones móviles para iOS y Android. Que no se te escape ningún movimiento.',
          },
          sections: [
            {
              id: 'coldChain',
              icon: mdiThermometerAlert,
              image: control_cool_chain,
              title: 'Cadena de Frío',
              description:
                'Visualiza las temperaturas de los compartimentos de carga en tiempo real y recibe alertas cuando alguna temperatura salga del rango permitido, previamente parametrizado. Evita daños de tu carga y cumple a tu cliente, apoyándote en nuestra reportabilidad para los procesos de auditorías.',
            },
            {
              id: 'geofences',
              icon: mdiVectorSquare,
              image: control_geofences_routes,
              title: 'Geocercas y Rutas',
              description:
                'Define las georreferencias importantes para tu operación y determina ingresos, salidas y permanencias para conocer con mejor precisión el comportamiento de tus conductores y clientes. Planifica conociendo tiempos más exactos utilizando información real',
            },
            {
              id: 'onlineHistory',
              icon: mdiMapMarkerPath,
              image: control_online_history,
              title: 'Historial Online',
              description:
                'Visualiza una película del recorrido y comportamiento de tus vehículos, exportable a Excel y KML para entender hechos históricos y dar respuesta a tu seguro en caso de requerir. Todo evento registrado con lugar exacto, fecha y hora.',
            },
            {
              id: 'fuelControl',
              icon: mdiChartBox,
              image: control_fuel,
              title: 'Control de Combustible',
              description:
                'Mediante dispositivo CANBUS, nos conectamos al computador a bordo y extraemos información valiosa del nivel de combustible, entendiendo consumos y comportamientos anómalos.',
            },
            {
              id: 'driversManagement',
              icon: mdiAccountPlus,
              title: 'Gestión de conductores',
              image: control_drivers,
              description:
                'Agrega, edita y elimina conductores de tu empresa a la plataforma, con toda la información relevante de cada uno. Entérate de los vencimientos de licencias de conducir y comunícate directamente con ellos mediante nuestra app Drivetech Drivers.',
            },
            {
              id: 'driverIdentification',
              icon: mdiClipboardAccount,
              title: 'Identificación de conductor',
              description:
                'Mediando lectores RFID, iButton y hardware propio utilizando bluetooth y nuestra app para conductores, identifica quién conduce cada vehículo y quién conducía en momentos pasados. Todo claro, todo en orden.',
            },
            {
              id: 'maintenanceModule',
              icon: mdiTools,
              image: control_maintenance,
              title: 'Módulo de Mantenimiento',
              description:
                'Controla y gestiona eficientemente los mantenimientos de tus vehículos y sus respectivos costos, ya sean de forma preventiva o correctiva. Recibe notificaciones cuando los vehículos están próximos a requerir mantenimiento y conoce en todo momento cuáles ya tiene su mantenimiento expirado. Un vehículo con sus mantenimientos al día disminuye la probabilidad de fallas, la huella de carbono, la probabilidad de accidentes y el costo en reparaciones. Contribuye a tu continuidad operacional y evita costos innecesarios.',
            },
            {
              id: 'reports',
              icon: mdiFileChart,
              title: 'Reportes On-Demand',
              description:
                'Nuestro módulo de reportes on-demand permite conocer kilómetros recorridos, horas de utilización, tiempos y costo aproximado por ralentí, trazabilidad de cadena de frío, permanencias en geocercas, sobre permanencias, salidas de rutas, estadísticas de velocidad, entre otros en períodos determinados, de la flota completa, grupo o vehículo en particular.',
            },
            {
              id: 'periodicalReports',
              icon: mdiFileClock,
              title: 'Reportes Periódicos',
              description:
                'Define los reportes que te gustaría recibir periódicamente en tu correo electrónico y evita perder tiempo entrando todos los días a consultar el mismo reporte. Ayudamos a que tu trabajo sea más eficiente.',
            },
            {
              id: 'users',
              icon: mdiAccountSettings,
              image: control_users,
              title: 'Usuarios y Permisos de usuarios',
              description:
                'Agrega todos los usuarios necesarios para tu operación y define exactamente qué quieres que puedan ver y hacer en la plataforma. Define roles de usuarios para que la gestión de ellos en la plataforma sea más fácil.',
            },
          ],
        },
        tracking: {
          name: 'Trazabilidad de entregas',
          path: 'trazabilidad-de-entregas',
          mainSection: {
            name: 'Trazabilidad de entregas',
            title: 'Seguimiento en línea',
            subtitle:
              'Visualiza en línea el estado y detalle de cada una de tus entregas o servicios en terreno y da visibilidad a tu operación.',
            bgImage: tracking_bg,
          },
          sections: [
            {
              id: 'onlineSearch',
              icon: mdiMagnify,
              image: tracking_search,
              title: 'Buscador en línea',
              description:
                'Permite a tus clientes consultar el estado de su pedido demostrando la transparencia con la que operas.',
            },
            {
              id: 'notifications',
              icon: mdiBellRing,
              image: tracking_notifications,
              title: 'Notificaciones a clientes',
              description:
                'Tus clientes conocen para cuando es planificada una entrega o servicio, confirmación el día estipulado, hora estimada de llegada y detalles de la entrega.',
            },
            {
              id: 'deliveryTesting',
              icon: mdiThumbUp,
              title: 'Prueba de entrega',
              image: tracking_shipping_proof,
              description:
                'Configura las características de tus entregas y registra información valiosa y detallada de cada una de ellas. Recopila información del receptor, firma y fotos que validen la entrega y satisfacción del cliente.',
            },
            {
              id: 'clientRating ',
              icon: mdiStar,
              image: tracking_qualification,
              title: 'Calificaciones de clientes',
              description:
                'Tus clientes pueden calificar cada una de tus entregas o servicios para que puedas reconocer falencias y mejorar cada vez más.',
            },
            {
              id: 'coldChain',
              icon: mdiThermometerAlert,
              image: tracking_cool_chain,
              title: 'Plus: Cadena de frío',
              description:
                'Nuestro sistema permite visualizar en todo momento la temperatura de la carga y así generar una trazabilidad de entregas con su respectiva cadena de frío.',
            },
          ],
        },
      },
    },
    us: {
      name: 'Nosotros',
      screens: {
        team: {
          name: 'Equipo',
          path: 'equipo',
          mainSection: {
            name: 'Control y gestión',
            title:
              'Tu flota segura y controlada, para una operación transparente, eficiente y confiable',
            subtitle:
              'A través del desarrollo de software y la integración de hardware, creamos soluciones  eficaces y flexibles, con el objetivo de disminuir los robos y contribuir con la continuidad y eficiencia operacional de nuestros clientes.',
          },
        },
        workWithUs: {
          name: 'Trabaja con nosotros',
          path: 'trabaja-con-nosotros',
          mainSection: {
            name: 'Trabaja con nosotros',
            title: 'Actualmente no tenemos ofertas disponibles',
            subtitle: '¿Puedes ayudarnos en algo? Escríbenos a',
            bgImage: default_bg,
          },
        },
      },
    },
    login: {
      name: '404',
      title: 'Ups! La página que buscas no existe',
    },
    notFound: {
      name: '404',
      title: 'Ups! La página que buscas no existe',
      bgImage: default_bg,
    },
    legal: {
      name: 'Legal',
      screens: {
        terms: {
          name: 'Términos y condiciones',
          title: 'Términos y condiciones',
          path: 'terminos-y-condiciones',
          contents: [
            {
              body:
                'Nuestros términos y condiciones (en adelante los “Términos y Condiciones”), actualizados el 13 de noviembre de 2020, han sido preparados por Drivetech SpA (en adelante la “Compañía”) para el uso de sus herramientas y softwares de seguridad, control y gestión de flotas y trazabilidad de entregas (en adelante los “Productos”).',
            },
            {
              body:
                'Al acceder, usar o registrarse para una cuenta de usuario (en adelante una “Cuenta”), usted reconoce que ha leído y aceptado estos Términos y Condiciones en su totalidad y sin modificaciones. ',
            },
            {
              body:
                'Los presentes Términos y Condiciones rigen todo uso del sitio web de la Compañía https://www.drivetech.pro/ (en adelante el “Sitio”) y todo el contenido, servicios y productos disponibles en el sitio web, las aplicaciones de iOS y Android, incluyendo los Productos (en adelante todo lo anterior “Drivetech”).',
            },
            {
              body:
                'Estos Términos y Condiciones sirven como un contrato vinculante entre el usuario y Drivetech con respecto al uso de Drivetech. Además, acepta estar sujeto a la Política de Privacidad de la Compañía, a la que se puede acceder en https://drivetech.pro/privacy-policy/.              ',
            },
            {
              body:
                'Tal como se utiliza en estos Términos y Condiciones, las palabras "usted" y "su" se refieren a usted personalmente o, si accede a Drivetech en nombre de una persona jurídica o entidad, a esa persona jurídica o entidad. La Compañía se reserva el derecho de revisar estos Términos y Condiciones en cualquier momento mediante la actualización de este documento. Tras dicha actualización, se le alertará sobre el cambio mediante una notificación dentro de Drivetech. Al continuar usando Drivetech después de dicha notificación, usted acepta estar sujeto a la versión más reciente de los Términos y Condiciones.‍',
            },
            {
              title: 'Uso de Drivetech',
              body:
                'Sujeto a su cumplimiento de estos Términos y Condiciones y al mantenimiento de una Cuenta de usuario, la Compañía le otorga una licencia limitada, no exclusiva, no sublicenciable, revocable y limitada para usar Drivetech. Usted reconoce que la Compañía mantiene todos los derechos, títulos e intereses en y para Drivetech, así como todas las patentes, derechos de autor, marcas registradas, secretos comerciales, ideas, información técnica, interfaces de usuario, diseños, códigos fuente y procesos (en adelante colectivamente la "Propiedad Intelectual").',
              list: {
                type: '1',
                points: [
                  {
                    body:
                      'Para utilizar Drivetech, debe ser mayor de 18 años de edad, lo que usted declara personalmente en este acto.',
                  },
                  {
                    body:
                      'Si accede a Drivetech en nombre de una empresa o entidad, usted declara personalmente que tiene la autoridad y poder de representación necesarios para obligar a dicha empresa o entidad a estos Términos y Condiciones.',
                  },
                  {
                    body:
                      'Drivetech está sujeto a cambios en cualquier momento. Además, podemos dejar de proporcionar los servicios de Drivetech en cualquier momento. Podemos restringir su acceso a Drivetech en cualquier momento sin previo aviso y por cualquier motivo, incluidos, entre otros, los siguientes:',
                    list: {
                      type: 'a',
                      points: [
                        {
                          body:
                            'Violación o incumplimiento de estos Términos y Condiciones;',
                        },
                        {
                          body:
                            'Actividad que podría considerarse ilegal en cualquier jurisdicción;',
                        },
                        {
                          body:
                            'Mal uso de la Propiedad Intelectual o la violación de los derechos de un tercero;',
                        },
                        {
                          body:
                            'mal uso o interrupción de los servidores o redes de Drivetech.',
                        },
                      ],
                    },
                  },
                  {
                    body: 'Usted declara, garantiza y se compromete a:',
                    list: {
                      type: 'a',
                      points: [
                        {
                          body:
                            'No interferir con la seguridad o las redes de Drivetech ni interceptar ningún dato enviado o recibido por Drivetech',
                        },
                        {
                          body:
                            'no decodificar, rastrear, realizar ingeniería inversa, deconstruir ni volver a crear el código fuente de Drivetech;',
                        },
                        {
                          body:
                            'no sublicenciar, alquilar, arrendar, prestar, poner a disposición, transferir, asignar, vender, reproducir, adaptar, traducir, divulgar, mostrar, publicar, explotar, modificar o distribuir Drivetech, su Propiedad Intelectual o cualquier producto derivado de Drivetech;',
                        },
                        {
                          body:
                            'no violar ninguna ley, regla o reglamento que se pudiera infringir mediante la utilización de Drivetech;',
                        },
                        {
                          body:
                            'no utilizar Drivetech para hostigar, intimidar o violar los derechos de terceros;',
                        },
                        {
                          body:
                            'no acceder a Drivetech para realizar investigaciones con el fin de crear o ayudar en la creación de cualquier producto o servicio de la competencia;',
                        },
                        {
                          body:
                            'obtener, a su cargo, todo el software, hardware, equipo, licencias, autorizaciones y permisos necesarios para usar Drivetech;',
                        },
                        {
                          body:
                            'enviar sólo información veraz, precisa y completa a Drivetech;',
                        },
                        {
                          body:
                            'cumplir con los Términos y Condiciones de servicio (y todos los acuerdos relacionados) de software y scripts de terceros utilizados en Drivetech;',
                        },
                      ],
                    },
                  },
                ],
              },
            },
            {
              title: 'Cuenta de usuario y Suscripción',
              list: {
                type: 'ol',
                points: [
                  {
                    body:
                      'Drivetech requiere que los usuarios se registren mediante la creación de cuentas (en adelante cada una de éstas una "Cuenta de Usuario" y su titular un “Usuario”) para acceder a todas las funciones. Las Cuentas de Usuario no se pueden compartir, salvo lo dispuesto en las instrucciones de registro de la Cuenta de Usuario en Drivetech. Usted acepta mantener la confidencialidad de la información de inicio de sesión de su Cuenta de Usuario y no compartirla con ninguna otra persona que no sea la permitida expresamente.',
                  },
                  {
                    body:
                      'Puede cancelar su Cuenta de usuario en cualquier momento siguiendo las instrucciones en Drivetech. La Compañía puede cancelar su Suscripción de cuenta de usuario en cualquier momento y sin previo aviso de conformidad con estos Términos y Condiciones.',
                  },
                  {
                    body:
                      'La Compañía se reserva el derecho de negarse a proporcionar una Cuenta de Usuario o Suscripción a cualquier persona por cualquier motivo y sin justificación de causa.',
                  },
                  {
                    body:
                      'Una vez que Usted o la Compañía cierren su Cuenta de Usuario, la Compañía podrá eliminar permanentemente su Cuenta de Usuario y todos los datos asociados a ella. Si no inicia sesión en su Cuenta de Usuario durante 12 meses o más, podemos tratar su Cuenta de Usuario como "inactiva" y eliminar permanentemente la cuenta y todos los datos asociados con ella. Para cerrar su Cuenta de Usuario, envíenos un correo electrónico a soporte@drivetech.pro.',
                  },
                ],
              },
            },
            {
              title: 'Seguridad e Inmovilización remota de vehículos',
              list: {
                type: 'ol',
                points: [
                  {
                    body:
                      'Drivetech permite hacer seguimiento en línea de los vehículos e inmovilizarlos en caso de robo o emergencias. Bajo ninguna circunstancia Drivetech hace el rol de aseguradora, por lo que no responde de ninguna de las maneras que haría una aseguradora por los daños o robo que pueda sufrir algún vehículo del cliente.',
                  },
                  {
                    body:
                      'El servicio está supeditado a la calidad y cobertura de la señal GPRS o señal de telefonía celular y la señal satelital GPS. Drivetech no se responsabiliza por fallas o caídas de sistema producto de una baja o nula señal GPRS o GPS. La calidad y cobertura de la señal GPRS está en directa función de las operadoras de telefonía, mientras que la señal GPS depende de la cobertura de los satélites de esta red.',
                  },
                  {
                    body:
                      'El uso del sistema Drivetech no genera responsabilidad alguna por parte de Drivetech. Sólo el usuario es responsable del uso adecuado y prudente de los diferentes protocolos de emergencia, como por ejemplo el apagado del vehículo a distancia.',
                  },
                ],
              },
            },
            {
              title: 'Propiedad Intelectual',
              list: {
                type: 'ol',
                points: [
                  {
                    body:
                      'El Sitio, los Productos de Drivetech y su contenido, características y funcionalidad originales son propiedad de la Compañía y están protegidos por propiedad intelectual y derechos de autor internacionales, marcas registradas, patentes, secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad.',
                  },
                  {
                    body:
                      'Usted reconoce que la Propiedad intelectual utilizada dentro o en conexión con Drivetech es propiedad de la Compañía o sus respectivos terceros licenciantes. Al usar Drivetech no se le ha ofrecido ninguna licencia, cesión, arrendamiento o venta de propiedad intelectual. Usted acepta no utilizar la Propiedad Intelectual asociada a Drivetech, o derivados de la misma, incluido el nombre "Drivetech" o el logotipo de Drivetech para cualquier otro propósito que no sea el expresamente permitido por estos Términos y Condiciones. La Compañía se reserva todos los derechos sobre la Propiedad Intelectual.',
                  },
                  {
                    body:
                      'Durante el uso de Drivetech, puede cargar datos, información de ubicación, texto, fotografías, videos u otra información a Driivetech (en adelante conjuntamente el "Contenido de Usuario"). Usted es el único responsable de cualquier Contenido de Usuario que publique.',
                  },
                  {
                    body:
                      'Al aceptar los presentes Términos y Condiciones, otorga a Drivetech una licencia irrevocable, mundial, no exclusiva, libre de regalías para usar, reproducir, mostrar, distribuir y sublicenciar su Contenido de Usuario o sus derivados con el fin de proporcionar o mejorar Drivetech o los servicios de Drivetech. La Compañía no tiene la obligación de pagar por el Contenido del Usuario.',
                  },
                ],
              },
            },
            {
              title: 'Limitación de daños e indemnización',
              list: {
                type: 'ol',
                points: [
                  {
                    body:
                      'Nuestras Herramientas, productos y servicios y todo el contenido incluido se proporcionan "tal cual" sin garantía de ningún tipo, ya sea expresa o implícita. La Compañía no asumirá ninguna responsabilidad por el contenido generado por usted o que cualquier otro usuario o tercero publique o transmita utilizando Drivetech. ',
                  },
                  {
                    body:
                      'Drivetech no se hace responsable por la pérdida que pudiera surgir por basarse en información o materiales publicados en Drivetech, o de aquel contenido que sea o pueda ser proporcionada por sus filiales o un tercero, incluso en relación con cualquier imprecisión u omisión en el Sitio y Herramientas de Drivetech.',
                  },
                  {
                    body:
                      'En la medida que la ley lo permita, en ningún caso la Compañía o sus accionistas, directores, funcionarios, empleados o afiliados (en adelante conjuntamente las "Personas Relacionadas") serán responsables ante usted o cualquier tercero por los daños directos, indirectos, especiales, consecuenciales, incidentales, punitivos (incluyendo lucro cesante y daño moral), incluso, entre otros, los que resulten de la pérdida de ganancias, ingresos o ahorros, pérdida o daño de los datos o interrupción del negocio a causa del uso o la incapacidad de uso de Drivetech, sus Herramientas o de cualquier material, información, producto o servicio al que se acceda por medio de este Sitio. Aún en caso de haber sido advertido sobre la posibilidad de ocurrencia de tales daños.',
                  },
                  {
                    body:
                      'Sin limitar la generalidad de lo anterior, en ningún caso la responsabilidad total de la Compañía hacia usted excederá la suma total de sus pagos a la Compañía durante los 12 meses inmediatamente anteriores a cualquier reclamo. Usted acepta usar Drivetech bajo su propio riesgo.',
                  },
                  {
                    body:
                      'La Compañía hace esfuerzos comercialmente razonables para hacer que Drivetech esté disponible con la mayor cantidad de tiempo de actividad posible (Uptime). Sin embargo, la Compañía no se hace responsable de las interrupciones, demoras o detenciones en la disponibilidad de cualquier Herramienta de Drivetech.',
                  },
                  {
                    body:
                      'Usted acepta indemnizar y mantener a la Compañía, sus subsidiarias, sociedad matriz y filiales, y sus propietarios, funcionarios, agentes, socios y empleados, indemnes ante cualquier pérdida, responsabilidad o reclamo, realizado por un tercero debido a su incumplimiento o incumplimiento de estos Términos y Condiciones, su uso de Drivetech y su violación de cualquier estatuto, reglamento, ordenanza, código o acuerdo.',
                  },
                ],
              },
            },
            {
              title: 'Resolución de disputas',
              list: {
                type: 'ol',
                points: [
                  {
                    body:
                      'Cualquier controversia o reclamo que surja de o se relacione con estos Términos y Condiciones, o el incumplimiento de éstos, se resolverán mediante arbitraje, de acuerdo con el Reglamento de Arbitraje Comercial del Centro de Arbitraje y Mediación de la Cámara de Comercio de Santiago, vigente al momento de su inicio. Las Partes de común acuerdo designarán a un árbitro arbitrador en cuanto al procedimiento, y de derecho en cuanto al fallo. La sede del arbitraje será Santiago de Chile y el arbitraje se realizará en idioma español. La ley aplicable al contrato será la ley sustantiva de Chile. En contra de las resoluciones del árbitro no procederá recurso alguno, excepto el de apelación y de casación. ',
                  },
                  {
                    body:
                      'Sin perjuicio de los términos de esta Sección, cada parte se reserva el derecho de entablar una acción individual para buscar medidas cautelares o de otro tipo en un tribunal de jurisdicción competente en relación con la infracción de la Propiedad Intelectual.',
                  },
                ],
              },
            },
            {
              title: 'Términos adicionales',
              list: {
                type: 'ol',
                points: [
                  {
                    body:
                      'Estos Términos y Condiciones, junto con la Política de Privacidad incorporada aquí como referencia, comprenden el acuerdo completo entre usted y la Compañía con respecto al uso de Drivetech y cualquier servicio de la Compañía. Si alguna disposición de estos Términos y Condiciones se considera inválida por una Ley y resolución de autoridad, el resto de estos Términos y Condiciones continuará en pleno vigor y efecto en la medida máxima permitida por la ley. ',
                  },
                  {
                    body:
                      'Estos Términos y Condiciones, junto con la Política de Privacidad incorporada aquí como referencia, pueden ser reemplazados de forma particular y única con cada cliente, mediante una relación contractual única entre la Compañia y el cliente.',
                  },
                  {
                    body:
                      'Ni el incumplimiento, ni el ejercicio único o parcial, ni el retraso de cualquiera de las partes en el ejercicio de cualquier derecho, poder o privilegio bajo estos Términos y Condiciones implicará renuncia alguna a dicho derecho, poder o privilegio, ni impedirá el ejercicio de cualquier otro derecho en virtud de los presentes Términos y Condiciones.',
                  },
                  {
                    body:
                      'Usted no puede ceder a un tercero los derechos y/u obligaciones que le otorgan o imponen estos Términos y Condiciones sin el permiso expreso por escrito de la Compañía. La Compañía puede ceder a un tercero cualquier derecho u obligación que exista entre la Compañía y usted en el caso de una fusión, venta o reorganización de la Compañía o sus activos.',
                  },
                  {
                    body:
                      'Puede contactarnos por correo electrónico a contacto@drivetech.pro.',
                  },
                ],
              },
            },
          ],
        },
        privacy: {
          name: 'Política de privacidad',
          title: 'Política de privacidad',
          path: 'privacy-policy',
          contents: [
            {
              body:
                'Nuestra política de privacidad (en adelante la “Política de Privacidad”), actualizada el 13 de noviembre de 2020, ha sido preparada por Drivetech SpA (en adelante la “Compañía”) y rige las condiciones de privacidad de nuestro sitio web, ubicado en drivetech.pro, y las herramientas que proporciona a usted (el "Sitio Web", las “Aplicaciones Móviles” o el “servicio"); y explica las formas en que la Compañía recopila, almacena y utiliza su información personal (en adelante la "Información Personal").',
            },
            {
              body:
                'Al usar el servicio de cualquier manera, usted acepta los términos de esta Política de Privacidad. Las palabras "usted" y "su" se refieren a usted personalmente o, si accede a Drivetech en nombre de una empresa o entidad, a esa empresa o entidad.',
            },
            {
              title: 'Información Recopilada',
              body:
                'La Compañía recopila información relacionada con su uso de Drivetech. Específicamente, podemos recopilar la siguiente información personal:',
              list: {
                type: '1',
                points: [
                  {
                    body:
                      'Información que utiliza para registrar una cuenta de usuario. Esto incluye su dirección de correo electrónico y puede incluir su nombre, número de teléfono móvil, fecha de nacimiento y domicilio particular. Estos últimos son opcionales.',
                  },
                  {
                    body:
                      'Información sobre su dispositivo móvil o computadora si accede al servicio. Esto incluye su dirección IP, información de la página de referencia, geolocalización e información de actividad del sitio. Esta información se puede recopilar a través de cookies, faros web o mapas de calor.',
                  },
                  {
                    body:
                      'Información que envía a Drivetech para almacenar y administrar desde el servicio.',
                  },
                  {
                    body:
                      'Información que envía a Drivetech para planificar entregas o recibir servicios.',
                  },
                  {
                    body:
                      'Información GPS de dispositivos instalados en los vehículos conectados a Drivetech.',
                  },
                  {
                    body:
                      'Información GPS de aplicación móvil Drivetech Drivers.',
                  },
                  {
                    body:
                      'Información que envía para usar cuando se contacta con la Compañía para solicitar asistencia técnica o al cliente.',
                  },
                  {
                    body:
                      'Drivetech se reserva el derecho de eliminar, en forma unilateral, el contenido del usuario que no se ajuste a los Términos y Condiciones, o a su Política de Privacidad. ',
                  },
                ],
              },
            },
            {
              title: 'Privacidad de menores de 18 años',
              body:
                'Drivetech no almacena ni recopila información personal de personas menores de 18 años. Si usted es un padre o tutor y son conscientes de que su hijo/a nos ha proporcionado datos personales, póngase en contacto con nosotros en contacto@drivetech.pro. Si nos damos cuenta de que hemos recopilado los datos personales de menores de 18 años sin la verificación de la autorización de los padres, tomamos las medidas necesarias para eliminar dicha información de nuestros servidores.',
            },
            {
              title: 'Forma de utilización de la Información',
              body:
                'La Compañía utiliza la información principalmente para proporcionar los servicios de Drivetech de la mejor forma posible y mejorar nuestros productos y servicios. Específicamente, podemos usar su información personal para:',
              list: {
                type: '1',
                points: [
                  {
                    body:
                      'Proporcionar servicios de seguridad, control y gestión de flotas y trazabilidad de entregas; y los otros servicios ofrecidos por Drivetech o la Compañía.',
                  },
                  {
                    body:
                      'Proporcionar soporte técnico y al cliente según lo solicite.                ',
                  },
                  {
                    body:
                      'Enviarle correos electrónicos o mensajes de texto ocasionales con información importante de la Compañía, Drivetech o los vehículos. También podemos enviarle reportes periódicos por correo electrónico, que puede cancelar.',
                  },
                  {
                    body: 'Optimizar Drivetech y analizar nuestro servicio.',
                  },
                  {
                    body:
                      'Hacer cumplir nuestros Términos de servicio y Política de Privacidad.',
                  },
                  {
                    body:
                      'Cumplir con las solicitudes y requisitos legales aplicables a la Compañía o Drivetech.',
                  },
                  {
                    body:
                      'Realizar estudios con fines académicos, de investigación o marketing, utilizando su información personal de manera agregada, sin compartir ni revelar información de identificación personal del usuario.',
                  },
                ],
              },
            },
            {
              title: 'Seguridad de la Información',
              body:
                'La seguridad de sus datos es importante para nosotros. Utilizamos tecnología de encriptación para cierta información personal y utilizamos otras salvaguardas. Sin embargo, ningún método de transmisión a través de Internet, o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger sus datos personales, no podemos garantizar su seguridad absoluta. Cualquier información personal que transmita a la Compañía se transmite únicamente bajo su propio riesgo.',
            },
            {
              title: 'Cookies',
              body:
                'Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador. Al aceptar, dicho fichero es creado y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas los sitios pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.              ',
            },
            {
              body:
                'Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y luego la información es eliminada de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.',
            },
            {
              title: 'Enlaces a Terceros',
              body:
                'Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Si hace clic en estos enlaces y abandona nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual le recomendamos que los consulte para confirmar que usted está de acuerdo con estas.',
            },
            {
              title: 'Transferencias de información',
              body:
                'Su información, incluyendo datos personales, puede ser transferida y almacenada en equipos que se encuentran fuera de su estado, provincia, país u otra jurisdicción gubernamental, donde las leyes de protección de datos pueden ser diferentes a las de su jurisdicción.',
            },
            {
              body:
                'Tomaremos todas las medidas razonablemente necesarias para garantizar que sus datos sean tratados de forma segura y de acuerdo con esta Política de Privacidad; y no existirá transferencia de sus datos personales a una organización o a un país a menos que existan controles adecuados en el lugar, incluyendo la seguridad de sus datos y otra información personal.',
            },
            {
              body:
                'Su consentimiento a esta política de privacidad, seguido de su presentación de dicha información representa la aceptación de la transferencia.',
            },
            {
              title: 'Cambios en esta Política de Privacidad',
              body:
                'La Compañía se reserva el derecho de revisar esta Política de Privacidad en cualquier momento mediante la actualización de este documento. Tras dicha actualización, se le alertará sobre el cambio mediante correo electrónico y/o un aviso prominente en nuestro servicio. Al continuar usando Drivetech después de dicha notificación, usted acepta estar sujeto a la versión más reciente de la Política de Privacidad.',
            },
            {
              title: 'Legislación Aplicable',
              body:
                'Esta Política de Privacidad se rige por las leyes de Chile. La información personal que se transmite a la Compañía está sujeta a estas leyes en lugar de las leyes de su país de origen.',
            },
            {
              title: 'Contacto',
              body:
                'Si tiene alguna pregunta sobre esta Política de Privacidad, póngase en contacto con nosotros en contacto@drivetech.pro.',
            },
          ],
        },
      },
    },
  },

  buttons: {
    freeDemo: 'Prueba gratis',
    viewMore: 'Ver más',
    knowMore: 'Saber más',
    login: 'Iniciar sesión',
    security: 'Seguridad',
    control: 'Control y gestión',
    tracking: 'Trazabilidad',
    companyName: 'Drivetech',
    // hardware: 'Hardware',
    contact: 'contacto@drivetech.pro',
  },
};
