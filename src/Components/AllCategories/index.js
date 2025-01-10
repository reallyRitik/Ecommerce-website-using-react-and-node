import { Button } from "react-bootstrap";
import { IoMenuOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';

const AllCategories = () => {
 
  return (
    <>
      <Button
        className="allCatTab align-items-center"
      > 
        <span className="icon1 mr-2">
          <IoMenuOutline />
        </span>
        <span className="text">ALL CATEGORIES</span>
        <span className="icon2 ml-2">
          <FaAngleDown />
        </span>
      </Button>

     
    </>
  );
};

export default AllCategories;
