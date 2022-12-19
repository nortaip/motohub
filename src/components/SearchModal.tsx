import React, { useState, useRef, useEffect } from 'react';
import { IonItem, IonModal, IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption, IonContent } from '@ionic/react';
function Search() {
    const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);

    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

    useEffect(() => {
        setPresentingElement(page.current);
    }, []);

    function dismissmodal() {
        modal.current?.dismiss();
    }
    const customActionSheetOptions = {
        header: 'Colors',
        subHeader: 'Select your favorite color'
    };
    return (
        <>
            <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle className='search-title'>Поиск фильтр </IonTitle>
                        <IonButtons slot="end">
                            <IonButton onClick={() => dismissmodal()} className='close-modal' >Закрывать</IonButton>
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
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
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Состояние">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Владельцы">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Таможня">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonRow>
                            <IonCol>
                                <IonItem className='input'>
                                    {/* <IonLabel>Модель</IonLabel> */}
                                    <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="ПТС">
                                        <IonSelectOption value="red">Red</IonSelectOption>
                                        <IonSelectOption value="green">Green</IonSelectOption>
                                        <IonSelectOption value="blue">Blue</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem className='input'>
                                    {/* <IonLabel>Модель</IonLabel> */}
                                    <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="VIN">
                                        <IonSelectOption value="red">Red</IonSelectOption>
                                        <IonSelectOption value="green">Green</IonSelectOption>
                                        <IonSelectOption value="blue">Blue</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                        <IonItem className='input'>
                            {/* <IonLabel>Модель</IonLabel> */}
                            <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Возможность обмена">
                                <IonSelectOption value="red">Red</IonSelectOption>
                                <IonSelectOption value="green">Green</IonSelectOption>
                                <IonSelectOption value="blue">Blue</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        <IonRow>
                            <IonCol>
                                <IonItem className='input'>
                                    {/* <IonLabel>Модель</IonLabel> */}
                                    <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Цена, ₼">
                                        <IonSelectOption value="red">Red</IonSelectOption>
                                        <IonSelectOption value="green">Green</IonSelectOption>
                                        <IonSelectOption value="blue">Blue</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                            <IonCol>
                                <IonItem className='input'>
                                    {/* <IonLabel>Модель</IonLabel> */}
                                    <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Цена до, ₼">
                                        <IonSelectOption value="red">Red</IonSelectOption>
                                        <IonSelectOption value="green">Green</IonSelectOption>
                                        <IonSelectOption value="blue">Blue</IonSelectOption>
                                    </IonSelect>
                                </IonItem>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                    <IonButton className='btn' id='close-modal'>Применить фильтры</IonButton>
                </IonContent>
            </IonModal>
        </>
    );
}
export default Search;