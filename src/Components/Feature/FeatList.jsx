


function FeatList(props) {
    const { list, fliter } = props;
    return (
        <li
            className="pe-2 text-capitalize"
            onClick={() => fliter(list)}
            style={{listStyle: 'none', cursor: 'pointer'}}
        >{list}</li>
    )
}

export default FeatList