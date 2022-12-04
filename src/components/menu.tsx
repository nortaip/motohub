import React from 'react';
import {
    IonButtons,
    IonHeader,
    IonMenuButton,
    IonTitle,
    IonBackButton,
    IonToolbar

} from '@ionic/react';

function Menu() {
    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="#"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Back Button</IonTitle>
                    </IonToolbar>
                </IonToolbar>
            </IonHeader>
        </>
    );
}
export default Menu;