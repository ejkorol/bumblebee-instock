//Logical
import { Link } from "react-router-dom";

/* STYLES */
import "./InventoryItem.scss";
import deleteIcon from "@/assets/Icons/delete_outline-24px.svg";
import editIcon from "@/assets/Icons/edit-24px.svg";
import chevronIcon from "@/assets/Icons/chevron_right-24px.svg";

function InventoryItem({
  inventory: {
    id,
    warehouse_name,
    status,
    quantity,
    item_name,
    category,
  },
}) {
  return (
    <>
      <article className="inventory-details-item">
        <div className="inventory-details-item__container--inventory">
        <Link to={`/inventory/${id}`}><h3 className="inventory-details-item__header--tb inventory-details-item__header-link">
            {item_name}{" "}
            <img
              className="inventory-item__icon"
              src={chevronIcon}
              alt="chevron"
            />
          </h3></Link>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">inventory item</h4>
            <h3 className="inventory-details-item__header--mb inventory-details-item__header-link">
              {item_name}{" "}
              <img
                className="inventory-item__icon"
                src={chevronIcon}
                alt="chevron"
              />
            </h3>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">category</h4>
            <p className="inventory-details-item__text">{category}</p>
          </div>
        </div>
        <div className="inventory-details-item__container--address">
          <p className="inventory-details-item__text">{category}</p>
        </div>
        <div className="inventory-details-item__container--contact-name">
          <div className="inventory-details-item__text inventory-details-item__text--tb">
            <button
              className={
                status === "In Stock"
                  ? "inventory-details-item__pill inventory-details-item__pill--is"
                  : "inventory-details-item__pill inventory-details-item__pill--oos"
              }
            >
              {status}
            </button>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">status</h4>
            <div className="inventory-details-item__text">
              <button
                className={
                  status === "In Stock"
                    ? "inventory-details-item__pill inventory-details-item__pill--is"
                    : "inventory-details-item__pill inventory-details-item__pill--oos"
                }
              >
                {status}
              </button>
            </div>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">quantity</h4>
            <p className="inventory-details-item__text">{quantity}</p>
          </div>
          <div className="inventory-details-item__mb">
            <h4 className="inventory-details-item__header">inventory</h4>
            <p className="inventory-details-item__text">{warehouse_name}</p>
          </div>
        </div>
        <div className="inventory-details-item__container--contact-info">
          <p className="inventory-details-item__text">{quantity}</p>
        </div>
        <div className="inventory-details-item__container--contact-ware">
          <p className="inventory-details-item__text">{warehouse_name}</p>
        </div>
        <div className="inventory-details-item__container--actions">
          <button className="inventory-details-item__button">
            <img
              className="inventory-item__icon"
              src={deleteIcon}
              alt="delete"
            />
          </button>
          <button className="inventory-details-item__button">
            <img className="inventory-item__icon" src={editIcon} alt="edit" />
          </button>
        </div>
      </article>
      <div className="inventory-details-item-actions-mb">
        <button className="inventory-details-item__button">
          <img className="inventory-item__icon" src={deleteIcon} alt="delete" />
        </button>
        <button className="inventory-details-item__button">
          <img className="inventory-item__icon" src={editIcon} alt="edit" />
        </button>
      </div>
    </>
  );
}

export default InventoryItem;