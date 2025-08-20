import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #1E1E2B;
    font-family: "Raleway";
    color: white;
    padding: 25px 165px;
    height: 120px;

    img {
        width: 68px;
        object-fit: cover;
    }

    .nomeEmpresa {
        font-size: 30px;
        font-weight: bold;
        margin: 0;
        color: #D4CFFF;
    }

    .madeBy {
        font-size: 10px;
        font-weight: bold;
        margin: 0;
        color: rgba(250, 250, 250, 0.5);
    }

    .verPlanos {
        width: 120px;
        height: 20px;
        background-color: transparent;
        border: none;
        color: white;
        font-weight: bold;
        font-size: 15px;
    }
    
    .faleConosco {
        width: 140px;
        height: 45px;
        border: none;
        border-radius: 5px;
        background-color: #6A3EF2;
        color: white;
        font-weight: bold;
        font-size: 15px;
    }

    @media (max-width: 768px) {
        padding: 25px;
        margin-top: 200px;
    }

    @media (max-width: 576px) {

        img {
            width: 30px;
            object-fit: cover;
        }

        .nomeEmpresa {
            font-size: 10px;
            font-weight: bold;
            margin: 0;
            color: #D4CFFF;
        }

        .madeBy {
            font-size: 6px;
            font-weight: bold;
            margin: 0;
            color: rgba(250, 250, 250, 0.5);
        }
        
        .verPlanos {
            width: 80px;
            height: 20px;
            background-color: transparent;
            border: none;
            color: white;
            font-weight: bold;
            font-size: 10px;
        }
        
        .faleConosco {
            width: 90px;
            height: 30px;
            border: none;
            border-radius: 5px;
            background-color: #6A3EF2;
            color: white;
            font-weight: bold;
            font-size: 10px;
        }

        .mobile {
            gap: 10px !important;
        }

        .conjuntoLogo {
            align-items: end !important;
        }

    }
`;

export function Footer() {

    const scrollToPlanos = () => {
        const section = document.getElementById('planosSection');
        if(section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    }

    const urlBasica = import.meta.env.VITE_API_URL + '?text=Hello%2C%20I%20am%20reaching%20out%20to%20learn%20more%20about%20the%20services%20offered%20by%20WPORT.';

    return (
        <Container data-aos="fade-up" data-aos-duration="1200" data-aos-once="true">
            
            <div className="d-flex justify-content-center align-items-center flex-column" data-aos="fade-right" data-aos-duration="2000" data-aos-once="true">
                <div className="d-flex justify-content-center align-items-start gap-3 mobile conjuntoLogo">
                    <img src="LogoWportSmall.png" alt="Logo WPORT" />
                    <p className="nomeEmpresa">WPORT</p>
                </div>
                <p className="madeBy">Made By Adriano Barros</p>
            </div>
            
            <div className="d-flex justify-content-center align-items-center gap-3 mobile" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                <button className="verPlanos" onClick={scrollToPlanos}>View Bundles</button>
                <button className="faleConosco" onClick={() => window.open(urlBasica, "_blank")}>Contact Us</button>
            </div>
            

        </Container>
    );
}