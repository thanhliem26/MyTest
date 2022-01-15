import Container_Product from "./ContainerProduct/Container_Product";
import BrandMain from './Container_Brand/BrandMain';
import './Container.scss';

function Container()  {
    return (
        <div className="container">
            <Container_Product />
            <BrandMain />
        </div>
    )
}

export default Container;