import SettingItem from './SettingItem';

export default class StringItem extends SettingItem {
    view(vnode) {
        const attrs = Object.assign({}, this.attrs);
        const label = this.attrs.label || vnode.children;

        attrs.className = 'FormControl ' + (attrs.className || '');
        attrs.bidi = this.setting();

        return attrs.simple ? m('input', attrs) : m('div.Form-group', [m('label', label), m('input', attrs)]);
    }
}
