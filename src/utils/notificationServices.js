
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken()
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken')
  console.log("the old token is: **************", fcmToken)
  if (!fcmToken) {
      const fcmToken = await messaging.getToken();
    try {
      if (fcmToken) {
        console.log("new token gen:**********", fcmToken)
        await AsyncStorage.setItem('newToken',)
      }
    } catch (error) {
      console.log("error raised in new token", error)
    }
  }
}


// const getFcmToken = async () => {
//   let fcmTOken = await AsyncStorage.getItem('fcmToken');
//   console.log(fcmTOken, 'the old token');
//   if (!fcmTOken) {
//     const fcmTOken = await messaging().getToken();

//     try {
//       if (fcmTOken) {
//         console.log(fcmTOken, 'new genrated token');
//         await AsyncStorage.setItem('fcmToken', fcmTOken);
//       }
//     } catch (error) {
//       console.log(error, 'error raised  in fcmToken');
//       showError(error.message);
//     }
//   }
// };

// export const notificationListener = async () => {
//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//   });
//   messaging().onMessage(async remoteMessage => {
//     console.log('recived in foreground', remoteMessage);
//   });
//   messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//       }
//     });
// };



export const notificationLisner = async () =>{
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('Notification open from background state:', remoteMessage.notification);
  });

  messaging().onMessage(async remoteMessage => {
    console.log("recived in foreground", remoteMessage)
  })

  
messaging().getInitialNotification().then(remoteMessage => {
  if(remoteMessage){
    console.log('notification caused in quit state:', remoteMessage.notification);   
  }
});


}