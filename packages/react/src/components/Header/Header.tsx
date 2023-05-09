import React from 'react';
import cn from 'classnames';
import {
  Button,
  ButtonVariant,
  ButtonColor,
} from '@digdir/design-system-react';
import { MenuHamburgerIcon, MagnifyingGlassIcon } from '@navikt/aksel-icons';

import { Container } from '../Container/Container';

import classes from './Header.module.css';

interface HeaderProps {
  backgroundColor?: 'red' | 'blue' | 'yellow';
}

const Header = ({ backgroundColor = 'red' }: HeaderProps) => {
  return (
    <header className={cn(classes.header, classes[backgroundColor])}>
      <Container className={classes.container}>
        <div className={classes.left}>
          <img
            src='img/digdir-logo.svg'
            alt=''
          />
        </div>

        <div className={classes.middle}>Menu</div>
        <div className={classes.right}>
          <Button
            variant={ButtonVariant.Quiet}
            color={ButtonColor.Secondary}
            icon={<MagnifyingGlassIcon />}
          >
            Søk
          </Button>
          <Button
            variant={ButtonVariant.Quiet}
            color={ButtonColor.Secondary}
            icon={<MenuHamburgerIcon />}
          >
            Meny
          </Button>
        </div>
      </Container>
    </header>
  );
};

export { Header };
export type { HeaderProps };
