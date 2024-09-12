import { MenuCard } from "../components/MenuCard";

export const MenuSection = () => {
  return (
    <>
    
      <div
        id="menu-section"
        className="   flex flex-col items-center justify-center  bg-oransh py-11 "
      >
        <h1 className="mb-7 text-center max-w-2xl   text-6xl xl:text-8xl font-extrabold tracking-tight leading-none text-white">
          Nutricion deliciosa a tu puerta
        </h1>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <MenuCard
            cardName={"milanesas con pure"}
            imageUrl={
              "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            cardDescription={"Descripcion de las milanesas"}
          />
             <MenuCard
            cardName={"milanesas con pure"}
            imageUrl={
              "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            cardDescription={"Descripcion de las milanesas"}
          />
          <MenuCard
            cardName={"ensalada de verduras "}
            imageUrl={
              "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            cardDescription={"Descripcion de la ensalada"}
          />
        </section>
      </div>
    </>
  );
};
