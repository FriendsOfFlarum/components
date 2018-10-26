import BooleanItem from './BooleanItem';
import StringItem from './StringItem';
import NumberItem from './NumberItem';
import SettingItem from './SettingItem';
import SelectItem from './SelectItem';

export { BooleanItem, StringItem, NumberItem, SettingItem, SelectItem };

export const types = {
    boolean: BooleanItem,
    string: StringItem,
    integer: NumberItem,
    number: NumberItem,
};
