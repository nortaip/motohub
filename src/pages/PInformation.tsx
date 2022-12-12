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
    IonList
} from '@ionic/react';

function PInformation() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Личная информация</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonList>
                    <IonItem>
                        <IonInput className='input' placeholder="Name"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput className='input' placeholder="Second Name"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput className='input' placeholder="Description"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput className='input' type="email" placeholder="email@domain.com"></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonInput className='input' type="tel" placeholder="888-888-8888"></IonInput>
                    </IonItem>
                </IonList>
                <IonButton className='btn'>Save</IonButton>
            </IonContent>
        </>
    );
}

export default PInformation;