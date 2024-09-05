import { AudioClip } from './types';

interface DrumProps {
  audioClip: AudioClip;
}

const Drum = ({ audioClip }: DrumProps) => {
  const playSound = (audioClip: AudioClip) => {
    (document.getElementById(audioClip.keyTrigger) as HTMLAudioElement)
      .play()
      .catch(console.error);
    document.getElementById('display')!.innerText = audioClip.description;
  };

  return (
    <button
      className='drum-pad'
      id={`drum-${audioClip.keyTrigger}`}
      onClick={() => playSound(audioClip)}
    >
      <audio className='clip' id={audioClip.keyTrigger} src={audioClip.url} />
      {audioClip.keyTrigger}
    </button>
  );
};

export default Drum;
