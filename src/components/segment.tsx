import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

import '../components/Main.css'

function Example() {
  return (
    <>
      <IonSegment value="custom">
        <IonSegmentButton value="Все">
          <IonLabel>Все</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Опубликованные">
          <IonLabel>Опубликованные</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="Ожидают проверки">
          <IonLabel>Ожидают проверки</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;