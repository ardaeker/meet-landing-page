import "@/assets/styles/tailwind.css";

import { redHatDisplay } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "Meet Landing Page - Frontend Mentor",
  description:
    "This project is a solution to the Meet Landing Page challenge on Frontend Mentor, developed by Arda Eker.",
};

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}
