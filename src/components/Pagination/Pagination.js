import React, { useState } from "react";
import { Container, ListaPage } from "./Styled";

const Pagination = ({ setStart, filterList, setFinish }) => {
  const viewPage = (page) => {
    setFinish(page * 9);
    setStart(page * 9 - 9);
    setClassActive("pageActive" + page);
    setCurrent(page);
  };

  const [classActive, setClassActive] = useState("pageActive1");
  const [current, setCurrent] = useState(1);

  const first =
    Math.max(current - 2, 1) < Math.ceil(filterList.length / 9) - 4
      ? Math.max(current - 2, 1)
      : Math.max(Math.ceil(filterList.length / 9) - 4, 1);

  return (
    <Container>
      {Array.from({ length: Math.min(Math.ceil(filterList.length / 9), 5) })
        .map((_, i) => i + first)
        .map((page) => (
          <ListaPage
            className={classActive}
            page={page}
            key={page}
            onClick={() => {
              viewPage(page);
            }}
          >
            {page}
          </ListaPage>
        ))}
    </Container>
  );
};

export default Pagination;
