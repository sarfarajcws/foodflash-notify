import "./index.css";
import { requestNotificationPermission }
from './notifications'

function App() {
  const enableNotifications = async () => {
  await requestNotificationPermission()
}

  const showNotification = (title, body) => {
    if (Notification.permission === "granted") {
      navigator.serviceWorker.getRegistration().then((registration) => {
        registration.showNotification(title, {
          body,
          icon: "/icon-192.png",
        });
      });
    }
  };

  const placeFakeOrder = () => {
    showNotification("FoodFlash", "Order Confirmed");

    setTimeout(() => {
      showNotification("FoodFlash", "Preparing your food");
    }, 5000);

    setTimeout(() => {
      showNotification("FoodFlash", "Rider Assigned");
    }, 10000);

    setTimeout(() => {
      showNotification("FoodFlash", "Out for delivery");
    }, 15000);
  };

  return (
    <div className="app">
      <div className="hero">
        <div className="logo">⚡</div>

        <h1>FoodFlash</h1>

        <p>
          Real-time food delivery notification demo with installable PWA
          experience.
        </p>
      </div>

      <div className="section">
        <div className="section-title">🔔 Notifications</div>

        <div className="section-sub">
          Enable push notifications to receive real-time order updates.
        </div>

        <button className="btn btn-primary" onClick={enableNotifications}>
          Enable Notifications
        </button>
      </div>

      <div className="section">
        <div className="section-title">🍔 Fake Order Demo</div>

        <div className="section-sub">
          Simulate a live FoodFlash delivery order experience.
        </div>

        <button className="btn btn-dark" onClick={placeFakeOrder}>Place Fake Order</button>

        <div className="order-card">
          <div className="order-top">
            <div className="order-name">Burger Combo</div>

            <div className="status">Preparing</div>
          </div>

          <div className="eta">ETA: 20 mins</div>

          <div className="progress">
            <div className="progress-fill"></div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="section-title">📦 Notification History</div>

        <div className="history">
          <div className="history-item">
            <div className="history-icon">✓</div>
            <div className="history-text">Order Confirmed</div>
          </div>

          <div className="history-item">
            <div className="history-icon">👨‍🍳</div>
            <div className="history-text">Preparing your food</div>
          </div>

          <div className="history-item">
            <div className="history-icon">🛵</div>
            <div className="history-text">Rider Assigned</div>
          </div>

          <div className="history-item">
            <div className="history-icon">📍</div>
            <div className="history-text">Out for delivery</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
