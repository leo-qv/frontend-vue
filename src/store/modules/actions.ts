import { ActionTree } from "vuex";
import { RootState } from "../types";
import { MessageState } from "./types";

export const actions: ActionTree<MessageState, RootState> = {
   loadMessages({commit}): any{
       fetch('')
       .then(data => data.json())
       .then(data => {
           commit(" ", data)
       })
   }
}