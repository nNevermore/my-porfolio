'use client';

import { useTranslations } from 'next-intl';
import { Fade } from 'react-awesome-reveal';

export interface ContentBlockProps {
  // icon: string;
  tName: 'FadeBlock1' | 'FadeBlock2' | 'FadeBlock3';
  // direction: 'left' | 'right' | 'up';
}

const FadeBlock = ({
  tName,

  // direction,
}: ContentBlockProps) => {
  const t = useTranslations(tName);

  return (
    <div className="m-2 flex h-screen bg-red-500">
      <Fade direction="left" triggerOnce className="block w-1/2 bg-yellow-300">
        <div>
          <h1 className="my-1 text-center text-3xl">{t('title_left')}</h1>
          <div className="p-3"> {t('content_left')}</div>
        </div>
      </Fade>
      <Fade direction="right" triggerOnce className="block w-1/2 bg-yellow-300">
        <div>
          <h1>👋 {t('title_left')}</h1>
          <div> {t('content_left')}</div>
        </div>
      </Fade>
    </div>
  );
};

export { FadeBlock };
