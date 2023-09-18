import React from 'react';
import cn from 'classnames';
import { DownloadIcon, FileIcon } from '@navikt/aksel-icons';
import { Heading, Paragraph } from '@digdir/design-system-react';

import classes from './FileCard.module.css';

interface FileCardProps {
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
  filePath: string;
  fileName?: string;
  brand?: 'primary' | 'secondary' | 'tertiary';
}

const FileCard = ({
  icon,
  heading,
  subHeading,
  filePath,
  fileName,
  brand = 'primary',
}: FileCardProps) => {
  return (
    <a
      className={cn(classes.fileCard, classes[brand])}
      href={filePath}
      download={fileName}
      aria-label='Last ned fil'
    >
      <div className={cn(classes.fileIcon)}>{icon ? icon : <FileIcon />}</div>
      <div className={cn(classes.fileText)}>
        <Heading size='xxsmall'>{heading}</Heading>
        <Paragraph size='small'>{subHeading}</Paragraph>
      </div>
      <div className={cn(cn(classes.fileDownload))}>
        <DownloadIcon />
      </div>
    </a>
  );
};

export { FileCard };
export type { FileCardProps };
