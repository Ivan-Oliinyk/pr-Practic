import { basename } from "path/posix";
import React from "react";
import styled from "styled-components";
import { baseTheme } from "../../../styles/theme";
import InputText from "../../../components/form/InputText";

const Container = styled.div`
  max-width: 136.6rem;
  margin-left: auto;
  margin-right: auto;
  height: calc(100vh - 9.6rem);
  display: flex;
`;

const ImgWrapper = styled.div`
  width: 63rem;
  height: 63rem;
  margin-right: 2.5rem;
  margin-top: 2.5rem;
  border-radius: 2.5rem;
  object-fit: cover;
  object-position: center;

  img {
    border-radius: 2.5rem;
  }
`;

const Content = styled.div`
  height: 100%;
  width: 62rem;
  border-left: 2px solid ${baseTheme.colors.greyLight};
  border-right: 2px solid ${baseTheme.colors.greyLight};
`;

const ContentBody = styled.div`
  height: calc(100% - 12.8rem);
  width: 100%;
  border-bottom: 2px solid ${baseTheme.colors.greyLight};
`;

const ContextFooter = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  max-width: 48.5rem;
`;

interface IGallaryPostProps {
  src: string;
  alt: string;
}

const GallaryPost: React.FC = () => {
  return (
    <Container>
      <ImgWrapper>
        <img src="/images/chat/img2.png" alt="{alt}" />
      </ImgWrapper>
      <Content>
        <ContentBody></ContentBody>
        <ContextFooter>
          <InputText value="Add comments"></InputText>
        </ContextFooter>
      </Content>
    </Container>
  );
};

export default GallaryPost;