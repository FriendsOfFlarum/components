import Select from 'flarum/components/Select';
import SettingItem from './SettingItem';

export default class SelectItem extends SettingItem {
    view() {
        return Select.component({
            options: this.props.options,
            value: this.getValue() || this.props.default,
            onchange: this.setting(),
        });
    }
}
