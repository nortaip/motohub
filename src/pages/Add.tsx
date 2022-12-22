import {
  IonContent,
  IonHeader,
  IonMenuToggle,
  IonPage,
  IonGrid,
  IonRow,
  IonItem,
  IonImg,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonIcon,
  IonCol
} from '@ionic/react';
import Menu from '../components/Menu';
import styled from 'styled-components';
import { menuOutline, } from 'ionicons/icons';
import '../components/Main.css';
import React from 'react';
import { addOutline } from 'ionicons/icons';
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
function Add() {
  return (
    <IonPage id="main-content">
      <Menu />
      <IonPage>
        <IonHeader className='header-menu'>
          <IonMenuToggle className='menu-icon'>
            <IonIcon icon={menuOutline} />
          </IonMenuToggle>
          <img alt='Logo' src='assets/images/logo.png' />
        </IonHeader>
        <IonContent className="ion-padding">
          <h4 className='center header-h'>Добавить Обьявление</h4>
          <div className="img-add">
            <IonImg className='add-img'></IonImg>
            <MyButton className='img-add-btn' >
              <IonIconImg icon={addOutline} size='large' />
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
          <IonButton expand="block" className='btn'>Разместить бесплатно</IonButton>
        </IonContent>
      </IonPage>
    </IonPage>
  );
};

export default Add;