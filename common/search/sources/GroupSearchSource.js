import highlight from 'flarum/helpers/highlight';

export default class GroupSearchSource {
    search(query) {
        return app.store.find('groups', {
            filter: {q: query},
            page: {limit: 5}
        });
    }

    view(query) {
        query = query.toLowerCase();

        const results = app.store.all('groups')
            .filter(group => group.namePlural().toLowerCase().substr(0, query.length) === query);

        if (!results.length) return '';

        return [
            <li className="Dropdown-header">{app.translator.trans('core.forum.edit_user.groups_heading')}</li>,
            results.map(group => {
                const groupName = group.namePlural();
                const name = highlight(groupName, query);

                return (
                    <li className="SearchResult" data-index={'groups:' + group.id()}>
                        <a data-index={'groups:' + group.id()}>
                            <span class="groupName">{name}</span>
                        </a>
                    </li>
                );
            })
        ];
    }
}
