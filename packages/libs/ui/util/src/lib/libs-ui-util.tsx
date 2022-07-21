import styles from './libs-ui-util.module.css';

/* eslint-disable-next-line */
export interface LibsUiUtilProps {}

export function LibsUiUtil(props: LibsUiUtilProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibsUiUtil!</h1>
    </div>
  );
}

export default LibsUiUtil;
