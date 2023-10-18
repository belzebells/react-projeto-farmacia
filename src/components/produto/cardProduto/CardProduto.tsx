import React from 'react'
import { Link } from 'react-router-dom'
import Produto from '../../../models/Produto'

interface CardProdutoProps {
  prod: Produto
}

function CardProduto({prod}: CardProdutoProps) {
  return (
    <div className=' border flex flex-col rounded-md overflow-hidden justify-between'>
      <div>
        <div className="flex bg-indigo-300 items-center gap-4">
          <img src={prod.photo} className='rounded-e-sm' alt="" />
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase'>{prod.name}</h4>
          <p>{prod.description}</p>
          <p className="mb-3 font-bold text-black dark:text-black">R$ {new Intl.NumberFormat('pt-BR', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                        }).format(prod.price)}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/`} className='w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2'>
          <button>Comprar</button>
        </Link>

      </div>
    </div>
  )
}

export default CardProduto