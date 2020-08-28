import StringItem from './StringItem';

export default class IntegerItem extends StringItem {
    oninit(vnode) {
        super.oninit(vnode);

        this.cast = (a) => Number(a);
        this.attrs.type = 'number';
    }
}
