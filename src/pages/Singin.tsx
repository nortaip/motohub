import {
    IonBackButton,
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonIcon,
} from '@ionic/react';
import { eyeOff } from 'ionicons/icons';

function PInformation() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Войти</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonList>
                    <IonItem >
                        <IonLabel position="stacked">Введите номер телефона</IonLabel>
                        <IonInput className='input' type="tel" placeholder="888-888-8888"></IonInput>
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Введите пароль</IonLabel>
                        <IonInput className='input' type="password"aria-labelledby="ion-input-3-lbl" autocapitalize="off" autocomplete="off" autocorrect="off" name="ion-input-3" placeholder="**********"  >
                            <IonIcon slot="end" className='user-icon' icon={eyeOff} />
                        </IonInput>
                    </IonItem>
                </IonList>
                <IonButton className='btn'>Продолжить</IonButton>
                <IonButton color="light"className='btn'>Создать аккаунт</IonButton>
            </IonContent>
        </>
    );
}

export default PInformation;