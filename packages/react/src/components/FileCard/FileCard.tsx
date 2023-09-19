import React from 'react';
import cn from 'classnames';
import { DownloadIcon, FileIcon } from '@navikt/aksel-icons';
import { Heading, Paragraph } from '@digdir/design-system-react';

import useIsMobile from '../../hooks/useIsMobile';

import classes from './FileCard.module.css';

type FileCardProps = {
  heading: string;
  subHeading: string;
  filePath: string;
  icon?: React.ReactNode;
  fileName?: string;
  brand?: 'primary' | 'secondary' | 'tertiary';
  ariaLabel?: string;
};

/**
 * Component that displays allows the user to download a file.
 *
 * @param heading: string;
 * @param subHeading: string;
 * @param filePath: string;
 * @param icon?: React.ReactNode = FileIcon
 * @param fileName?: string = undefined;
 * @param brand?: 'primary' | 'secondary' | 'tertiary' = 'primary';
 * @param ariaLabel?: string = 'Last ned fil';
 */
const FileCard = ({
  icon,
  heading,
  subHeading,
  filePath,
  fileName,
  brand = 'primary',
  ariaLabel = 'Last ned fil',
}: FileCardProps) => {
  const isMobile = useIsMobile();

  return (
    <a
      className={cn(
        classes.fileCard,
        classes[brand],
        isMobile && classes.isMobile,
      )}
      href={filePath}
      download={fileName}
      aria-label={ariaLabel}
    >
      <div className={cn(classes.fileIcon)}>{icon ? icon : <FileIcon />}</div>
      <div className={cn(classes.fileText)}>
        <Heading size='xxsmall'>{heading}</Heading>
        <Paragraph size='small'>{subHeading}</Paragraph>
      </div>
      <div className={cn(classes.fileDownload)}>
        <DownloadIcon />
      </div>
    </a>
  );
};

export { FileCard };
export type { FileCardProps };
