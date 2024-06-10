export interface IMessage {
	id: string,  // уникальный идентификатор сообщения, строка;
	from: { name: string },  // автор сообщения, объект;
	type: string,  // тип сообщения, строка, варианты значений: response, message, typing;
	// type: "response" | "message" | "typing",
	time: string,   // время публикации сообщения, строка;
	text?: string   // текст сообщения, строка, может отсутствовать.
}

export interface IMes {
	message: IMessage
}

export interface IMessageHistory {
	list?: IMessage[]
}
