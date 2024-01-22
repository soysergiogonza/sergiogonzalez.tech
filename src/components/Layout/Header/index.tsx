'use client';

import {MobileNavigation, DesktopNavigation} from '~/components/Layout';

const Header = () => {
  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-col"
        style={{
          marginRight: '1rem',
          marginBlock: '1rem',
        }}
      >
        <div className="flex flex-1 justify-end md:justify-center">
          <MobileNavigation />
          <DesktopNavigation />
        </div>
      </header>
    </>
  );
};

export {Header};