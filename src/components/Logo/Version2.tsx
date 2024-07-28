import { Lora, Roboto_Slab } from 'next/font/google';

import { FirstName, LastName } from './config';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: '700', // bold
});

const lora = Lora({
  subsets: ['latin'],
  weight: '400', // regular
});

const Logo = async () => {
  return (
    <div>
      <div className={`${robotoSlab.className} text-8xl text-orange-800`}>
        {' '}
        {FirstName}{' '}
      </div>
      <div className={`${lora.className} -mt-4 text-6xl text-gray-400`}>
        {LastName}
      </div>
    </div>
  );
};

export { Logo };
