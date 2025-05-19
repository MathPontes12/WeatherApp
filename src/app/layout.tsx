import type { Metadata } from "next";
import "./globals.css";
import WeatherProvider from "@/components/ContextWeather/Provider";


export const metadata: Metadata = {
  title: "Weather Application",
  description: "Web site com clima/tempo, e previsão do tempo para dias posteriores",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <WeatherProvider>
          {children}
        </WeatherProvider>
      </body>
    </html>
  );
}
