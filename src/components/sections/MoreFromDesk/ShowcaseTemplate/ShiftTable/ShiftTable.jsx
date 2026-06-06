import { CircleTickIcon } from '../../../../icons/icons';
import styles from './ShiftTable.module.css';

export default function ShiftTable({ rows }) {
  return (
    <div className={styles.shiftWrap}>
      <table className={styles.shiftTable}>
        <colgroup>
          <col className={styles.before} />
          <col className={styles.after} />
        </colgroup>
        <thead>
          <tr>
            <th className={styles.before}>Before</th>
            <th className={styles.after}>After</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`${row.before}-${row.after}`}>
              <td className={styles.before}>{row.before}</td>
              <td className={styles.after}>
                <div className={styles.afterCell}>
                  <CircleTickIcon className={styles.checkIcon} />
                  <span>{row.after}</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
