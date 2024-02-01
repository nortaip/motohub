import React, { useState, useRef } from 'react';
import { IonItem, IonList, IonIcon, IonSearchbar, IonModal, IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonCol, IonGrid, IonRow, IonSelect, IonSelectOption, IonContent } from '@ionic/react';
import { optionsOutline, closeOutline } from 'ionicons/icons';

function SearchC() {
  const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  let [results, setResults] = useState([...data]);

  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter(d => d.toLowerCase().indexOf(query) > -1));
  }
  const modal = useRef<HTMLIonModalElement>(null);

  function dismissmodal() {
    modal.current?.dismiss();
  }
  const [presentingElement] = useState<HTMLElement | null>(null);

  const customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };

  return (
    <IonContent className="ion-padding ">
      <h3 className='center header-h'>Поиск</h3>
      <div className="search-filter">
        <IonSearchbar className='custom' debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
        <IonIcon id="open-modal" icon={optionsOutline} className='icon' />
      </div>
      <IonList>
        {results.map(result => (
          <IonItem key={result}>{result}</IonItem>
        ))}
      </IonList>
      <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
        <IonHeader>
          <IonToolbar>
            <IonTitle className='search-title'>Поиск фильтр </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismissmodal()} className='close-modal' >
                <IonIcon id="open-modal" icon={closeOutline} className='icon' />
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
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
      </IonModal>
    </IonContent>

  );
}
export default SearchC;