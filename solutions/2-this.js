// BEGIN
const make = (numer, denom) => {
    return {
        numer,
        denom,
        setNumer(num) {
            this.numer = num;
        },
        setDenom(num) {
            this.denom = num;
        },
        getNumer() {
            return this.numer;
        },
        getDenom() {
            return this.denom;
        },
        toString() {
            return `${numer}/${denom}`
        },
        add(num) {
            let a = (this.getNumer() * num.getDenom() + this.getDenom() * num.getNumer())
            let b = (this.getDenom() * num.getDenom());
            return make(a, b);
        }
    }
}

export default make;
// END