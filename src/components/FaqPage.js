import { Box, Grid } from "@material-ui/core";
import React, { useState } from "react";
import NavBar from "./NavBar";
import "./FaqPage.css";
import FAQ from "./FAQ.js";

function FaqPage() {
  const [faqs, setFaqs] = useState([
    {
      question:
        "Are there any costs or fees associated with receiving tutoring from Backpat?",
      answer:
        "Absolutely not! Backpat is comprised entirely of volunteers aiming to make a positive contribution to their community and was created specifically so no monetary transactions are necessary at any point.",
      open: false,
    },
    {
      question: "Who is eligible to sign up for tutoring with Backpat?",
      answer:
        "Absolutely not! Backpat is comprised entirely of volunteers aiming to make a positive contribution to their community and was created specifically so no monetary transactions are necessary at any point.",
      open: false,
    },
    {
      question: "How do I sign up for Backpat?",
      answer:
        "On the main page of our website, click on the Join Us tab and select the pages for what you want to receive tutoring in!",
      open: false,
    },
    {
      question: "Who are the Backpat tutors?",
      answer:
        "All Backpat tutors are adult volunteers, mainly college or university students, who have enough experience to be qualified to assist their students.",
      open: false,
    },
    {
      question: "How can I become a Backpat tutor and who can become a tutor?",
      answer:
        "On the main page of our website, navigate to the Join Us tab, and select the option to become a tutor! Currently, we are only able to accept volunteers who are 18 years of age or older but are working on a form to accept volunteers in high school as well.",
      open: false,
    },
    {
      question: "What subjects does Backpat offer for tutoring?",
      answer:
        "We offer tutoring in Math, Science, English, History, Art/Music, Test Prep, and Foreign Languages. You can also request additional subjects and we will try to find a tutor qualified to assist in that subject.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        }
        return faq;
      })
    );
  };
  return (
    <div>
      <header>
        <NavBar />
      </header>

      {/*FAQ Header */}

      <Grid container justify="center">
        <Grid item alignContent="center">
          <Box fontSize={20}>FAQ</Box>
        </Grid>
      </Grid>
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}
export default FaqPage;
