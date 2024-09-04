import { MenuCard } from "../components/MenuCard";

export const MenuSection = () => {
  return (
    <div
      id="menu-section"
      className=" h-screen flex flex-col items-center justify-center my-7   "
    >
      <h1 className="text-center max-w-2xl mb-4  text-6xl xl:text-8xl font-extrabold tracking-tight leading-none text-white">
        Nuestras dietas
      </h1>
      <section className=" flex justify-evenly gap-4 h-full w-full overflow-clip">
        <MenuCard
          cardName={"SALAD"}
          imageUrl={
            "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          cardDescription={"Descripcion"}
        />
        <MenuCard
          cardName={"SALAD"}
          imageUrl={
            "https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          }
          cardDescription={"Descripcion"}
        />
      </section>
    </div>
  );
};
