import { Inter, Roboto } from 'next/font/google';

import { FirstName, LastName } from './config';

const inter = Inter({ subsets: ['latin'], weight: '700' });
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

const Logo = () => {
  return (
    <div>
      <div className={`${inter.className} text-p-5`}> {FirstName} </div>
      <div className={`${roboto.className} -mt-10 text-p-3`}>{LastName}</div>
    </div>
  );
};

export { Logo };
