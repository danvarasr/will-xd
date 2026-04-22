const questions = [
  {
    id: 1,
    text: "Hi, how are you?",
    translation: "(Hola, cómo estás?)",
    image: "/images/q1.jpg",
    audioQuestion: "/audio/q1/q1.mp3",
    alternatives: [
      {
        text: "Very well, thank you.",
        translation: "(Muy bien, gracias.)",
        audio: "/audio/q1/q1_1.mp3",
        correct: true
      },
      {
        text: "Not very well, to be honest.",
        translation: "(No muy bien, para ser honesto.)",
        audio: "/audio/q1/q1_2.mp3",
        correct: false
      },
      {
        text: "So-so.",
        translation: "(Más o menos.)",
        audio: "/audio/q1/q1_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 2,
    text: "What's your name?",
    Translation: "(¿Cuál es tu nombre?)",
    image: "/images/q2.jpg",
    audioQuestion: "/audio/q2/q2.mp3",
    alternatives: [
      {
        text: "My name is Fabiola.", 
        translation: "(Mi nombre es Fabiola.)",
        audio: "/audio/q2/q2_1.mp3",
        correct: true
      },
      {
        text: "I don't feel like introducing myself.",
        translation: "(No tengo ganas de presentarme.)",
        audio: "/audio/q2/q2_2.mp3",
        correct: false
      },
      {
        text: "I already told you before, didn’t I?",
        translation: "(Ya te lo dije antes, ¿no?)",
        audio: "/audio/q2/q2_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 3,
    text: "Where are you from?",
    image: "/images/q3.jpg",
    audioQuestion: "/audio/q3/q3.mp3",
    alternatives: [
      {
        text: "I'm from Ireland.",
        audio: "/audio/q3/q3_1.mp3",
        correct: false
      },
      {
        text: "I'd rather not talk about it.",
        audio: "/audio/q3/q3_2.mp3",
        correct: false
      },
      {
        text: "I’m from Europe.",
        audio: "/audio/q3/q3_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 4,
    text: "How old are you?",
    image: "/images/q4.jpg",
    audioQuestion: "/audio/q4/q4.mp3",
    alternatives: [
      {
        text: "I just turned 28.",
        audio: "/audio/q4/q4_1.mp3",
        correct: false
      },
      {
        text: "I don't want to say my age.",
        audio: "/audio/q4/q4_2.mp3",
        correct: false
      },
      {
        text: "How old do you think I am?",
        audio: "/audio/q4/q4_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 5,
    text: "What do you do for a living?",
    image: "/images/q5.jpg",
    audioQuestion: "/audio/q5/q5.mp3",
    alternatives: [
      {
        text: "I work in graphic design.",
        audio: "/audio/q5/q5_1.mp3",
        correct: false
      },
      {
        text: "I don't do anything.",
        audio: "/audio/q5/q5_2.mp3",
        correct: false
      },
      {
        text: "I'm figuring out what to do.",
        audio: "/audio/q5/q5_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 6,
    text: "Do you speak English?",
    image: "/images/q6.jpg",
    audioQuestion: "/audio/q6/q6.mp3",
    alternatives: [
      {
        text: "Of course, it's my native language.",
        audio: "/audio/q6/q6_1.mp3",
        correct: false
      },
      {
        text: "Just a few words.",
        audio: "/audio/q6/q6_2.mp3",
        correct: false
      },
      {
        text: "I'm learning.",
        audio: "/audio/q6/q6_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 7,
    text: "Do you live here?",
    image: "/images/q7.jpg",
    audioQuestion: "/audio/q7/q7.mp3",
    alternatives: [
      {
        text: "Yes, for years now.",
        audio: "/audio/q7/q7_1.mp3",
        correct: false
      },
      {
        text: "No, I'm here on a visit.",
        audio: "/audio/q7/q7_2.mp3",
        correct: false
      },
      {
        text: "For now, yes.",
        audio: "/audio/q7/q7_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 8,
    text: "Are you married?",
    image: "/images/q8.jpg",
    audioQuestion: "/audio/q8/q8.mp3",
    alternatives: [
      {
        text: "Yes, I got married a year ago.",
        audio: "/audio/q8/q8_1.mp3",
        correct: false
      },
      {
        text: "No, I'm single.",
        audio: "/audio/q8/q8_2.mp3",
        correct: false
      },
      {
        text: "I'm seeing someone.",
        audio: "/audio/q8/q8_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 9,
    text: "Do you have children?",
    image: "/images/q9.jpg",
    audioQuestion: "/audio/q9/q9.mp3",
    alternatives: [
      {
        text: "Yes, I have two.",
        audio: "/audio/q9/q9_1.mp3",
        correct: false
      },
      {
        text: "No, I don't.",
        audio: "/audio/q9/q9_2.mp3",
        correct: false
      },
      {
        text: "It's not my priority right now.",
        audio: "/audio/q9/q9_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 10,
    text: "Is this your first time here?",
    image: "/images/q10.jpg",
    audioQuestion: "/audio/q10/q10.mp3",
    alternatives: [
      {
        text: "Yes! Everything is new to me.",
        audio: "/audio/q10/q10_1.mp3",
        correct: false
      },
      {
        text: "No, I've been here several times.",
        audio: "/audio/q10/q10_2.mp3",
        correct: false
      },
      {
        text: "I think so.",
        audio: "/audio/q10/q10_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 11,
    text: "How much is this?",
    image: "/images/q11.jpg",
    audioQuestion: "/audio/q11/q11.mp3",
    alternatives: [
      {
        text: "It's on sale, it's one dollar.",
        audio: "/audio/q11/q11_1.mp3",
        correct: false
      },
      {
        text: "I don't know the price, let me check.",
        audio: "/audio/q11/q11_2.mp3",
        correct: false
      },
      {
        text: "I think it costs less than two euros.",
        audio: "/audio/q11/q11_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 12,
    text: "Where are the sugar-free products?",
    image: "/images/q12.jpg",
    audioQuestion: "/audio/q12/q12.mp3",
    alternatives: [
      {
        text: "In aisle three, at the back.",
        audio: "/audio/q12/q12_1.mp3",
        correct: false
      },
      {
        text: "We don't have those.",
        audio: "/audio/q12/q12_2.mp3",
        correct: false
      },
      {
        text: "Sometimes they move them.",
        audio: "/audio/q12/q12_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 13,
    text: "Do you have whole wheat bread?",
    image: "/images/q13.jpg",
    audioQuestion: "/audio/q13/q13.mp3",
    alternatives: [
      {
        text: "Yes, it just arrived.",
        audio: "/audio/q13/q13_1.mp3",
        correct: false
      },
      {
        text: "It didn't arrive today.",
        audio: "/audio/q13/q13_2.mp3",
        correct: false
      },
      {
        text: "I'm not sure, I'd have to check.",
        audio: "/audio/q13/q13_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 14,
    text: "How much is a kilo of tomatoes?",
    image: "/images/q14.jpg",
    audioQuestion: "/audio/q14/q14.mp3",
    alternatives: [
      {
        text: "It costs two euros fifty.",
        audio: "/audio/q14/q14_1.mp3",
        correct: false
      },
      {
        text: "We’re not selling tomatoes today.",
        audio: "/audio/q14/q14_2.mp3",
        correct: false
      },
      {
        text: "It depends on the type of tomato.",
        audio: "/audio/q14/q14_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 15,
    text: "Can I pay by card?",
    image: "/images/q15.jpg",
    audioQuestion: "/audio/q15/q15.mp3",
    alternatives: [
      {
        text: "Of course, we accept all of them.",
        audio: "/audio/q15/q15_1.mp3",
        correct: false
      },
      {
        text: "No, cash only.",
        audio: "/audio/q15/q15_2.mp3",
        correct: false
      },
      {
        text: "It depends on the amount.",
        audio: "/audio/q15/q15_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 16,
    text: "Can you give me a bag, please?",
    image: "/images/q16.jpg",
    audioQuestion: "/audio/q16/q16.mp3",
    alternatives: [
      {
        text: "Would you like a small one or a large one?",
        audio: "/audio/q16/q16_1.mp3",
        correct: false
      },
      {
        text: "We don't give out free bags.",
        audio: "/audio/q16/q16_2.mp3",
        correct: false
      },
      {
        text: "You can take one if you see any.",
        audio: "/audio/q16/q16_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 17,
    text: "Is this product on sale?",
    image: "/images/q17.jpg",
    audioQuestion: "/audio/q17/q17.mp3",
    alternatives: [
      {
        text: "Yes, it has a 20% discount.",
        audio: "/audio/q17/q17_1.mp3",
        correct: false
      },
      {
        text: "No, regular price.",
        audio: "/audio/q17/q17_2.mp3",
        correct: false
      },
      {
        text: "It was on sale last week.",
        audio: "/audio/q17/q17_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 18,
    text: "Do you have change for this bill?",
    image: "/images/q18.jpg",
    audioQuestion: "/audio/q18/q18.mp3",
    alternatives: [
      {
        text: "Sure, I have coins and bills.",
        audio: "/audio/q18/q18_1.mp3",
        correct: false
      },
      {
        text: "Only large bills, sorry.",
        audio: "/audio/q18/q18_2.mp3",
        correct: false
      },
      {
        text: "It depends on what you buy.",
        audio: "/audio/q18/q18_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 19,
    text: "How many units are in the package?",
    image: "/images/q19.jpg",
    audioQuestion: "/audio/q19/q19.mp3",
    alternatives: [
      {
        text: "This one has twelve pieces.",
        audio: "/audio/q19/q19_1.mp3",
        correct: false
      },
      {
        text: "I have no idea. Let's check.",
        audio: "/audio/q19/q19_2.mp3",
        correct: false
      },
      {
        text: "It depends on the size of the product.",
        audio: "/audio/q19/q19_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 20,
    text: "What time does the store close?",
    image: "/images/q20.jpg",
    audioQuestion: "/audio/q20/q20.mp3",
    alternatives: [
      {
        text: "We close at 8 o’clock.",
        audio: "/audio/q20/q20_1.mp3",
        correct: false
      },
      {
        text: "We close early due to the holiday.",
        audio: "/audio/q20/q20_2.mp3",
        correct: false
      },
      {
        text: "Almost always at the same time.",
        audio: "/audio/q20/q20_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 21,
    text: "Do you have a table for two?",
    image: "/images/q21.jpg",
    audioQuestion: "/audio/q21/q21.mp3",
    alternatives: [
      {
        text: "Yes, right this way, please.",
        audio: "/audio/q21/q21_1.mp3",
        correct: false
      },
      {
        text: "I'm sorry, we're fully booked.",
        audio: "/audio/q21/q21_2.mp3",
        correct: false
      },
      {
        text: "Maybe if you wait a few minutes.",
        audio: "/audio/q21/q21_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 22,
    text: "May I have the menu, please?",
    image: "/images/q22.jpg",
    audioQuestion: "/audio/q22/q22.mp3",
    alternatives: [
      {
        text: "Sure, I’ll bring it to you in a moment.",
        audio: "/audio/q22/q22_1.mp3",
        correct: false
      },
      {
        text: "We don't use a physical menu here.",
        audio: "/audio/q22/q22_2.mp3",
        correct: false
      },
      {
        text: "It's on the wall if you'd like to look at it.",
        audio: "/audio/q22/q22_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 23,
    text: "What's the specialty of the house?",
    image: "/images/q23.jpg",
    audioQuestion: "/audio/q23/q23.mp3",
    alternatives: [
      {
        text: "Today's special is beef stew.",
        audio: "/audio/q23/q23_1.mp3",
        correct: false
      },
      {
        text: "We don't offer any special dishes.",
        audio: "/audio/q23/q23_2.mp3",
        correct: false
      },
      {
        text: "Sometimes we change the specialty.",
        audio: "/audio/q23/q23_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 24,
    text: "Can I order without salt?",
    image: "/images/q24.jpg",
    audioQuestion: "/audio/q24/q24.mp3",
    alternatives: [
      {
        text: "Of course, we'll prepare it to your liking.",
        audio: "/audio/q24/q24_1.mp3",
        correct: false
      },
      {
        text: "We don't make changes to the recipe.",
        audio: "/audio/q24/q24_2.mp3",
        correct: false
      },
      {
        text: "We would need to check with the kitchen.",
        audio: "/audio/q24/q24_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 25,
    text: "Do you have vegetarian options?",
    image: "/images/q25.jpg",
    audioQuestion: "/audio/q25/q25.mp3",
    alternatives: [
      {
        text: "Sure, we have salads, soups, and more.",
        audio: "/audio/q25/q25_1.mp3",
        correct: false
      },
      {
        text: "No, only meat dishes.",
        audio: "/audio/q25/q25_2.mp3",
        correct: false
      },
      {
        text: "We can adapt something from the menu.",
        audio: "/audio/q25/q25_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 26,
    text: "Can you bring me the bill, please?",
    image: "/images/q26.jpg",
    audioQuestion: "/audio/q26/q26.mp3",
    alternatives: [
      {
        text: "Of course, here you are.",
        audio: "/audio/q26/q26_1.mp3",
        correct: false
      },
      {
        text: "It's not ready yet.",
        audio: "/audio/q26/q26_2.mp3",
        correct: false
      },
      {
        text: "It's being prepared.",
        audio: "/audio/q26/q26_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 27,
    text: "Is the service charge included in the bill?",
    image: "/images/q27.jpg",
    audioQuestion: "/audio/q27/q27.mp3",
    alternatives: [
      {
        text: "Yes, it's already included.",
        audio: "/audio/q27/q27_1.mp3",
        correct: false
      },
      {
        text: "No, you should leave the tip separately.",
        audio: "/audio/q27/q27_2.mp3",
        correct: false
      },
      {
        text: "You can check at the bottom.",
        audio: "/audio/q27/q27_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 28,
    text: "Can I change the side dish?",
    image: "/images/q28.jpg",
    audioQuestion: "/audio/q28/q28.mp3",
    alternatives: [
      {
        text: "Sure, you can choose another one.",
        audio: "/audio/q28/q28_1.mp3",
        correct: false
      },
      {
        text: "It only comes as it is on the menu.",
        audio: "/audio/q28/q28_2.mp3",
        correct: false
      },
      {
        text: "We don't make modifications.",
        audio: "/audio/q28/q28_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 29,
    text: "Is the meat well cooked?",
    image: "/images/q29.jpg",
    audioQuestion: "/audio/q29/q29.mp3",
    alternatives: [
      {
        text: "Yes, it's cooked to the point you requested.",
        audio: "/audio/q29/q29_1.mp3",
        correct: false
      },
      {
        text: "You can try it and let me know.",
        audio: "/audio/q29/q29_2.mp3",
        correct: false
      },
      {
        text: "If you don’t like it, we can check it.",
        audio: "/audio/q29/q29_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 30,
    text: "Where is the nearest bus stop?",
    image: "/images/q30.jpg",
    audioQuestion: "/audio/q30/q30.mp3",
    alternatives: [
      {
        text: "It’s right on that corner.",
        audio: "/audio/q30/q30_1.mp3",
        correct: false
      },
      {
        text: "This area has no public transportation.",
        audio: "/audio/q30/q30_2.mp3",
        correct: false
      },
      {
        text: "I think it’s over there, but I’m not sure.",
        audio: "/audio/q30/q30_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 31,
    text: "Does this bus go to the city center?",
    image: "/images/q31.jpg",
    audioQuestion: "/audio/q31/q31.mp3",
    alternatives: [
      {
        text: "Yes, it goes directly.",
        audio: "/audio/q31/q31_1.mp3",
        correct: false
      },
      {
        text: "No, it’s going the opposite direction.",
        audio: "/audio/q31/q31_2.mp3",
        correct: false
      },
      {
        text: "I’m not sure, it’s better to ask the driver.",
        audio: "/audio/q31/q31_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 32,
    text: "How do I get to the train station?",
    image: "/images/q32.jpg",
    audioQuestion: "/audio/q32/q32.mp3",
    alternatives: [
      {
        text: "Go straight and turn left.",
        audio: "/audio/q32/q32_1.mp3",
        correct: false
      },
      {
        text: "I don’t know where it is.",
        audio: "/audio/q32/q32_2.mp3",
        correct: false
      },
      {
        text: "The station is closed.",
        audio: "/audio/q32/q32_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 33,
    text: "How much is the subway ticket?",
    image: "/images/q33.jpg",
    audioQuestion: "/audio/q33/q33.mp3",
    alternatives: [
      {
        text: "It costs 1 dollar and 50 cents.",
        audio: "/audio/q33/q33_1.mp3",
        correct: false
      },
      {
        text: "I don’t know, I never use it.",
        audio: "/audio/q33/q33_2.mp3",
        correct: false
      },
      {
        text: "It varies depending on the destination.",
        audio: "/audio/q33/q33_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 34,
    text: "Can I pay by card?",
    image: "/images/q34.jpg",
    audioQuestion: "/audio/q34/q34.mp3",
    alternatives: [
      {
        text: "Yes, we accept cards.",
        audio: "/audio/q34/q34_1.mp3",
        correct: false
      },
      {
        text: "We don't have a card system.",
        audio: "/audio/q34/q34_2.mp3",
        correct: false
      },
      {
        text: "Some buses accept cards.",
        audio: "/audio/q34/q34_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 35,
    text: "Are there any taxis available around here?",
    image: "/images/q35.jpg",
    audioQuestion: "/audio/q35/q35.mp3",
    alternatives: [
      {
        text: "Yes, there’s a taxi stand on the corner.",
        audio: "/audio/q35/q35_1.mp3",
        correct: false
      },
      {
        text: "No, taxis don’t usually come around here.",
        audio: "/audio/q35/q35_2.mp3",
        correct: false
      },
      {
        text: "Sometimes they pass by, but it’s not certain.",
        audio: "/audio/q35/q35_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 36,
    text: "Which line should I take to get to the airport?",
    image: "/images/q36.jpg",
    audioQuestion: "/audio/q36/q36.mp3",
    alternatives: [
      {
        text: "The blue line goes directly.",
        audio: "/audio/q36/q36_1.mp3",
        correct: false
      },
      {
        text: "No line goes to the airport.",
        audio: "/audio/q36/q36_2.mp3",
        correct: false
      },
      {
        text: "It depends on the terminal you’re going to.",
        audio: "/audio/q36/q36_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 37,
    text: "How long does this train take?",
    image: "/images/q37.jpg",
    audioQuestion: "/audio/q37/q37.mp3",
    alternatives: [
      {
        text: "It takes an hour and a half.",
        audio: "/audio/q37/q37_1.mp3",
        correct: false
      },
      {
        text: "It doesn’t leave today.",
        audio: "/audio/q37/q37_2.mp3",
        correct: false
      },
      {
        text: "It depends on the schedule.",
        audio: "/audio/q37/q37_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 38,
    text: "Where can I buy the tickets?",
    image: "/images/q38.jpg",
    audioQuestion: "/audio/q38/q38.mp3",
    alternatives: [
      {
        text: "At the automatic machine.",
        audio: "/audio/q38/q38_1.mp3",
        correct: false
      },
      {
        text: "This station doesn’t sell tickets.",
        audio: "/audio/q38/q38_2.mp3",
        correct: false
      },
      {
        text: "You can try online.",
        audio: "/audio/q38/q38_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 39,
    text: "Is it safe to walk around here at night?",
    image: "/images/q39.jpg",
    audioQuestion: "/audio/q39/q39.mp3",
    alternatives: [
      {
        text: "Yes, it’s a quiet area.",
        audio: "/audio/q39/q39_1.mp3",
        correct: false
      },
      {
        text: "There have been robberies recently.",
        audio: "/audio/q39/q39_2.mp3",
        correct: false
      },
      {
        text: "It’s safer if you’re with someone.",
        audio: "/audio/q39/q39_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 40,
    text: "Is the weather good today?",
    image: "/images/q40.jpg",
    audioQuestion: "/audio/q40/q40.mp3",
    alternatives: [
      {
        text: "The weather is perfect for going out.",
        audio: "/audio/q40/q40_1.mp3",
        correct: false
      },
      {
        text: "It’s very cold today.",
        audio: "/audio/q40/q40_2.mp3",
        correct: false
      },
      {
        text: "The weather is unpredictable; it might rain later.",
        audio: "/audio/q40/q40_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 41,
    text: "What’s it like here in winter?",
    image: "/images/q41.jpg",
    audioQuestion: "/audio/q41/q41.mp3",
    alternatives: [
      {
        text: "It’s usually cold and it snows in some areas.",
        audio: "/audio/q41/q41_1.mp3",
        correct: false
      },
      {
        text: "Winter is very warm here.",
        audio: "/audio/q41/q41_2.mp3",
        correct: false
      },
      {
        text: "In some areas, it’s colder than in others.",
        audio: "/audio/q41/q41_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 42,
    text: "Is there a chance of rain tomorrow?",
    image: "/images/q42.jpg",
    audioQuestion: "/audio/q42/q42.mp3",
    alternatives: [
      {
        text: "According to the forecast, it will rain in the afternoon.",
        audio: "/audio/q42/q42_1.mp3",
        correct: false
      },
      {
        text: "No, it will be clear all day.",
        audio: "/audio/q42/q42_2.mp3",
        correct: false
      },
      {
        text: "I’m not sure, but it might rain occasionally.",
        audio: "/audio/q42/q42_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 43,
    text: "Is it very hot today?",
    image: "/images/q43.jpg",
    audioQuestion: "/audio/q43/q43.mp3",
    alternatives: [
      {
        text: "Yes, it’s very hot, over 30 degrees.",
        audio: "/audio/q43/q43_1.mp3",
        correct: false
      },
      {
        text: "No, it’s quite cool, it’s not hot.",
        audio: "/audio/q43/q43_2.mp3",
        correct: false
      },
      {
        text: "It’s a bit warm, but not too much.",
        audio: "/audio/q43/q43_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 44,
    text: "What season are we in now?",
    image: "/images/q44.jpg",
    audioQuestion: "/audio/q44/q44.mp3",
    alternatives: [
      {
        text: "We’re in spring, the flowers are starting to bloom.",
        audio: "/audio/q44/q44_1.mp3",
        correct: false
      },
      {
        text: "It can’t be spring, can it? It’s way too cold.",
        audio: "/audio/q44/q44_2.mp3",
        correct: false
      },
      {
        text: "I’m not sure, but it feels like an in-between season.",
        audio: "/audio/q44/q44_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 45,
    text: "Is it going to be cold this weekend?",
    image: "/images/q45.jpg",
    audioQuestion: "/audio/q45/q45.mp3",
    alternatives: [
      {
        text: "Below freezing temperatures.",
        audio: "/audio/q45/q45_1.mp3",
        correct: false
      },
      {
        text: "It will be mild, perfect for going out.",
        audio: "/audio/q45/q45_2.mp3",
        correct: false
      },
      {
        text: "Maybe at night.",
        audio: "/audio/q45/q45_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 46,
    text: "Has it been raining a lot lately?",
    image: "/images/q46.jpg",
    audioQuestion: "/audio/q46/q46.mp3",
    alternatives: [
      {
        text: "Yes, almost daily rain.",
        audio: "/audio/q46/q46_1.mp3",
        correct: false
      },
      {
        text: "It's only been cloudy, I think.",
        audio: "/audio/q46/q46_2.mp3",
        correct: false
      },
      {
        text: "There have been light rains.",
        audio: "/audio/q46/q46_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 47,
    text: "Is the weather changing a lot in the past few days?",
    image: "/images/q47.jpg",
    audioQuestion: "/audio/q47/q47.mp3",
    alternatives: [
      {
        text: "Yes, it's been unstable.",
        audio: "/audio/q47/q47_1.mp3",
        correct: false
      },
      {
        text: "No, nothing. It's been like this since Saturday.",
        audio: "/audio/q47/q47_2.mp3",
        correct: false
      },
      {
        text: "We have changes from time to time.",
        audio: "/audio/q47/q47_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 48,
    text: "Does anything hurt?",
    image: "/images/q48.jpg",
    audioQuestion: "/audio/q48/q48.mp3",
    alternatives: [
      {
        text: "Yes, I have a headache.",
        audio: "/audio/q48/q48_1.mp3",
        correct: false
      },
      {
        text: "No, nothing hurts.",
        audio: "/audio/q48/q48_2.mp3",
        correct: false
      },
      {
        text: "No, I just feel a little tired.",
        audio: "/audio/q48/q48_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 49,
    text: "Do you have a fever?",
    image: "/images/q49.jpg",
    audioQuestion: "/audio/q49/q49.mp3",
    alternatives: [
      {
        text: "Yes, since last night.",
        audio: "/audio/q49/q49_1.mp3",
        correct: false
      },
      {
        text: "No, I just have chills.",
        audio: "/audio/q49/q49_2.mp3",
        correct: false
      },
      {
        text: "I’m not sure, but I feel strange.",
        audio: "/audio/q49/q49_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 50,
    text: "Since when have you had the symptoms?",
    image: "/images/q50.jpg",
    audioQuestion: "/audio/q50/q50.mp3",
    alternatives: [
      {
        text: "For three days.",
        audio: "/audio/q50/q50_1.mp3",
        correct: false
      },
      {
        text: "I don’t have any symptoms.",
        audio: "/audio/q50/q50_2.mp3",
        correct: false
      },
      {
        text: "I’m not sure, I noticed them recently.",
        audio: "/audio/q50/q50_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 51,
    text: "Do you have any medication allergies?",
    image: "/images/q51.jpg",
    audioQuestion: "/audio/q51/q51.mp3",
    alternatives: [
      {
        text: "Yes, I’m allergic to some antibiotics.",
        audio: "/audio/q51/q51_1.mp3",
        correct: false
      },
      {
        text: "No, none that I know of.",
        audio: "/audio/q51/q51_2.mp3",
        correct: false
      },
      {
        text: "I’ve never been tested.",
        audio: "/audio/q51/q51_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 52,
    text: "Would you like something for the pain?",
    image: "/images/q52.jpg",
    audioQuestion: "/audio/q52/q52.mp3",
    alternatives: [
      {
        text: "Yes, what do you recommend?",
        audio: "/audio/q52/q52_1.mp3",
        correct: false
      },
      {
        text: "No, I’d rather wait.",
        audio: "/audio/q52/q52_2.mp3",
        correct: false
      },
      {
        text: "Maybe later if the pain continues.",
        audio: "/audio/q52/q52_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 53,
    text: "Have you taken any medication today?",
    image: "/images/q53.jpg",
    audioQuestion: "/audio/q53/q53.mp3",
    alternatives: [
      {
        text: "Yes, they gave me something in the emergency room.",
        audio: "/audio/q53/q53_1.mp3",
        correct: false
      },
      {
        text: "No, not yet.",
        audio: "/audio/q53/q53_2.mp3",
        correct: false
      },
      {
        text: "I think I took something, but I’m not sure.",
        audio: "/audio/q53/q53_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 54,
    text: "Would you like us to check your blood pressure?",
    image: "/images/q54.jpg",
    audioQuestion: "/audio/q54/q54.mp3",
    alternatives: [
      {
        text: "Yes, it’s been a while since they last checked it.",
        audio: "/audio/q54/q54_1.mp3",
        correct: false
      },
      {
        text: "No, it’s not necessary.",
        audio: "/audio/q54/q54_2.mp3",
        correct: false
      },
      {
        text: "I don’t know if it’s necessary.",
        audio: "/audio/q54/q54_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 55,
    text: "Did they prescribe this to you?",
    image: "/images/q55.jpg",
    audioQuestion: "/audio/q55/q55.mp3",
    alternatives: [
      {
        text: "I have a prescription, but I don’t know if it’s the same.",
        audio: "/audio/q55/q55_1.mp3",
        correct: false
      },
      {
        text: "No, I’m just asking out of curiosity.",
        audio: "/audio/q55/q55_2.mp3",
        correct: false
      },
      {
        text: "They gave me the name, but I don’t have a prescription.",
        audio: "/audio/q55/q55_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 56,
    text: "Do you have your insurance card?",
    image: "/images/q56.jpg",
    audioQuestion: "/audio/q56/q56.mp3",
    alternatives: [
      {
        text: "Yes, here it is.",
        audio: "/audio/q56/q56_1.mp3",
        correct: false
      },
      {
        text: "No, I forgot it.",
        audio: "/audio/q56/q56_2.mp3",
        correct: false
      },
      {
        text: "Let me check if I have it.",
        audio: "/audio/q56/q56_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 57,
    text: "Would you like us to prepare the antibiotic for you?",
    image: "/images/q57.jpg",
    audioQuestion: "/audio/q57/q57.mp3",
    alternatives: [
      {
        text: "Yes, they told me to get it here.",
        audio: "/audio/q57/q57_1.mp3",
        correct: false
      },
      {
        text: "No, I already have it.",
        audio: "/audio/q57/q57_2.mp3",
        correct: false
      },
      {
        text: "I’m waiting for the doctor’s confirmation.",
        audio: "/audio/q57/q57_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 58,
    text: "What do you do for a living?",
    image: "/images/q58.jpg",
    audioQuestion: "/audio/q58/q58.mp3",
    alternatives: [
      {
        text: "I’m a taxi driver.",
        audio: "/audio/q58/q58_1.mp3",
        correct: false
      },
      {
        text: "I don’t have a job at the moment.",
        audio: "/audio/q58/q58_2.mp3",
        correct: false
      },
      {
        text: "I do some freelance work.",
        audio: "/audio/q58/q58_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 59,
    text: "Do you like your job?",
    image: "/images/q59.jpg",
    audioQuestion: "/audio/q59/q59.mp3",
    alternatives: [
      {
        text: "Yes, I love what I do.",
        audio: "/audio/q59/q59_1.mp3",
        correct: false
      },
      {
        text: "No, I only do it out of necessity.",
        audio: "/audio/q59/q59_2.mp3",
        correct: false
      },
      {
        text: "It’s not my ideal job, but it’s okay.",
        audio: "/audio/q59/q59_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 60,
    text: "How many hours do you work a day?",
    image: "/images/q60.jpg",
    audioQuestion: "/audio/q60/q60.mp3",
    alternatives: [
      {
        text: "I work 8 hours a day.",
        audio: "/audio/q60/q60_1.mp3",
        correct: false
      },
      {
        text: "I don’t have a fixed schedule.",
        audio: "/audio/q60/q60_2.mp3",
        correct: false
      },
      {
        text: "It varies depending on the week.",
        audio: "/audio/q60/q60_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 61,
    text: "Do you have experience in this field?",
    image: "/images/q61.jpg",
    audioQuestion: "/audio/q61/q61.mp3",
    alternatives: [
      {
        text: "Yes, I’ve been working in this for 5 years.",
        audio: "/audio/q61/q61_1.mp3",
        correct: false
      },
      {
        text: "No, I’ve never worked in this.",
        audio: "/audio/q61/q61_2.mp3",
        correct: false
      },
      {
        text: "A little, but not much.",
        audio: "/audio/q61/q61_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 62,
    text: "Are you looking for a job?",
    image: "/images/q62.jpg",
    audioQuestion: "/audio/q62/q62.mp3",
    alternatives: [
      {
        text: "Yes, I’ve already sent several resumes.",
        audio: "/audio/q62/q62_1.mp3",
        correct: false
      },
      {
        text: "No, I already have a job.",
        audio: "/audio/q62/q62_2.mp3",
        correct: false
      },
      {
        text: "Only if something better comes up.",
        audio: "/audio/q62/q62_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 63,
    text: "What days do you work?",
    image: "/images/q63.jpg",
    audioQuestion: "/audio/q63/q63.mp3",
    alternatives: [
      {
        text: "From Monday to Friday.",
        audio: "/audio/q63/q63_1.mp3",
        correct: false
      },
      {
        text: "I’m not working right now.",
        audio: "/audio/q63/q63_2.mp3",
        correct: false
      },
      {
        text: "I work when they call me.",
        audio: "/audio/q63/q63_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 64,
    text: "Have you had any job interviews recently?",
    image: "/images/q64.jpg",
    audioQuestion: "/audio/q64/q64.mp3",
    alternatives: [
      {
        text: "Yes, I had one last week.",
        audio: "/audio/q64/q64_1.mp3",
        correct: false
      },
      {
        text: "No, I haven’t been contacted.",
        audio: "/audio/q64/q64_2.mp3",
        correct: false
      },
      {
        text: "I had one a while ago.",
        audio: "/audio/q64/q64_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 65,
    text: "What do you do in your daily work routine?",
    image: "/images/q65.jpg",
    audioQuestion: "/audio/q65/q65.mp3",
    alternatives: [
      {
        text: "I pick up people and take them where they need to go.",
        audio: "/audio/q65/q65_1.mp3",
        correct: false
      },
      {
        text: "It depends on the day. Some days are busier than others.",
        audio: "/audio/q65/q65_2.mp3",
        correct: false
      },
      {
        text: "Sometimes I help with bags or give directions if they ask.",
        audio: "/audio/q65/q65_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 66,
    text: "Do you have a permanent or temporary contract?",
    image: "/images/q66.jpg",
    audioQuestion: "/audio/q66/q66.mp3",
    alternatives: [
      {
        text: "I have a permanent contract.",
        audio: "/audio/q66/q66_1.mp3",
        correct: false
      },
      {
        text: "I’m working informally.",
        audio: "/audio/q66/q66_2.mp3",
        correct: false
      },
      {
        text: "I’m about to sign a contract.",
        audio: "/audio/q66/q66_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 67,
    text: "Would you like to change jobs?",
    image: "/images/q67.jpg",
    audioQuestion: "/audio/q67/q67.mp3",
    alternatives: [
      {
        text: "Yes, I would like something new.",
        audio: "/audio/q67/q67_1.mp3",
        correct: false
      },
      {
        text: "No, I'm very comfortable where I am.",
        audio: "/audio/q67/q67_2.mp3",
        correct: false
      },
      {
        text: "I'm thinking about it.",
        audio: "/audio/q67/q67_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 68,
    text: "Where do you live?",
    image: "/images/q68.jpg",
    audioQuestion: "/audio/q68/q68.mp3",
    alternatives: [
      {
        text: "I live in an apartment in the city center.",
        audio: "/audio/q68/q68_1.mp3",
        correct: false
      },
      {
        text: "I live in a small room.",
        audio: "/audio/q68/q68_2.mp3",
        correct: false
      },
      {
        text: "I live near my work.",
        audio: "/audio/q68/q68_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 69,
    text: "Who do you live with?",
    image: "/images/q69.jpg",
    audioQuestion: "/audio/q69/q69.mp3",
    alternatives: [
      {
        text: "I live in an apartment alone.",
        audio: "/audio/q69/q69_1.mp3",
        correct: false
      },
      {
        text: "I live with friends, but it’s getting difficult.",
        audio: "/audio/q69/q69_2.mp3",
        correct: false
      },
      {
        text: "I live with my parents and siblings.",
        audio: "/audio/q69/q69_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 70,
    text: "How many rooms does your house have?",
    image: "/images/q70.jpg",
    audioQuestion: "/audio/q70/q70.mp3",
    alternatives: [
      {
        text: "My house has 3 rooms.",
        audio: "/audio/q70/q70_1.mp3",
        correct: false
      },
      {
        text: "I live in a studio, I don’t have separate rooms.",
        audio: "/audio/q70/q70_2.mp3",
        correct: false
      },
      {
        text: "It has one large room and a smaller one.",
        audio: "/audio/q70/q70_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 71,
    text: "What is your room like?",
    image: "/images/q71.jpg",
    audioQuestion: "/audio/q71/q71.mp3",
    alternatives: [
      {
        text: "My room is big, with a double bed and a desk.",
        audio: "/audio/q71/q71_1.mp3",
        correct: false
      },
      {
        text: "My room is very small and messy.",
        audio: "/audio/q71/q71_2.mp3",
        correct: false
      },
      {
        text: "My room has only the essentials.",
        audio: "/audio/q71/q71_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 72,
    text: "What family members live with you?",
    image: "/images/q72.jpg",
    audioQuestion: "/audio/q72/q72.mp3",
    alternatives: [
      {
        text: "I live with my parents and my sister.",
        audio: "/audio/q72/q72_1.mp3",
        correct: false
      },
      {
        text: "I live alone, I don’t have family nearby.",
        audio: "/audio/q72/q72_2.mp3",
        correct: false
      },
      {
        text: "I don’t live with any of my family.",
        audio: "/audio/q72/q72_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 73,
    text: "Do you have a garden at home?",
    image: "/images/q73.jpg",
    audioQuestion: "/audio/q73/q73.mp3",
    alternatives: [
      {
        text: "Yes, I have a big garden with lots of flowers.",
        audio: "/audio/q73/q73_1.mp3",
        correct: false
      },
      {
        text: "I live in an apartment with no garden.",
        audio: "/audio/q73/q73_2.mp3",
        correct: false
      },
      {
        text: "I don’t have space for a garden.",
        audio: "/audio/q73/q73_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 74,
    text: "How many bathrooms does your house have?",
    image: "/images/q74.jpg",
    audioQuestion: "/audio/q74/q74.mp3",
    alternatives: [
      {
        text: "My house has 2 bathrooms.",
        audio: "/audio/q74/q74_1.mp3",
        correct: false
      },
      {
        text: "There’s only one bathroom, but it’s enough.",
        audio: "/audio/q74/q74_2.mp3",
        correct: false
      },
      {
        text: "We only have one bathroom, but it’s comfortable.",
        audio: "/audio/q74/q74_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 75,
    text: "What is your relationship with your family like?",
    image: "/images/q75.jpg",
    audioQuestion: "/audio/q75/q75.mp3",
    alternatives: [
      {
        text: "My relationship with my parents is very close.",
        audio: "/audio/q75/q75_1.mp3",
        correct: false
      },
      {
        text: "I don’t talk much with my family.",
        audio: "/audio/q75/q75_2.mp3",
        correct: false
      },
      {
        text: "I have a normal relationship with my family.",
        audio: "/audio/q75/q75_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 76,
    text: "What do you do in your free time?",
    image: "/images/q76.jpg",
    audioQuestion: "/audio/q76/q76.mp3",
    alternatives: [
      {
        text: "I go for a walk in the park.",
        audio: "/audio/q76/q76_1.mp3",
        correct: false
      },
      {
        text: "I don’t do much, I just rest.",
        audio: "/audio/q76/q76_2.mp3",
        correct: false
      },
      {
        text: "Sometimes I go out with friends.",
        audio: "/audio/q76/q76_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 77,
    text: "Do you have any hobbies?",
    image: "/images/q77.jpg",
    audioQuestion: "/audio/q77/q77.mp3",
    alternatives: [
      {
        text: "Yes, I play the guitar.",
        audio: "/audio/q77/q77_1.mp3",
        correct: false
      },
      {
        text: "I don’t have any hobbies.",
        audio: "/audio/q77/q77_2.mp3",
        correct: false
      },
      {
        text: "I’m looking for one.",
        audio: "/audio/q77/q77_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 78,
    text: "Do you like going out on weekends?",
    image: "/images/q78.jpg",
    audioQuestion: "/audio/q78/q78.mp3",
    alternatives: [
      {
        text: "Yes, I always go somewhere.",
        audio: "/audio/q78/q78_1.mp3",
        correct: false
      },
      {
        text: "No, I prefer to stay at home.",
        audio: "/audio/q78/q78_2.mp3",
        correct: false
      },
      {
        text: "I only go out if someone invites me.",
        audio: "/audio/q78/q78_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 79,
    text: "Would you like to go for a coffee?",
    image: "/images/q79.jpg",
    audioQuestion: "/audio/q79/q79.mp3",
    alternatives: [
      {
        text: "Sure, I’d love to.",
        audio: "/audio/q79/q79_1.mp3",
        correct: false
      },
      {
        text: "I can’t today. Sorry!",
        audio: "/audio/q79/q79_2.mp3",
        correct: false
      },
      {
        text: "Let me think about it.",
        audio: "/audio/q79/q79_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 80,
    text: "Do you practice any sport?",
    image: "/images/q80.jpg",
    audioQuestion: "/audio/q80/q80.mp3",
    alternatives: [
      {
        text: "Yes, I play tennis.",
        audio: "/audio/q80/q80_1.mp3",
        correct: false
      },
      {
        text: "I don't practice any.",
        audio: "/audio/q80/q80_2.mp3",
        correct: false
      },
      {
        text: "I exercise sometimes.",
        audio: "/audio/q80/q80_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 81,
    text: "Do you like going to the cinema?",
    image: "/images/q81.jpg",
    audioQuestion: "/audio/q81/q81.mp3",
    alternatives: [
      {
        text: "Yes, I really enjoy movie premieres.",
        audio: "/audio/q81/q81_1.mp3",
        correct: false
      },
      {
        text: "I don't like going to the cinema.",
        audio: "/audio/q81/q81_2.mp3",
        correct: false
      },
      {
        text: "I only go if the movie interests me.",
        audio: "/audio/q81/q81_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 82,
    text: "Do you like reading?",
    image: "/images/q82.jpg",
    audioQuestion: "/audio/q82/q82.mp3",
    alternatives: [
      {
        text: "Yes, especially history books.",
        audio: "/audio/q82/q82_1.mp3",
        correct: false
      },
      {
        text: "I don’t have the habit of reading.",
        audio: "/audio/q82/q82_2.mp3",
        correct: false
      },
      {
        text: "Sometimes I start a book but don’t finish it.",
        audio: "/audio/q82/q82_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 83,
    text: "Would you like to go for a walk this Saturday?",
    image: "/images/q83.jpg",
    audioQuestion: "/audio/q83/q83.mp3",
    alternatives: [
      {
        text: "Yes, good idea.",
        audio: "/audio/q83/q83_1.mp3",
        correct: false
      },
      {
        text: "I can't that day.",
        audio: "/audio/q83/q83_2.mp3",
        correct: false
      },
      {
        text: "Maybe, if it doesn’t rain.",
        audio: "/audio/q83/q83_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 84,
    text: "Do you go out with your friends?",
    image: "/images/q84.jpg",
    audioQuestion: "/audio/q84/q84.mp3",
    alternatives: [
      {
        text: "Yes, we go out whenever we all can.",
        audio: "/audio/q84/q84_1.mp3",
        correct: false
      },
      {
        text: "No, hardly ever.",
        audio: "/audio/q84/q84_2.mp3",
        correct: false
      },
      {
        text: "Sometimes, but not always.",
        audio: "/audio/q84/q84_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 85,
    text: "What plans do you have for the weekend?",
    image: "/images/q85.jpg",
    audioQuestion: "/audio/q85/q85.mp3",
    alternatives: [
      {
        text: "I plan to go to the countryside.",
        audio: "/audio/q85/q85_1.mp3",
        correct: false
      },
      {
        text: "I don’t plan to do anything.",
        audio: "/audio/q85/q85_2.mp3",
        correct: false
      },
      {
        text: "I’m figuring out what to do.",
        audio: "/audio/q85/q85_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 86,
    text: "What do you think of Italian food?",
    image: "/images/q86.jpg",
    audioQuestion: "/audio/q86/q86.mp3",
    alternatives: [
      {
        text: "I love it, it's one of my favorites.",
        audio: "/audio/q86/q86_1.mp3",
        correct: false
      },
      {
        text: "I'm not a fan of Italian food.",
        audio: "/audio/q86/q86_2.mp3",
        correct: false
      },
      {
        text: "I like it, but it depends on the dish.",
        audio: "/audio/q86/q86_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 87,
    text: "Do you like going to the gym?",
    image: "/images/q87.jpg",
    audioQuestion: "/audio/q87/q87.mp3",
    alternatives: [
      {
        text: "I love it, it helps me to disconnect.",
        audio: "/audio/q87/q87_1.mp3",
        correct: false
      },
      {
        text: "I prefer to do exercise at home.",
        audio: "/audio/q87/q87_2.mp3",
        correct: false
      },
      {
        text: "I’m not very enthusiastic about it, but I try.",
        audio: "/audio/q87/q87_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 88,
    text: "How do you feel today?",
    image: "/images/q88.jpg",
    audioQuestion: "/audio/q88/q88.mp3",
    alternatives: [
      {
        text: "I feel great, thank you.",
        audio: "/audio/q88/q88_1.mp3",
        correct: false
      },
      {
        text: "I don't have much energy.",
        audio: "/audio/q88/q88_2.mp3",
        correct: false
      },
      {
        text: "A bit stressed, but everything's fine.",
        audio: "/audio/q88/q88_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 89,
    text: "Would you like to go to the beach this weekend?",
    image: "/images/q89.jpg",
    audioQuestion: "/audio/q89/q89.mp3",
    alternatives: [
      {
        text: "Yes, I’d love to, the weather is nice.",
        audio: "/audio/q89/q89_1.mp3",
        correct: false
      },
      {
        text: "I can't this weekend.",
        audio: "/audio/q89/q89_2.mp3",
        correct: false
      },
      {
        text: "Maybe another day.",
        audio: "/audio/q89/q89_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 90,
    text: "Do you like reading mystery books?",
    image: "/images/q90.jpg",
    audioQuestion: "/audio/q90/q90.mp3",
    alternatives: [
      {
        text: "They’re my favorite. I’m always looking for new ones.",
        audio: "/audio/q90/q90_1.mp3",
        correct: false
      },
      {
        text: "I don't like them at all.",
        audio: "/audio/q90/q90_2.mp3",
        correct: false
      },
      {
        text: "Sometimes I do, if the story is good.",
        audio: "/audio/q90/q90_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 91,
    text: "Would you like to go to the movies tonight?",
    image: "/images/q91.jpg",
    audioQuestion: "/audio/q91/q91.mp3",
    alternatives: [
      {
        text: "Yes, I'd love to, what movie are we going to watch?",
        audio: "/audio/q91/q91_1.mp3",
        correct: false
      },
      {
        text: "I don't feel like going out today.",
        audio: "/audio/q91/q91_2.mp3",
        correct: false
      },
      {
        text: "I'll think about it, I'm not sure.",
        audio: "/audio/q91/q91_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 92,
    text: "How do you feel about work?",
    image: "/images/q92.jpg",
    audioQuestion: "/audio/q92/q92.mp3",
    alternatives: [
      {
        text: "I feel good, I like what I do.",
        audio: "/audio/q92/q92_1.mp3",
        correct: false
      },
      {
        text: "I'm not happy with my job.",
        audio: "/audio/q92/q92_2.mp3",
        correct: false
      },
      {
        text: "It's fine, although sometimes it’s hard for me.",
        audio: "/audio/q92/q92_3.mp3",
        correct: false
      }
    ]
  },
  {
    id: 93,
    text: "Would you like to go jogging together tomorrow?",
    image: "/images/q93.jpg",
    audioQuestion: "/audio/q93/q93.mp3",
    alternatives: [
      {
        text: "Yes, I really feel like going for a jog.",
        audio: "/audio/q93/q93_1.mp3",
        correct: false
      },
      {
        text: "I can’t tomorrow, sorry.",
        audio: "/audio/q93/q93_2.mp3",
        correct: false
      },
      {
        text: "Let me see if I have time.",
        audio: "/audio/q93/q93_3.mp3",
        correct: false
      }
    ]
  }
];
export default questions;
