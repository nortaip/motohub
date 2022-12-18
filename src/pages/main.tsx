import {
  IonNav,
} from '@ionic/react';

import '../components/Main.css'
import Mainpage from '../components/MainPage';

function main() {
  return (
    <IonNav root={() => <Mainpage />}></IonNav>
  );
};

export default main;
