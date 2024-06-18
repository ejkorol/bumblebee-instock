/* STYLES */
import "./WarehouseList.scss";
import sortIcon from "@/assets/Icons/sort-24px.svg";

/* COMPONENTS */
import WarehouseItem from "@/components/WarehouseItem/WarehouseItem";

function WarehouseList () {
  return (
    <section className="warehouse-list">
      <div className="warehouse-list__top">
        <div className="warehouse-list__top--left">
          <h1 className="warehouse-list__header">warehouses</h1>
        </div>
        <div className="warehouse-list__top--right">
          <input className="warehouse-list__search" type="search" placeholder="search" />
          <button className="warehouse-list__button">+ add new warehouse</button>
        </div>
      </div>

      <section className="warehouse-filter">
        <div className="warehouse-filter__container--warehouse">
          <h4 className="warehouse-filter__header">warehouse <img className="warehouse-filter__icon" src={sortIcon} alt="sort" /></h4>
        </div>
        <div className="warehouse-filter__container--address">
          <h4 className="warehouse-filter__header">address <img className="warehouse-filter__icon" src={sortIcon} alt="sort" /></h4>
        </div>
        <div className="warehouse-filter__container--contact-name">
          <h4 className="warehouse-filter__header">contact name <img className="warehouse-filter__icon" src={sortIcon} alt="sort" /></h4>
        </div>
        <div className="warehouse-filter__container--contact-info">
          <h4 className="warehouse-filter__header">contact information <img className="warehouse-filter__icon" src={sortIcon} alt="sort" /></h4>
        </div>
        <div className="warehouse-filter__container--actions">
          <h4 className="warehouse-filter__header--actions">actions</h4>
        </div>
      </section>

      <WarehouseItem />

    </section>
  );
};

export default WarehouseList;