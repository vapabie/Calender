import AddItem from "./adminbody/AddItem";
import Item from "./adminbody/Items";

function AdminBody({ isAddItemClicked }) {
  return isAddItemClicked ? <AddItem /> : <Item />;
}

export default AdminBody;
