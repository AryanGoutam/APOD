function Footer(props) {
  const { showmodal, handledisplaymodal, data } = props;

  return (
    <footer>
      <div className="bgradient"></div>
      <div>
        <h1>APOD PROJECT</h1>
        <h2>{data?.title}</h2>
      </div>
      <button onClick={handledisplaymodal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
