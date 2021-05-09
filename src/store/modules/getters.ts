import { GetterTree } from "vuex";
import { RootState } from "../types";
import { MessageState } from "./types";

export const getters: GetterTree<MessageState, RootState> = {
    getMessageInfo(state): string{
        return `Message id is ${state.id} - Content: ${state.content}`;
    }
}