import { ActionTree } from "vuex";
import { RootState } from "../types";
import { MessageState } from "./types";

const apiPath = process.env.VUE_APP_ROOT_API + "data/messages";


export const actions: ActionTree<MessageState, RootState> = {
   loadMessages(): any{
       fetch(apiPath)
       .then(data => data.json())
       .then(data => {
           console.log(data);
           return data;
       })
   }
}