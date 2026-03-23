
import styles from 'styles/layout.module.css';
import typography from 'styles/fonts/typography.module.css';
import { Loader } from '#@/lib/components/Loader/main-loader';

export default function Loading() {
  return (
    <>
      <div className={styles.mainContent}>
        <table>
          <thead>
            <tr>
              <th>cargando</th>
              <th>cargando</th>
              <th>cargando</th>
              <th>cargando</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
            <tr>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
              <td>
                <Loader />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.complementaryContent}>
        <h4 className={typography.titleLarge}>Cargando</h4>
        <section className={styles.sectionColumn}>
          <Loader />
          <Loader />
          <Loader />
        </section>
      </div>
    </>
  );
}
