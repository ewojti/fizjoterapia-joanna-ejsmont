import images from "./images";

const services = [
  {
    id: 1,
    title: "Fizjoterapia uroginekologiczna",
    icon: `${images.mother}`,
    types: [
      "ocena mięśni dna miednicy po porodzie",
      "ciąża i przygotowanie do porodu",
      "terapia blizn",
      "trening medyczny w rozejściu mięśni brzycha oraz mięśni dna miednicy",
    ],
  },
  {
    id: 2,
    title: "Fizjoterapia neurologiczna",
    icon: `${images.brain}`,
    types: [
      "rehabilitacja pacjentów z chorobami nerwowo-mięśniowymi i neurologicznych takich jak: udary mózgu, stwardnienie rozsiane",
      "bóle głowy",
    ],
  },
  {
    id: 3,
    title: "Fizjoterapia ortopedyczna",
    icon: `${images.rehabilitation}`,
    types: [
      "problemy bólowe kręgosłupa i stawów obwodowych",
      "urazy i zwyrodnienia stawów",
      "funkcjonalny trening medyczny dostosowany do konkretnej dyscypliny sportowej",
    ],
  },
  {
    id: 4,
    title: "Fizjoterapia dzieci",
    icon: `${images.children}`,
    types: ["badanie stóp", "wady postawy"],
  },
];

export default services;
