import React from 'react'

const NovaUnidade = () => {
  const [unidade, setUnidade] = useState({
    id: id,
    cep_unidade: "",
    rua_unidade: "",
    numero_unidade: "",
    bairro_unidade: "",
    telefone_unidade: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:4200/unidade/${id}`).then((res) => {
      console.log(res.data);
      setUnidade(res.data);
    });
  }, [id]);

  const handleSubmit = async (e) => {
    await axios.put(`http://localhost:4200/unidade/${id}`, unidade);
  };

  return (
    <div className="container mt-5">
      <h1>Editar Produto</h1>
      <form>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="cep">CEP</label>
          <input
            type="text"
            className="form-control"
            id="cep"
            name="cep"
            onChange={(e) => setProduto({ ...unidade, cep_unidade: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="rua">RUA</label>
          <input
            type="text"
            className="form-control"
            id="rua"
            name="rua"
            onChange={(e) => setProduto({ ...unidade, rua_unidade: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="numero">NÚMERO</label>
          <input
            type="text"
            className="form-control"
            id="numero"
            name="numero"
            onChange={(e) => setProduto({ ...unidade, numero_unidade: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="bairro">BAIRRO</label>
          <input
            type="text"
            className="form-control"
            id="bairro"
            name="bairro"
            onChange={(e) => setProduto({ ...unidade, bairro_unidade: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className='fw-bold m-2 ' htmlFor="telefone">TELEFONE</label>
          <input
            type="text"
            className="form-control"
            id="telefone"
            name="telefone"
            onChange={(e) => setProduto({ ...unidade, telefone_unidade: e.target.value })}
          />
        </div>
        <div className='mt-2' >
          <a onClick={handleSubmit} type="button" className="btn btn-primary">
            Salvar
          </a>
        </div>
      </form>
    </div>
  )
}

export default NovaUnidade