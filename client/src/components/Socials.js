import { styled } from "tss-react/mui";
import { Grid } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';

const socialMedia = {
  twitter: "https://twitter.com/jamiecha88",
  github: "https://github.com/jamiecha88",
  homepage: "https://jamiecha.netlify.app/",
};

const SnsIcon = styled("div")(({ theme }) => ({
  width: "30px",
  height: "30px",

  [theme.breakpoints.down("xs")]: {
    width: "25px",
    height: "25px",
  },
  "&:hover": {
    color: theme.palette.info.main,
  },
}));

export default function Social({ color }) {
  const { github, twitter, homepage } = socialMedia;
  return (
    <Grid item container spacing={2} justifyContent="center">
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={homepage}
      >
        <SnsIcon
          color={color ? "primary" : "secondary"}
          sx={{ color: "inherit" }}
        >
          <HomeIcon />
        </SnsIcon>
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={github}
      >
        <SnsIcon
          color={color ? "primary" : "secondary"}
          sx={{ color: "inherit" }}
        >
          <GitHubIcon />
        </SnsIcon>
      </Grid>
      <Grid
        item
        component={"a"}
        target="_blank"
        rel="noreferrer noopener"
        href={twitter}
      >
        <SnsIcon>
          <TwitterIcon />
        </SnsIcon>
      </Grid>
    </Grid>
  );
}