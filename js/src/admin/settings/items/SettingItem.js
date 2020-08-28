import Component from 'flarum/Component';

export default class SettingItem extends Component {
    oninit(vnode) {
        super.oninit(vnode);

        this.cast = this.attrs.cast || ((a) => a);

        if (typeof this.attrs.setting !== 'function') {
            throw new Error(
                '[fof/components] SettingsModal - "setting" attribute must be a function, more specifically the SettingsModal setting() method passed to the modal\'s items attribute.'
            );
        }
    }

    setting() {
        return this.attrs.setting(this.attrs.name);
    }

    getValue() {
        return this.cast(this.setting()());
    }
}
