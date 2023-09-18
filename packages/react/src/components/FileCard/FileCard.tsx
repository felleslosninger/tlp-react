import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { DownloadIcon, FileIcon } from '@navikt/aksel-icons';
import { Heading, Paragraph } from '@digdir/design-system-react';

import classes from './FileCard.module.css';

type FileCardProps = {
  icon: React.ReactNode;
  heading: string;
  subHeading: string;
  filePath: string;
  fileName?: string;
  brand?: 'primary' | 'secondary' | 'tertiary';
};

const FileCard = ({
  icon,
  heading,
  subHeading,
  filePath,
  fileName,
  brand = 'primary',
}: FileCardProps) => {
  const breakpoint = 768;
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < breakpoint) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <a
      className={cn(
        classes.fileCard,
        classes[brand],
        isMobile && classes.isMobile,
      )}
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
