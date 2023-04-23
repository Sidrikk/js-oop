// BEGIN
class Money {
    constructor(value, currency = 'usd') {
        this.value = value;
        this.currency = currency;
    }
    getValue = () => this.value;
    getCurrency = () => this.currency;
    exchangeTo = (cur) => {
        if (this.currency === cur) return new Money(this.value, this.currency);
        if (cur === 'eur') return new Money(this.value * 0.7, cur);
        if (cur === 'usd') return new Money(this.value * 1.2, cur);
    };
    add = (money) => {
        if (this.currency === money.currency) {
            return new Money (this.value + money.value);
        } 

        let newValue = money.exchangeTo(this.currency);
        return new Money (this.value + newValue.getValue(), this.currency);
    }
    format = () => {
        return this.value.toLocaleString('ja-JP', {style: 'currency', currency: this.currency})
    }
}

export default Money;
// END
