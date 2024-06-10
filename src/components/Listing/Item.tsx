import { IItem } from "./models/IItem";

interface Item {
	item: IItem
}

export const Item = ({ item }: Item) => {
	
	return (
		<div className="item">
			<div className="item-image">
				<a href={item.url}>
					<img src={item.MainImage?.url_570xN} />
				</a>
			</div>
			<div className="item-details">
				<p className="item-title">{truncateTitle(item.title || "")}</p>
				{ <p className="item-price">{getCurrency(item.currency_code || "")}{item.price}</p> /* '||  ""' чтобы избежать ошибки типов в функции так как currency_code необязателен */}
				{ <p className={leftover(item.quantity || 0)}>{item.quantity} left</p>  /* "|| 0" чтобы избежать ошибки типов в функции так как quantity необязателен */}
			</div>
		</div>
	)
}

function leftover (quantity:number):string {
	if (quantity <= 10) {
		return "item-quantity level-low"
	} else if (quantity > 10 && quantity <= 20) {
		return "item-quantity level-medium"
	}
	
	return "item-quantity level-high"
}

function getCurrency (currency_code:string):string {
	if (currency_code === "USD") {
		return "$"
	} else if (currency_code === "EUR") {
		return "€"
	}
	return "GBP "
}


function truncateTitle(title: string): string {
  
  if (title.length <= 50) {
    return title;
  }
  return `${title.slice(0, 50)}...`;
}