"use client";
import ErrorContent from "@/components/error-404/ErrorContent";
import WrapperCommon from "@/layout/WrapperCommon";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <html>
        <body>
          <WrapperCommon>
            <main>
              <ErrorContent />
            </main>
          </WrapperCommon>
        </body>
      </html>
    </>
  );
};

export default ErrorPage;
