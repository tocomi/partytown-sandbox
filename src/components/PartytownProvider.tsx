import { Partytown } from '@builder.io/partytown/react';
import { FC, PropsWithChildren } from 'react';

export const PartytownProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Partytown debug={true} />
      {children}
    </>
  );
};
