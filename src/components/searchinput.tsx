import React, { useState, useRef, useEffect } from 'react';
import { IonItem, IonList, IonIcon, IonSearchbar, IonModal, IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonButtons } from '@ionic/react';
import { optionsOutline } from 'ionicons/icons';
import Filterinput from './Filterinput'
function Example() {
  const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  let [results, setResults] = useState([...data]);
  const modal = useRef<HTMLIonModalElement>(null);
  const page = useRef(null);

  const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPresentingElement(page.current);
  }, []);

  function dismissmodal() {
    modal.current?.dismiss();
  }
  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter(d => d.toLowerCase().indexOf(query) > -1));
  }
  return (
    <>
      <div className="search-filter">
        <IonSearchbar className='custom' debounce={1000} onIonChange={(ev) => handleChange(ev)}></IonSearchbar>
        <IonIcon id="open-modal" icon={optionsOutline} className='icon' />
      </div>
      <IonList>
        {results.map(result => (
          <IonItem>{result}</IonItem>
        ))}
      </IonList>
      <IonModal ref={modal} trigger="open-modal" presentingElement={presentingElement!}>
        <IonHeader>
          <IonToolbar>
            <IonTitle className='search-title'>Поиск фильтр </IonTitle>
            <IonButtons slot="end">
              <IonButton onClick={() => dismissmodal()} className='close-modal' >Закрывать</IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <Filterinput />
      </IonModal>
    </>
  );
}
export default Example;