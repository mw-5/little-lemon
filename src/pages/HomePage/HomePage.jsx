import { CallToAction } from "../../components/CallToAction/CallToAction";
import { Specials } from "../../components/Specials/Specials";

export const HomePage = () => {
    return (
        <main className="home-page">
            <CallToAction />
            <Specials />
        </main>
    );
}