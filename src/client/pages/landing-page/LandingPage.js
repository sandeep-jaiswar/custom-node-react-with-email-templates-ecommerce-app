import React from "react";
import Carousel from "../../common/Carousel";
import Loader from "../../common/Loader";
import HocPage from "../Hoc-Page/HocPage";

export default function LandingPage() {
  const urls = [
    "https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80",
    "https://images.unsplash.com/photo-1584680226833-0d680d0a0794?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1545007805-a44ee83438fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80"
  ];
  return (
    <HocPage>
      <div className="carousel-container">
        <Carousel imgUrls={urls} />
      </div>
    </HocPage>
  );
}
