import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "200px",
          borderRight: "1px solid #ccc",
          height: "100%",
        }}
      >
        <List>
          <ListItem>
            <Accordion>

              <AccordionSummary expandIcon={<ExpandMoreIcon />}>Something more</AccordionSummary>
              <AccordionDetails >Something</AccordionDetails>

            </Accordion>
          </ListItem>
          <ListItem>One</ListItem>
          <ListItem>One</ListItem>
          <ListItem>One</ListItem>
        </List>
      </div>
      <div
        style={{
          flexGrow: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
