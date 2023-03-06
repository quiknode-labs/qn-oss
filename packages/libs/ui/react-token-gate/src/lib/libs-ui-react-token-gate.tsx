import styles from './libs-ui-react-token-gate.module.css';

/* eslint-disable-next-line */
export interface LibsUiReactTokenGateProps {}

export function LibsUiReactTokenGate(props: LibsUiReactTokenGateProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to LibsUiReactTokenGate!</h1>
    </div>
  );
}

export default LibsUiReactTokenGate;
