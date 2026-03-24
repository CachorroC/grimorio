
'use client';

import { Button,  TextField } from '@mui/material';

import NotificationButton from '#@/lib/components/NotificationButton';
import NotificationToggle from '#@/lib/components/NotificationToggle';
import { InstallPrompt,
  PushNotificationManager, } from '#@/lib/components/pushNotificationManager';
import styles from '#@/lib/styles/landing.module.css';
import layout from '#@/lib/styles/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className={layout.main}>
      <main className={styles.mainContainer}>
        {/* Navigation/Header area */}
        <header className={styles.header}>
          <div className={styles.logo}>Raíces & Alivio</div>
          <nav className={styles.nav}>
            <Link href="#vademecum" className={styles.navLink}>El Vademécum</Link>
            <Link href="/hierbas" className={styles.navLink}>Lista de plantas medicinales</Link>
            <Link href="/hierba/nueva" className={styles.navLink}>Aporta tu conocimiento en el vademecum</Link>
          </nav>
        </header>

        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Botánica Medicinal Colombiana</span>
            <h1 className={styles.title}>
              Encuentra calma y sanación en la sabiduría de la tierra.
            </h1>
            <p className={styles.subtitle}>
              Un refugio para el alivio del dolor y el bienestar del espíritu. Explora nuestro vademécum de plantas nativas, desde la serenidad de la Passiflora hasta la resiliencia de los páramos.
            </p>

            {/* MUI Search Form mixed with CSS Modules layout */}
            <div className={styles.searchContainer}>
              <TextField
                id="search-plant"
                label="Busca una planta, dolencia o uso..."
                variant="outlined"
                fullWidth
                color="primary"
                sx={{
                  backgroundColor           : '#FFFDFC',
                  borderRadius              : 1,
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#D0C9B4'
                    },
                  }
                }}
              />
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.searchButton}
                sx={{
                  padding: '15px 30px'
                }}
              >
                Explorar
              </Button>
            </div>
          </div>

          <div className={styles.heroImageWrapper}>
            {/* Placeholder for an evocative, soft-focus image of a Colombian native plant like an Espeletia or a misty Andean forest */}
            <div className={ styles.imagePlaceholder }>
              <Image src={ '/images/nature_4.png' } alt={ 'Healing'}  fill={true} style={{
                objectFit: 'cover'
              }}
              />

            </div>
          </div>
        </section>

        {/* Philosophy / Empathy Section */}
        <section className={styles.philosophy} id="filosofia">
          <h2 className={styles.sectionTitle}>Honrando tu proceso de sanación</h2>
          <p className={styles.sectionText}>
            Entendemos que el dolor físico y emocional caminan de la mano. La fitoterapia tradicional no solo busca suprimir el síntoma, sino abrazar el cuerpo, escuchar su lenguaje y utilizar las propiedades curativas de nuestra biodiversidad para restaurar el equilibrio holístico.
          </p>
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <h3>Conocimiento Ancestral</h3>
              <p>Rescatamos los usos tradicionales de las comunidades que han custodiado estos saberes por generaciones.</p>
            </div>
            <div className={styles.card}>
              <h3>Alivio Compasivo</h3>
              <p>Guías específicas para el manejo del dolor inflamatorio, muscular y espiritual de manera natural.</p>
            </div>
            <div className={styles.card}>
              <h3>Conexión Botánica</h3>
              <p>Aprende a preparar infusiones, cataplasmas y tinturas respetando los ciclos de cada planta.</p>
            </div>
          </div>
        </section>

        <NotificationButton />
        <PushNotificationManager />
        <NotificationToggle />
        <InstallPrompt />
      </main>
    </div>
  );
}
