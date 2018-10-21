import StringItem from './StringItem';

export default class IntegerItem extends StringItem {
    init() {
        StringItem.prototype.init.call(this);

        this.cast = a => Number(a);
        this.props.type = 'number';
    }
}
