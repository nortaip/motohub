import React from 'react';
import { IonSegment, IonSegmentButton } from '@ionic/react';

import '../components/Main.css'

function Segment() {
  return (
    <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}  >
      <IonSegmentButton value="Все" aria-selected="true">
        Все
      </IonSegmentButton>
      <IonSegmentButton value="Опубликованные">
        Опубликованные
      </IonSegmentButton>
      <IonSegmentButton value="Ожидают">
        Ожидают
      </IonSegmentButton>
    </IonSegment>
  );
}
export default Segment;