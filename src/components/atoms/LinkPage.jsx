import {Link} from "react-router-dom";
function LinkPage(props) {

    return (
        <li>
            <Link to={props.data.url}>{props.data.text}</Link>
        </li>
    )
}

export default LinkPage