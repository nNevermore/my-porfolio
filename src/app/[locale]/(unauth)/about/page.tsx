import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/components/ui/button';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function About() {
  const t = useTranslations('About');

  return (
    <>
      <div className="mt-2 text-center text-3xl">
        <h1>Boilerplate Code</h1>
        <div>
          Test
          <Button>Click me</Button>
          {/* <Input type="text" placeholder="Enter your name" /> */}
        </div>
      </div>

      <a href="https://l.crowdin.com/next-js" target="_blank">
        <Image
          className="mx-auto mt-2"
          src="https://support.crowdin.com/assets/logos/core-logo/svg/crowdin-core-logo-cDark.svg"
          alt="Crowdin Translation Management System"
          width={130}
          height={112}
        />
      </a>
      <p>{t('about_paragraph')}</p>
    </>
  );
}
