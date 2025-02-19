import React, { useState } from "react";
import orderCover from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";

import OrderCard from "./OrderCard";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drink = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro | Order</title>
      </Helmet>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Deserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderCard items={salad}></OrderCard>
        </TabPanel>
        <TabPanel>
          <OrderCard items={pizza}></OrderCard>
        </TabPanel>
        <TabPanel>
          <OrderCard items={soup}></OrderCard>
        </TabPanel>
        <TabPanel>
          <OrderCard items={dessert}></OrderCard>
        </TabPanel>
        <TabPanel>
          <OrderCard items={drink}></OrderCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
