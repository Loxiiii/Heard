import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import PauseRounded from '@mui/icons-material/PauseRounded';
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded';
import FastForwardRounded from '@mui/icons-material/FastForwardRounded';
import FastRewindRounded from '@mui/icons-material/FastRewindRounded';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';
import Image from 'next/image';
import modUrl from '../helpers/appleKit/modUrl';

const TinyText = styled(Typography)({
  fontSize: '0.75rem',
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});

export default function NewMusicPlayer({ song, music }) {
  const theme = useTheme();
  const duration = Math.floor(song.attributes.durationInMillis/1000); // seconds
  const [position, setPosition] = React.useState(0);
  const [paused, setPaused] = React.useState(true);

  function formatDuration(value) {
    const minute = Math.floor(value / 60);
    const secondLeft = value - minute * 60;
    return `${minute}:${secondLeft < 10 ? `0${secondLeft}` : secondLeft}`;
  }

  let positionInterval = () => {
    let pos = setInterval(() => {
      let newPosition = position + 1;
      setPosition(newPosition);
    }, 1000)
  }

  const mainIconColor = theme.palette.mode === 'dark' ? '#fff' : '#000';
  const lightIconColor = theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (

      <div className='w-full h-24 border flex flex-row items-center space-x-16 fixed bottom-0 justify-center z-10 bg-white/50 backdrop-blur-sm'>
        <div>
          <Image className='rounded-md' src={modUrl(song.attributes.artwork.url, 300, 300)} height={70} width={70}></Image>
        </div>
        <div >
          <div className='ml-5 text-xl font-bold'>{song.attributes.name}</div>
          <div className='ml-5 '>{song.attributes.artistName}</div>
        </div>
        <IconButton aria-label="previous song">
            <FastRewindRounded fontSize="large" htmlColor={mainIconColor} />
        </IconButton>
        <IconButton
            aria-label={paused ? 'play' : 'pause'}
            onClick={() => {
              music.authorize();

              if (paused) {
                music.play().then(() => {
                  console.log('I should be playing music')
                });
              } else {
                music.pause().then(() => {
                  console.log('I should have stopped playing music')
                });
              }
              setPaused(!paused)}

            }
          >
            {paused ? (
              <PlayArrowRounded
                sx={{ fontSize: '3rem' }}
                htmlColor={mainIconColor}
              />
            ) : (
              <PauseRounded sx={{ fontSize: '3rem' }} htmlColor={mainIconColor} />
            )}
          </IconButton>
          <IconButton aria-label="next song">
            <FastForwardRounded fontSize="large" htmlColor={mainIconColor} />
          </IconButton>
          <div className='mr-10'>
            <TinyText>{formatDuration(position)}</TinyText>
          </div>
          <div className='w-1/2'>
            <Slider
            aria-label="time-indicator"
            size="small"
            value={position}
            min={0}
            step={1}
            max={duration}
            onChange={(_, value) => setPosition(value)}
            sx={{
              color: theme.palette.mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.87)',
              height: 4,
              '& .MuiSlider-thumb': {
                width: 8,
                height: 8,
                transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
                '&:before': {
                  boxShadow: '0 2px 12px 0 rgba(0,0,0,0.4)',
                },
                '&:hover, &.Mui-focusVisible': {
                  boxShadow: `0px 0px 0px 8px ${
                    theme.palette.mode === 'dark'
                      ? 'rgb(255 255 255 / 16%)'
                      : 'rgb(0 0 0 / 16%)'
                  }`,
                },
                '&.Mui-active': {
                  width: 20,
                  height: 20,
                },
              },
              '& .MuiSlider-rail': {
                opacity: 0.28,
              },
            }}
            />
          </div>
          <TinyText>-{formatDuration(duration - position)}</TinyText>

      </div>
  );
}