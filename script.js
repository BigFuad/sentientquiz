
script.js
/* -------------------------------------------------
   Quiz data – keep it in a plain JS array.
   Each object: id, question, options (A‑D), answer (letter)
   ------------------------------------------------- */
const quizData = [
  {
    id: 1,
    q: "In which year was Sentient Foundation founded?",
    opts: ["2022", "2023", "2024", "2025"],
    ans: "C"
  },
  {
    id: 2,
    q: "How much seed funding did Sentient raise in July 2024?",
    opts: ["$45 M", "$65 M", "$85 M", "$105 M"],
    ans: "C"
  },
  {
    id: 3,
    q: "Which of the following investors led the seed round?",
    opts: ["Andreessen Horowitz", "Founders Fund", "Sequoia Capital", "SoftBank"],
    ans: "B"
  },
  {
    id: 4,
    q: "What is the primary mission of Sentient Foundation?",
    opts: [
      "Build proprietary AI for enterprises",
      "Create community‑built, community‑aligned, community‑owned AI",
      "Develop a single monolithic AGI model",
      "Focus solely on blockchain infrastructure"
    ],
    ans: "B"
  },
  {
    id: 5,
    q: "Which three legends are listed as part of the founding team?",
    opts: [
      "Pramod Viswanath, Himanshu Tyagi, Sandeep Nailwal",
      "Demis Hassabis, Andrew Ng, Fei‑Fei Li",
      "Elon Musk, Sam Altman, Jeff Bezos",
      "Yann LeCun, Geoffrey Hinton, Ilya Sutskever"
    ],
    ans: "A"
  },
  {
    id: 6,
    q: "Who is the Head of Strategy at Sentient?",
    opts: ["Oleg Golev", "Abhishek Saxena", "Antonio Knez", "Vivek Kolli"],
    ans: "B"
  },
  {
    id: 7,
    q: "What does the acronym GRID stand for?",
    opts: [
      "Global Real‑time Intelligent Data",
      "Generalized Recurrent Integrated Development",
      "Global Real‑time Intelligence Distribution",
      "It is not an acronym; it is simply the name of the network"
    ],
    ans: "D"
  },
  {
    id: 8,
    q: "Which statement best describes how GRID processes a query?",
    opts: [
      "It sends the query to a single large model for a response.",
      "It splits the query, routes sub‑tasks to specialized agents, enriches with tools, then merges the results.",
      "It forwards the query to an external API provider only.",
      "It stores the query for later batch processing."
    ],
    ans: "B"
  },
  {
    id: 9,
    q: "How many partner integrations does the live GRID ecosystem currently have?",
    opts: ["~30", "~60", "~90", ">110"],
    ans: "D"
  },
  {
    id: 10,
    q: "Which of the following is NOT a live partner category?",
    opts: ["Specialized Agents", "Data Providers", "
