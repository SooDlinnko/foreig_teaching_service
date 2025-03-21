
export const Main = () => {
    const get = useGetProductByIdQuery({ id: "1" });
    console.log(get, get.data);
    return (
        <div>
        Главная страница
        </div>
    );
};