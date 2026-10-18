import BottomNavbar from "../components/BottomNavbar/BottomNavbar";
import ContactSection from "../components/contact/Contact";

function Contact() {
  return (
    <>
    <div>
      <BottomNavbar />

      <main className="min-h-screen">
        <ContactSection />
      </main>
    </div>
    </>

  );
}

export default Contact;