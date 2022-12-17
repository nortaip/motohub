import {
  IonContent,
  IonHeader,
  IonMenuToggle,
  IonPage,
  IonIcon,
  IonButton
} from '@ionic/react';
import Menu from '../components/Menu'
import { menuOutline, } from 'ionicons/icons';
import Inputs from '../components/FilterInput';
import Search from '../components/SearchInput';
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
          <img src='assets/images/logo.png' />
        </IonHeader>
        <IonContent className="ion-padding ">
          <h3 className='center header-h'>Поиск</h3>
          <Search/>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default main;