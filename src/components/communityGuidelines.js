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
    descriptionText: {
        fontSize: 14,
        color: '#4A4A4A',
        marginBottom: 20,
    },
    navContainer: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        position: 'relative',
        paddingTop: 100,
    },
    text: {
        color: '#4A4A4A',
    },
    subTitle: {
        fontSize: 17,
        color: '#4A4A4A',
        marginBottom: 20,
    }
});

class AboutUs extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.navContainer}>
                <Typography className={classes.title} variant="display2" gutterBottom align='left'>
                    Lineamientos de la Comunidad Mayahii
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" align="left">
                    Aquí te mostramos algunas normas de sentido común que te ayudarán a evitar problemas. Tómalas muy en serio y tenlas presentes siempre. No busques brechas ni tecnicismos para evadirlas. Simplemente compréndelas y trata de respetar la intención con la que fueron diseñadas.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Imágenes de desnudos o contenido sexual
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Mayahii no admite pornografía ni contenido sexual explícito. Si tu video incluye este tipo de contenido, aunque la persona que aparece en el video seas tú, no lo publiques en Mayahii. Además, ten en cuenta que trabajamos estrechamente con las autoridades y denunciamos la explotación de menores.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Contenido perjudicial o peligroso
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    No publiques videos que inciten a otros, especialmente a los niños, a realizar acciones en las que pudieran resultar gravemente heridos. Es posible que los videos que muestren acciones peligrosas o dañinas estén sujetos a restricciones de edad o se los elimine de la plataforma, según la gravedad del caso.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Contenido de incitación al odio
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Nuestros productos son plataformas para la libertad de expresión, pero no apoyamos el contenido que promueva o consienta la violencia contra personas o grupos por motivos de raza, origen étnico, religión, discapacidad, género, edad, nacionalidad, condición de excombatiente de guerra, orientación sexual o identidad de género, ni cuyo fin principal sea incitar al odio por alguna de estas características. Existen algunas áreas grises, pero si el objetivo principal es atacar a un grupo protegido, el contenido no es aceptable.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Contenido violento o explícito
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    No es aceptable publicar contenido violento o sangriento cuyo propósito principal sea causar un efecto chocante, sensacionalista o insultante. Si publicas contenido gráfico en un contexto informativo o documental, no olvides brindar suficiente información para que los espectadores puedan entender la situación que se ve en el video. No motives a otros a cometer actos violentos específicos.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Acoso y hostigamiento virtual (bullying)
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    No es aceptable publicar comentarios ni videos abusivos en Mayahii. Si el acoso traspasa los límites y se convierte en un ataque malintencionado, se denunciará y se eliminarán los comentarios o videos. En otros casos, es posible que los usuarios simplemente sean molestos o mezquinos, y es mejor ignorarlos.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Spam, metadatos engañosos y trampas
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    A nadie le gusta el spam. No crees descripciones, etiquetas, miniaturas ni títulos engañosos con la intención de aumentar la cantidad de vistas. No es aceptable que publiques enormes cantidades de contenido repetitivo, sin valor o sin público específico. Esto también se aplica a los comentarios y los mensajes privados.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Amenazas
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Somos muy estrictos en cuanto al comportamiento agresivo, las amenazas, el hostigamiento, el acoso, la invasión de la privacidad, la revelación de información personal de terceros y la incitación a que otros cometan actos violentos o infrinjan las Condiciones de uso. Se bloqueará la cuenta de cualquier persona que cometa estos actos y no podrá usar Mayahii.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Derechos de autor
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Respeta los derechos de autor. Sube solo contenido creado por ti o que estés autorizado a usar. Esto significa que no debes subir videos que no hayas creado, ni usar contenido en tus videos cuyos derechos de autor pertenezcan a otra persona (como pistas de música o fragmentos de programas protegidos por derechos de autor); tampoco puedes usar videos creados por otros usuarios sin las autorizaciones necesarias. Visita nuestro Centro de derechos de autor para obtener .
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Privacidad
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Si alguien publicó tu información personal o subió un video en el que apareces sin tu consentimiento, puedes solicitar que se quite el contenido de conformidad con nuestros lineamientos de privacidad.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Robo de identidad
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Es posible que se quiten las cuentas que pretendan hacerse pasar por otro canal o persona, de conformidad con nuestra política de robo de identidad.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Menores en riesgo
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Obtén información para saber qué hacer si encuentras contenido inapropiado. Además, ten en cuenta que colaboramos estrechamente con las autoridades y denunciamos la explotación de menores.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Lenguaje vulgar
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Algunos tipos de lenguaje no son adecuados para los espectadores más jóvenes. El uso de un lenguaje sexualmente explícito o un exceso de obscenidades en el video o en los metadatos asociados puede provocar la restricción por edad de tu video.
                </Typography>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Política de cuentas inactivas
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    En general, se espera que los usuarios sean miembros activos dentro de la comunidad de Mayahii. Si se descubre que una cuenta está inactiva, esa cuenta puede ser recuperada por Mayahii. Se considera inactividad:
                </Typography>
                <ul>
                    <li>
                        No iniciar sesión en el sitio durante al menos seis meses
                    </li>
                    <li>
                        Nunca haber subido un contenido de video
                    </li>
                    <li>
                        No participar activamente en mirar o comentar videos o canales
                    </li>
                </ul>
                <Typography className={classes.text} variant="display1" gutterBottom>
                    Fomentar las infracciones a las Condiciones del servicio
                </Typography>
                <Typography className={classes.descriptionText} variant="headline" gutterBottom align="left">
                    Si publicas contenido que aliente a los otros usuarios a infringir nuestras Condiciones del servicio, puede que se elimine el contenido, que se penalice tu cuenta y, en algunos casos, que se cancele tu cuenta.
                </Typography>
            </div>
        );
    }
}

function mapStateToProps({}) {
    return ({});
}

export default withStyles(styles)(connect(mapStateToProps, {})(AboutUs));
