import extract from 'flarum/utils/extract';
import SettingItem from './SettingItem';

export default class StringItem extends SettingItem {
    view(vnode) {
        const { simple, name, setting, ...attrs } = Object.assign({}, this.attrs);

        const label = extract(attrs, 'label') || vnode.children;

        attrs.className = 'FormControl ' + (attrs.className || '');
        attrs.bidi = this.setting();

        return attrs.simple ? m('input', attrs) : m('div.Form-group', [m('label', label), m('input', attrs)]);
    }
}
