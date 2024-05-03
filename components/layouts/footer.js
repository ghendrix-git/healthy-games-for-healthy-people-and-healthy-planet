import styles from "./styles/header-footer.module.css";
import Image from 'next/image';

/*************************************************************************
 * Component: footer
 * Description: This component renders the footer that will appear on 
 * every page in the application
 *************************************************************************/
function Footer() {
  return (
    <div className={styles.footerframe}>
      <div className={styles.footerInfoContainer}>
        <Image className={styles.osufootericon} alt="" src="/osufootericon.svg" />
        <b className={styles.collegeOfHealth}>
          College Of Health ASP3IRE Center
        </b>
        <b className={styles.oregonStateUniversitys}>
          Oregon State University&apos;s Advancing Science, Practice, Programming and
          Policy in Research Translation for Children&apos;s Environmental Health
          Center
        </b>
      </div>
      <Image className={styles.dividerlineIcon} alt="" src="/dividerline.svg" />
    </div>
  );
}

export default Footer;
