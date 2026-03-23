import NotificationButton from '#@/lib/components/NotificationButton';
import NotificationToggle from '#@/lib/components/NotificationToggle';
import { InstallPrompt,
  PushNotificationManager, } from '#@/lib/components/pushNotificationManager';
import typography from '#@/lib/styles/fonts/typography.module.css';
import layout from '#@/lib/styles/layout.module.css';

export default function Page() {
  return (
    <div className={layout.main}>
      <div className={layout.mainContent}>
        <h1 className={ typography.displayLarge }>Grimorio Nativo</h1>
      </div>
      <div className={layout.complementaryContent}><NotificationButton />
        <PushNotificationManager />
        <NotificationToggle />
        <InstallPrompt /></div>
    </div>
  );
}
