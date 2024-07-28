import { Manuale } from 'next/font/google';
import localFont from 'next/font/local';

import { FirstName, LastName } from './config';

const myFont = localFont({ src: './Butler-Bold.woff' });

const inter = Manuale({
  subsets: ['latin'],
  weight: '400',
});

const Logo = async () => {
  return (
    <div>
      <div className={`${myFont.className} text-primary-5`}> {FirstName} </div>
      <div className={`${inter.className} -mt-14 text-primary-3 `}>
        {LastName}
      </div>
    </div>
  );
};

export { Logo };
