import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const definePreco = (vendaList) => {
  let valor = 0;
  for (let index = 0; index < vendaList.length; index++) {
    if (vendaList[index].pagamento.toLowerCase().includes("vista"))
      valor += vendaList[index].precovista * vendaList[index].quantidade;
    else if (vendaList[index].pagamento.toLowerCase().includes("prazo"))
      valor += vendaList[index].precoprazo * vendaList[index].quantidade;
    else valor += vendaList[index].precocheque * vendaList[index].quantidade;
  }
  return valor.toFixed(2);
};

const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

function GerarPDF(name, dateSale, cpf, formaPagamento, vendaList) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
  const reportTitle = [
    {
      text: `Venda - ${name} / Data - ${dateSale} / Pagamento: ${formaPagamento}`,
      fontSize: 13,
      bold: true,
      margin: [15, 20, 0, 45],
    },
  ];

  const dados = vendaList.map((produto) => {
    return [
      {
        text: produto.nome,
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: produto.quantidade,
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: produto.pagamento.toLowerCase().includes("vista")
          ? produto.precovista.toFixed(2)
          : produto.pagamento.toLowerCase().includes("prazo")
          ? produto.precoprazo.toFixed(2)
          : produto.precocheque.toFixed(2),
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: produto.pagamento.toLowerCase().includes("vista")
          ? (produto.precovista * produto.quantidade).toFixed(2)
          : produto.pagamento.toLowerCase().includes("prazo")
          ? (produto.precoprazo * produto.quantidade).toFixed(2)
          : (produto.precocheque * produto.quantidade).toFixed(2),
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
    ];
  });

  const details = [
    {
      table: {
        headerRows: 1,
        widths: ["*", "*", "*", "*"],
        body: [
          [
            {
              text: "Produto",
              style: "tableHeader",
              fontSize: 10,
            },
            {
              text: "Quantidade",
              style: "tableHeader",
              fontSize: 10,
            },
            {
              text: "Preço Unitário",
              style: "tableHeader",
              fontSize: 10,
            },
            {
              text: "Preço Total",
              style: "tableHeader",
              fontSize: 10,
            },
          ],
          ...dados,
          [
            {
              text: "",
              fontSize: 9,
              margin: [0, 2, 0, 2],
            },
            {
              text: "",
              fontSize: 9,
              margin: [0, 2, 0, 2],
            },
            {
              text: "Valor total:",
              fontSize: 9,
              bold: true,
              margin: [0, 2, 0, 2],
            },
            {
              text: `${definePreco(vendaList)}`,
              bold: true,
              fontSize: 9,
              margin: [0, 2, 0, 2],
            },
          ],
        ],
      },
      layout: "lightHorizontalLines",
    },
    {
      table: {
        headerRows: 1,
        widths: ["*"],
        body: [
          [
            {
              alignment: "center",
              border: [false, false, false, true],
              text: `Ass. em nome de ${name} - CPF: ${cpfMask(cpf)}`,
              style: "tableHeader",
              margin: [0, 50, 0, 35],
              fontSize: 12,
            },
          ],
        ],
        layout: {
          defaultBorder: false,
        },
      },
    },
  ];

  function Rodape(currentPage, pageCount) {
    return [
      {
        text: `${currentPage}/${pageCount}`,
        alignment: "right",
        fontSize: 9,
        margin: [0, 10, 20, 0],
      },
    ];
  }

  const docDefine = {
    pageSize: "A4",
    pageMargins: [15, 50, 15, 40],

    header: [reportTitle],
    content: [details],
    footer: Rodape,
  };

  pdfMake.createPdf(docDefine).download();
}

export default GerarPDF;
