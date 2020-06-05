import anime from 'animejs/lib/anime.es';

var playpause_anime = anime({
  targets: '#playpause',
  rotate:'1turn',
  duration:200
});

export function restartAnimation(){
    playpause_anime.restart();
}