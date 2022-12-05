import {
    IonApp,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonMenu,
    IonList,
    IonListHeader,
    IonMenuToggle,
    IonIcon,
    IonLabel,
    IonPage,
    IonButtons,
    IonButton,
    IonItem
} from '@ionic/react';
const Headermain: React.FC = () => (

    <IonMenu content-id="main-content">
        <IonHeader>
            <IonToolbar color="primary">
                <IonTitle>Menu</IonTitle>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonList>
                <IonListHeader>
                    Navigate
                </IonListHeader>
                <IonMenuToggle auto-hide="false">
                    <IonItem button>
                        <IonIcon slot="start" name='home'></IonIcon>
                        <IonLabel>
                            Home
                        </IonLabel>
                    </IonItem>
                </IonMenuToggle>
            </IonList>
        </IonContent>
    </IonMenu>
);

export default Headermain;