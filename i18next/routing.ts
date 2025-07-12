import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["ru", "uz", "en", "tr"],
  defaultLocale: "en",
});
