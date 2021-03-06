import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import wmn from "../public/imgs/wmn.jpg";
import md from "../public/imgs/md.jpg";
import pr from "../public/imgs/pr.jpg";
import na from "../public/imgs/na.jpg";
import z from "../public/imgs/z.jpg";
import bl from "../public/imgs/bl.jpg";
import fb from "../public/imgs/fb.jpg";
import mycart from "../public/imgs/mycart.jpg";
import { Box } from "@mui/system";
import Image from "next/image";
function Works() {
  return (
    <div id="Works">
      <Container sx={{ bgcolor: "Background.paper" }}>
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Works
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            These are some of the projects I have worked and participated on up
            until now.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                sx={{ my: 2, fontWeight: 700, textAlign: "center" }}
              >
                My first React Project
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",

                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },
                "::after": {
                  position: "absolute",
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/wmn.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  My First React Project
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  this project is done using MERN STACK, MongoDb, ExpressJs,
                  ReactJs and NodeJs.
                </Typography>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  href="https://wmn-fashion-shopping.herokuapp.com/women"
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ my: 2, fontWeight: 700, textAlign: "center" }}
            >
              Grocery
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/mycart.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Grocery
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Done in Next and Mui
                </Typography>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  href="https://bazar-react.vercel.app/grocery1"
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ my: 1 }}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Portifolio
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  obgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/pr.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  My Portifolio
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  done React Materialize Ui, React
                </Typography>
                <Button
                  href="#"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Medico
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/md.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Medico
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  done using html, css, jquery and bootstrap and other libraries
                </Typography>
                <Button
                  href="https://medicioo.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Natours
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/fb.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Facebook Clone
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  done using Mern stack, mongo, express, react and node
                </Typography>
                <Button
                  href="https://fcloneodin.herokuapp.com/#/home"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Next Amazona
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/z.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Next Amanzona
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Done using Next, express, node, and mui for design
                </Typography>
                <Button
                  href="https://amani-nex.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Natours
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/na.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Natours
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  done using html, css, scss, flexbox
                </Typography>
                <Button
                  href="https://natours.netlify.app/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Simple Blog
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/bl.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Simple Blog
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Done using Next, React, Graphql, Twindcss
                </Typography>
                <Button
                  href="https://blog-amany.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Beatch Resort
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/br.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Beach Resort
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Done using React, Context, styled components
                </Typography>
                <Button
                  href="https://aman-real-state.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Div Connector
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#1b5e20",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <img src="../imgs/dv.jpg" style={{ width: "100%" }}></img>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Div Connector
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Done using React, Context, React bootstrap, node and express
                </Typography>
                <Button
                  href="https://dsnfs.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Works;
