import React, { useEffect, useState } from 'react'
import { IconClose } from '@/app/ui/kit/icons/Close'
import { IconDownload } from '@/app/ui/kit/icons/Download'
import { Text } from '@/app/ui/kit/typography'
import styles from './styles.module.css'

export const AudioPlayer = ({ src, onClose }: { src: string; onClose: () => void }) => {
  const [isPlaying, setPlaying] = useState(false)
  const [player, setPlayer] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const element = document?.getElementById('player')
    if (element) {
      // @ts-ignore
      setPlayer(element)
    }
  }, [])

  const handlePlay = () => {
    if (player) {
      player.volume = 0.1
      setPlaying(!isPlaying)
      player.addEventListener('ended', () => {
        setPlaying(false)
      })
      if (isPlaying) {
        player.pause()
      } else {
        void player.play()
      }
    }
  }

  return (
    <div className={styles.playerWrapper}>
      <audio id="player" src={src}></audio>

      <Text theme="table-row">0:20</Text>
      <div>
        <div onClick={handlePlay} className={styles.playButton}>
          {isPlaying ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
            >
              <rect x="6" y="4" width="4" height="16" rx="2" fill="#002CFB" />
              <rect x="14" y="4" width="4" height="16" rx="2" fill="#002CFB" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.55909 3.8289C9.56971 3.83598 9.58037 3.84309 9.59106 3.85021L18.9624 10.0978C19.2336 10.2785 19.485 10.4461 19.6781 10.6018C19.8796 10.7643 20.1171 10.9897 20.2539 11.3194C20.4346 11.7551 20.4346 12.2449 20.2539 12.6806C20.1171 13.0103 19.8796 13.2357 19.6781 13.3982C19.485 13.5539 19.2336 13.7215 18.9624 13.9022L9.55912 20.1711C9.22768 20.3921 8.92964 20.5908 8.67675 20.7278C8.42368 20.865 8.07631 21.0217 7.67088 20.9975C7.15228 20.9665 6.67321 20.7102 6.35978 20.2958C6.11474 19.9719 6.05246 19.596 6.0262 19.3093C5.99995 19.0229 5.99997 18.6647 6 18.2663L6 5.77209C6 5.75924 6 5.74643 6 5.73367C5.99997 5.33532 5.99995 4.97712 6.0262 4.69069C6.05246 4.40405 6.11474 4.02808 6.35978 3.70417C6.67321 3.28985 7.15228 3.03346 7.67088 3.00249C8.07631 2.97829 8.42368 3.13501 8.67675 3.27215C8.92964 3.4092 9.22766 3.60791 9.55909 3.8289Z"
                fill="#002CFB"
              />
            </svg>
          )}
        </div>
      </div>

      <div className={styles.progress} />

      <div onClick={() => window.open(src, '_target')}>
        <IconDownload />
      </div>

      <div onClick={onClose}>
        <IconClose />
      </div>
    </div>
  )
}
