import React from 'react';
import { IonNav } from '@ionic/react';

import User from '../components/user';

function Example() {
  return <IonNav root={() => <User />}></IonNav>;
}
export default Example;