import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {UserDetail} from '../UserDetail';
import {userList} from "./MockApplicationState";
import {initReactI18next} from "react-i18next";
import i18n from '../../../i18n';

describe("User detail", () => {
    initReactI18next.init(i18n);
    
    it("it should match", () => {
        const renderer = ShallowRenderer.createRenderer();

        renderer.render(<UserDetail
            user={userList[0]}
        />);
        const result = renderer.getRenderOutput();

        expect(result).toMatchSnapshot();
    });
});
