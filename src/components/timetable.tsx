import React from "react";
import * as styles from "./timetable.module.scss";
import { Trans } from 'gatsby-plugin-react-i18next';

const Timetable = () => {
  return (
    <div>
    <table className={ styles.container }>
      <thead>
        <tr>
          <th className={ styles.headcell }>
            <Trans>timetable_day1_header</Trans>
          </th>
          <th className={ styles.emptycell }></th>
        </tr>
      </thead>
      <tbody className={ styles.body }>
        <tr>
          <td className={ styles.timecell }>9.30</td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day1_1</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>10.00</td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day1_2</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>10.30</td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day1_3</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>12.00 - 13.00</td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day1_4</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>
            <Trans>timetable_around4</Trans>
          </td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day1_5</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>
            <Trans>timetable_from4</Trans>
          </td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day1_6</Trans>
          </td>
        </tr>
      </tbody>
      <thead>
        <tr>
          <th className={ styles.headcell }>
            <Trans>timetable_day2_header</Trans>
          </th>
          <th className={ styles.emptycell }></th>
        </tr>
      </thead>
      <tbody className={ styles.body }>
        <tr>
          <td className={ styles.timecell }>9.30</td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day2_1</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>10.30</td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day2_2</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>12.00 - 13.00</td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day2_3</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>
            <Trans>timetable_around4</Trans>
          </td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day2_4</Trans>
          </td>
        </tr>
        <tr>
          <td className={ styles.timecell }>
            <Trans>timetable_from4</Trans>
          </td>
          <td className={ styles.titlecell }>
            <Trans>timetable_day2_5</Trans>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  );
};

export default Timetable;
