import { CallToAction } from "../../components/CallToAction/CallToAction";
import { CustomersSay } from "../../components/CustomersSay/CustomersSay";
import { Specials } from "../../components/Specials/Specials";

export const HomePage = () => {
    return (
        <main className="home-page">
            <CallToAction />
            <Specials />
            <CustomersSay />
        </main>
    );
}