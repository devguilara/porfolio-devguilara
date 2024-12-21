import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio Guilherme Lara - Backend Developer ",
  description:
    "This is the portfolio of Guilherme Lara. I am a backend developer a I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challengesEsse é o portfólio de Guilherme Lara. Sou um desenvolvedor backend, adoro aprender coisas novas e estou sempre aberto a colaborar com outras pessoas. Aprendo rápido e estou sempre em busca de novos desafios.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
