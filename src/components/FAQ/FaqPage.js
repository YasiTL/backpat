import React, { useState } from "react";
import NavBar from "../NavBar";
import Grid from "@material-ui/core/Grid"
import "./FaqPage.css";
import FAQ from "./Faq.js";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

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
        "We offer free tutoring to any student K-12 who is interested in receiving tutoring in any of the subjects listed on our website. Due to current circumstances with the coronavirus, we will be giving priority to families with active healthcare workers should all our volunteers become fully booked.",
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

      <Grid container>
        <Grid item xs></Grid>
        <Grid item xs={9}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h4" color="primary" fontWeight="bold">-</Typography>
            <Typography variant="h4" color="secondary">FAQ</Typography>
            <Typography variant="h4" color="primary">-</Typography>
          </Box>
          <div className="faqs">
            {faqs.map((faq, i) => (
              <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </Grid>
        <Grid item xs></Grid>
      </Grid>
    </div>
  );
}
export default FaqPage;
