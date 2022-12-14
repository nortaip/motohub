import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonList,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonLabel,
    IonIcon
} from '@ionic/react';
import '../components/Main.css';
import { eyeOff } from 'ionicons/icons';

function PInformation() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Смена пароля</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonList>
                    <IonItem >
                        <IonLabel position="stacked">Введите пароль</IonLabel>
                        <IonInput className='input' type="password" placeholder="**********">
                            <IonIcon slot="end" className='user-icon' icon={eyeOff} />
                        </IonInput>
                    </IonItem>

                    <IonItem >
                        <IonLabel position="stacked">Введите пароль</IonLabel>
                        <IonInput className='input' type="password" placeholder="**********">
                            <IonIcon slot="end" className='user-icon' icon={eyeOff} />
                        </IonInput>
                    </IonItem>
                </IonList>
                <IonButton className='btn'>Save</IonButton>
            </IonContent>
        </>
    );
}

export default PInformation;