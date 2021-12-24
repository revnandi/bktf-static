import React from 'react'
import * as styles from './header.module.scss';
import BaIcon from '../images/icon_ba.svg';
import Navigation from './navigation';
import { NavigationWaypoint } from '../typings/declarations';
import { useToggle } from '../hooks/hooks';
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next';

interface Props {
  currentWaypoint: NavigationWaypoint
}

const Header = ({ currentWaypoint }: Props) => {
  const [isOpen, setIsOpen] = useToggle(false);
  const {t} = useTranslation();

  return (
    <header className={ styles.container }>
      <div>
      <div className={ styles.top }>
        <h1 className={ styles.logo }>
          <span dangerouslySetInnerHTML={{ __html:t('site_name')}}>
          </span>
        </h1>
        <img className={ styles.icon } src={ BaIcon } alt="" />
      </div>
      <h2 className={ styles.subtitle }>
        <Trans>header_sub_title</Trans>
      </h2>
      </div>
      <Navigation currentWaypoint={ currentWaypoint } isOpen={ isOpen } passedFunction={ setIsOpen }/>
      <button className={ styles.button } onClick={ setIsOpen }>
      •••
      </button>
    </header>
  )
};

export default Header;