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
import '../components/Main.css'
import Segment from '../components/segment';
import LikeCards from '../components/Likecard'
const LIkes: React.FC = () => {
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
        <IonContent className="ion-padding ">
          <h4 className='center header-h'>Обьявления</h4>
          <Segment/>
          <LikeCards/>
          <IonButton expand="block"className='btn'>Разместить бесплатно</IonButton>
        </IonContent>
      </IonPage>
      
    </IonPage>
  );
};

export default LIkes;
