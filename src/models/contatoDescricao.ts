class ContatosDescricao {
  id: number
  nome: string
  email: string
  numero: string

  constructor( 
    id: number, 
    nome: string,
    email: string,
    numero: string
  ) {
    this.id = id
    this.nome = nome
    this.email = email
    this.numero = numero
  }
}

export default ContatosDescricao