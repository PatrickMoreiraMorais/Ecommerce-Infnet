import CardProduct from "../CardProduct/CardProduct";
import CardSeller from "../CardSeller/CardSeller";
import CommentsUser from "../CommentsUser/CommentsUser";
import style from "./CardFather.module.css";
import Questions from "../Questions/Questions";
import Title from "../Title/Title";
import ProductRelations from "../ProductRelations/ProductRelations";

export default function CardFather() {
  return (
    <div className={style.cardFatherStyle}>
      <Title tag="h3">Produto</Title>
        <CardProduct
          src="https://cdn.pixabay.com/photo/2020/05/03/19/09/nike-5126389_1280.jpg"
          titulo="Voe como o vento com o Speed Force por apenas R$ 459,00"
          info='
          O tênis Speed Force é um calçado projetado para atletas que buscam desempenho e estilo em suas atividades esportivas.           Com um design dinâmico em preto e branco, esse tênis combina elegância com uma aparência esportiva, proporcionando um           visual moderno e versátil.
        '
          nota="Nota: 4/5"
          id="produto"
        />
      <Title tag="h3">Vendedor</Title>
      <CardSeller
        src="https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974_1280.jpg"
        titulo="Vendedor: Richard Petterman"
        email="richard@professional.com"
        telefone="11948327364"
        nota="Nota: 3/5"
      />
      <Title tag="h3">Avaliações</Title>
      <CommentsUser
        name1="Júlio Silvo comentou:"
        comment1="Speed Force é execelente!"
        nota1="Nota: 5/5"
        data1="Publicado em 22/02/2020"
        name2="Vitor Borges comentou:"
        comment2="O Speed Force me atende muito bem!"
        nota2="Nota: 4/5"
        data2="Publicado em 01/06/2021"
        name3="Fernando de Lá comentou:"
        comment3="Poderia ser melhor!"
        nota3="Nota: 2/5"
        data3="Publicado em 01/09/2022"
        id="avaliações"
      />
      <Title tag="h3">Perguntas</Title>
      <Questions
        name1="Leandra de Sá perguntou:"
        question1="Tem tamanho 47?"
        resposta1="The Real Pisante: Temos sim!"
        data1="Publicado em 30/05/2023"
        name2="Ramon Dino perguntou:"
        question2="Serve pra academia?"
        resposta2="The Real Pisante: Com toda certeza!"
        data2="Publicado em 02/08/2018"
        name3="Beto Coleman perguntou:"
        question3="Possui amortecedor?"
        resposta3="The Real Pisante: Sim, ele conta com amortecedor!"
        data3="Publicado em 11/02/2020"
        id="perguntas"
      />
      <Title tag="h3">Produtos Relacionados</Title>
      <ProductRelations
        src="https://cdn.pixabay.com/photo/2014/11/14/19/57/sneakers-531172_1280.jpg"
        preço="R$ 229,00"
        title="Any Stars"
      />
      <ProductRelations
        src="https://cdn.pixabay.com/photo/2018/12/10/21/34/winter-boots-3867776_1280.jpg"
        preço="R$ 559,99"
        title="The Real Bota"
      />
      <ProductRelations
        src="https://cdn.pixabay.com/photo/2015/10/29/01/24/shoes-1011596_1280.jpg"
        preço="R$ 1.199,00"
        title="Off-Real"
      />
    </div>
  );
}
