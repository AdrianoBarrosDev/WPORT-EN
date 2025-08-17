import styled from "styled-components";

const Container = styled.div`
    background-color: #13131E;
    padding: 117px 100px 0px 100px;
    color: #D4CFFF;
    background-color: #1E1E2B;
    font-family: "Raleway";
    margin: 0;
    padding: 60px 100px;
    
    h2 {
        font-weight: bold;
        font-size: 55px;
        margin-bottom: 15px;
    }
    p {
        font-weight: 400;
        font-size: 20px;
    }

    @media (max-width: 576px) {
        padding-top: 15vw !important;
        padding-inline: 5vw !important;

        h2 {
            font-size: 30px;
        }
        p {
            font-size: 15px;
        }
    }

`;

const ProjetosCard = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background-color: #13131E;
    max-width: 450px;
    border: none;
    border-radius: 20px;
    padding: 10px;
    font-family: "Raleway";
    margin-top: 44px;

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        margin-block: 20px 15px;
        font-weight: bold;
        font-size: 20px;
    }

    p {
        font-weight: 600;
        font-size: 12px;
        color: rgba(212, 207, 255, 0.6);
        margin-bottom: 20px;
    }
`;

const AcesseButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 35px;
    background-color: #6A3EF2;
    color: white;
    border: none;
    border-radius: 5px;
    gap: 10px;
    font-weight: bold;
    font-size: 15px;

    img {
        width: 21px;
        height: 21px;
    }
`;

function Projetos() {

    const projetosEmpresa = [
        "WPORT Website",
        "Software Developer Portfolio",
        "Web Developer Portfolio"
    ];
      
    const descricao = [
        "A modern and responsive website, created to present our services clearly and accessibly. Designed to be the company's digital business card, with a professional layout that works perfectly on any device.",
        "This portfolio reflects the skills and design style that guide all of our work. Lightweight, functional, and responsive, it includes innovative 3D models and an efficient contact section — all designed to highlight projects and make it easy for companies to get in touch.",
        "This portfolio reflects the skills and design style that guide all of our work. Lightweight, functional, and responsive, it includes innovative 3D models and an efficient contact section — all designed to highlight projects and make it easy for companies to get in touch."
    ];
    const imagensProjetos = ["ProjetoWport", "PortfolioA", "PortfolioB"];
    const links = ["https://wportbr.netlify.app/", "https://adrianobarrosdev.com/", "https://brunopuzzuoli.netlify.app/"];

    return (
        <Container className="row d-flex flex-column justify-content-start align-items-start" data-aos="fade-up" data-aos-duration="1000">
                
            <h2>Our Projects</h2>
            <p>Take a look at some of the first websites we crafted with care and dedication. These projects reflect the standard we deliver to every client.</p>

            <div className="col-12 d-flex justify-content-around     aling-items-center flex-wrap">
                {projetosEmpresa.map((titleProjeto, index) => (
                    <ProjetosCard data-aos="slide-up" data-aos-duration="1200" key={index}>
                        <div id={`carousel${index}`} className="carousel slide">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target={`#carousel${index}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target={`#carousel${index}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target={`#carousel${index}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={`${imagensProjetos[index]}1.png`} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={`${imagensProjetos[index]}2.png`} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={`${imagensProjetos[index]}3.png`} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target={`#carousel${index}`} data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div> 
                        <div style={{padding: "10px"}}>
                            <h3>{titleProjeto}</h3>
                            <p>{descricao[index]}</p>
                            <AcesseButton onClick={() => window.open(links[index])}>
                                Visit Here
                                <img src="External.png" alt="External Icon"/>
                            </AcesseButton>
                        </div>
                        
                    </ProjetosCard>
                ))}
            </div>
                
        </Container>
    );
};

export default Projetos;