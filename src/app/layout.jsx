import "./globals.css";
import NavBar from "@/components/shared/NavBar";
import Footer from "@/components/shared/Footer";
import { AuthProvider } from "@/provider/AuthProvider";
import { Toaster } from "react-hot-toast";
import QueryProvider from "@/provider/QueryProvider";

export const metadata = {
  title: "Car Xpress | Rent Your Dream Car",
  description:
    "Discover a seamless way to rent premium cars at the best prices.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` h-screen flex flex-col`}>
        <QueryProvider>
          {" "}
          <AuthProvider>
            <header>
              <NavBar />
            </header>
            <main className="flex-1 bg-black">{children}</main>
            <footer>
              <Footer />
            </footer>
            <Toaster position="top-right" reverseOrder={false} />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
