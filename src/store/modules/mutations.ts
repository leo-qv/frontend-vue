import { MutationTree } from "vuex";
import { MessageState } from "./types";

export enum MessageMutations {
    SET_MESSAGE_CONTENT = "SET_MESSAGE_CONTENT",
}


export const mutations: MutationTree<MessageState> = {
    [MessageMutations.SET_MESSAGE_CONTENT](state, payload: string) {
        state.content = payload;
    }
}