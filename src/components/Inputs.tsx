import '../components/Main.css'

import { IonCol, IonGrid, IonRow, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/react';

function Inputs() {
  const customActionSheetOptions = {
    header: 'Colors',
    subHeader: 'Select your favorite color'
  };

  return (
    <>
      <IonGrid>
        <IonItem className='input'>
          {/* <IonLabel>Модель</IonLabel> */}
          <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Модель">
            <IonSelectOption value="red">Red</IonSelectOption>
            <IonSelectOption value="green">Green</IonSelectOption>
            <IonSelectOption value="blue">Blue</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem className='input'>
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
        <IonItem className='input'>
          {/* <IonLabel>Модель</IonLabel> */}
          <IonSelect interfaceOptions={customActionSheetOptions} interface="action-sheet" placeholder="Цена, ₼">
            <IonSelectOption value="red">Red</IonSelectOption>
            <IonSelectOption value="green">Green</IonSelectOption>
            <IonSelectOption value="blue">Blue</IonSelectOption>
          </IonSelect>
        </IonItem>
      </IonGrid>
    </>
  );
}
export default Inputs;