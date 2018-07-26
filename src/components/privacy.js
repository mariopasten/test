import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import {connect} from "react-redux";
import ListItem from '@material-ui/core/ListItem';
import {Link} from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Icon from '@material-ui/core/Icon';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const drawerWidth = 240;

const styles = theme => ({
    navContainer: {
        width: '50%',
        marginLeft: '10%',
        marginRight: '40%',
        position: 'relative',
        paddingTop: 100,
    },
    text: {
        color: '#4A4A4A',
    },
    descriptionText: {
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 20,
    },

});

class Privacy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            left: false,
            anchorEl: null,
            userMenu: null,
        };
    }



    render() {
        const {classes} = this.props;
        return (
            <div className={classes.navContainer}>
                <Typography className={classes.title} variant="display2" gutterBottom align='left'>
                    Aviso de Privacidad
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" align="left">
                    Estimado Cliente o Usuario:
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Conforme a lo previsto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (la “Ley”) y del Reglamento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (el “Reglamento”), y en cumplimiento de la obligación a cargo de Mayahii® (a través de la persona moral responsable de los datos personales) consistente en proteger los datos personales de sus clientes, afiliados y/o beneficiados de cualquiera de los productos, servicios o membresías, hacemos de tu conocimiento lo siguiente:
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    1. Contenido de los Datos Personales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    De acuerdo con la Ley, se entiende como “Datos Personales” cualquier información concerniente a una persona física identificada o identificable. Para efectos del presente Aviso de Privacidad, de manera enunciativa mas no limitativa, se entenderán como “Datos Personales”:
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    1.1. Datos generales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Nombre(s) y apellidos, fecha de nacimiento, sexo, estado civil, existencia o no de hijos, domicilio, teléfono fijo (de casa u oficina), teléfono celular, correo electrónico, entre otros datos similares concernientes a una persona.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    1.2. Revistas y transacciones en línea
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Cuando te suscribas a alguno de los productos o servicios de Mayahii (tales como membresías de academias, boletines electrónicos, entre otros) en cualquiera de nuestras plataformas (sitio web, equipos móviles como Android®, iPhone®, iPad®, BlackBerry®, o cualquier otro mecanismo, aparato o plataforma, como consolas de videojuegos, etc.), además de los datos generales, se considerarán Datos Personales los relacionados con tarjetas bancarias, tales como nombre del tarjetahabiente, número de tarjeta, fecha de vencimiento de la tarjeta, tipo de tarjeta y código de seguridad, en su caso el domicilio y cualquier otra información necesaria para la suscripción o transacción en línea.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Los Datos Personales referidos en este punto únicamente estarán sujetos a las Finalidades del Tratamiento establecidas más adelante en el presente Aviso de Privacidad.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    1.3. Redes sociales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Las redes sociales (tales como Facebook® y Twitter®, entre otras) constituyen una plataforma de comunicación y de interconexión entre plataformas digitales de los distintos usuarios, son ajenas a Mayahii y, por lo tanto, no se encuentran bajo su responsabilidad.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    La información que proporciones dentro de redes sociales en las que Mayahii participa como usuario, no constituye ni forma parte de los Datos Personales sujetos a la protección de este Aviso de Privacidad, siendo esta responsabilidad de la empresa prestadora de esa plataforma y de quien lo publica.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Los Datos Personales mencionados en los apartados 1.1. al 1.2. del presente Aviso de Privacidad serán recabados mediante el llenado de los formatos y/o mediante la recopilación de información o documentación requerida por Mayahii, vía electrónica en cualquiera de las páginas de internet de Mayahii (www.mayahii.com), así como páginas de internet presentes o futuras (“Páginas de internet de Mayahii”), o inclusive de manera personal, cuando así proceda.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Nota: La titularidad de los derechos sobre las páginas de internet puede corresponder a Mayahii S. de R. L. de C. V. o bien, a cualquier otra sociedad integrante del grupo de empresas conocido como “Mayahii”.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    1.4. Cookies
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Las cookies son archivos de texto que son descargados automáticamente y almacenados en un disco duro del equipo de cómputo del usuario al navegar en una determinada página de internet y que permiten al servidor de internet recordar algunos datos del usuario. Por medio de este Aviso de Privacidad te informamos que Mayahii utiliza ciertos cookies para facilitar tu navegación en sesiones posteriores.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    2. Persona responsable de recabar Datos Personales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    La persona moral responsable de recabar tus Datos Personales (en este acto, así como en actos pasados y/o futuros), es la persona moral denominada Mayahii, S. de R. L. de C. V. (“Mayahii”).
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Para efectos de lo establecido en la fracción I del artículo 16 de la Ley, se señala como domicilio de Mayahii, el ubicado en la Av. Javier Barros Sierra 495, Santa Fe, Zedec Sta Fé, 01219 Ciudad de México, CDMX
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    3. Tratamiento de tus Datos Personales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    El Tratamiento de Datos Personales por parte de Mayahii se limitará al cumplimiento de las Finalidades de Tratamiento previstas en el presente Aviso de Privacidad y se sujetará a lo siguiente:
                </Typography>
                <ol>
                    <li>
                        En caso que se pretenda tratar tus Datos Personales para un fin distinto a los fines del presente Aviso de Privacidad, Mayahii requerirá obtener tu consentimiento para tal fin, de nueva cuenta.
                    </li>
                    <li>
                        Será el que resulte necesario, adecuado y relevante para los fines descritos en este Aviso de Privacidad.
                    </li>
                </ol>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    4. Finalidades del tratamiento de Datos Personales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    A través del presente Aviso de Privacidad, Mayahii® declara que las finalidades del tratamiento de tus Datos Personales serán las siguientes (“Finalidades del Tratamiento”):
                </Typography>
                <ol>
                    <li>
                        Creación de cuenta, con el objeto de que tengas acceso a la plataforma de Mayahii, así como al material que ahí se ofrezca de tiempo en tiempo, sujeto a los términos y condiciones de dicho servicio.
                    </li>
                    <li>
                        Fines comerciales, con el objeto de darte a conocer la información comercial de Mayahii y sus aliados, entre la que se destaca la relacionada con trivias, promociones, concursos, información de nuevos productos, felicitaciones de cumpleaños, revista electrónica, cambios en nuestros productos, solicitar evaluación de la calidad en el servicio, realizar estudios internos sobre hábitos de consumo y cualquier otro promocional o cuestión relacionada con los productos y/o servicios que forman parte del concepto comercialmente conocido como Mayahii.
                    </li>
                    <li>
                        Cobro en línea de transacciones, con el fin de realizar los cargos a las tarjetas bancarias que se proporcionen en el proceso de suscripción, derivado de la renta del material y/o de la adquisición de productos o servicios de Mayahii.
                    </li>
                    <li>
                        Para la validación de información y para el trámite de autorizaciones y cargos bancarios necesarios para llevar a cabo el cobro en línea de transacciones, Mayahii podrá trasferir tus datos bancarios a las instituciones financieras, bancarias y/o terceros nacionales o extranjeros relacionados con dichos cargos, procesos y cobros en línea, ello con la única finalidad de llevar a cabo las mencionadas transacciones en línea.
                    </li>
                    <li>
                        Funcionamiento de la plataforma de Mayahii, para llevar a cabo las transacciones del material al que desees acceder y con ello dar cumplimiento a las obligaciones derivadas de dicha transacción, Mayahii utilizará tus datos personales y la información que nos proporciones para gestionar, mantener y direccionar a la plataforma en la que se encontrará el material sujeto de la transacción.
                    </li>
                    <li>
                        En relación con lo establecido en el párrafo anterior, Mayahii podrá transferir tus datos personales a terceros nacionales o extranjeros, única y exclusivamente, a efecto de que lleven a cabo las transacciones de los cursos y/o materiales que desees rentar o acceder, así como para gestionar, mantener y direccionar a la plataforma en la que se encontrará el material.
                    </li>
                    <li>
                        Entrega de productos y cumplimiento de obligaciones con nuestros clientes, en caso que te hagas acreedor a algún premio, derivado de las promociones, trivias o sorteos de Mayahii, o para cumplir con las obligaciones que en su caso tengamos o llegáramos a tener contigo, utilizaremos tus Datos Personales para contactarte o enviarte los productos.
                    </li>
                    <li>
                        En relación con lo anterior y en caso de que para contactarte, entregarte los productos o para dar cumplimiento a las obligaciones que tenemos o llegaremos a tener contigo llegaremos a requerir de los servicios de terceros nacionales o extranjeros que realicen las gestiones anteriores, Mayahii podrá llegar a trasferir tus datos personales a dichos terceros, ello con la única finalidad de realizar el mencionado contacto, la entrega de productos y el cumplimiento de obligaciones.
                    </li>
                    <li>
                        Fines estadísticos, la información recabada o derivada de las finalidades anteriores podrá ser utilizada por Mayahii con fines estadísticos, de control de usuarios, de investigación, análisis de marcados o de hábitos de consumo.  Mayahii podrá llegar a trasferir tus datos personales y estadísticos a dichos terceros con el fin de mostrar información y analítica de tu avance o aprovechamiento de los contenidos y materiales que te han sido asignados en la plataforma.
                    </li>
                </ol>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    5. Aceptación del tratamiento de Datos Personales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Para que Mayahii pueda llevar a cabo el Tratamiento de Datos Personales, nuestros clientes y/o titulares de Datos Personales deberán otorgarnos la aceptación expresa o tácita para dicho tratamiento, la cual se llevará por cualquiera de los siguientes medios:
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    5.1. Aceptación a través de medios electrónicos
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    a) Publicación en las páginas de internet de Mayahii
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Mayahii publicará en las Páginas de internet de Mayahii el presente Aviso de Privacidad, con el fin de que, una vez que te enteres de su contenido, otorgues o niegues tu consentimiento para que Mayahii pueda llevar a cabo el Tratamiento de tus Datos Personales.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Esto también procederá en caso que, por cualquier motivo, Mayahii no cuente con tu dirección de correo electrónico o cuando tus Datos Personales sean erróneos o estén en desuso y no nos permitan localizarte.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    b) Correo electrónico
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Con base en la información que nos proporciones o nos hayas proporcionado, Mayahii te hará llegar el presente Aviso de Privacidad mediante correo electrónico, cuando sea procedente, con el fin de que una vez que te hayas enterado de su contenido, nos otorgues o niegues tu consentimiento para que se pueda llevar a cabo el Tratamiento de tus Datos Personales.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    5.2. Aceptación o rechazo del Aviso de Privacidad por medios electrónicos
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    La aceptación o el rechazo del Aviso de Privacidad de Mayahii por medios electrónicos será efectuada de la siguiente manera:
                </Typography>
                <ol>
                    <li>
                        Mayahii pondrá a tu disposición (o, en su caso, te enviará a la dirección de correo electrónico que tenga registrada a tu nombre), la siguiente información:
                        <ul>
                            <li>
                                La manifestación de que existe un Aviso de Privacidad de Mayahii®, o las modificaciones o cambios que se realicen a dicho Aviso, en su caso.
                            </li>
                            <li>
                                El contenido del Aviso de Privacidad y en su caso, las actualizaciones o adecuaciones que se realicen al mismo.
                            </li>
                            <li>
                                Un vínculo electrónico mediante el cual puedas aceptar o no aceptar el Aviso o Privacidad, o los cambios que éste llegare a tener.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Una vez que hayas leído y estés enterado del contenido del Aviso de Privacidad, o bien, de los cambios que se le realicen, tendrás las siguientes opciones:
                    </li>
                    <ul>
                        <li>
                            Aceptar. Mediante tu aceptación otorgas consentimiento y autorización para que Mayahii pueda utilizar tus Datos Personales de acuerdo a las Finalidades del Tratamiento establecidas en el Aviso de Privacidad.
                        </li>
                        <li>
                            No aceptar. Cuando no aceptes el contenido del Aviso de Privacidad o sus modificaciones, niegas o cancelas tu consentimiento y autorización para que Mayahii utilice tus Datos Personales.
                        </li>
                        <li>
                            En este caso, Mayahii cancelará y dejará de usar tus Datos Personales para las Finalidades del Tratamiento establecidas en el Aviso de Privacidad, lo que puede implicar la cancelación del servicio que se te brinde, al ser tus datos necesarios para estos efectos.
                        </li>
                    </ul>
                </ol>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    5.3. Aceptación tácita
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Con base en lo establecido en el artículo 35 de la Ley, el contenido de este Aviso de Privacidad, así como cualquier modificación o adición al mismo te serán dadas a conocer por cualquiera de los medios establecidos en los apartados 5.1. y 5.2. que anteceden, y en caso que no manifiestes oposición al contenido y alcances de los mismos dentro de un periodo de 2 meses, contados a partir de la fecha en la que Mayahii ponga a tu disposición o te informe sobre el Aviso de Privacidad o sus modificaciones, se entenderá que otorgas tu consentimiento tácito para que efectúe el tratamiento de tus Datos Personales con base en las Finalidades del Tratamiento, establecidas en este Aviso de Privacidad.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    6. Limitación del uso o divulgación de tus Datos Personales
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    6.1. Acciones para prevenir el uso o divulgación no autorizada
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Con el fin de garantizar la protección de tus Datos Personales y limitar el uso o divulgación no autorizada de los mismos, Mayahii continuamente realiza y realizará las siguientes acciones:
                </Typography>
                <ol>
                    <li>
                        Confidencialidad de la información. Mayahii guardará confidencialidad respecto de tus Datos Personales recabados, misma que subsistirá aun después de finalizar sus relaciones comerciales o de otra naturaleza con el cliente o titular de dichos Datos Personales.
                    </li>
                    <li>
                        Notificación de confidencialidad. Mayahii puede proporcionar tus Datos Personales a terceros (en los términos previstos en la Ley, en el Reglamento o en el presente Aviso de Privacidad), para lo cual, notificará, contratará y/o convendrá con dichos terceros la obligación de cumplir con las disposiciones de la Ley, del Reglamento y de guardar la confidencialidad de tus Datos Personales.
                    </li>
                    <li>
                        Administración de bases de datos. Los Datos Personales son administrados y resguardados mediante el uso de bases de datos (“Base de Datos”), las cuales son administradas por las personas designadas por Mayahii y/o por terceros autorizados expresamente y por escrito, para tal efecto, sin que se permita su uso, consulta, manejo o acceso a personas no autorizadas.
                    </li>
                    <li>
                        Sistemas de cómputo e informáticos. Nuestras Bases de Datos están protegidas por firewalls, candados de navegación [DVV1] y sistemas de cómputo y/o informáticos enfocados a prevenir y evitar el que personas ajenas a Mayahii o no autorizadas puedan acceder a tus Datos Personales.
                    </li>
                </ol>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    6.2. Solicitudes para limitar el uso o divulgación
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    En caso que desees limitar el uso o divulgación de tus Datos Personales, en relación con una o varias de las Finalidades del Tratamiento de Datos Personales (como caso, por ejemplo, correos publicitarios, felicitaciones de cumpleaños, entrega de premios, entre otros), podrás enviar la solicitud respectiva conforme al procedimiento establecido en el apartado 7 del presente Aviso de Privacidad, o mediante el acceso a los vínculos que se cargan o llegaren a cargar en las páginas de internet de Mayahii o en la información promocional que te hacemos llegar.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    7. Derechos de acceso, rectificación, cancelación u oposición
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    De acuerdo a lo establecido en la Ley y en el Reglamento, tú tienes derecho al acceso, rectificación, cancelación u oposición al Tratamiento de tus Datos Personales, para lo cual Mayahii te ofrece el siguiente procedimiento:
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    7.1. Solicitud de acceso, rectificación, cancelación u oposición
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    En tu carácter de titular de Datos Personales, podrás presentar o enviar a Mayahii una solicitud para el acceso, rectificación, cancelación u oposición, respecto de tus Datos Personales.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Dicha solicitud deberá contener, por lo menos:
                </Typography>
                <ul>
                    <li>
                        Nombre completo y domicilio del titular de los Datos Personales, u otro medio para comunicarle la respuesta a su solicitud.
                    </li>
                    <li>
                        Documentos que acrediten la identidad o la representación legal del titular de los Datos Personales.
                    </li>
                    <li>
                        Descripción clara y precisa de los Datos Personales respecto de los que se busca ejercer alguno de los derechos antes mencionados.
                    </li>
                    <li>
                        Cualquier otro elemento o documento que facilite la localización de los Datos Personales.
                    </li>
                    <li>
                        Indicar de las modificaciones a realizarse y/o las limitaciones al uso de los Datos Personales, conforme a lo establecido en el apartado 6.2. del presente Aviso de Privacidad.
                    </li>
                    <li>
                        Aportar la documentación que sustente su petición.
                    </li>
                </ul>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    7.2. Resolución y comunicación
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Mayahii comunicará al titular de los Datos Personales la determinación adoptada, en un plazo no mayor a 20 días hábiles contados desde la fecha en que se recibió la solicitud. Este plazo podrá ser ampliado por Mayahii en una sola ocasión por un periodo igual, siempre y cuando así lo justifiquen las circunstancias del caso.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Con base en lo anterior, y de acuerdo con lo establecido en la Ley y en el Reglamento, Mayahii informará al titular de los Datos Personales el sentido y motivación de la resolución, por el mismo medio por el que se llevó a cabo la solicitud, y acompañará dicha resolución de las pruebas pertinentes, en su caso.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Cuando la solicitud sea procedente, se hará efectiva por Mayahii dentro de los 15 días hábiles siguientes a la comunicación de la resolución adoptada.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    El titular podrá presentar ante el Instituto Federal de Acceso a la Información (IFAI) una solicitud de protección de datos por la respuesta recibida o falta de respuesta de Mayahii. Dicha solicitud deberá presentarse por el titular dentro de los 15 días hábiles siguientes a la fecha en que se comunique la respuesta al titular por parte de Mayahii, y se sujetará a lo previsto en la Ley y en el Reglamento.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    En caso de solicitudes de acceso a Datos Personales, será necesario que el solicitante o su representante legal acrediten previamente su identidad.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    La obligación de acceso a la información se dará por cumplida cuando Mayahii ponga a disposición del titular los Datos Personales o mediante la expedición de copias simples o documentos electrónicos.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    En el supuesto en que una persona solicite a Mayahii el acceso a sus Datos Personales presumiendo que éste es el responsable y resultara que no lo es, bastará con que Mayahii así se lo indique al titular por cualquier medio, (de los establecidos en este apartado), para tener por desahogada la solicitud.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    La contestación a tu solicitud para acceso, rectificación, cancelación u oposición de los Datos Personales será gratuita. Deberás cubrir únicamente los gastos justificados de envío o el costo de reproducción en copias u otros formatos, los cuales, en su momento, te hará saber Mayahii.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    En caso que la misma persona reitere la solicitud de acceso, rectificación, cancelación u oposición de los Datos Personales en un periodo menor a 12 meses contado a partir de la fecha de la última solicitud, la contestación a tu solicitud podrá tener un costo adicional que señale Mayahii, de acuerdo con lo establecido en los artículos 35 y 93 de la Ley y del Reglamento, respectivamente.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    7.3. Negativa para acceder a Datos Personales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Mayahii podrá negar el acceso total o parcial a los Datos Personales o a la realización de la rectificación, cancelación u oposición al tratamiento de los mismos, en los siguientes supuestos:
                </Typography>
                <ul>
                    <li>
                        Cuando el solicitante no sea el titular o el representante legal no esté acreditado para ello.
                    </li>
                    <li>
                        Cuando en la Base de Datos de Mayahii no se encuentren los Datos Personales del solicitante.
                    </li>
                    <li>
                        Cuando se lesionen los derechos de un tercero.
                    </li>
                    <li>
                        Cuando exista impedimento legal o resolución de una autoridad.
                    </li>
                    <li>
                        Cuando la rectificación, cancelación u oposición haya sido previamente realizada, de manera que la solicitud carezca de materia.
                    </li>
                </ul>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    7.4. Consecuencias de la cancelación
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    La cancelación de Datos Personales dará lugar a un periodo de bloqueo tras el cual Mayahii procederá a la supresión de los datos correspondientes. Una vez cancelados los Datos Personales correspondientes, Mayahii dará aviso a su titular.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Hecho lo anterior, Mayahii podrá conservar los Datos Personales exclusivamente para efectos de las responsabilidades derivadas del tratamiento a que se refiere el Aviso de Publicidad.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Cuando los Datos Personales se hubiesen transmitido a terceros antes de la rectificación o cancelación y sean tratados por dichos terceros, Mayahii deberá hacer de su conocimiento la solicitud presentada por el titular, para que procedan a efectuar tales rectificaciones o cancelaciones.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Mayahii no estará obligado a cancelar tus Datos Personales cuando se trate de los supuestos establecidos en el artículo 26 de la Ley.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    8. Cambios al aviso de privacidad
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Mayahii se reserva el derecho de efectuar, en cualquier momento, modificaciones o actualizaciones al presente Aviso de Privacidad, para la atención de novedades legislativas o jurisprudenciales, políticas internas, nuevos requerimientos para la prestación u ofrecimiento de sus productos y servicios, o por prácticas comerciales.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Por lo anterior, en caso que Mayahii llegare a modificar el contenido del presente Aviso de Privacidad, lo hará de tu conocimiento mediante alguna de las formas y medios establecidos en el apartado 5. del presente Aviso.
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    El presente Aviso de Privacidad fue actualizado por última ocasión el 28 de Noviembre del 2017.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    9. Transferencia de Datos Personales
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Mayahii podrá transferir tus Datos Personales a alguno de sus proveedores, aliados o terceros nacionales o extranjeros con el fin de llevar a cabo las Finalidades del Tratamiento establecidas en el presente Aviso de Privacidad.  Si usted no manifiesta su oposición para que sus Datos Personales sean transferidos a terceros, se entenderá que ha otorgado a Mayahii su consentimiento para ello.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Consideraciones finales – Carácter informativo del presente documento
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    El contenido de este Aviso de Privacidad es de carácter meramente informativo, por lo que en caso de que desees expresar tu aceptación o rechazo al contenido del mismo, te invitamos a ingresar a las secciones de recopilación de Datos Personales establecidas en las Páginas de Internet de Mayahii, en donde podrás emitir dicha aceptación o rechazo tanto al contenido del presente Aviso de Privacidad como a la posible transferencia de tus Datos Personales, o en su caso, envíes la solicitud correspondiente al <a href="http://ayuda.mayahii.com/" target="_blank">Centro de Ayuda de Mayahii</a>.
                </Typography>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return ({});
}

export default withStyles(styles)(connect(mapStateToProps, {})(Privacy));
