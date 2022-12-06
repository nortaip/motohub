import {
  IonContent,
  IonHeader,
  IonMenuToggle,
  IonPage,
  IonIcon,
  IonButton
} from '@ionic/react';
import Card from '../components/addcatagory';
import Menu from '../components/Menu'
import { menuOutline, } from 'ionicons/icons';
import Inputs from '../components/Inputs';
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
        <IonContent className="ion-padding">
          <h4 className='center header-h'>Добавить Обьявление</h4>
          <Card />
          <Inputs />
          <IonButton expand="block"className='btn'>Разместить бесплатно</IonButton>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default main;