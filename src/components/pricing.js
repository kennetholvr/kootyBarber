import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/StarBorder";
import Typography from "@mui/material/Typography";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";
import StickyFooter from "./footer";
import TopBar from "./topBar";


const tiers = [
  {
    title: "Buzz Cut & Line-Up",
    price: "15",
    description: [
      "shape up the hairline,",
      "modern and stylish cut",
      "a versatile option",
      "tame unruly hair",
    ],
    buttonText: "Select",
    buttonVariant: "contained",
  },
  {
    title: "Bald Fade",
    subheader: "Most popular",
    price: "25",
    description: [
      "smart and polished appearance",
      "pairs with various styles ",
      "modern and cool",
      "promotes you to achieve more",
    ],
    buttonText: "select",
    buttonVariant: "contained",
  },
  {
    title: "Long Afro",
    price: "30",
    description: [
      "can be created on multiple lengths",
      "wear your hair with pride",
      "embrace the volume",
      
    ],
    buttonText: "select",
    buttonVariant: "contained",
  },
];


function PricingContent() {
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <CssBaseline />
        <TopBar></TopBar>
        {/* Hero unit */}
        <Container
          disableGutters
          maxWidth="sm"
          component="main"
          sx={{ pt: 8, pb: 6 }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Welcome
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            component="p"
          >
            WELCOME TO KOOTYBARBER! Book your
            haircut Now! Or keep letting your hair grow!!
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container component="main" sx={{ mt: 2, mb: 10 }} maxWidth="lg">
          <Grid container spacing={7} alignItems="flex-end">
            {tiers.map((tier) => (
              // Enterprise card is full width at sm breakpoint
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{ align: "center" }}
                    action={tier.title === "Pro" ? <StarIcon /> : null}
                    subheaderTypographyProps={{
                      align: "center",
                    }}
                    sx={{
                      backgroundColor: (theme) =>
                        theme.palette.mode === "light"
                          ? theme.palette.grey[200]
                          : theme.palette.grey[700],
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                      >
                        ${tier.price}
                      </Typography>
                      <Typography variant="h6" color="text.secondary">
                        /mo
                      </Typography>
                    </Box>
                    <ul>
                      {tier.description.map((line) => (
                        <Typography
                          component="li"
                          variant="subtitle1"
                          align="center"
                          key={line}
                        >
                          {line}
                        </Typography>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions>
                    <Button fullWidth variant={tier.buttonVariant}>
                      {tier.buttonText}
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <StickyFooter></StickyFooter>
      </Box>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
