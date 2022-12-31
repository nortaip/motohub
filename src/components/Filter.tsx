import React from "react";
import { IonPage, IonCol, IonGrid, IonRow, IonItem, IonSelect, IonSelectOption, IonButton } from "@ionic/react";

function Inputs() {
    const customActionSheetOptions = {
        header: 'Colors',
        subHeader: 'Select your favorite color'
    };

    return (
        <IonPage id="main-content">
            <IonGrid>
                <IonItem className='input md'>
                    {/* <IonLabel>Модель</IonLabel> */}
                    <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Модель">
                        <IonSelectOption value="red">Red</IonSelectOption>
                        <IonSelectOption value="green">Green</IonSelectOption>
                        <IonSelectOption value="blue">Blue</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonItem className='input md'>
                    {/* <IonLabel>Модель</IonLabel> */}
                    <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Год выпуска">
                        <IonSelectOption value="red">Red</IonSelectOption>
                        <IonSelectOption value="green">Green</IonSelectOption>
                        <IonSelectOption value="blue">Blue</IonSelectOption>
                    </IonSelect>
                </IonItem>
                <IonRow>
                    <IonCol>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Пробег">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Цвет">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Двигатель">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Тактов">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="КПП">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Привод">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <IonButton className='btn' id='close-modal'>Применить фильтры</IonButton>
        </IonPage>
    );
};

export default Inputs;