export function Cart(){
    return(
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="font-medium text-2xl text-center my-4">Meu carrinho</h1>

        <section className="flex items-center justify-between border-b-2 border-gray-300">
          <img
            src="https://i.zst.com.br/thumbs/12/12/10/-928132873.jpg"
            alt="Logo produto"
            className="w-28"
          />

          <strong>Preço: R$1.000</strong>

          <div className="flex items-center justify-center gap-3">
            <button 
            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
            >
              -
            </button>

            1

            <button 
            className="bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center"
            >
              +
            </button>
          </div>

          <strong className="float-right">
            SubTotal: R$1.000
          </strong>
        </section>

        <p className="font-bold nt-4">Total: R$1.000</p>
      </div>
    )
  }