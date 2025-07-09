import { translation } from "@/i18next/server";
import { LngParams } from "@/types";
import React from "react";

async function Page({ params: { lng } }: LngParams) {
  const { t } = await translation(lng);
  return (
    <div className="mt-24 w-10 p-9 font-spaceGrotesk text-xl font-bold">
      {t("home")}
    </div>
  );
}

export default Page;
