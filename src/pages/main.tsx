import {
  IonContent,
  IonHeader,
  IonMenuToggle,
  IonPage,
  IonIcon
} from '@ionic/react';
import { IonNav } from '@ionic/react';
import Card from '../components/card';
import Menu from '../components/Menu'
import { menuOutline, } from 'ionicons/icons';
import Catagory from '../components/Catagory';
import '../components/Main.css'

function main() {
  return (
    <IonPage>
      <Menu />
      <IonPage id="main-content">
        {/* <IonHeader className='header-menu'>
          <IonMenuToggle className='menu-icon'>
            <IonIcon icon={menuOutline} />
          </IonMenuToggle>
          <img src='assets/images/logo.png' />
        </IonHeader> */}
        <IonContent className="ion-padding">
          <div className='main-content'>
            <div className='bg-red'></div>
            <IonNav root={() => <Catagory />}></IonNav>
            {/* <Card /> */}
          </div>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default main;
