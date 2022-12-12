import {
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonMenu,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonIcon,
    IonLabel,
    IonPage,
    IonButtons,
    IonButton,
    IonItem
} from '@ionic/react';
import { menuOutline, } from 'ionicons/icons';

const Headermain: React.FC = () => (

    <IonHeader className='header-menu'>
    <IonMenuToggle className='menu-icon'>
      <IonIcon icon={menuOutline} />
    </IonMenuToggle>
    <img src='assets/images/logo.png' />
  </IonHeader>
);

export default Headermain;