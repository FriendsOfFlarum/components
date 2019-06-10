import Switch from 'flarum/components/Switch';
import SettingItem from './SettingItem';

export default class BooleanItem extends SettingItem {
    view() {
        return Switch.component({
            state: !!Number(this.getValue()),
            children: this.props.label || this.props.children,
            onchange: this.setting(),
        });
    }
}
