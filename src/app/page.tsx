import NotificationButton from '#@/lib/components/NotificationButton';
import NotificationToggle from '#@/lib/components/NotificationToggle';
import { InstallPrompt,
  PushNotificationManager, } from '#@/lib/components/pushNotificationManager';
import typography from '#@/lib/styles/fonts/typography.module.css';
import layout from '#@/lib/styles/layout.module.css';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className={layout.top}>
        <h1 className={typography.displayLarge}>
          {'R&S Asesoría Jurídica S.A.S'}
        </h1>
      </div>
      <div className={layout.leftGrid}>
        <div>
          <NotificationButton />
          <PushNotificationManager />
          <NotificationToggle />
          <InstallPrompt />
        </div>
        <Link
          className={layout.button}
          href={'/'}
        >
          <span className="material-symbols-outlined">pace</span>
          <h1 className={typography.headlineMedium}>{'Ultimas Actuaciones'}</h1>
        </Link>
        <h1>Grimorio Nativo</h1>
      </div>
      <div className={layout.right}></div>
    </>
  );
}
