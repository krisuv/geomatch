import countries from "./countries.js";

const [
  poland,
  czechia,
  germany,
  finland,
  uk,
  italy,
  greece,
  russia,
  egypt,
  uganda,
  israel,
  uae,
  india,
  china,
  japan,
  indonesia,
  usa,
  canada,
  mexico,
  brazil,
  australia,
] = [...countries];

let answerId = 1;

class Answer {
  constructor(name, ...countries) {
    this.name = name;
    this.countries = [...countries];
    this.id = answerId++;
  }
}

class Question {
  constructor(description, avatar, ...answers) {
    this.description = description;
    this.avatar = avatar;
    this.answers = [...answers];
  }
}

const Question1 = new Question(
  "Tea or coffee?",
  "☕",
  new Answer("tea", uk, japan, poland, russia, china, indonesia, india, egypt),
  new Answer(
    "coffee",
    czechia,
    germany,
    finland,
    italy,
    greece,
    israel,
    uae,
    usa,
    canada,
    mexico,
    brazil,
    australia,
    uganda
  )
);

const Question2 = new Question(
  "Left or Right side of the road?",
  "🛣️",
  new Answer("left", uk, japan, india, indonesia, australia, uganda),
  new Answer(
    "right",
    poland,
    czechia,
    germany,
    finland,
    italy,
    greece,
    russia,
    egypt,
    israel,
    uae,
    china,
    usa,
    canada,
    mexico,
    brazil
  )
);

const Question3 = new Question(
  "Let`s drink something!",
  "🍻",
  new Answer("beer", czechia, germany, uganda, australia),
  new Answer("vodka", poland, russia, finland),
  new Answer("wine", greece, italy, israel),
  new Answer(
    "strong, but not vodka",
    japan,
    india,
    china,
    usa,
    canada,
    mexico,
    brazil,
    uk
  ),
  new Answer("nope", uae, egypt, indonesia)
);

const Question4 = new Question(
  `What's your favourite spiritual activity?`,
  "⛪",
  new Answer("meditation", india, japan),
  new Answer(
    "reading Bible",
    poland,
    italy,
    greece,
    uganda,
    canada,
    mexico,
    brazil,
    australia,
    israel,
    usa
  ),
  new Answer("ramadan", egypt, uae, indonesia),
  new Answer("hating religion", czechia, germany, finland, uk, russia, china)
);

const Question5 = new Question(
  `Pick one means of transport to get to your place:`,
  "🚗",
  new Answer("car", germany, finland, uae, usa, canada, australia),
  new Answer("bus", uk, egypt, indonesia, india, mexico, brazil),
  new Answer("motor scooter", italy, greece, uganda),
  new Answer("train", russia, israel, czechia, poland, china, japan)
);

const Question6 = new Question(
  "Is it better to live on an island than on mainland?",
  "🏝️",
  new Answer("yes", uk, japan, indonesia, australia, greece),
  new Answer(
    "no",
    uganda,
    india,
    poland,
    czechia,
    germany,
    finland,
    italy,
    russia,
    egypt,
    israel,
    uae,
    china,
    usa,
    canada,
    mexico,
    brazil
  )
);

const Question7 = new Question(
  "Choose the best city:",
  "🌇",
  new Answer("Prague", germany, finland, uk, italy, russia, czechia, poland),
  new Answer("New York", australia, canada, usa, uae),
  new Answer(
    "Rio de Janeiro",
    brazil,
    mexico,
    india,
    indonesia,
    egypt,
    greece,
    uganda,
    israel
  ),
  new Answer("Tokio", china, japan)
);

const Question8 = new Question(
  "Is it OK to be gay?",
  "👬",
  new Answer(
    "OK",
    germany,
    finland,
    uk,
    czechia,
    brazil,
    usa,
    canada,
    australia
  ),
  new Answer("yes, but...", greece, poland, israel, italy, mexico, japan),
  new Answer("no", russia, india, indonesia, egypt, uganda, uae, china)
);

const Question9 = new Question(
  "The best music genre is:",
  "🎶",
  new Answer("rock", canada, usa, australia, finland, china),
  new Answer("pop", brazil, poland, italy, japan, russia),
  new Answer(
    "romantic/classical",
    india,
    uae,
    czechia,
    indonesia,
    egypt,
    greece,
    mexico,
    israel
  ),
  new Answer("house", germany, uk, uganda)
);

const Question10 = new Question(
  "I follow:",
  "👑",
  new Answer(
    "tradition",
    japan,
    indonesia,
    greece,
    uganda,
    india,
    italy,
    poland,
    russia,
    egypt,
    israel,
    china,
    mexico,
    brazil
  ),
  new Answer(
    "modernity",
    australia,
    uk,
    czechia,
    germany,
    finland,
    uae,
    usa,
    canada
  )
);

