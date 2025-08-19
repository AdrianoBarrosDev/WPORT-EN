import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #13131E;
    padding: 117px 100px 0px 100px;
    color: #D4CFFF;
    font-family: "Raleway";
    margin: 33px 0 0 0;
    gap: 65px;

    h2 {
        font-weight: bold;
        font-size: 70px;
        text-align: center;
    }

    @media (max-width: 768px) {
        padding-top: 15vw !important;
        padding-inline: 5vw !important;
    }

`;

const CardPlanos = styled.div`
    background-image: url('/BackgroundPlanos.png');
    background-size: calc(100% - 28px);;
    background-position: center;
    background-repeat: no-repeat;
    height: 670px;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    background-color: #1E1E2B;
    border: none;
    border-radius: 20px;
    max-width: 500px;
    padding: 0;

    @media (max-width: 576px) {
        height: auto;
    }
`;

const CardTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: row;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    width: 100%;
    padding: 27px 40px;
    color: white;

    h3 {
        margin-top: 17px;
        font-family: "Raleway";
        font-size: 30px;
        font-weight: bold;
    }

    @media (max-width: 576px) {
        padding: 20px 20px;

        h3 {
            font-size: 7vw;
        }
    }

`;

const TitlePlano = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 25px;
    border: none;
    border-radius: 10px;
    color: white;
    font-family: "Raleway";
    font-size: 15px;
    font-weight: bold;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        margin: 0;
    }

`;

const BalonPrice = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 140px;
    height: 140px;
    min-height: 90px;
    min-width: 90px;
    border: none;
    border-radius: 50%;
    font-family: "Poppins";
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    p {
        margin: 0;
    }

    .originalPrice {
        margin-top: -9px;
        margin-left: 50%;
        font-size: 10px;
        font-weight: bold;
        color: rgba(250, 250, 250, 0.7);
        text-decoration: line-through;
    }

    .actualPrice {
        font-size: 30px;
        font-weight: bold;
    }

    @media (max-width: 576px) {
        width: 23vw;
        height: 23vw;

        .originalPrice {
            font-size: 2vw;
        }
        .actualPrice {
            font-size: 5vw;
        }
    }

`;

const CardContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
    padding: 35px 42px;
    flex-grow: 1;

    p {
        font-size: 18px;
        margin-bottom: 45px;
    }

    @media (max-width: 576px) {
        padding: 20px 20px;
    }
`;

const Vantagens = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    font-family: "Poppins";
    margin-bottom: 15px;
    gap: 11px;

    p {
        font-size: 13px;
        margin: 0;
    }

`;

const IconBola = styled.div`
    width: 15px;
    height: 15px;
    min-width: 15px;
    min-height: 15px;
    border-radius: 50%;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Indicacao = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: "Poppins";
    gap: 7px;
    margin-top: 35px;

    h4 {
        font-size: 15px;
        font-weight: 400;
        margin: 4px 0;
        white-space: nowrap;
    }
    p {
        font-weight: 200;
        font-size: 11px;
        opacity: 0.7;
        margin: 0;
        white-space: nowrap;
    }

    @media (max-width: 576px) {
        margin-bottom: 30px;
        align-items: start;

        h4 {
            padding-top: 5px;
            font-size: 3vw;
        }
        p {
            font-size: 2.5vw;
            padding-top: 8px;
            white-space: normal;
        }
    }

`;

const VerticalLine = styled.div`
    width: 5px;
    height: 100%;
    min-height: 40px;
    border-radius: 5px;
`;

const ContratarButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #13131E;
  color: white;
  border: none;
  border-radius: 10px;
  align-self: center;
  position: relative;
  z-index: 0;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle farthest-corner at 10% 20%, ${props => props.color} 17.8%, rgba(255,255,255,1) 100.2%);
    filter: blur(10px);
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
    transition: opacity 0.8s ease;
    z-index: -1;
    border-radius: 10px;
  }

  &:hover {
    background: radial-gradient(circle farthest-corner at 10% 20%, ${props => props.color} 17.8%, rgba(255,255,255,1) 100.2%);
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease;
  }
