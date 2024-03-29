"use client";

import { useState } from "react";
import axios from "axios";
import "./price-page.css";

export default function Home() {
  const [isAnnualBilling, setIsAnnualBilling] = useState(true);

  const toggleBilling = () => {
    setIsAnnualBilling(!isAnnualBilling);
  };
  const buyProduct1 = async (productId) => {
    try {
      const response = await axios.post("/api/purchaseProduct", { productId });
      console.log(response.data);
      window.open(response.data.checkoutUrl, "_blank");
    } catch (error) {
      console.error(error);
      alert("Failed to buy product #1");
    }
  };

  const free = [
    "720p HD downloads",
    "1 stock video per project",
    "1 stock audio per project",
    "Free AI credits",
    "Maximum 12 projects",
    "Video length up to 10 mins",
  ];
  const plusFeatures = [
    "1080p Full-HD downloads",
    "5 stock videos per project",
    "5 stock audio per project",
    "Plus AI credits",
    "Save unlimited projects online",
    "Unlimited video length",
    "Custom branding",
    "30GB cloud storage",
    "100GB video hosting space",
    "Upload custom fonts",
    "Save up to 100 templates",
    "No FlexClip watermark",
  ];

  const business = [
    "Unlimited stock videos",
    "4K Ultra HD Downloads",
    "Business AI credits",
    "Unlimited stock audio",
    "Save unlimited projects online",
    "Unlimited video length",
    "Custom branding",
    "100GB cloud storage",
    "1TB video hosting space",
    "Upload custom fonts",
    "Save up to 200 templates",
    "No FlexClip watermark",
  ];

  return (
    <div className="group">
      <p className="headtext">Choose the plan that's right for you</p>
      <div className="Bill">
        <div className="div-_text">
          <p className="billed">Billed Monthly</p>
        </div>
        <label className="switch">
          <input type="checkbox" checked={isAnnualBilling} onChange={toggleBilling} />
          <span className="slider"></span>
        </label>
        <div className="div-_text">
          <p className="billed">Billed Annually</p>
        </div>
        <div className="div-_cut-_tip">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v0d0t9zjzuo-3%3A2214?alt=media&token=2e722c07-6ca3-4f36-bc5b-ced834d9973c"
            alt="Not Found"
            className="icon"
          />
          <p className="save">save up to 50%</p>
        </div>
      </div>
      <div className="div-_list">
        <div className="div-_listitem">
          <p className="Text">Free</p>
          <div className="div-_price1">
            <p className="price">$0</p>
            <p className="mo">/mo</p>
          </div>
          <div className="div-_select-_btnfree">
            <p className="choose-free">Choose Free</p>
          </div>
          <div className="div-_feature-_list">
            {free.map((feature, index) => (
              <div key={index} className="div-_featureitem">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v0d0t9zjzuo-3%3A2007?alt=media&token=8358bd7c-6ef9-4a43-aaa4-aca00aae5cbc"
                  alt="Feature Icon"
                  className={`icon-`}
                />
                <p className={`feature-text-`}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="div-_listitem1">
          <p className="Text">Plus</p>
          <div className="div-_price1">
            <p className="price">{isAnnualBilling ? "$9.99" : "$19.99"}</p>
            {isAnnualBilling ? (
              <div>
                <div className="div-_unit">
                  <div className="span-_cut">
                    <p className="discont">$19.99</p>
                  </div>
                </div>
                <p className="mo">/mo</p>
              </div>
            ) : (
              <p className="mo">/mo</p>
            )}
          </div>

          <button
            className="div-_select-_btn"
            onClick={() => buyProduct1("304756")}
          >
            <div className="choose-business">Choose Business</div>
          </button>
          <div className="div-_feature-_list">
            {business.map((feature, index) => (
              <div key={index} className="div-_featureitem">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v0d0t9zjzuo-3%3A2007?alt=media&token=8358bd7c-6ef9-4a43-aaa4-aca00aae5cbc"
                  alt="Feature Icon"
                  className={`icon-`}
                />
                <p className={`feature-text-`}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="div-_listitem">
          <p className="Text">Business</p>
          <div className="div-_price1">
            <p className="price">{isAnnualBilling ? "$19.99" : "$29.99"}</p>
            {isAnnualBilling ? (
              <div>
                <div className="div-_unit">
                  <div className="span-_cut">
                    <p className="discont">$29.99</p>
                  </div>
                </div>
                <p className="mo">/mo</p>
              </div>
            ) : (
              <p className="mo">/mo</p>
            )}
          </div>

          <button
            className="div-_select-_btn"
            onClick={() => buyProduct1("304938")}
          >
            <div className="choose-business">Choose Business</div>
          </button>
          <div className="div-_feature-_list">
            {business.map((feature, index) => (
              <div key={index} className="div-_featureitem">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/v0d0t9zjzuo-3%3A2007?alt=media&token=8358bd7c-6ef9-4a43-aaa4-aca00aae5cbc"
                  alt="Feature Icon"
                  className={`icon-`}
                />
                <p className={`feature-text-`}>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
