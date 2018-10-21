import BooleanItem from './BooleanItem';
import StringItem from './StringItem';
import NumberItem from './NumberItem';
import SettingItem from './SettingItem';

export {
  BooleanItem,
  StringItem,
  NumberItem,

  SettingItem
};

export const types = {
  boolean: BooleanItem,
  string: StringItem,
  integer: NumberItem,
  number: NumberItem,
};