import {
  IonHeader,
  IonMenuToggle,
  IonPage,
  IonIcon,
} from '@ionic/react';
import Menu from '../components/Menu'
import { menuOutline, } from 'ionicons/icons';
import SearchInput from '../components/SearchInput';
import '../components/Main.css'

function main() {
  return (
    <IonPage>
      <Menu />
      <IonPage id="main-content">
        <IonHeader className='header-menu'>
          <IonMenuToggle className='menu-icon'>
            <IonIcon icon={menuOutline} />
          </IonMenuToggle>
          <img alt='Logo' src='assets/images/logo.png' />
        </IonHeader>
          <SearchInput/>
      </IonPage>
    </IonPage>
  );
};

export default main;