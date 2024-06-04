
function Main (props){
    const {data} =props;
    return(
        <div className="imageclass">
            <img src={data?.url} alt={data?.title } className="bgimage"/>
        </div>
    )
}

export default Main;