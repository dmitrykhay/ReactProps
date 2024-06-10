import "./Listing.css";
import { Item } from "./Item";
import { IItem } from "./models/IItem";

interface IListItems {
	items: IItem[]
}

export const Listing = ({ items }: IListItems) => {

	return (
    <div className="item-list">
      {items
        .map((item) => (
          <Item key={item.listing_id} item={item} />
        ))}
    </div>
	)
}
