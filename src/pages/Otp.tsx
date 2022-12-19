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
  IonLabel
} from '@ionic/react';

function PInformation() {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Подтвердить</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
      Введите 4-значный код, отправленный на ваш номер с помощью СМС
        <IonItem counter={true}>
          <IonLabel position="floating">0-0-0-0</IonLabel>
          <IonInput  maxlength={4}></IonInput>
        </IonItem>
        <IonButton className='btn'>Подтвердить</IonButton>
        Отправить заново
      </IonContent>
    </>
  );
}

export default PInformation;