


function FeatList(props) {
    const { list, fliter } = props;
    return (
        <li
            className="pe-2 text-capitalize"
            onClick={() => fliter(list)}
            style={{listStyle: 'none', cursor: 'pointer'}}
        >{list.split(" ")[0]}</li>
    )
}

export default FeatList