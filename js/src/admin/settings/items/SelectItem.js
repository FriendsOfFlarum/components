import Select from 'flarum/components/Select';
import SettingItem from './SettingItem';

export default class SelectItem extends SettingItem {
    view() {
        return Select.component({
            options: this.attrs.options,
            value: this.getValue() || this.attrs.default,
            onchange: this.setting(),
        });
    }
}
