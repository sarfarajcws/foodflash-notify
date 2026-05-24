import { getMessaging, getToken } from 'firebase/messaging'
import app from './firebase'

const messaging = getMessaging(app)

export const requestNotificationPermission = async () => {

  const permission = await Notification.requestPermission()

  if (permission === 'granted') {

    const token = await getToken(messaging, {
      vapidKey: 'BBN1E2ZrvMiVKB8fQTaOhw-QJSNVHgE98mZG8AeCsN9egXj4CVDKz8uaI6ggEqMCAvkHmHk4Ih5NWkduUGGKDls'
    })

    console.log(token)

    return token
  }
}