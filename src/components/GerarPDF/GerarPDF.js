import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";

const definePreco = (items) => {
  let valor = 0;
  for (let index = 0; index < items.length; index++) {
    valor += items[index].valor * items[index].quant;
  }
  return valor.toFixed(2);
};

function GerarPDF(name, dateSale, formaPagamento, vendaList) {
  pdfMake.vfs = pdfFonts.pdfMake.vfs;

  const dados = vendaList.items.map((produto) => {
    return [
      {
        text: produto.name,
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: produto.quant,
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: produto.valor.toFixed(2),
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
      {
        text: (produto.valor * produto.quant).toFixed(2),
        fontSize: 9,
        margin: [0, 2, 0, 2],
      },
    ];
  });

  const details = {
    content: [
      {
        margin: [0, 0, 0, 0],
        image:
          "data:image/png;base64,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",

        width: 30,
      },
      {
        table: {
          headerRows: 1,
          widths: ["*"],
          body: [
            [
              {
                text: `Geraldo Henrique - Data: ${dateSale}`,
                style: "tableHeader",
                alignment: "center",
                bold: true,
                fontSize: 13,
                margin: [0,0,0,20]
              },
            ],
            [
              {
                text: "",
                fontSize: 9,
                margin: [0, 2, 0, 2],
              },
            ]
          ],
        },
        layout: "lightHorizontalLines",
      },
      {
        text: `Cliente: ${name} / Pagamento: ${formaPagamento}`,
        fontSize: 13,
        bold: true,
        margin: [0, 20, 0, 30],
      },
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
                text: `${definePreco(vendaList.items)}`,
                bold: true,
                fontSize: 9,
                margin: [0, 2, 0, 2],
              },
            ],
          ],
        },
        layout: "lightHorizontalLines",
      },
    ],
  };

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
    pageMargins: [15, 10, 15, 40],

    header: [],
    content: [details.content],
    footer: Rodape,
  };

  pdfMake.createPdf(docDefine).open();
}

export default GerarPDF;
