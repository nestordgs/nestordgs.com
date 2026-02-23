import { translateReducer } from "./translateRreducer";
import { types } from "../types/types";

describe("translateReducer", () => {
    
    it("should return default state", () => {
        const state = translateReducer(undefined, {});
        expect(state).toEqual({});
    });

    it("should handle changeLanguage", () => {
        const initialState = { language: "en" };
        const action = {
            type: types.changeLanguage,
            payload: "es"
        };
        const expectedState = {
            language: "es"
        };
        expect(translateReducer(initialState, action)).toEqual(expectedState);
    });

    it("should return current state for unknown action", () => {
        const initialState = { language: "en" };
        const action = { type: "UNKNOWN_ACTION" };
        expect(translateReducer(initialState, action)).toEqual(initialState);
    });
});
