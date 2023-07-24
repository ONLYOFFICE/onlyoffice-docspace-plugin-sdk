import { UsersType } from "../../enums";
import { FilesExst, FilesType } from "../../enums/Files";
import { IBox } from "../components";
import { IMessage } from "../utils";

export interface IInfoPanelSubMenu {
  name: string;
  onClick?: () => Promise<IMessage> | IMessage | void;
}

export interface IInfoPanelItem {
  key: string;
  subMenu: IInfoPanelSubMenu;
  body: IBox;
  filesType?: FilesType[];
  filesExsts?: FilesExst[];
  usersTypes?: UsersType[];
}
