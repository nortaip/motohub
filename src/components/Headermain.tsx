import {
  IonHeader,
  IonMenuToggle,
  IonIcon,
} from '@ionic/react';
import { menuOutline, } from 'ionicons/icons';

const Headermain: React.FC = () => (

  <IonHeader className='header-menu'>
    <IonMenuToggle className='menu-icon'>
      <IonIcon icon={menuOutline} />
    </IonMenuToggle>
    <img alt='Logo' src='assets/images/logo.png' />
  </IonHeader>
);

export default Headermain;