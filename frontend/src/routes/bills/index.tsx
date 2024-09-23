import { Header } from "@/components/Header";
import { Fetch } from "@/lib/api";
import styles from "./bills.module.css";
import dayjs from "dayjs";
import type { BillsData } from "@/types";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";


async function FetchEntries(){
  let data=await Fetch<BillsData[]>(`http://127.0.0.1:3000/bills/list`);
  return data
}

export default function Bills() {
  let [bills,setEntries]=useState<BillsData[]>([])
  useEffect(()=>{
    FetchEntries().then((data)=>{
      console.log(data)
      setEntries(data)
    })
  },[]);

  let entries=bills.map(({ name, date,id }, index) => (
    <div className={styles["list-item"]} key={index}>
      <a href={`/bills/edit/${id}`}>
        <span className={styles["item-name"]}>{name}</span>
      </a>
      <span className={styles["item-date"]}>
        {dayjs(date).format("MM/DD/YYYY")}
      </span>
    </div>
  ))
  return (
    <>
      <Header activeTab="bills" />
      <h2>Bills</h2>
      <section className={styles.container} id={styles.container}>
        {entries}
      </section>
      <div className={`${styles.frame} ${styles.container}`}>
        <Link to="/bills/new">
          <button type="button">New Bill</button>
        </Link>
      </div>
    </>
  );
};

export const Route = createFileRoute("/bills/")({
  component: Bills,
});

