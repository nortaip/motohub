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
    IonLabel
} from '@ionic/react';
import '../components/Main.css';
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
                    <IonItem>
                        <IonLabel position="stacked">Введите пароль</IonLabel>
                        <IonInput type="password" className='input'  placeholder="Enter text"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonLabel position="stacked">повторно введите пароль</IonLabel>
                        <IonInput type="password" className='input'  placeholder="Enter text"></IonInput>
                    </IonItem>
                </IonList>
                <IonButton className='btn'>Save</IonButton>
            </IonContent>
        </>
    );
}

export default PInformation;