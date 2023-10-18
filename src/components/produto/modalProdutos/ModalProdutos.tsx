import FormularioProdutos from '../formularioProdutos/FormularioProdutos';

import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

import './ModalProdutos.css'

function ModalProdutos() {
  return (
    <>
      <Popup 
      trigger={<button className='rounded bg-indigo-900 text-white py-2 px-4'>Cadastrar produtos</button>} modal>
        <div>
          <FormularioProdutos />
        </div>
      </Popup>
    </>
  );
}

export default ModalProdutos;