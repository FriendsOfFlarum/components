import FlarumSettingsModal from 'flarum/components/SettingsModal';
import { StringItem, types } from '../settings/items';

export default class SettingsModal extends FlarumSettingsModal {
    init() {
        this.props.items = Array.from(this.props.items || []);
        this.settings = {};
        this.setting = this.setting.bind(this);

        if (this.props.onsaved) this.onsaved = this.props.onsaved.bind(this);
    }

    className() {
        return [this.props.className, this.props.size && `Modal--${this.props.size}`].filter(Boolean).join(' ');
    }

    title() {
        return this.props.title;
    }

    form() {
        return (
            this.props.form ||
            [...this.props.items].map(c =>
                c && c.tag !== 'div' && (!c.attrs || !c.attrs.className || !c.attrs.className.contains('Form-group')) ? m('div.Form-group', c) : c
            )
        );
    }

    static createItemsFromValidationRules(rules, settingsPrefix, translationsPrefix) {
        const items = [];

        for (const key in rules) {
            const fullKey = settingsPrefix + key.toLowerCase();
            const rulez = rules[key].split('|');
            const type = rulez.find(t => types[t]) || 'string';
            const item = (type && types[type]) || StringItem;

            const isRequired = rulez.includes('required');
            const label = (translationsPrefix && (app.translator.trans[`${translationsPrefix}${key.toLowerCase()}-label`] || key)) || key;
            const description = app.translator.translations[`${translationsPrefix}${key.toLowerCase()}-description`];

            items.push(
                m.prop(`div.Form-group${isRequired ? '.required' : ''}`, [
                    type !== 'boolean' && m('label', label),
                    item.component({
                        type,
                        key: fullKey,
                        required: isRequired,
                        children: label,
                        simple: true,
                    }),
                    description && m('span', description),
                ])
            );
        }

        return items;
    }
}
