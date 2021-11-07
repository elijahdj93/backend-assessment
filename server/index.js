const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A golden egg of opportunity falls into your lap this month.",
					 "A hunch is creativity trying to tell you something.",
					 "Your success will astonish everyone.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/scripture", (req, res) => {
  const scriptures = ["The blessing of the Lord brings wealth, without painful toil for it.",
					 "Submit to God and be at peace with him; in this way, prosperity will come to you.",
					 "He who did not spare His own Son, but delivered Him up for us all, how shall He not with Him also freely give us all things?",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * scriptures.length);
  let randomScriptures = scriptures[randomIndex];

  res.status(200).send(randomScriptures);
  
});

app.get("/api/resources", (req, res) => {
  const resources = ["Use Udemy.com",
					 "Use Youtube.com",
					 "Use developer.mozilla.org",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * resources.length);
  let randomResources = resources[randomIndex];

  res.status(200).send(randomResources);
  
});

app.get("/api/time", (req, res) => {
  const times = ["Time to get off your @$s!",
					 "Time to stop procrastinating!",
					 "Time to put your all in and not the bare minimum!",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * times.length);
  let randomTimes = times[randomIndex];

  res.status(200).send(randomTimes);
  
});

app.listen(4000, () => console.log("Server running on 4000"));
