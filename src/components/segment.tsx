import React from 'react';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

import '../components/Main.css'

function Example() {
  return (
    <>
      <IonSegment value="custom">
        <IonSegmentButton value="custom">
          <IonLabel>Все</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segment">
          <IonLabel>Опубликованные</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="segmen4t">
          <IonLabel>Ожидают проверки</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </>
  );
}
export default Example;