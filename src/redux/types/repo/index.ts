import { IAction } from "../action";
import { ISearch } from "../../../models";

// Format Repos
export type IFormatReposRequestAction = IAction & ISearch;
export type IFormatReposSuccessAction = IAction;

// Get Repositories
export type IGetReposRequestAction = IAction & ISearch;
export type IGetReposSuccessAction = IAction & {
  repo: any;
};