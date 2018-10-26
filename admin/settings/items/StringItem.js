import SettingItem from './SettingItem';

export default class StringItem extends SettingItem {
    view() {
        const attrs = Object.assign({}, this.props);
        const label = this.props.label || this.props.children;

        attrs.className = 'FormControl ' + (attrs.className || '');
        attrs.value = this.getValue();
        attrs.onchange = attrs.onchange || m.withAttr('value', this.setting());

        console.log(attrs);

        return attrs.simple
            ? m('input', attrs)
            : m('div.Form-group', [m('label', label), m('input', attrs)]);
    }
}
