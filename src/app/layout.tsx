import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import BookingPopUp from "@/components/BookingPopUp/BookingPopUp";
// import BookingPopUp from "./../components/BookingPopUp/BookingPopUp.jsx";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" type="image/png" href="./favicon.png" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
        <BookingPopUp />
      </body>
    </html>
  );
}
