import { useNavigate } from "react-router-dom";

const Error = () => {
  // STYLES
  const styles = {
    button:
      "text-white text-center text-sm rounded-md mb-6 py-2 px-8 mx-10 bg-darkGreen",
  };

  const navigate = useNavigate();

  return (
    <div id="error">
      <h2 className="text-center text-3xl pt-32">Error</h2>
      <div className="mx-6 text-center my-6">
        <p className="mb-6">Uh oh! You&apos;ve got lost!</p>
        <button className={styles.button} onClick={() => navigate(-1)}>
          Go back
        </button>
        <p>If the problem persists, please contact hello@jorvik-web.dev</p>
      </div>
    </div>
  );
};

export default Error;
