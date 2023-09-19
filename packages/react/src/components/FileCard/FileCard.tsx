import React from 'react';
import cn from 'classnames';
import { DownloadIcon, FileIcon } from '@navikt/aksel-icons';
import { Heading, Paragraph } from '@digdir/design-system-react';

import useDeviceBreakpoints from '../../hooks/useDeviceBreakpoints';
import type { BrandColor } from '../../types/brand';

import classes from './FileCard.module.css';

type FileCardProps = {
  heading: string;
  description: string;
  filePath: string;
  icon?: React.ReactNode;
  brand?: BrandColor;
};

/**
 * Component that allows the user to download a file.
 *
 * @param heading: string;
 * @param description: string;
 * @param filePath: string;
 * @param icon?: React.ReactNode = FileIcon
 * @param brand?: 'primary' | 'secondary' | 'tertiary' = 'primary';
 */
const FileCard = ({
  icon,
  heading,
  description,
  filePath,
  brand = 'primary',
  ...rest
}: FileCardProps) => {
  const { isMobile } = useDeviceBreakpoints();

  return (
    <a
      className={cn(
        classes.fileCard,
        classes[brand],
        isMobile && classes.isMobile,
      )}
      href={filePath}
      download={true}
      {...rest}
    >
      <div className={cn(classes.fileIcon)}>{icon ? icon : <FileIcon />}</div>
      <div className={cn(classes.fileText)}>
        <Heading size='xxsmall'>{heading}</Heading>
        <Paragraph size='small'>{description}</Paragraph>
      </div>
      <div className={cn(classes.fileDownload)}>
        <DownloadIcon />
      </div>
    </a>
  );
};

export { FileCard };
export type { FileCardProps };
