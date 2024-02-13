import React, { useEffect, useState } from "react";
import { SUBSCRIPTION_API } from "../utils/constants";

const Subscription = () => {
  const [subscription, setSubscription] = useState([]);

  useEffect(() => {
    getSubscriptionData();
  }, []);

  const getSubscriptionData = async () => {
    const data = await fetch(SUBSCRIPTION_API);
    const json = await data.json();
    console.log(json);
  };
  return <div></div>;
};

export default Subscription;
