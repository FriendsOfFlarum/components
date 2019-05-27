import SettingItem from './SettingItem';

export default class StringItem extends SettingItem {
    view() {
        const attrs = Object.assign({}, this.props);
        const label = this.props.label || this.props.children;

        attrs.className = 'FormControl ' + (attrs.className || '');
        attrs.bidi = this.setting();

        return attrs.simple
            ? m('input', attrs)
            : m('div.Form-group', [m('label', label), m('input', attrs)]);
    }
}
