import { useContext } from "react";
import Text from "../common/text";
import Title from "../common/title";
import Confirmacao from "../confirmacao";
import CountDown from "../countdown";
import Home from "../home";
import "./style.css"
import Nos from '../../assets/Nos(4).png'
import Igreja from '../../assets/igreja.png'
import { ConvidadoContext } from "../../context/convidado";
import Comentarios from "../comentarios";

const Content = () => {

    const { convidado } = useContext(ConvidadoContext);

  const convidadoName = convidado ?? "Convidado";
    return (<>
    <div className='inicio' id='inicio'>
            <Home />
          </div>
            <CountDown />
            <div className='convite'>
              <Title title={convidadoName} />
              <div className='texto'>
                <Text text={"Criamos esse site para compartilhar com vocês os detalhes da organização do nosso casamento. Estamos muito felizes e contamos com a presença de todos no nosso grande dia!"} />
                <Text text={"É importante confirmar sua presença. Para isto contamos com sua ajuda clicando no menu “Confirme sua Presença” e preenchendo os dados necessários. Para nos presentear, escolha qualquer item da Lista de Casamento, seja um item de algum dos sites, lojas físicas, ou então vocês podem utilizar a opção de cotas. Fiquem à vontade!"} />
                <Text strong={"Aguardamos vocês no nosso grande dia!"} />
              </div>
            </div>
            <div className='convite' id='ocasal'>
              <Title title={"O casal"} />
              <img src={Nos} alt="Nos" className='casal' />
              <Text text={"Lorem ipsum dolor sit amet. Aut dignissimos dolorum id nihil repellat et optio iure? Est rerum voluptatem qui officiis dolore quo atque voluptas qui veritatis internos. Ut quam aspernatur et galisum animi nam explicabo repellendus?"} />
              <Text text={"Et iure delectus sed aperiam voluptatum qui sequi atque et deleniti consequatur quo galisum pariatur. Quo velit iusto non tempora voluptas qui nostrum sunt non repudiandae ratione qui fuga autem. Id dolore quibusdam aut galisum illum ut maxime corporis sed nisi numquam. Est repudiandae ullam ut dolorem corporis sit molestiae nisi ut quaerat ipsa?"} />
              <Text text={"Aut accusamus esse est quam cupiditate et dicta aspernatur ea voluptates voluptatum eum rerum labore. Sed quasi autem est perferendis exercitationem aut odio eius qui unde maxime et suscipit voluptatum non obcaecati dolorem."} />
            </div>
            <div className='convite' id='cerimonia'>
              <Title title={"Cerimônia"} />
              <Text text={"Lorem ipsum dolor sit amet. Aut dignissimos dolorum id nihil repellat et optio iure? Est rerum voluptatem qui officiis dolore quo atque voluptas qui veritatis internos. Ut quam aspernatur et galisum animi nam explicabo repellendus?"} />
              <img src={Igreja} alt="Igreja" className='casal' />
            </div>
            <div id='confirmacao'>
              <Confirmacao />
            </div>
            <div id='recados'>
              <Comentarios />
            </div>
    </>)
}

export default Content;