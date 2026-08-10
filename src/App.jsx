
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="min-h-screen bg-[#0B1120] text-white">

      <main>
        {/* Your sections */}
        

        <section id="home" className="min-h-screen">
      <Hero />
        </section>

      <BottomNavbar />
        
      </main>

    </div>
  );
}

export default App;