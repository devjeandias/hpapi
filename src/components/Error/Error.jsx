import { FaTimesCircle } from 'react-icons/fa';
import './Error.scss';

function Error() {
    return(<div className="error"><FaTimesCircle/> Desculpe. Algo deu errado. Tente novamente mais tarde.</div>)
}

export default Error;