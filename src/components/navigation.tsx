import React from "react";
import * as styles from "./navigation.module.scss";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { NavigationWaypoint } from '../typings/declarations';
import {Trans, useI18next, I18nextContext, useTranslation} from 'gatsby-plugin-react-i18next';

interface Props {
  currentWaypoint: NavigationWaypoint,
  isOpen: boolean,
  passedFunction: () => void
}

const Navigation = ({ currentWaypoint, isOpen, passedFunction }: Props) => {
  const context = React.useContext(I18nextContext);
  const {languages, changeLanguage} = useI18next();
  const {t} = useTranslation();

  const handleClick = (id: string) => {
    passedFunction();
  };

  const otherLanguage = () => {
    if (context.language === 'en') return 'hu';
    else if (context.language === 'hu') return 'en';
    else return undefined;
  };

  return (
    <nav className={ [styles.container, isOpen ? styles.open : ''].join(' ') }>
      <ul className={ styles.list }>
        <li className={ [styles.item, currentWaypoint === 'course' ? styles.active : ''].join(' ') } data-text={ t('menu_item_course') } onClick={() => handleClick('#course')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#course" : "/en/#course" }
          >
            <Trans>menu_item_course</Trans>
          </AnchorLink>
          </li>
        <li className={ [styles.item, currentWaypoint === 'entrance' ? styles.active : ''].join(' ') } onClick={() => handleClick('#entrance')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#entrance" : "/en/#entrance" }
          >
            <Trans>menu_item_entrance</Trans>
          </AnchorLink>
        </li>
        <li className={ [styles.item, currentWaypoint === 'preparatory' ? styles.active : ''].join(' ') } onClick={() => handleClick('#preparatory')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#preparatory" : "/en/#preparatory" }
          >
            <Trans>menu_item_preparatory</Trans>
          </AnchorLink>
        </li>
        <li className={ [styles.item, currentWaypoint === 'staff' ? styles.active : ''].join(' ') } onClick={() => handleClick('#staff')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#staff" : "/en/#staff" }
          >
            <Trans>menu_item_staff</Trans>
          </AnchorLink>
        </li>
        <li className={ [styles.item, currentWaypoint === 'tuition' ? styles.active : ''].join(' ') } onClick={() => handleClick('#tuition')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#tuition" : "/en/#tuition" }
          >
            <Trans>menu_item_tuition</Trans>
          </AnchorLink>
        </li>
        <li className={ [styles.item, currentWaypoint === 'erasmus' ? styles.active : ''].join(' ') } onClick={() => handleClick('#erasmus')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#erasmus" : "/en/#erasmus" }
          >
            <Trans>menu_item_erasmus</Trans>
          </AnchorLink>
        </li>
        <li className={ [styles.item, currentWaypoint === 'videos' ? styles.active : ''].join(' ') } onClick={() => handleClick('#videos')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#videos" : "/en/#videos" }
          >
            <Trans>menu_item_videos</Trans>
          </AnchorLink>
        </li>
        <li className={ [styles.item, currentWaypoint === 'questions' ? styles.active : ''].join(' ') } onClick={() => handleClick('#questions')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#questions" : "/en/#questions" }
          >
            <Trans>menu_item_questions</Trans>
          </AnchorLink>
        </li>
        <li className={ [styles.item, currentWaypoint === 'contact' ? styles.active : ''].join(' ') } onClick={() => handleClick('#contact')}>
          <AnchorLink
            className={ styles.link } 
            to={ context.language === "hu" ? "/#contact" : "/en/#contact" }
          >
            <Trans>menu_item_contact</Trans>
          </AnchorLink>
        </li>
      </ul>
      <div className={ styles.secondary }>
        <button
          aria-label={ context.language === 'hu' ? 'Nyelv váltó' : 'Language switcher' }
          className={ styles.languageswitcher }
          onClick={(e) => {
            e.preventDefault();
            changeLanguage(context.language === 'en' ? 'hu' : 'en');
          }}>
          { otherLanguage() }
        </button>
        <a href="https://www.facebook.com/BKTF.BCDA.BA" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_288_7)">
            <path d="M17.3274 0.204163C15.0919 0.204163 12.8782 0.660285 10.8129 1.54648C8.74757 2.43268 6.87102 3.73158 5.29044 5.36902C3.70985 7.00645 2.4562 8.95034 1.60107 11.0897C0.74594 13.229 0.306092 15.5218 0.306641 17.8372C0.306641 22.5126 2.0999 26.9965 5.29192 30.3026C6.87244 31.9395 8.74881 33.2381 10.8139 34.124C12.8789 35.0099 15.0922 35.4659 17.3274 35.4659C21.8416 35.4659 26.1709 33.6086 29.363 30.3026C32.555 26.9965 34.3482 22.5126 34.3482 17.8372C34.3488 15.5218 33.9089 13.229 33.0538 11.0897C32.1987 8.95034 30.945 7.00645 29.3644 5.36902C27.7839 3.73158 25.9073 2.43268 23.842 1.54648C21.7767 0.660285 19.563 0.204163 17.3274 0.204163ZM22.3232 10.8993H19.9592C19.1224 10.8993 18.9509 11.2546 18.9509 12.1473V14.3141H22.3232L22.0011 18.1059H18.9509V29.438H14.5743V18.1709H12.3066V14.3314H14.5785V11.2979C14.5785 8.45949 16.0429 6.96443 19.294 6.96443H22.319L22.3232 10.8993Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_288_7">
            <rect width="34.0416" height="35.2574" fill="white" transform="translate(0.296753 0.204163)"/>
            </clipPath>
            </defs>
          </svg>
        </a>
        <a href="https://www.instagram.com/bcda_budapest/" target="_blank" rel="noreferrer" aria-label="Instagram">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_288_3)">
            <path d="M26.3319 12.195C26.1662 11.7485 25.8992 11.3465 25.5519 11.0206C25.2235 10.6825 24.8238 10.4219 24.3819 10.2579C23.7846 10.0381 23.1548 9.91943 22.5185 9.90691C21.4437 9.85924 21.1231 9.85059 18.4016 9.85059C15.6802 9.85059 15.3682 9.85057 14.2805 9.90691C13.6354 9.91636 12.9965 10.035 12.3911 10.2579C11.9484 10.4229 11.5474 10.6833 11.2167 11.0206C10.8785 11.3507 10.6179 11.7518 10.454 12.195C10.2306 12.8003 10.1119 13.4393 10.103 14.0844C10.0553 15.1591 10.0466 15.4841 10.0466 18.2056C10.0466 20.927 10.0466 21.239 10.103 22.3224C10.1126 22.9689 10.2313 23.6091 10.454 24.2162C10.618 24.6581 10.8786 25.0578 11.2167 25.3862C11.5451 25.7264 11.9467 25.9872 12.3911 26.1489C12.9959 26.3739 13.6351 26.4927 14.2805 26.4999C15.3552 26.5519 15.6802 26.5606 18.4016 26.5606C21.1231 26.5606 21.4351 26.5606 22.5185 26.4999C23.1652 26.4931 23.8059 26.3743 24.4122 26.1489C24.8457 25.9815 25.2354 25.7178 25.5519 25.3775C25.8928 25.0514 26.1538 24.651 26.3146 24.2075C26.5417 23.6017 26.6605 22.9607 26.6656 22.3137C26.7176 21.239 26.7263 20.9183 26.7263 18.1969C26.7263 15.4755 26.7263 15.1635 26.6656 14.0758C26.6657 13.4341 26.5527 12.7975 26.3319 12.195ZM18.3886 23.4361C17.7014 23.4367 17.0208 23.3018 16.3857 23.0392C15.7506 22.7766 15.1734 22.3914 14.6873 21.9057C14.2011 21.4199 13.8154 20.8431 13.5523 20.2082C13.2892 19.5733 13.1538 18.8928 13.1538 18.2056C13.1538 16.8172 13.7053 15.4857 14.687 14.504C15.6687 13.5222 17.0003 12.9707 18.3886 12.9707C19.777 12.9707 21.1085 13.5222 22.0902 14.504C23.072 15.4857 23.6235 16.8172 23.6235 18.2056C23.6235 18.8928 23.4881 19.5733 23.2249 20.2082C22.9618 20.8431 22.5761 21.4199 22.09 21.9057C21.6038 22.3914 21.0267 22.7766 20.3916 23.0392C19.7565 23.3018 19.0759 23.4367 18.3886 23.4361ZM23.8185 13.9847C23.4944 13.9847 23.1836 13.856 22.9544 13.6268C22.7252 13.3976 22.5965 13.0868 22.5965 12.7627C22.5965 12.4386 22.7252 12.1278 22.9544 11.8986C23.1836 11.6694 23.4944 11.5407 23.8185 11.5407C24.143 11.5406 24.4543 11.6693 24.6842 11.8983C24.914 12.1274 25.0437 12.4382 25.0449 12.7627C25.0437 13.0872 24.914 13.398 24.6842 13.6271C24.4543 13.8561 24.143 13.9847 23.8185 13.9847Z" fill="#131313"/>
            <path d="M18.3886 14.8081C17.9424 14.8081 17.5006 14.896 17.0884 15.0667C16.6762 15.2374 16.3017 15.4877 15.9862 15.8032C15.6707 16.1187 15.4204 16.4932 15.2497 16.9054C15.079 17.3176 14.9911 17.7594 14.9911 18.2056C14.9911 18.6517 15.079 19.0935 15.2497 19.5057C15.4204 19.9179 15.6707 20.2924 15.9862 20.6079C16.3017 20.9234 16.6762 21.1737 17.0884 21.3444C17.5006 21.5151 17.9424 21.603 18.3886 21.603C19.2896 21.603 20.1538 21.2451 20.7909 20.6079C21.4281 19.9708 21.786 19.1066 21.786 18.2056C21.786 17.3045 21.4281 16.4403 20.7909 15.8032C20.1538 15.166 19.2896 14.8081 18.3886 14.8081Z" fill="#131313"/>
            <path d="M18.3713 0.204163C16.0559 0.204163 13.7631 0.660285 11.624 1.54648C9.48495 2.43268 7.54138 3.73158 5.90435 5.36902C4.26732 7.00645 2.96889 8.95034 2.08322 11.0896C1.19755 13.229 0.741985 15.5218 0.742554 17.8372C0.742554 20.1522 1.19853 22.4446 2.08446 24.5834C2.97038 26.7222 4.2689 28.6656 5.90588 30.3026C7.54285 31.9395 9.48623 33.2381 11.625 34.124C13.7639 35.0099 16.0562 35.4659 18.3713 35.4659C23.0463 35.4647 27.5296 33.6071 30.8354 30.3013C34.1411 26.9955 35.9988 22.5123 35.9999 17.8372C35.9999 13.1614 34.1428 8.677 30.8369 5.37029C27.531 2.06358 23.0471 0.205312 18.3713 0.204163ZM28.5203 22.4047C28.5038 23.2507 28.3425 24.0876 28.0436 24.8791C27.7827 25.5586 27.3759 26.1725 26.8519 26.6775C26.3434 27.1953 25.7282 27.596 25.0492 27.8519C24.2568 28.1479 23.4204 28.309 22.5747 28.3286C21.487 28.3763 21.1404 28.3893 18.3713 28.3893C15.6021 28.3893 15.2555 28.3893 14.1678 28.3286C13.3221 28.309 12.4857 28.1479 11.6933 27.8519C11.0199 27.5948 10.4107 27.194 9.90792 26.6775C9.38788 26.1684 8.98557 25.5516 8.7292 24.8705C8.43201 24.0786 8.27226 23.2417 8.25685 22.396C8.20918 21.3127 8.19618 20.9616 8.19618 18.1969C8.19618 15.4321 8.19618 15.0811 8.25685 13.9934C8.27319 13.1478 8.43291 12.3111 8.7292 11.5189C8.98557 10.8378 9.38788 10.221 9.90792 9.71187C10.4169 9.19468 11.0319 8.79402 11.7107 8.5375C12.5028 8.2412 13.3395 8.08147 14.1851 8.06514C15.2728 8.01313 15.6195 8.00447 18.3886 8.00447C21.1577 8.00447 21.5044 8.00447 22.5921 8.06514C23.4377 8.08147 24.2744 8.2412 25.0665 8.5375C25.7393 8.79974 26.3482 9.20314 26.8519 9.72054C27.3749 10.2231 27.7816 10.834 28.0436 11.5103C28.3417 12.3021 28.5028 13.1388 28.5203 13.9847C28.568 15.0724 28.581 15.4191 28.581 18.1882C28.581 20.9573 28.5853 21.3213 28.5203 22.4047Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_288_3">
            <rect width="35.2574" height="35.2574" fill="white" transform="translate(0.742554 0.204163)"/>
            </clipPath>
            </defs>
          </svg>
        </a>
      </div>

    </nav>
  );
};

export default Navigation;