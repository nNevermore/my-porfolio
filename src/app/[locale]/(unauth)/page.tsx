// import { useTranslations } from 'next-intl';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

import { FadeBlock } from '@/components/FadeBlock';
// import { FadeBlock } from '@/components/FadeBlock';
import { Logo } from '@/components/Logo/Main';
import { AppConfig } from '@/utils/AppConfig';

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
  // const t = useTranslations('PortfolioSlug');

  return (
    <div className="">
      <div className="h-screen">
        <div className="my-2 flex ">
          <div className="flex w-1/2 items-center justify-center p-9">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              aliquam, nisl vel bibendum convallis, augue leo rhoncus nunc,
              auctor maximus nunc nisl ac nunc. Nam velit nulla, gravida eu
              efficitur non, cursus sed nibh. Sed euismod, nunc sed eleifend
              finibus, ante felis malesuada nisl, at gravida nulla est at enim.
              Nulla facilisi.
            </p>
          </div>
          <div className="flex w-1/2 items-center justify-center p-9 text-9xl  ">
            <Logo />
          </div>
        </div>
        <div className="my-2 flex ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            aliquam, nisl vel bibendum convallis, augue leo rhoncus nunc, auctor
            maximus nunc nisl ac nunc. Nam velit nulla, gravida eu efficitur
            non, cursus sed nibh. Sed euismod, nunc sed eleifend finibus, ante
            felis malesuada nisl, at gravida nulla est at enim. Nulla facilisi.
          </p>
        </div>
      </div>
      <FadeBlock tName="FadeBlock2" />
      <FadeBlock tName="FadeBlock1" />
      <FadeBlock tName="FadeBlock3" />
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
