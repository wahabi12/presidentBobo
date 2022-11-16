let quotes = document.getElementById("quote");
let quo = document.getElementById("quo");
let btn = document.getElementById("btn");

let quote = [
  {
    cit: "« Il a fait un coup d'État et humiliait ses ministres avec un côté clownesque absolu. Les Bokassa, les Mobutu, les Amin Dada ont un point commun, explique-t-il, ils sont très souvent schizophrènes, et passent d'une certaine jovialité à un truc très dangereux en quelques secondes.»",
    aut: "--Fabrice Eboué",
  },
  {
    cit: "« Dans la ville où j'habite, les gens sont très sanguins. Dans la rue, il y a un franc-parler, dit-il. Je n'avais pas envie de trahir cet esprit, cette réalité humaine que j'ai essayé d'apporter au rôle.»",
    aut: "--Thomas Ngijol",
  },
  {
    cit: "« L'oiseau sur le baobab ne doit pas oublier qu'il a porté des lunettes»",
    aut: "--le Président Bobo",
  },
  {
    cit: "« Le crocodile n'attend pas que le gorille accouche»",
    aut: "--le Président Bobo",
  },
  {
    cit: "« ont fait le bonheur des internautes qui les ont largement fait circuler.»",
    aut: "--le Président Bobo",
  },
  {
    cit: "« J’ai déjà nommé ton frère ministre des sports je vais pas lui donner en plus le ministère des finances »",
    aut: "--le Président Bobo",
  },
  {
    cit: "«Aimer, ce n’est pas se regarder l’un l’autre, c’est regarder ensemble dans la même direction.»",
    aut: "--le Président Bobo",
  },
];

btn.addEventListener("click", me);
function me() {
  let randomQuote = quote[Math.floor(Math.random() * quote.length)];
  quotes.textContent = randomQuote.cit;
  quo.textContent = randomQuote.aut;
}
