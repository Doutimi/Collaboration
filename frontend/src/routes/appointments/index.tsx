import { createFileRoute } from "@tanstack/react-router";
import styles from "./appointments.module.css";
import { Header } from "@/components/Header";
import dayjs from "dayjs";

const appointments = [
  {
    name: "Doctor Appointment",
    date: new Date(2024, 12, 1),
  },
  {
    name: "Dentist Appointment",
    date: new Date(2024, 11, 4),
  },

  {
    name: "Eye Doctor Appointment",
    date: new Date(2024, 10, 5),
  },
];

export default function Appointments() {
  return (
    <>
      <Header link="../bills/" />
      <h2>Appointments</h2>
      <section className={styles.container} id={styles.container}>
        {appointments.map(({ name, date }) => (
          <div className={styles["list-item"]}>
            <span className={styles["item-name"]}>{name}</span>
            <span className={styles["item-date"]}>
              {dayjs(date).format("MM/DD/YYYY")}
            </span>
          </div>
        ))}
      </section>

      <div className={`${styles.frame} ${styles.container}`}>
        <a href="new/">
          <button type="button">New Appointment</button>
        </a>
      </div>
    </>
  );
}

export const Route = createFileRoute("/appointments/")({
  component: Appointments,
});
