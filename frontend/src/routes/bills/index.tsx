import { Header } from "@/components/Header";
import { Fetch } from "@/lib/api";
import type { BillsData } from "@/types";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";


async function FetchEntries(){
  let data=await Fetch<BillsData[]>(`http://127.0.0.1:3000/bills/list`);
  return data
}

const Bills = () => {
  let [bills,setEntries]=useState<BillsData[]>([])
  useEffect(()=>{
    FetchEntries().then((data)=>{
      console.log(data)
      setEntries(data)
    })
  },[]);

  let entries=bills.map(({ name, date,id }) => (
    <div className="list-item list-none">
      <a href={`/bills/edit/${id}`}>
        <span className="bill-name">{name}</span>
      </a>
      <span className="bill-date">{(new Date(date)).toDateString()}</span>
    </div>
  ))
  return (
    <>
      <Header activeTab="bills" />
      <h2>Bills</h2>
      <section className="container" id="container">
        {entries}
      </section>
      <div className="frame container">
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

