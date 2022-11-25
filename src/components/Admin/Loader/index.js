const Loader = () => {
    return (
      <div className="d-flex justify-content-center loading">
        <div className="spinner-border loading-icon" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
}
export default Loader;