// components/DynamicIcon.tsx
import dynamic from 'next/dynamic';
import React from 'react';
import type { IconType } from 'react-icons';
import { IconBaseProps } from 'react-icons';

export type IconLibrary = 'fa' | 'md' | 'io'; // Add all possible libraries here

type DynamicIconProps = {
  iconName: string;
  library: IconLibrary;
} & IconBaseProps;

// This is the core fix. The dynamic import must be a string literal.
const iconImporter = (library: IconLibrary, iconName: string) => {
  switch (library) {
    case 'fa':
      return import('react-icons/fa').then((mod) => mod[iconName] as IconType);
    case 'md':
      return import('react-icons/md').then((mod) => mod[iconName] as IconType);
    case 'io':
      return import('react-icons/io').then((mod) => mod[iconName] as IconType);
    default:
      throw new Error(`Unknown icon library: ${library}`);
  }
};

const DynamicIcon = ({ iconName, library, ...props }: DynamicIconProps) => {
  const IconComponent = dynamic<IconBaseProps>(
    () => iconImporter(library, iconName),
    {
      ssr: false,
      loading: () => <p>Loading...</p>,
    }
  );

  return <IconComponent {...props} />;
};

export default DynamicIcon;