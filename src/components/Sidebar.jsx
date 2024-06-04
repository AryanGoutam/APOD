function Sidebar(props) {
    // destructure
    const{handledisplaymodal,data} = props;


  return (
    <div className="sidebar">
      <div onClick={handledisplaymodal} className="bgoverlay"></div>
      <div className="sidebarcontent">
        <h2>{data?.title}</h2>
        <div className="descriptioncontainer">
          <p className="descriptiontitle">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handledisplaymodal}>
          <i className="fa-solid fa-angles-right"></i>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
