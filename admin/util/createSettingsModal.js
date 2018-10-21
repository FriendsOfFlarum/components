import SettingsModal from '../settings/SettingsModal';
import { types } from '../settings/items';

const defaults = (obj, ...defs) =>
    Object.assign({}, obj, ...defs.reverse(), obj);
const get = (from, ...selectors) =>
    [...selectors].map(s =>
        s
            .replace(/\[([^\[\]]*)\]/g, '.$1.')
            .split('.')
            .filter(t => t !== '')
            .reduce((prev, cur) => prev && prev[cur], from)
    );

/**
 * Create SettingsModal from options
 * @example new SettingsModal({
    title: 'Test',
    items: [{
        type: 'element',
        el: 'div',
        attrs: {
            className: 'Form-group',
        },
        items: [{
            type: 'boolean',
            setting: `fof-formatting.plugin.${p.toLowerCase()}`,
            cast: v => !!Number(v),
            children: 'hi'
        }]
    }]
})

})
 */
export default opts => {
    const { id, settings, title } = opts;
    const cast = opts.cast || (a => a);

    return new SettingsModal(
        defaults(opts, {
            title:
                title ||
                (id &&
                    get(
                        app.data.extensions[id],
                        'extra[flarum-extension].title'
                    )[0]) ||
                id,
            items: [
                settings.map(key => {
                    const value = cast(app.data.settings[key]);
                    const type = typeof value;
                    const item = types[type];

                    if (item)
                        return item.component({
                            key,
                            children: opts.getLabel && opts.getLabel(key),
                            cast,
                        });

                    return <p>{key}</p>;
                }),
            ],
        })
    );
};
