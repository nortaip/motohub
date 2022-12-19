import React, { useState } from 'react';
import { IonItem, IonList, IonIcon, IonSearchbar, IonContent } from '@ionic/react';
import { optionsOutline } from 'ionicons/icons';
import SearchModal from './SearchModal'

function Search() {
  const data = ['Amsterdam', 'Buenos Aires', 'Cairo', 'Geneva', 'Hong Kong', 'Istanbul', 'London', 'Madrid', 'New York', 'Panama City'];
  let [results, setResults] = useState([...data]);

  const handleChange = (ev: Event) => {
    let query = "";
    const target = ev.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter(d => d.toLowerCase().indexOf(query) > -1));
  }

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
      <SearchModal />
    </IonContent>

  );
}
export default Search;