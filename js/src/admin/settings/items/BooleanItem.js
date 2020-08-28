import Switch from 'flarum/components/Switch';
import SettingItem from './SettingItem';

export default class BooleanItem extends SettingItem {
    oninit(vnode) {
        super.oninit(vnode);

        this.cast = (v) => !!Number(v);
    }
    view(vnode) {
        return (
            <Switch state={this.getValue()} onchange={this.setting()}>
                {this.attrs.label || vnode.children}
            </Switch>
        );
    }
}
