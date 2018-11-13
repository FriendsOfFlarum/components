import extract from 'flarum/utils/extract';
import username from 'flarum/helpers/username';
import User from 'flarum/models/User';
import Group from 'flarum/models/Group';

export default function selectionLabel(recipient, attrs = {}) {
  attrs.style = attrs.style || {};
  attrs.className = 'RecipientLabel ' + (attrs.className || '');

  const link = extract(attrs, 'link');

  let label;

  if (recipient instanceof User) {
    label = username(recipient);

    if (link) {
      attrs.title = recipient.username() || '';
      attrs.href = app.route.user(recipient);
      attrs.config = m.route;
    }
  } else if (recipient instanceof Group) {
    label = recipient.namePlural();
  } else {
    attrs.className += ' none';
    label = app.translator.trans('flarum.core.lib.username.deleted_text');
  }

  return (
    m((link ? 'a' : 'span'), attrs,
      <span className="RecipientLabel-text">
            {label}
        </span>
    )
  );
}
