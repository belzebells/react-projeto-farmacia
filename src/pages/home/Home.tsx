import React from 'react';
import homeImage from '../../assets/2546639-ai.png'
import './Home.css';
import ModalProdutos from '../../components/produto/modalProdutos/ModalProdutos';
import ListaProdutos from '../../components/produto/listaProdutos/ListaProdutos';

function Home() {
  return (
    <>
      <div className="bg-emerald-300 flex justify-center">
        <div className='container grid grid-cols-2 text-white'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className='text-5xl text-black font-bold'>Seja bem vinde!</h2>
            <p className='text-xl text-black'>Aqui você encontra Medicamentos e Cosméticos</p>

            <div className="flex justify-around gap-4">
            <ModalProdutos />    
            </div>
          </div>
          <div className="flex justify-center ">
            <img src={homeImage} alt="" className='w-2/3' />
          </div>
        </div>
      </div>
      <ListaProdutos />
    </>
  );
}

export default Home;

