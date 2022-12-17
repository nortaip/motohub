import {
  IonContent,
  IonNav,
  IonPage,
} from '@ionic/react';

import Cardtest from '../components/cardtest';
import '../components/Main.css'

function main() {
  return (
    <IonNav root={() => <Cardtest />}></IonNav>
  );
};

export default main;
