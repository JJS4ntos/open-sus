const prepositions = [
  "A",
  "ante",
  "após",
  "até",
  "com",
  "contra",
  "de",
  "desde",
  "em",
  "entre",
  "para",
  "por",
  "perante",
  "sem",
  "sob",
  "sobre",
  "trás",
];

const pronouns = [
  "eu",
  "tu",
  "você",
  "ele",
  "ela",
  "nós",
  "vós",
  "vocês",
  "eles",
  "elas",
  "me",
  "mim",
  "comigo",
  "te",
  "ti",
  "contigo",
  "o",
  "a",
  "lhe",
  "se",
  "si",
  "consigo",
  "nos",
  "conosco",
  "vos",
  "convosco",
  "os",
  "as",
  "lhes",
  "se",
  "si",
  "consigo",
  "meu",
  "minha",
  "meus",
  "minhas",
  "teu",
  "tua",
  "teus",
  "tuas",
  "seu",
  "sua",
  "seus",
  "suas",
  "nosso",
  "nossa",
  "nossos",
  "nossas",
  "vosso",
  "vossa",
  "vossos",
  "vossas",
  "seu",
  "sua",
  "seus",
  "suas",
  "esta",
  "essa",
  "aquela",
  "estas",
  "essas",
  "aquelas",
  "este",
  "esse",
  "aquele",
  "estes",
  "esses",
  "aqueles",
  "este",
  "esta",
  "estes",
  "estas",
  "isto",
  "esse",
  "essa",
  "esses",
  "essas",
  "isso",
  "aquele",
  "aquela",
  "aqueles",
  "aquelas",
  "aquilo",
  "você",
  "senhor",
  "senhora",
  "vossa",
  "excelência",
  "vossa magnificência",
  "vossa senhoria",
  "vossa majestade",
  "vossa alteza",
  "vossa santidade",
  "vossa eminência",
  "vossa reverendíssima",
  "algum",
  "alguma",
  "alguns",
  "algumas",
  "nenhum",
  "nenhuma",
  "nenhuns",
  "nenhumas",
  "muito",
  "muita",
  "muitos",
  "muitas",
  "pouco",
  "pouca",
  "poucos",
  "poucas",
  "todo",
  "toda",
  "todos",
  "todas",
  "outro",
  "outra",
  "outros",
  "outras",
  "certo",
  "certa",
  "certos",
  "certas",
  "vário",
  "vária",
  "vários",
  "várias",
  "tanto",
  "tanta",
  "tantos",
  "tantas",
  "quanto",
  "quanta",
  "quantos",
  "quantas",
  "qualquer",
  "quaisquer",
  "qual",
  "quais",
  "um",
  "uma",
  "uns",
  "umas",
  "quem",
  "alguém",
  "ninguém",
  "tudo",
  "nada",
  "outrem",
  "algo",
  "cada",
  "o qual",
  "a qual",
  "os quais",
  "as quais",
  "cujo",
  "cuja",
  "cujos",
  "cujas",
  "quanto",
  "quanta",
  "quantos",
  "quantas",
  "quem",
  "que",
  "onde",
  "qual",
  "quais",
  "quanto",
  "quantos",
  "quanta",
  "quantas",
  "quem",
  "que",
];

const adverbs = [
  "bem",
  "mal",
  "assim",
  "adrede",
  "melhor",
  "pior",
  "depressa",
  "devagar",
  "acinte",
  "debalde",
  "aí",
  "aqui",
  "acolá",
  "cá",
  "lá",
  "ali",
  "adiante",
  "abaixo",
  "embaixo",
  "acima",
  "adentro",
  "dentro",
  "afora",
  "fora",
  "defronte",
  "atrás",
  "detrás",
  "atrás",
  "além",
  "aquém",
  "antes",
  "algures",
  "nenhures",
  "alhures",
  "aonde",
  "longe",
  "perto",
  "hoje",
  "já",
  "afinal",
  "logo",
  "agora",
  "amanhã",
  "amiúde",
  "antes",
  "ontem",
  "tarde",
  "breve",
  "cedo",
  "depois",
  "enfim",
  "entrementes",
  "ainda",
  "jamais",
  "nunca",
  "sempre",
  "doravante",
  "outrora",
  "primeiramente",
  "imediatamente",
  "antigamente",
  "provisoriamente",
  "sucessivamente",
  "constantemente",
  "sim",
  "deveras",
  "indubitavelmente",
  "decididamente",
  "certamente",
  "realmente",
  "decerto",
  "certo",
  "efetivamente",
  "possivelmente",
  "provavelmente",
  "acaso",
  "porventura",
  "quiçá",
  "será",
  "talvez",
  "casualmente",
  "só",
  "somente",
  "salvo",
  "exclusivamente",
  "apenas",
  "também",
  "inclusivamente",
  "ainda",
  "mesmo",
  "até",
  "ultimamente",
  "depois",
  "primeiramente",
  "quando",
  "como",
  "onde",
  "aonde",
  "donde",
  "por que",
  "às pressas",
  "passo a passo",
  "de longe",
  "hoje em dia",
  "de vez em quando",
];

