import Header from "../../components/Header";
import SearchCore from "../../components/Search";
import Footer from "../../components/Footer";

export default function Home() {
  return (

    <main className="min-h-screen flex flex-col bg-void">
      {/* Top-right navigation links */}
      <Header />


      <section className="flex-1 flex flex-col items-center justify-center px-4">
        <SearchCore />
      </section>


      <Footer />
    </main>
  );
}