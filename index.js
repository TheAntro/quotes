import express from "express";

const app = express();

const randomQuotes = [
  "The only way to do great work is to love what you do.",
  "Strive not to be a success, but rather to be of value.",
  "The mind is everything. What you think you become.",
  "Life is what happens when you're busy making other plans.",
  "The best time to plant a tree was 20 years ago. The second best time is now.",
  "Eighty percent of success is showing up.",
  "An unexamined life is not worth living.",
  "You miss 100% of the shots you don't take.",
  "Whether you think you can or you think you can't, you're right.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "The only true wisdom is in knowing you know nothing.",
  "A room without books is like a body without a soul.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "It is never too late to be what you might have been.",
  "Happiness is not something readymade. It comes from your own actions.",
  "The only impossible journey is the one you never begin.",
  "Do what you can, with what you have, where you are.",
  "If you want to lift yourself up, lift up someone else.",
  "Where there is love there is life.",
  "Innovation distinguishes between a leader and a follower.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  "If you look at what you have in life, you'll always have more.",
  "If you don't design your own life plan, chances are you'll fall into someone else's plan.",
  "Change your thoughts and you change your world.",
  "The only limit to our realization of tomorrow will be our doubts of today.",
  "We become what we think about.",
  "The best revenge is massive success.",
  "A person who never made a mistake never tried anything new.",
  "If you can't explain it simply, you don't understand it well enough.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "Don't cry because it's over, smile because it happened.",
  "It is hard to fail, but it is worse never to have tried to succeed.",
  "Be yourself; everyone else is already taken.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
  "Insanity is doing the same thing over and over and expecting different results.",
  "Everything you can imagine is real.",
  "The mind, once stretched by a new idea, never returns to its original dimensions.",
  "Logic will get you from A to B. Imagination will take you everywhere.",
  "The journey of a thousand miles begins with a single step.",
  "Do not wait for the perfect time and place to enter, for you are enough.",
  "Simplicity is the ultimate sophistication.",
  "Nothing is impossible, the word itself says 'I'm possible'!",
  "The purpose of our lives is to be happy.",
  "Get busy living or get busy dying.",
  "Many of life's failures are people who did not realize how close they were to success when they gave up.",
  "The power of imagination makes us infinite.",
  "If opportunity doesn't knock, build a door.",
  "The road to success and the road to failure are almost exactly the same.",
  "Try not to become a man of success, but rather try to become a man of value.",
];

app.get("/", (req, res) => {
  const quote = randomQuotes.at(
    Math.floor(Math.random() * randomQuotes.length)
  );
  res.send(`<h1>${quote}</h1>`);
});

app.listen(8080, () => {
  console.log("listening on port 8080");
});
