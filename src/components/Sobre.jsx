import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    background-color: #13131E;
    padding: 55px 100px 150px 144px;
    color: #D4CFFF;
    font-family: "Raleway";

    h2 {
        font-weight: bold;
        font-size: 55px;
        margin-bottom: 60px;
    }

    img {
        width: 100%;
        object-fit: cover;
    }

    @media (max-width: 576px) {
        padding-top: 15vw !important;
        padding-inline: 5vw !important;
        text-align: center;
        align-items: center;

        h2 {
            font-size: 10vw;
        }
    }

`;

const Painel = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background-color: #1E1E2B;
    border: 1px solid #D4CFFF;
    border-radius: 15px;
    font-family: "Poppins";
    margin-bottom: 25px;
    outline: 10px solid #1E1E2B;
    padding: 40px;

    h3 {
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: bold;
    }

    p {
        font-size: 15px;
        margin-bottom: 20px;
        color: rgba(212, 207, 255, 0.7);
    }

    @media (max-width: 576px) {
        text-align: center;
        padding: 30px 20px;

        h3 {
            font-size: 7vw;
        }
        p {
            font-size: 4vw;
        }
    }
    
`;

export function Sobre() {
    return (
        <Container data-aos="fade-right" data-aos-duration="1200">
            <h2>About the Company</h2>

            <Painel>
                <h3>We turn ideas into digital presence</h3>
                <p>
                    WPORT was born with a simple goal: to help students, professionals, and small businesses get a beautiful, functional, and affordable website—without hassle and without breaking the bank.
                </p>
                <p>
                    We are a young company, created by people who understand that having a good website today is essential, even for those just starting out. Our focus is to offer fast, personalized solutions with professional quality—all at a fair price.
                </p>
                <p>
                    Here, every project is treated with genuine care. From the first contact to the final delivery, you follow the entire process clearly and simply.
                </p>
                <p>
                    More than creating websites, we want to help people present themselves to the world with confidence.
                </p>
            </Painel>
                        
        </Container>
    );
}