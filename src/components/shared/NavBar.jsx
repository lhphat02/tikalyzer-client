'use client';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

import TextButton from '@/components/common/TextButton';
import TxtBtnDropdown from '../common/TxtBtnDropdown';
import assets from '@/assets';

const analyzeOptions = [
  { label: 'User', value: 'analyze-user' },
  { label: 'Hashtag', value: 'analyze-hashtag' },
  { label: 'Trending', value: 'analyze-trending' },
];

const Navbar = () => {
  const path = usePathname();
  const router = useRouter();

  console.log(path);

  return (
    <nav className="fixed z-10 flex items-center justify-between w-full p-4 bg-white shadow-sm bg-opacity-80 backdrop-blur-md">
      <div className="flex items-center">
        <Image
          src={assets.logo_svg}
          alt="tikalyzer logo"
          width={40}
          height={40}
        />
        <h1 className="text-xl font-bold text-prim-1">tikalyzer</h1>
      </div>

      <ul className="flex px-5 space-x-5">
        <li>
          <TextButton href="/" isActive={path === '/'}>
            Home
          </TextButton>
        </li>

        <li>
          <TxtBtnDropdown
            label="Analyze"
            options={analyzeOptions}
            onSelect={(value) => router.push(`/${value}`)}
            isActive={path.includes('analyze')}
          />
        </li>

        <li>
          <TextButton href="/predict-view" isActive={path === '/predict-view'}>
            Predict
          </TextButton>
        </li>

        <li>
          <TextButton href="/contact" isActive={path === '/contact'}>
            Contact
          </TextButton>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
