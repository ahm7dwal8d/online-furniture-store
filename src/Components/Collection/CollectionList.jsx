
function CollectionList(props) {
    const { list, filter } = props;
    return (
        <li
            className="pe-2 text-capitalize fs-6"
            style={{listStyle: 'none', cursor: 'pointer'}}
            onClick={() => filter(list)}>{list.split(" ")[0]}</li>
    )
}

export default CollectionList;