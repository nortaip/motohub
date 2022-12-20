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
import Inputs from '../components/Inputs';
import '../components/Main.css'

function main() {
  return (
    <IonPage id="main-content">
      <Menu />
        <IonHeader className='header-menu'>
          <IonMenuToggle className='menu-icon'>
            <IonIcon icon={menuOutline} />
          </IonMenuToggle>
          <img alt='Logo' src='assets/images/logo.png' />
        </IonHeader>
        <IonContent className="ion-padding">
          <h4 className='center header-h'>Добавить Обьявление</h4>
          <Inputs />
          <IonButton expand="block"className='btn'>Разместить бесплатно</IonButton>
        </IonContent>
      </IonPage>
  );
};

export default main;