const contractions = [
  "à",
  "às",
  "ao",
  "aos",
  "coa",
  "coas",
  "co",
  "cos",
  "cum",
  "cuns",
  "cuma",
  "cumas",
  "comigo",
  "contigo",
  "consigo",
  "conosco",
  "convosco",
  "do",
  "da",
  "dos,",
  "das",
  "dum",
  "duns",
  "duma",
  "dumas",
  "dele",
  "dela",
  "deles",
  "delas",
  "deste",
  "desta",
  "destes",
  "destas",
  "disto",
  "desse",
  "dessa",
  "desses",
  "dessas",
  "disso",
  "daquele",
  "daquela",
  "daqueles",
  "daquelas",
  "daquilo",
  "doutro",
  "doutra",
  "doutros",
  "doutras",
  "doutrem",
  "doutrora",
  "dalgum",
  "dalguma",
  "dalguns",
  "dalgumas",
  "dalguém",
  "dalgo",
  "dalgures",
  "dalhures",
  "daqui",
  "daí",
  "dali",
  "daquém",
  "dalém",
  "dentre",
  "dantes",
  "dacolá",
  "donde",
  "no",
  "na",
  "nos",
  "nas",
  "num",
  "nuns",
  "numa",
  "numas",
  "nele",
  "nela",
  "neles",
  "nelas",
  "neste",
  "nesta",
  "nestes",
  "nestas",
  "nisto",
  "nesse",
  "nessa",
  "nesses",
  "nessas",
  "nisso",
  "naquele",
  "naquela",
  "naqueles",
  "naquelas",
  "naquilo",
  "noutro",
  "noutra",
  "noutros",
  "noutras",
  "noutrem",
  "nalgum",
  "nalguma",
  "nalguns",
  "nalgumas",
  "nalguém",
  "pro",
  "pra",
  "pros",
  "pras",
  "prum",
  "pruns",
  "pruma",
  "prumas",
  "pelo",
  "pela",
  "pelos",
  "pelas",
  "estoutro",
  "estoutra",
  "estoutros",
  "estoutras",
  "essoutro",
  "essoutra",
  "essoutros",
  "essoutras",
  "aqueloutro",
  "aqueloutra",
  "aqueloutros",
  "aqueloutras",
  "doravante",
  "destoutro",
  "destoutra",
  "destoutros",
  "destoutras",
  "dessoutro",
  "dessoutra",
  "dessoutros",
  "dessoutras",
  "daqueloutro",
  "daqueloutra",
  "daqueloutros",
  "daqueloutras",
  "nestoutro",
  "nestoutra",
  "nestoutros",
  "nestoutras",
  "nessoutro",
  "nessoutra",
  "nessoutros",
  "nessoutras",
  "naqueloutro",
  "naqueloutra",
  "naqueloutros",
  "naqueloutras",
];

const conjuncoes = [
  "e",
  "nem",
  "mas",
  "também",
  "porém",
  "contudo",
  "todavia",
  "entretanto",
  "ou",
  "ora",
  "já",
  "quer",
  "quer",
  "logo",
  "pois",
  "portanto",
  "porque",
  "que",
  "como",
  "visto",
  "como",
  "caso",
  "conforme",
  "se",
  "caso",
  "desde",
  "contanto",
  "para",
  "pra",
];

const others = ["dor"];

const trashWords = [
  ...prepositions,
  ...pronouns,
  ...adverbs,
  ...contractions,
  ...conjuncoes,
  ...others,
];

const removeTrashWords = (text) => {
  if (text) {
    return text
      .split(" ")
      .filter((word) => !trashWords.includes(word))
      .join(" ");
  }
  return [];
};

export { removeTrashWords, trashWords };
