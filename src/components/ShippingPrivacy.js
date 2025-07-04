/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewDescription } from "../Helper/Herlper";
import { getApi, getShippingPrivacy } from "../Repository/Api";
import DynamicHelmet from "./Helmet/DynamicHelmet";
import { ImageLazyLoading } from "../utils/helpingComponent";
import endPoints from "../Repository/apiConfig";

const ShippingPrivacy = () => {
  const [shippingPrivacy, setShippingPrivacy] = useState();
  const [metaResponse, setMetaResponse] = useState(null);
  const navigate = useNavigate();

  function BackNavigation() {
    navigate(-1);
  }

  const fetchMetaTags = () => {
    getApi({
      url: endPoints.metaTags.shippingPolicyPage,
      setResponse: setMetaResponse,
    });
  };

  useEffect(() => {
    getShippingPrivacy(setShippingPrivacy);
    fetchMetaTags();
  }, []);
  return (
    <main className="service_details_page">
      {metaResponse && (
        <DynamicHelmet
          title={metaResponse?.data?.title}
          description={metaResponse?.data?.description}
        />
      )}
      <div className="Backward_Heading step_Heading" style={{ padding: 0 }}>
        <div>
          <ImageLazyLoading
            img={"/Image/1.png"}
            alt={"Go Back"}
            onClick={() => BackNavigation()}
            className={"text-[10px]"}
          />
          <p style={{ width: "50%" }}></p>
        </div>
        <p className="title" style={{ textTransform: "uppercase" }}>
          Shipping Policy
        </p>
      </div>

      <div className="content privacy_policy" style={{ padding: "20px" }}>
        <ViewDescription description={shippingPrivacy} />
      </div>
    </main>
  );
};

export default ShippingPrivacy;
