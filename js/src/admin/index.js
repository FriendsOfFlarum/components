import * as settingsItems from './settings/items';
import SettingsModal from './settings/SettingsModal';

import utilCreateSettingsModal from './util/createSettingsModal';

export const settings = {
    SettingsModal,
    items: settingsItems,
};

export const util = {
    createSettingsModal: utilCreateSettingsModal,
};
