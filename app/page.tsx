'use client';

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Header from "@/layouts/Header";
import Sidenav from "@/layouts/Sidenav";
import ListItem from "../components/ListItem";
import Modal from "@/components/Modal";

interface ResistItem {
  id: number;
  priority: number;
  title: string;
  context: string;
}

const ITEM_PREFIX = 'memo_item_';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [items, setItems] = useState<ResistItem[]>([]);

  const OpenModalHandler = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
    fetchResistItems();
  };

  const fetchResistItems = () => {
    const items: ResistItem[] = [];
    if (localStorage.length > 0){
      for(let i=0;i<=localStorage.length;i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(ITEM_PREFIX)) {
          const item = localStorage.getItem(key);
          if (item) {
            try {
              const parsedItem = JSON.parse(item) as ResistItem;
              items.push(parsedItem);
            } catch (error) {
              console.error(`Error parsing item with key ${key}:`, error);
            }
          }
        }
      }
      setItems(items);
    }
  }

    useEffect(() => {
      fetchResistItems();
    }, [isModalOpen]);

  return (
    <div className="flex flex-col h-screen">
      <header className="flex w-full"  style={{backgroundColor:"#0052cc"}}>
        <Header />
        <Button onClick={OpenModalHandler}>作成</Button>
        <Modal isOpen={isModalOpen} setIsModalOpen={handleCloseModal}></Modal>
      </header>

      {/* サイドバー実装 */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex w-40">
          <Sidenav backlog="タスクリスト" activeItem="ダッシュボード"/>
        </div>

        <main className="flex-1 overflow-y-auto m-4">
          {/* カード部分 */}
          <div className="w-4/5 ">
            <h1 className="text-2xl font-bold">メモリスト</h1>
          </div>
          {items.map(item => (
            <ListItem key={item.id} importance={item.priority} title={item.title} />
          ))}
        </main>
      </div>
    </div>
  );
}
