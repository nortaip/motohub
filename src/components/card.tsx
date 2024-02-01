import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,  IonCol, IonRow, IonNavLink, IonGrid } from '@ionic/react';
import './Main.css';
import ProductInfo from '../pages/ProductInfo';
import CardLoading from './CardLoading';

function Card() {
  interface CardData {
    id: number;
    filePP: string;
    username: string;
    surename: string;
    date_post: string;
    Status: string;
    vezife: string;
  }
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<CardData[]>([]);
  // Assuming your axios call returns data of type CardData[]
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<CardData[]>('https://senategroup.az/Data/api/Staff.php');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <IonGrid className='products'>
      <h4 className='whh'>Staff</h4>
      <IonRow className='card-group'>
        {data.map((item) => (
          <IonCol class='card' key={item.id}>
            <IonNavLink
              routerDirection="forward"
              component={() => <ProductInfo id={item.id} />}
            >
              <div className='card'>
                <div className='badge'>
                  <div className="user-Sales" style={{ backgroundColor: item.Status === '1' ? 'red' : item.Status === '2' ? 'green' : '' }}>
                    {item.Status === '1' ? 'İşləmir' : item.Status === '2' ? 'İşləyir' : 'Georgia'}
                  </div>
                </div>
                <img
                  className='img-card'
                  style={{ opacity: item.Status === '1' ? '50%' : item.Status === '100%' ? 'green' : '100%' }}
                  alt="moto"
                  src={`https://senategroup.az/Data/api/Staff/3x4Staff/${item.filePP}`}
                />
                <IonCardHeader className='info' style={{ opacity: item.Status === '1' ? '50%' : item.Status === '100%' ? 'green' : '100%' }}>
                  <IonCardSubtitle className='subtitle'>{item.vezife}</IonCardSubtitle>
                  <IonCardTitle className='Title'>AD:{item.username}</IonCardTitle>
                  <IonCardTitle className='Title'>Soyad:{item.surename}</IonCardTitle>
                  <IonCardContent className='time'>{item.date_post}</IonCardContent>
                </IonCardHeader>
              </div>
            </IonNavLink>
          </IonCol>
        ))}
      </IonRow>
      {loading && <CardLoading />}
    </IonGrid>
  );
}

export default Card;