const Question11 = new Question(
  "I like people who are:",
  "🥳",
  new Answer(
    "crazy and loud",
    israel,
    greece,
    brazil,
    usa,
    australia,
    italy,
    mexico,
    uganda,
    egypt,
    indonesia,
    india
  ),
  new Answer("calm and quiet", finland, japan),
  new Answer(
    "something between",
    poland,
    canada,
    czechia,
    uk,
    germany,
    russia,
    uae,
    china
  )
);

const Question12 = new Question(
  "For my salary I can:",
  "💸",
  new Answer(
    "rent an apartment",
    israel,
    usa,
    australia,
    uae,
    canada,
    uk,
    germany,
    finland,
    japan,
    italy
  ),
  new Answer("rent a room", czechia, poland, greece, china),
  new Answer(
    "rent a bed in a room",
    mexico,
    uganda,
    egypt,
    indonesia,
    india,
    brazil,
    russia
  )
);

const Question13 = new Question(
  "Is latin script the best one?",
  "📜",
  new Answer(
    "definitely",
    usa,
    canada,
    australia,
    uk,
    czechia,
    germany,
    finland,
    indonesia,
    uganda,
    italy,
    poland,
    mexico,
    brazil
  ),
  new Answer(
    "I know a better one",
    japan,
    greece,
    uae,
    india,
    russia,
    egypt,
    israel,
    china
  )
);

const Question14 = new Question(
  "Imagine you are just about to die. What is your last meal like?",
  "🍝",
  new Answer("hot and spicy dish", mexico, indonesia, india),
  new Answer(
    "juicy piece of meat",
    russia,
    usa,
    poland,
    brazil,
    australia,
    germany,
    uganda,
    czechia,
    uk
  ),
  new Answer("gourmet pasta with sauce", italy, china, canada),
  new Answer("seafood or sth vegan", israel, japan, egypt, uae, greece, finland)
);

const Question15 = new Question(
  "Pick the martial art which is most suitable for you:",
  "🥊",
  new Answer(
    "ground fighting",
    japan,
    brazil,
    mexico,
    china,
    italy,
    russia,
    finland
  ),
  new Answer(
    "punching and kicking",
    canada,
    usa,
    poland,
    australia,
    germany,
    czechia,
    uk
  ),
  new Answer(
    "fight with equipment",
    india,
    indonesia,
    israel,
    egypt,
    uae,
    greece,
    uganda
  )
);

const Question16 = new Question(
  `I am like a kid in a candy store when weather's like:`,
  "⛅️",
  new Answer(
    "hot and sunny all the time",
    australia,
    uganda,
    brazil,
    mexico,
    india,
    indonesia,
    egypt,
    uae
  ),
  new Answer("mediterranean", usa, israel, italy, greece, china, japan),
  new Answer("temperate", uk, germany, czechia, poland),
  new Answer("snowing", russia, canada, finland)
);

const Question17 = new Question(
  "Wanna smoke a cigarette?",
  "🚬",
  new Answer(
    "sure",
    czechia,
    germany,
    indonesia,
    italy,
    poland,
    japan,
    greece,
    russia,
    egypt,
    israel,
    china
  ),
  new Answer(
    "get lost",
    mexico,
    brazil,
    uganda,
    finland,
    usa,
    canada,
    australia,
    uk,
    uae,
    india
  )
);

const Question18 = new Question(
  `Pick sport that gives you most fun:`,
  "🏀",
  new Answer("football", germany, poland, uk, italy, uganda, brazil, mexico),
  new Answer("swimming", australia, israel, greece, indonesia, egypt, uae),
  new Answer("hockey", canada, usa, russia, finland, czechia),
  new Answer("ping pong", india, china, japan)
);

const Question19 = new Question(
  "I eat:",
  "🥪",
  new Answer(
    "walking",
    finland,
    usa,
    canada,
    czechia,
    germany,
    italy,
    poland,
    russia,
    uk
  ),
  new Answer(
    "sitting",
    japan,
    egypt,
    israel,
    china,
    greece,
    indonesia,
    mexico,
    brazil,
    uganda,
    australia,
    uae,
    india
  )
);

const Question20 = new Question(
  "How can be your character described in one word?",
  "🤔",
  new Answer("depressive", poland, uk, japan, russia, finland),
  new Answer(
    "melancholic",
    israel,
    mexico,
    egypt,
    czechia,
    greece,
    china,
    italy,
    germany,
    india
  ),
  new Answer("euphoric", uganda, indonesia, brazil, canada, uae, australia, usa)
);

const Question21 = new Question(
    "Are you good at dancing?",
    "💃",
    new Answer("yes", greece, israel, mexico, uae, uganda, indonesia, brazil, japan, russia, india, usa),
    new Answer(
        "no",
        egypt,
        china,
        italy,
        germany,
        canada,
        australia,
        finland,
        uk,
        poland,
        czechia
    )
);

export const questions = [
  Question1,
  Question2,
  Question3,
  Question4,
  Question5,
  Question6,
  Question7,
  Question8,
  Question9,
  Question10,
  Question11,
  Question12,
  Question13,
  Question14,
  Question15,
  Question16,
  Question17,
  Question18,
  Question19,
  Question20,
  Question21
];
