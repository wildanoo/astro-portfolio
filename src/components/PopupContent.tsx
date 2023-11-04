import React, { useRef, type ReactNode, useEffect, useState } from "react";
import { useStore } from "@nanostores/react";
import { isPopupOpen, portoId } from "../stores/generalStore";

interface PopupContentProps {
  id: number;
  title?: string;
  footer?: boolean;
  content?: any;
}

const PopupContent: React.FC<PopupContentProps> = ({
  id,
  title,
  footer,
  content,
}) => {
  const $isPopupOpen = useStore(isPopupOpen);
  const $portoId = useStore(portoId);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${
        $isPopupOpen && $portoId == id ? "flex" : "hidden"
      } fixed top-0 left-0 right-0 z-50 w-full p-4  items-center justify-center bg-gray-300/60 overflow-x-hidden overflow-y-auto md:inset-0 h-full`}
    >
      <div className="relative w-full max-w-2xl max-h-full">
        <div
          ref={ref}
          className="relative bg-white rounded-lg shadow dark:bg-gray-700"
        >
          {title && (
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => {
                  document.body.classList.toggle("overflow-hidden");
                  isPopupOpen.set(!$isPopupOpen);
                }}
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
          )}
          <div className="p-6 space-y-6">{content}</div>
          <div className="flex items-center justify-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
            {footer ? (
              <>
                <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  I accept
                </div>
                <div className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">
                  Decline
                </div>
              </>
            ) : (
              <div
                className="text-gray-500 cursor-pointer bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={() => {
                  document.body.classList.toggle("overflow-hidden");
                  isPopupOpen.set(!$isPopupOpen);
                }}
              >
                Close
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupContent;
