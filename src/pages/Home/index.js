import { Features } from "../../components/Features/features";
import { Hero } from "../../components/Hero/Hero";
import { Details } from "../../components/Details";
import tv from '../../assets/img/tv.png'
import mobile from '../../assets/img/mobile.jpeg';
import devices from '../../assets/img/device-pile.png';
import child from '../../assets/img/child.png'
import { Head } from "../../Head";

export function Home(){
    return (
        <>
        <Head title="Início" />
        <Hero />
        <Features
            title="Aproveite na TV."
            subtitle="Assista em Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, aparelhos de Blu-ray e outros dispositivos."
            img={tv}
            alt="Aproveite na tv."
        />

        <Features
            title="Baixe séries para assistir offline."
            subtitle="Salve seus títulos favoritos e sempre tenha algo para assistir."
            img={mobile}
            alt="Baixe séries."
            reverse={true}
        />

        <Features
            title="Assista quando quiser."
            subtitle="Assista no celular, tablet, Smart TV ou notebook sem pagar a mais por isso."
            img={devices}
            alt="Assista quando quiser."
        />

        <Features
            title="Crie perfis para crianças."
            subtitle="Deixe as crianças se aventurarem com seus personagens favoritos em um espaço feito só para elas, sem pagar a mais por isso."
            img={child}
            alt="Crie perfis para crianças."
            reverse={true}
        />

        <Details />
        </>
    )
}