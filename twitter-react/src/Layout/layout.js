import Header from "./Headers";

const Layout = ({title, clidren, ...rest}) => {
    return (
        <div>
            <Header {...rest}>
                <main></main>
            </Header>
        </div>
    )
}