`;

export function Planos() {

    const urlBasico = `${import.meta.env.VITE_API_URL}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20WPORT%27s%20Basic%20Plan.`
    const urlProfissional = `${import.meta.env.VITE_API_URL}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20WPORT%27s%20Professional%20Plan.`
    const urlPremium = `${import.meta.env.VITE_API_URL}?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20WPORT%27s%20Premium%20Plan.`

    return (
        <Container data-aos="fade-up" data-aos-duration="1000" id="planosSection">
            <h2>Choose Your Bundle</h2>
            <div className="row w-100 d-flex justify-content-center align-items-center" style={{gap: "80px"}}>
                <CardPlanos data-aos="flip-left" data-aos-duration="1200">

                    <CardTop style={{background: "linear-gradient(to right, #224A8C, #D5D5D5)"}}>

                        <div>
                            <TitlePlano style={{ backgroundColor: "#1B407C" }}>
                                <p>Basic</p>
                            </TitlePlano>
                            <h3>Basic Bundle</h3>
                        </div>

                        <BalonPrice style={{background: "linear-gradient(to bottom, #224A8C, #D5D5D5)"}}>
                            <p className="originalPrice">$ 199,99</p>
                            <p className="actualPrice">$ 149,99</p>
                        </BalonPrice>

                    </CardTop>

                    <CardContent>

                        <div className="d-flex justify-content-start align-items-start flex-column p-0 m-0">
                            <p>
                                Start with the essentials to showcase your brand or portfolio. A stylish and functional one-page website, ideal for taking your first steps in the digital world with professionalism and style.
                            </p>

                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #224A8C, #D5D5D5)"}} />
                                <p>Exclusive and responsive design</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #224A8C, #D5D5D5)"}} />
                                <p>Simple and straightforward structure</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #224A8C, #D5D5D5)"}} />
                                <p>Refined visual presentation with smooth animations</p>
                            </Vantagens>

                            <Indicacao>
                                <VerticalLine style={{backgroundColor: "#1B407C"}} />
                                <h4>Perfect for:</h4>
                                <p>those who need a quick and elegant online presence.</p>
                            </Indicacao>
                        </div>

                        <ContratarButton 
                            color='rgba(34, 74, 140, 1)'
                            onClick={() => window.open(urlBasico, "_blank")}
                        >
                            Choose
                        </ContratarButton>

                    </CardContent>
                    
                </CardPlanos>

                <CardPlanos data-aos="flip-left" data-aos-duration="1200">

                    <CardTop style={{background: "linear-gradient(to right, #7F5AF0, #D5D5D5)"}}>

                        <div>
                            <TitlePlano style={{backgroundColor: "#6A3EF2"}}>
                                <p>PRO</p>
                            </TitlePlano>
                            <h3>Professional Bundle</h3>
                        </div>

                        <BalonPrice style={{background: "linear-gradient(to bottom, #7F5AF0, #D5D5D5)"}}>
                            <p className="originalPrice">$ 299,99</p>
                            <p className="actualPrice">$ 249,99</p>
                        </BalonPrice>

                    </CardTop>

                    <CardContent>

                        <div className="d-flex justify-content-start align-items-start flex-column p-0 m-0">
                            <p>
                                Stand out with a complete and well-structured website. With multiple pages, you can tell your story, showcase your projects, and create a stronger connection with your audience.
                            </p>

                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #7F5AF0, #D5D5D5)"}} />
                                <p>Home page + 2 inner pages</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #7F5AF0, #D5D5D5)"}} />
                                <p>Better content organization</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #7F5AF0, #D5D5D5)"}} />
                                <p>More elaborate design with refined visual identity</p>
                            </Vantagens>

                            <Indicacao>
                                <VerticalLine style={{backgroundColor: "#6A3EF2"}} />
                                <h4>Ideal for:</h4>
                                <p>those who present their projects with more structure and style.</p>
                            </Indicacao>
                        </div>

                        <ContratarButton 
                            color='rgba(127,90,240,1)'
                            onClick={() => window.open(urlProfissional, "_blank")}
                        >
                            Choose
                        </ContratarButton>

                    </CardContent>
                    
                </CardPlanos>

                <CardPlanos data-aos="flip-left" data-aos-duration="1200">

                    <CardTop style={{background: "linear-gradient(to right, #D4AF37, #D5D5D5)"}}>

                        <div>
                            <TitlePlano style={{backgroundColor: "#CD9F09"}}>
                                <p>Premium</p>
                            </TitlePlano>
                            <h3>Premium Bundle</h3>
                        </div>
                        
                        <BalonPrice style={{background: "linear-gradient(to bottom, #D4AF37, #D5D5D5)"}}>
                            <p className="originalPrice">$ 449,99</p>
                            <p className="actualPrice">$ 399,99</p>
                        </BalonPrice>

                    </CardTop>

                    <CardContent>

                        <div className="d-flex justify-content-start align-items-start flex-column p-0 m-0">
                            <p>
                                A complete, strategic, and sophisticated website, designed to showcase your brand or portfolio with style and authority. Every detail is carefully crafted to enhance your image and impress your visitors.
                            </p>

                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #D4AF37, #D5D5D5)"}} />
                                <p>Fully customized layout, with up to 5 pages</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #D4AF37, #D5D5D5)"}} />
                                <p>Can include more advanced visual effects</p>
                            </Vantagens>
                            <Vantagens>
                                <IconBola style={{background: "linear-gradient(to right, #D4AF37, #D5D5D5)"}} />
                                <p>Basic SEO optimization: improves visibility on Google</p>
                            </Vantagens>

                            <Indicacao>
                                <VerticalLine style={{backgroundColor: "#CD9F09"}} />
                                <h4>Made for:</h4>
                                <p>those looking for impact and professional presence.</p>
                            </Indicacao>
                        </div>

                        <ContratarButton 
                            color='rgba(212, 175, 55, 1)'
                            onClick={() => window.open(urlPremium, "_blank")}
                        >
                            Choose
                        </ContratarButton>

                    </CardContent>

                </CardPlanos>

            </div>
            
            <img src="DivisaoConteudo.png" alt="Line Divisão" data-aos="fade-up" data-aos-duration="1000"/>

        </Container>
    );

}