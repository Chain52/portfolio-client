import { Link } from 'react-router';
import clsx from 'clsx';

import { Flex } from '../element';

interface JumpLinkProps {
  anchor: string;
  name: string;
  variant?: 'navbar' | 'cta';
  className?: string;
}

export default function JumpLink({
  anchor,
  name,
  variant = 'navbar',
  className
}: JumpLinkProps) {
  return (
    <Link
      to={`#${anchor}`}
      className={clsx(
        variant === 'cta' &&
          'px-4 py-3 hover:bg-blue-700 bg-blue-600 text-white rounded-full font-medium',
        className
      )}
    >
      <Flex direction="col" align="center" className="px-2">
        <Flex grow shrink align="center">
          <span>{name}</span>
        </Flex>
      </Flex>
    </Link>
  );
}
