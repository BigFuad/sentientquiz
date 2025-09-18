
3️⃣ script.js
/* -------------------------------------------------
   Sentient Foundation Quiz – vanilla JS
   ------------------------------------------------- */

const questions = [
  {
    q: "1. In which year was Sentient Foundation founded?",
    opts: ["A) 2022", "B) 2023", "C) 2024", "D) 2025"],
    ans: "C"
  },
  {
    q: "2. How much seed funding did Sentient raise in July 2024?",
    opts: ["A) $45 M", "B) $65 M", "C) $85 M", "D) $105 M"],
    ans: "C"
  },
  {
    q: "3. Which of the following investors led the seed round?",
    opts: ["A) Andreessen Horowitz", "B) Founders Fund", "C) Sequoia Capital", "D) SoftBank"],
    ans: "B"
  },
  {
    q: "4. What is the primary mission of Sentient Foundation?",
    opts: [
      "A) Build proprietary AI for enterprises",
      "B) Create community‑built, community‑aligned, community‑owned AI",
      "C) Develop a single monolithic AGI model",
      "D) Focus solely on blockchain infrastructure"
    ],
    ans: "B"
  },
  {
    q: "5. Which three legends are listed as part of the founding team?",
    opts: [
      "A) Pramod Viswanath, Himanshu Tyagi, Sandeep Nailwal",
      "B) Demis Hassabis, Andrew Ng, Fei‑Fei Li",
      "C) Elon Musk, Sam Altman, Jeff Bezos",
      "D) Yann LeCun, Geoffrey Hinton, Ilya Sutskever"
    ],
    ans: "A"
  },
  {
    q: "6. Who is the Head of Strategy at Sentient?",
    opts: ["A) Oleg Golev", "B) Abhishek Saxena", "C) Antonio Knez", "D) Vivek Kolli"],
    ans: "B"
  },
  {
    q: "7. What does the acronym GRID stand for?",
    opts: [
      "A) Global Real‑time Intelligent Data",
      "B) Generalized Recurrent Integrated Development",
      "C) Global Real‑time Intelligence Distribution",
      "D) It is not an acronym; it is simply the name of the network"
    ],
    ans: "D"
  },
  {
    q: "8. Which statement best describes how GRID processes a query?",
    opts: [
      "A) It sends the query to a single large model for a response.",
      "B) It splits the query, routes sub‑tasks to specialized agents, enriches with tools, then merges the results.",
      "C) It forwards the query to an external API provider only.",
      "D) It stores the query for later batch processing."
    ],
    ans: "B"
  },
  {
    q: "9. How many partner integrations does the live GRID ecosystem currently have?",
    opts: ["A) ~30", "B) ~60", "C) ~90", "D) >110"],
    ans: "D"
  },
  {
    q: "10. Which of the following is not a live partner category?",
    opts: ["A) Specialized Agents", "B) Data Providers", "C) AI Models", "D) Hardware Manufacturing"],
    ans: "D"
  },
  {
    q: "11. Which web‑2 partner provides AI‑generated diagrams and infographics?",
    opts: ["A) Napkin", "B) Exa", "C) Caldo", "D) The Graph"],
    ans: "A"
  },
  {
    q: "12. Which web‑3 partner supplies crypto social‑data and sentiment?",
    opts: ["A) Messari Co‑Pilot", "B) Kaito", "C) EigenLayer", "D) The Graph"],
    ans: "B"
  },
  {
    q: "13. What is the primary purpose of the Token Reports Panel?",
    opts: [
      "A) To display Sentient’s internal financial statements",
      "B) To show real‑time crypto charts, news, analytics, and sentiment for token queries",
      "C) To list all GRID partners",
      "D) To provide a leaderboard of top contributors"
    ],
    ans: "B"
  },
  {
    q: "14. Which token powers the GRID economics model?",
    opts: ["A) $SENT", "B) $GRID", "C) $AGI", "D) $LOYA"],
    ans: "A"
  },
  {
    q: "15. In the $SENT token economy, what does staking on an “artifact” accomplish?",
    opts: [
      "A) Grants voting rights in Sentient’s board",
      "B) Directs a larger share of token emissions to that artifact and yields rewards",
      "C) Unlocks premium GRID features for the staker",
      "D) Converts the token into a stablecoin"
    ],
    ans: "B"
  },
