import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Image from "next/image";
import HireImage from "@/images/pexels-david-mcbee-730564 2.svg";
import KeyboardImage from "@/images/pexels-alesia-kozik-6780789 2.svg";
import SocialLinks from "./SocialLinks";


const Blog = () => {
  return (
    <>
      <Header />
      <div className="flex justify-between w-11/12 m-auto my-3">
        <div className="w-3/4">
          <h1 className="text-[32px] text-[#29394E] font-semibold mb-3.5 leading-10 my-6 w-[810px]">
            Microsoft esperá que te guste ChatGPT lo suficiente como para usar
            Bing
          </h1>
          <p className="text-[16px] text-[#29394E] font-semibold mb-3.5 my-4 w-[704px]">
            ChatGPT, la poderosa herramienta de Inteligencia Artificial que esta
            arrasando con todo, se une a Microsoft
          </p>
          <SocialLinks/>
          <Image
            src={HireImage}
            width={799}
            height={396}
            alt="for hire image"
          />
          <h2 className="text-[24px] text-[#29394E] font-bold mb-3.5 my-5 w-[808px]">
            Una revolución esta por llegar al internet, será que ChatGPT sea la
            herramienta del futuro?
          </h2>
          <p className="text-[16px] text-[#29394E] font-semibold mb-4 w-[799px] text-justify">
            Grandes noticias para los padres que han estado usando la misma
            computadora portátil HP desde el primer mandato de Obama: Microsoft
            está trabajando en una nueva versión de su motor de búsqueda Bing
            que integrará ChatGPT de OpenAI. Es un esfuerzo de Microsoft para
            alejar a los usuarios del perro principal de la industria de
            búsqueda, Google, al hacer que las respuestas a las consultas de
            búsqueda sean más pertinentes y, bueno, habladoras. ¿Quién necesita
            enlaces a artículos investigados cuando simplemente puede generar un
            poema en verso libre sobre las mejores sillas de escritorio de 2023?
          </p>

          <p className="text-[16px] text-[#29394E] font-semibold mb-4 w-[799px]  text-justify">
            Y Google se está tomando en serio la amenaza de la IA. A pesar de
            las fallas de ChatGPT (incluidos los sesgos raciales notados y la
            tendencia a proporcionar respuestas incorrectas con confianza), el
            liderazgo de Google declaró su lanzamiento como un &quot;código rojo&quot; que
            podría poner patas arriba su negocio. El estilo de respuesta de
            ChatGPT también supone un problema para Google, ya que la empresa
            depende en gran medida de los resultados de búsqueda de pago, que no
            se integran tan fácilmente en las respuestas conversacionales
            directas. (Los anuncios digitales representaron más del 80 % de los
            ingresos de la empresa en 2021).
          </p>
          <Image
            src={KeyboardImage}
            width={799}
            height={396}
            alt="for hire image"
          />
          <h2 className="text-[24px] text-[#29394E] font-bold mb-3.5 my-5 w-[799px]">
            Una revolución esta por llegar al internet, será que ChatGPT sea la
            herramienta del futuro?
          </h2>
          <p className="text-[16px] text-[#29394E] font-semibold mb-4 text-justify w-[799px]">
            Grandes noticias para los padres que han estado usando la misma
            computadora portátil HP desde el primer mandato de Obama: Microsoft
            está trabajando en una nueva versión de su motor de búsqueda Bing
            que integrará ChatGPT de OpenAI. Es un esfuerzo de Microsoft para
            alejar a los usuarios del perro principal de la industria de
            búsqueda, Google, al hacer que las respuestas a las consultas de
            búsqueda sean más pertinentes y, bueno, habladoras. ¿Quién necesita
            enlaces a artículos investigados cuando simplemente puede generar un
            poema en verso libre sobre las mejores sillas de escritorio de 2023?
          </p>

          <p className="text-[16px] text-[#29394E] font-semibold mb-4 text-justify w-[799px]">
            Y Google se está tomando en serio la amenaza de la IA. A pesar de
            las fallas de ChatGPT (incluidos los sesgos raciales notados y la
            tendencia a proporcionar respuestas incorrectas con confianza), el
            liderazgo de Google declaró su lanzamiento como un &quot;código rojo&quot; que
            podría poner patas arriba su negocio. El estilo de respuesta de
            ChatGPT también supone un problema para Google, ya que la empresa
            depende en gran medida de los resultados de búsqueda de pago, que no
            se integran tan fácilmente en las respuestas conversacionales
            directas. (Los anuncios digitales representaron más del 80 % de los
            ingresos de la empresa en 2021).
          </p>
        </div>
        <Sidebar />
      </div>
    </>
  );
};

export default Blog;
