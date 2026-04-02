// app/components/jamOperasional/JamOperasional.tsx
import styles from "./JamOperasional.module.scss";
import {
  fetchPublicSiteSettings,
  DEFAULT_SITE_SETTINGS,
} from "../../services/siteSettingsService";

type DaySchedule = {
  id: string;
  label: string;
  open: string;
  close: string;
};

const SCHEDULE: DaySchedule[] = [
  { id: "senin", label: "Senin", open: "08:00", close: "17:00" },
  { id: "selasa", label: "Selasa", open: "08:00", close: "17:00" },
  { id: "rabu", label: "Rabu", open: "08:00", close: "17:00" },
  { id: "kamis", label: "Kamis", open: "08:00", close: "17:00" },
  { id: "jumat", label: "Jumat", open: "08:00", close: "11:00" },
  { id: "sabtu", label: "Sabtu", open: "08:00", close: "14:00" },
  { id: "minggu", label: "Minggu", open: "08:00", close: "14:00" },
];

const JamOperasional = async () => {
  const settings = await fetchPublicSiteSettings();

  const businessName =
    settings.businessName || DEFAULT_SITE_SETTINGS.businessName;

  return (
    <section
      className={`section ${styles.section}`}
      aria-labelledby="jam-operasional-heading"
    >
      <div className="container">
        <div className={styles.inner}>
          {/* LEFT: INFO */}
          <div className={styles.info}>
            <p className={styles.kicker}>Jam Operasional</p>
            <h2 id="jam-operasional-heading" className={styles.title}>
              Jam Operasional Dapur {businessName}
            </h2>
            <p className={styles.subtitle}>
              Dapur rumahan kami melayani pemesanan roti unyil & snack box
              setiap hari. Untuk pesanan acara, sebaiknya tetap{" "}
              <strong>pre-order minimal H-1</strong> agar jadwal produksi bisa
              diatur dengan nyaman.
            </p>
            <p className={styles.note}>
              Waktu di bawah adalah jam operasional utama untuk{" "}
              <strong>chat & produksi</strong>. Pengantaran ke lokasi acara
              biasanya diatur menyesuaikan jam mulai acara.
            </p>
          </div>

          {/* RIGHT: SCHEDULE */}
          <div
            className={styles.schedule}
            aria-label={`Jam operasional ${businessName} per hari`}
          >
            <dl className={styles.list}>
              {SCHEDULE.map((day) => (
                <div key={day.id} className={styles.row}>
                  <dt className={styles.day}>{day.label}</dt>
                  <dd className={styles.hours}>
                    <time dateTime={day.open}>
                      {day.open.replace(":", ".")}
                    </time>
                    <span className={styles.separator}>–</span>
                    <time dateTime={day.close}>
                      {day.close.replace(":", ".")}
                    </time>
                    <span className={styles.wib}>WIB</span>
                  </dd>
                </div>
              ))}
            </dl>

            <p className={styles.helperText}>
              Jika ingin pesan untuk <strong>tanggal tertentu atau jumlah besar</strong>,
              kamu boleh chat lebih awal supaya kami bisa mengamankan slot
              produksi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JamOperasional;