import React from 'react';
import { IonModal, IonToolbar, IonTitle, IonLabel, IonButtons, IonContent, IonBackButton, IonChip, IonHeader, IonRow, IonCol, IonIcon, IonRadioGroup, IonItem, IonRadio } from '@ionic/react';
import Likecard from '../components/Likecard';
import CardLoading from '../components/CardLoading';
import Filter from './Filter'
import { optionsOutline, filterOutline } from 'ionicons/icons';

function filterModal() {

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle class="ion-text-center">Мопеды</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <IonRow>
                    <IonCol>
                        <IonChip className='filter-madal' id="Filter"><p>Фильтр</p>  <IonIcon className='ce' icon={optionsOutline} /></IonChip>
                    </IonCol>
                    <IonCol>
                        <IonChip className='filter-madal' id="Sorting"><p>Сортировка</p> <IonIcon className='ce' icon={filterOutline} /></IonChip>
                    </IonCol>
                </IonRow>
                <Likecard />
                <CardLoading />
                <IonModal
                    trigger="Filter"
                    initialBreakpoint={0.9}
                    breakpoints={[0, 0.25, 0.5, 0.75]}
                    handleBehavior="cycle"
                    id="Filter"
                >
                    <Filter />
                </IonModal>
                <IonModal
                    trigger="Sorting"
                    initialBreakpoint={0.25}
                    breakpoints={[0, 0.25, 0.5, 0.75]}
                    handleBehavior="cycle"
                    id="Sorting"
                >
                    <IonContent className="ion-padding">
                        <IonRadioGroup value="Language">
                            <IonItem>
                                <IonLabel className='h4-regular'>A-Z</IonLabel>
                                <IonRadio slot="end" value="A-Z"></IonRadio>
                            </IonItem>
                            <IonItem>
                                <IonLabel className='h4-regular'>Z-A</IonLabel>
                                <IonRadio slot="end" value="Z-A"></IonRadio>
                            </IonItem>
                        </IonRadioGroup>
                    </IonContent>
                </IonModal>
            </IonContent>
        </>
    );
}
export default filterModal;