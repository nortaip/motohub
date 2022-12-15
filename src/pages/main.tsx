import {
  IonContent,
  IonPage,
} from '@ionic/react';

import Menu from '../components/Menu'
import Catagory from '../components/Catagory';
import Headermain from '../components/Headermain';
import Card from '../components/card';
import '../components/Main.css'

function main() {
  return (
    <IonPage>
      <Menu />
      <IonPage id="main-content">
        <Headermain />
        <IonContent className="ion-padding">
          <div className='main-content'>
            <div className='bg-red'></div>
            <Catagory />
            <Card />
          </div>
        </IonContent>
      </IonPage>
    </IonPage >
  );
};

export default main;
