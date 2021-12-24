import React from "react";
import * as styles from "./sectiontitle.module.scss";

interface Props {
  title: string,
  isFilled?: boolean
}

const SectionTitle = ({ title, isFilled }: Props) => {
  return (
    <div className={ [styles.container, isFilled ? styles.inverse : ''].join(' ') }>
      <div className={ styles.icon }>→</div>
      <h1 className={ styles.title }>{ title }</h1>
    </div>
  );
};

export default SectionTitle;