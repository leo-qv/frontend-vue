import { ActionTree } from "vuex";
import { RootState } from "../types";
import { MessageState } from "./types";

export const actions: ActionTree<MessageState, RootState> = {
   loadMessages(): any{
       fetch('http://localhost:8081/data/messages')
       .then(data => data.json())
       .then(data => {
           console.log(data);
           return data;
       })
   }
}