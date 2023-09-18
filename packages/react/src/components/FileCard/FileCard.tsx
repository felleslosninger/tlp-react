import React from 'react';
import cn from 'classnames';
import { DownloadIcon, FileIcon } from '@navikt/aksel-icons';
import { Heading, Paragraph } from '@digdir/design-system-react';

import classes from './FileCard.module.css';

interface FileCardProps {
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
  brand?: 'primary' | 'secondary' | 'tertiary';
}

const FileCard = ({
  icon,
  heading,
  subHeading,
  brand = 'primary',
}: FileCardProps) => {
  return (
    <div className={cn(classes.fileCard, classes[brand])}>
      <div className={cn(classes.fileIcon)}>{icon ? icon : <FileIcon />}</div>
      <div className={cn(classes.fileText)}>
        <Heading size='xxsmall'>{heading}</Heading>
        <Paragraph size='small'>{subHeading}</Paragraph>
      </div>
      <div className={cn(cn(classes.fileDownload))}>
        <DownloadIcon />
      </div>
    </div>
  );
};

export { FileCard };
export type { FileCardProps };
