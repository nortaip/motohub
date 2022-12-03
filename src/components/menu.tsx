import React from 'react';
import {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
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
                    <IonTitle>Menu</IonTitle>
                </IonToolbar>
            </IonHeader>
        </>
    );
}
export default Menu;