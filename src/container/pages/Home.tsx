import React from 'react'
import { Navbar } from "../pages/Navbar";
import { Grid } from '@mui/material';
import { useApiGet, TApiResponse } from '../hooks/ApiHook';
export class Home extends React.Component {
  data: TApiResponse = useApiGet(
    'http://www.omdbapi.com/?s=Guardians&apikey=xxxxxxxx'
  );
  render() {
    return (
    <div className='p-home'>
      <Navbar/>
      <Grid container spacing={1}>
        <Grid container justifyContent="center" item xs={12} spacing={3}>
          <div className='p-search'>
            <h1>#</h1>
            <form onSubmit={this.componentDidMount}>
              <input type="Search" />
            </form>
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={1}>
        <Grid container justifyContent="center" item xs={12} spacing={3}>
          <div className='p-content'>
            <h2><a href='https://giphy.com/gifs/mashable-google-search-b7s3wG2wOY9UhIpMiK'>Google Search GIF by Mashable</a></h2>
            <a href='https://giphy.com/gifs/mashable-google-search-b7s3wG2wOY9UhIpMiK'><img src='https://media3.giphy.com/media/b7s3wG2wOY9UhIpMiK/giphy.gif'></img></a>
          </div>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default Home
