import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import HomeIcon from "@mui/icons-material/Home";

const socialMedia = {
  twitter: "https://twitter.com/jamiecha88",
  github: "https://github.com/jamiecha88",
  homepage: "https://jamiecha.netlify.app/",
};

const SnsIcon = styled("div")(({ theme }) => ({
  width: "20px",
  height: "20px",
  backgroundColor: "transparent",

  [theme.breakpoints.down("xs")]: {
    width: "25px",
    height: "25px",
  }
}));

const SocialGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  maxWidth: "200px",
  backgroundColor: "blue",
  margin: "auto",
}));

export default function Social({ color }) {
  const { github, twitter, homepage } = socialMedia;
  return (
    <SocialGrid item container spacing={2} >
      <Grid
        item
        component={"snsIcon"}
        target="_blank"
        rel="noreferrer noopener"
        href={homepage}

      >
        <SnsIcon
          color={"#040A4A"}
          sx={{ color: "#040A4A"}}
        >
        <HomeIcon />
        </SnsIcon>
      </Grid>
      <Grid
        item
        component={"snsIcon"}
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <SnsIcon
          sx={{ color: "#040A4A" }}
        >
          <GitHubIcon />
        </SnsIcon>
      </Grid>
      <Grid
        item
        component={"snsIcon"}
        target="_blank"
        rel="noreferrer noopener"
        href={twitter}
      >
        <SnsIcon
          color={"#040A4A"}
          sx={{ color: "#040A4A"
          }}>
          <TwitterIcon />
        </SnsIcon>
      </Grid>
    </SocialGrid>

  );
}
