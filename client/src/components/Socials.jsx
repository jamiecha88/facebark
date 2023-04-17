import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';

const socialMedia = {
  twitter: 'https://twitter.com/jamiecha88',
  github: 'https://github.com/jamiecha88',
  homepage: 'https://jamiecha.netlify.app/',
};

const SnsIcon = styled('div')(({ theme }) => ({
  width: '2em',
  height: '2em',
  backgroundColor: 'transparent',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(2),
}));

const SocialGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '200px',
  //backgroundColor: 'pink',
  margin: 'auto',
  marginRight: '5px',
  alignItems: 'center',
}));

export default function Social({ color }) {
  const { github, twitter, homepage } = socialMedia;
  return (
    <SocialGrid item container spacing={2}>
      <Grid component={'a'} href={homepage} target="_blank">
        <SnsIcon color={'#042140'} sx={{ color: '#042140' }}>
          <HomeIcon />
        </SnsIcon>
      </Grid>

      <Grid component={'a'} href={github} target="_blank">
        <SnsIcon sx={{ color: '#042140' }}>
          <GitHubIcon />
        </SnsIcon>
      </Grid>
      <Grid component={'a'} href={twitter} target="_blank">
        <SnsIcon color={'#042140'} sx={{ color: '#042140' }}>
          <TwitterIcon />
        </SnsIcon>
      </Grid>
    </SocialGrid>
  );
}
