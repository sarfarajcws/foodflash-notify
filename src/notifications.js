import {
  getMessaging,
  getToken,
  onMessage
} from "firebase/messaging";

import app from "./firebase";

const messaging = getMessaging(app);

export const requestNotificationPermission =
async () => {

  try {

    const permission =
      await Notification.requestPermission();

    console.log(permission);

    if (permission !== "granted") {
      return;
    }

    const currentToken =
      await getToken(messaging, {

        vapidKey: "BBN1E2ZrvMiVKB8fQTaOhw-QJSNVHgE98mZG8AeCsN9egXj4CVDKz8uaI6ggEqMCAvkHmHk4Ih5NWkduUGGKDls"

      });

    console.log(
      "FCM TOKEN:",
      currentToken
    );

    onMessage(
      messaging,
      (payload) => {

        console.log(payload);

        new Notification(
          payload.notification.title,
          {
            body: payload.notification.body,
            icon: "/icon-192.png"
          }
        );

      }
    );

  } catch (error) {

    console.error(error);

  }

};