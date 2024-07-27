import { Manuale } from 'next/font/google';
import localFont from 'next/font/local';
import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { AppConfig } from '@/utils/AppConfig';

const myFont = localFont({ src: './Butler-Bold.woff' });

const inter = Manuale({
  subsets: ['latin'],
  weight: '400',
});

type IPortfolioDetailProps = {
  params: { slug: string; locale: string };
};

export function generateStaticParams() {
  return AppConfig.locales.map((locale) => ({
    slug: `Index`,
    locale,
  }));
}

export async function generateMetadata(props: IPortfolioDetailProps) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title', { slug: props.params.slug }),
    description: t('meta_description', { slug: props.params.slug }),
  };
}

const PortfolioDetail = (props: IPortfolioDetailProps) => {
  unstable_setRequestLocale(props.params.locale);
  const t = useTranslations('PortfolioSlug');

  return (
    <div>
      <div className="my-2 flex ">
        <div className="flex w-1/2 items-center justify-center">
          Cześć, jestem programistą!
        </div>
        <div className="w-1/2 items-center justify-center text-9xl ">
          <div className={`${myFont.className} text-p-5`}> Bartosz </div>
          <div className={`${inter.className} -mt-14 text-p-3 `}>Wójtowicz</div>
          <p />
        </div>
      </div>
      <div className="mt-52">{t('content')}</div>
    </div>
  );
};

export const dynamicParams = false;

export default PortfolioDetail;

// import { Manuale } from 'next/font/google';
// import localFont from 'next/font/local';
// import { getTranslations } from 'next-intl/server';

// const myFont = localFont({ src: './Butler-Bold.woff' });

// export async function generateMetadata(props: { params: { locale: string } }) {
//   const t = await getTranslations({
//     locale: props.params.locale,
//     namespace: 'Index',
//   });

//   return {
//     title: t('meta_title'),
//     description: t('meta_description'),
//   };
// }

// const inter = Manuale({
//   subsets: ['latin'],
//   weight: '400',
// });

// export default function Index() {
//   return (
//     <div className="my-2 flex ">
//       <div className="flex w-1/2 items-center justify-center">
//         Cześć, jestem programistą!
//       </div>
//       <div className="w-1/2 items-center justify-center text-9xl ">
//         <div className={`${myFont.className} text-p-5`}> Bartosz </div>
//         <div className={`${inter.className} -mt-14 text-p-3 `}>Wójtowicz</div>
//         <p />
//       </div>
//     </div>
//   );
// }
