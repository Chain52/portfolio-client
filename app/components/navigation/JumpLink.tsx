import React from 'react';

import { Link } from 'react-router';
import clsx from 'clsx';

import { Flex } from '../element';

interface JumpLinkProps extends React.PropsWithChildren {
  anchor: string;
  name: string;
  variant?: 'navbar' | 'cta';
  className?: string;
}

export default function JumpLink({
  anchor,
  name,
  variant = 'navbar',
  className = 'font-medium',
  children
}: JumpLinkProps) {
  return (
    <Link
      to={`#${anchor}`}
      className={clsx(
        variant === 'cta' &&
          'rounded-full bg-blue-600 px-4 py-3 text-white hover:bg-blue-700',
        className
      )}
    >
      <Flex direction="col" align="center" className="px-2">
        <Flex grow shrink align="center" className="gap-2">
          {children}
          <span className="text-nowrap">{name}</span>
        </Flex>
      </Flex>
    </Link>
  );
}
