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
              <div className="map-content">
                <div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.1143893856292!2d-43.87341884941396!3d-16.721143316580537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xab5353777f72b9%3A0x885b72ce67a6e09e!2sR.%20Santa%20Bernadete%2C%20122%20-%20Todos%20Os%20Santos!5e0!3m2!1spt-BR!2sbr!4v1708966104337!5m2!1spt-BR!2sbr" className="map-frame" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div>
              <Text text={"Paróquia Nossa Senhora do Perpétuo Socorro e Todos os Santos"}/>
              <Text text={"R. Santa Bernadete, 122 - Todos Os Santos, Montes Claros"} />
                </div>
              </div>
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