import {Link} from 'react-router-dom';

function Sobre() {

    return (
      <div className="container">
        <h1>Pagina sobre a empresa</h1><br /><br />

        <Link to="/">Home</Link><br />
        <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
  export default Sobre;