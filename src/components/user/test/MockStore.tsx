import React from "react";
// @ts-ignore
import configureStore from "redux-mock-store";
// @ts-ignore
import { mergeDeepRight } from "ramda";
import { MockApplicationState } from "./MockApplicationState";
import {RootState} from "../../../redux/rootReducer";
import {Provider} from "react-redux";

export const getMockProvider = (partialState: Partial<RootState>) => {
    const mockStore: any = configureStore();
    const store: any = mockStore(
        mergeDeepRight(MockApplicationState, partialState)
    );

    return {
        MockProvider: ({ children }: { children: React.ReactNode }) => (
            <Provider store={store}>{children}</Provider>
        ),
        store
    };
};
