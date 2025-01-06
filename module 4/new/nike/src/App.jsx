import Hero from "./section/Hero.jsx";
import CustomerReview from "./section/CustomerReview.jsx";
import PopularProducts from "./section/PopularProducts.jsx";
import Services from "./section/Services.jsx";
import SpecialOffer from "./section/SpecialOffer.jsx";
import Subscribe from "./section/Subscribe.jsx";
import SuperQuality from "./section/SuperQuality.jsx";
import NavBar from "./components/NavBar.jsx";

const App = () => (
    <main className="relative">
            <NavBar/>
        <section className="xl:padding-l wide:padding-r padding-b">
            <Hero/>
        </section>
        <section className="padding">
            <PopularProducts/>
        </section>
        <section className="padding">
            <SuperQuality/>
        </section>
        <section className="padding-x py-10">
            <Services/>
        </section>
        <section className="padding">
            <SpecialOffer/>
        </section>
        <section className="bg-pale-blue padding">
            <CustomerReview/>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
            <Subscribe/>
        </section>
        <section className="padding-x bg-black padding-t pb-8">
            footer
        </section>
    </main>
)

export default App;