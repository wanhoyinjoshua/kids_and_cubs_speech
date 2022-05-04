import React from "react";

import {
  ServicesIcon,
  ServicesH2,
  ServicesP,
  TableContainer,
  ElementWrapper,
  Elementcard,
  ServicesH1
} from "./component";

const Table = () => {
  return (
    <TableContainer id="services">
      <ServicesH1>Our services</ServicesH1>
      <ElementWrapper>
        <Elementcard>
          <ServicesIcon src="/assets/images/image.svg"></ServicesIcon>
          <ServicesH2>help you speak</ServicesH2>
          <ServicesP>speak again bitch</ServicesP>
        </Elementcard>
        <Elementcard>
          <ServicesIcon src="/assets/images/image.svg"></ServicesIcon>
          <ServicesH2>help you speak</ServicesH2>
          <ServicesP>speak again bitch</ServicesP>
        </Elementcard>
        <Elementcard>
          <ServicesIcon src="/assets/images/image.svg"></ServicesIcon>
          <ServicesH2>help you speak</ServicesH2>
          <ServicesP>speak again bitch</ServicesP>
        </Elementcard>
      </ElementWrapper>
    </TableContainer>
  );
};

export default Table;
