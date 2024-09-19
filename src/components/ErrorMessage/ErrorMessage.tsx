import css from "./ErrorMessage.module.css";

interface error {
  errorMessage: null | string;
}

const ErrorMessage: React.FC<error> = ({ errorMessage }) => {
  return (
    <div>
      <p className={css.errorMessage}>
        {errorMessage}. Please, try again later...
      </p>
    </div>
  );
};

export default ErrorMessage;
