import styles from './errorMessage.module.scss';

interface Props {
  message?: string;
}

export function ErrorMessage(props: Props) {
  const { message = 'Непредвиденная ошибка' } = props;

  return (
    <div className={styles.error_message}>
      <h1>{message}</h1>
    </div>
  );
}
