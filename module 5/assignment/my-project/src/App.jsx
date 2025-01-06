import NavBar from "./components/NavBar.jsx";

export default function App() {
    return (
        <div>
            <NavBar/>
            <section id="home" className="min-h-screen bg-gray-100">Home Section</section>
            <section id="about" className="min-h-screen bg-gray-200">About Section</section>
            <section id="services" className="min-h-screen bg-gray-300">Services Section</section>
            <section id="contact" className="min-h-screen bg-gray-400">Contact Section</section>
        </div>
    )
}