import React from "react";
import { useStore } from "@nanostores/react";
import { isPopupOpen, portoId } from "../stores/generalStore";

const PortfolioCard = ({ title, imageUrl, description, id, data }) => {
  const $isPopupOpen = useStore(isPopupOpen);
  return (
    <div
      className="card cursor-pointer "
      onClick={async () => {
        isPopupOpen.set(!$isPopupOpen);
        document.body.classList.toggle("overflow-hidden");
        portoId.set(id);
      }}
    >
      <div className="max-h-[270px] overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          format="webp"
        />
      </div>
      <div className="content mt-4">
        <div>
          <div className="text-center text-lg font-medium">
            <div>{title}</div>
          </div>
          <p className="text-center text-base">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
