import React, { Component } from "react";
import styled from "styled-components";
import { default as Integrador2 } from "../../../images/g1.png";
import Integrador1 from "../../../images/g1M.jpg";
export default class Project0 extends Component {
  render() {
    return (
      <Align>
        <Title>Sistema de precificação de produtos</Title>
        <Container>
          <Right>
            <Subtitle>
              Desenvolvimento de um Aplicativo Exclusivo para a empresa Gestão
              do preço
            </Subtitle>
            <Text>
              Um projeto que visa criar um sistema completo de ficha técnica de
              produtos em geral, integrado a um sistema ERP e PDV, busca
              auxiliar empreendedores na sua demanda de vendas diárias de
              produtos, visando calcular de forma automática e parametrizada
              detalhadamente seus produtos e vendas
            </Text>
            <Link href="/#">Mais informações aqui</Link>
            <ImagePC src={Integrador2} alt="projeto2"></ImagePC>
          </Right>

          <ContainerImage>
            <Image src={Integrador1} alt="projeto1" />
          </ContainerImage>
        </Container>
      </Align>
    );
  }
}
const Image = styled.img`
  width: 310px;
`;

const Align = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  direction: rtl;
  @media (max-width: 1250px) {
    flex-direction: column;
  }
`;
const Right = styled.div`
  margin-left: 2%;
`;
const ContainerImage = styled.div`
  border: 1px solid #000;
`;
const ImagePC = styled.img`
  border: 1px solid #000;
  width: 113vh;
  @media (max-width: 1250px) {
    display: none;
  }
`;
const Title = styled.h2`
  margin: 15vh 0 7vh 0;
`;
const Subtitle = styled.h3``;
const Text = styled.p``;
const Link = styled.a`
  font-weight: bold;
  color: #000;
  margin: 0 auto;
`;
