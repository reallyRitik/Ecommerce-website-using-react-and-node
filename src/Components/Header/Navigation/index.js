import { Link } from 'react-router-dom';
import { CiHome } from "react-icons/ci";
import { GiMeat } from "react-icons/gi";
import { CiShoppingBasket } from "react-icons/ci";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import AllCategories from '../../AllCategories';


const Navigation = ()=>{
    return(
        <>
         <nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-3 navPart1 ">
                                <AllCategories/>
                            </div>
                            <div className="col-sm-9 navPart2 d-flex align-items-center">
                                <ul className='list list-inline ml-auto'>
                                    <li className='list-inline-item'>
                                        <Link to="/"><CiHome/>&nbsp;Home</Link>
                                        <Link to="/"><CiShoppingBasket/>&nbsp;Shop</Link>
                                        <Link to="/"><GiMeat/>&nbsp;Meat & seafood</Link>
                                        <Link to="/"><MdOutlineBakeryDining/>&nbsp;Bakery</Link>
                                        <Link to="/"><MdOutlineEmojiFoodBeverage/>&nbsp;Beverage</Link>
                                        <Link to="/"><TfiWrite/>&nbsp;Blog</Link>
                                        <Link to="/"><IoMdContacts/>&nbsp;Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>  
        </>
    ) 
}

export default Navigation;