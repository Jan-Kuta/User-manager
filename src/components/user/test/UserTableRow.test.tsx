import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import {UserTableRow} from '../UserTableRow';
import {userList} from "./MockApplicationState";
import {initReactI18next} from "react-i18next";
import i18n from '../../../i18n';

describe("User table row", () => {
    initReactI18next.init(i18n);

    it("it should match", () => {
        const renderer = ShallowRenderer.createRenderer();

        renderer.render(<UserTableRow
            user={userList[0]}
            openUserDeleteDialog={jest.fn}
            openUserEditDialog={jest.fn}
        />);
        const result = renderer.getRenderOutput();

        expect(result).toMatchSnapshot();
    });
});
