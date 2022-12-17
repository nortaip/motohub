import { IonNav } from '@ionic/react';

import User from '../components/user';

function Profile() {
  return <IonNav root={() => <User />}></IonNav>;
}
export default Profile;