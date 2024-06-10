// import stylesMH from "./MessageHistory.module.css";
// import clsx from 'clsx';
import { Message } from "./MessageTypes/Message";
import { Response } from "./MessageTypes/Response";
import { Typing } from "./MessageTypes/Typing";

import { IMessageHistory } from "./models/IMessage";

// enum EMessageType {
//   Response = 'response',
//   Message = 'message',
//   Typing = 'typing'
// }

export const MessageHistory = ({ list = [] }: IMessageHistory) => {
	if (list.length === 0) {
		return null;
	}
	
	return (
		<ul>
			{list.map(message => {
				
				if (message.type === "message") {
					return <Message key={message.id} message={message} />
				} else if (message.type === "response") {
					return <Response key={message.id} message={message} />
				} else if (message.type === "typing") {
					return <Typing key={message.id} message={message}  />
				}
			})}

			{/* <li className="clearfix">
				<div className="message-data align-right">
					<span className="message-data-time">10:10</span> &nbsp; &nbsp;
					<span className="message-data-name">Ольга</span>
					<i className="fa fa-circle me"></i>
				</div>
				<div className="message other-message float-right">
					Привет, Виктор. Как дела? Как идёт работа над проектом?
				</div>
			</li> */}
			{/* <li>
				<div className="message-data">
					<span className="message-data-name"><i className="fa fa-circle online"></i> Виктор</span>
					<span className="message-data-time">10:12</span>
				</div>
				<div className="message my-message">
					Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.
				</div>
			</li> */}
		</ul>
	)

	// return (
	// 	<ul>
	// 		<li className={stylesMH.clearfix}>
	// 			<div className={clsx(stylesMH["message-data"], stylesMH["align-right"])}>
	// 				<span className={stylesMH["message-data-time"]}>10:10</span> &nbsp; &nbsp;
	// 				<span className={stylesMH["message-data-name"]}>Ольга</span>
	// 				<i className={clsx(stylesMH["fa"], stylesMH["fa-circle"], stylesMH["me"])}></i>
	// 			</div>
	// 			<div className={clsx(stylesMH["message"], stylesMH["other-message"], stylesMH["float-right"])}>
	// 				Привет, Виктор. Как дела? Как идёт работа над проектом?
	// 			</div>
	// 		</li>
	// 		<li>
	// 			<div className={stylesMH["message-data"]}>
	// 				<span className={stylesMH["message-data-name"]}><i className={clsx(stylesMH["fa"], stylesMH["fa-circle"], stylesMH["online"])}></i> Виктор</span>
	// 				<span className={stylesMH["message-data-time"]}>10:12</span>
	// 			</div>
	// 			<div className={stylesMH["message my-message"]}>
	// 				Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.
	// 			</div>
	// 		</li>
	// 	</ul>
	// )

	// return (
	// 	<ul>
	// 		<li className={stylesMH.clearfix}>
	// 			<div className={stylesMH["message-data align-right"]}>
	// 				<span className={stylesMH["message-data-time"]}>10:10</span> &nbsp; &nbsp;
	// 				<span className={stylesMH["message-data-name"]}>Ольга</span>
	// 				<i className={stylesMH["fa fa-circle me"]}></i>
	// 			</div>
	// 			<div className={stylesMH["message other-message float-right"]}>
	// 				Привет, Виктор. Как дела? Как идёт работа над проектом?
	// 			</div>
	// 		</li>
	// 		<li>
	// 			<div className={stylesMH["message-data"]}>
	// 				<span className={stylesMH["message-data-name"]}><i className={stylesMH["fa fa-circle online"]}></i> Виктор</span>
	// 				<span className={stylesMH["message-data-time"]}>10:12</span>
	// 			</div>
	// 			<div className={stylesMH["message my-message"]}>
	// 				Привет. Давай сегодня созвонимся. Проект практически готов, и у меня есть что показать.
	// 			</div>
	// 		</li>
	// 	</ul>
	// )
}
