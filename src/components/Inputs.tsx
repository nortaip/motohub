import '../components/Main.css'
import styled from 'styled-components';
import { IonCol, IonGrid, IonRow, IonItem, IonImg, IonSelect, IonSelectOption, IonButton, IonIcon } from '@ionic/react';
import { addOutline } from 'ionicons/icons';
import React, { Component } from 'react';
import '../components/Main.css';

// import { Plugins, CameraResultType } from '@capacitor/core';
// const { Camera } = Plugins;

// const INITIAL_STATE = {
//   photo: '',
// };

const customActionSheetOptions = {
  header: 'Colors',
  subHeader: 'Select your favorite color'
};

const MyButton = styled(IonButton)`
  --background: var(--ion-color-border2);
`;
const IonIconImg = styled(IonIcon)`
  color: var(--ion-color-light-black);
`;

export class Home extends Component {
  // state: any = {};
  // props: any = {};
  // constructor(props: any) {
  //   super(props);
  //   this.state = { ...INITIAL_STATE };
  // }
  // takePicture() { }

  render() {
    // const { photo } = this.state;
    return (

      <>
        <div className="img-add">
          <IonImg  className='add-img'></IonImg>
          <MyButton className='img-add-btn' >
            <IonIconImg icon={addOutline} size='large'  />
          </MyButton>
        </div>
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
  };
}
export default Home;