import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FAQItem {
  nom:string;
  question: string;
  reponse: string;
}

interface FAQAccordionProps {
  data: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ data }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      {data.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography component="span">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.reponse}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQAccordion;
