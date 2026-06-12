function Person(name, mobile, dob){ 
    this.name = name;
    this.mobile = mobile;
    this.birdhday = new Date(dob);
    this.ageCalculate = () => {
        const diffrence = Date.now() - this.birdhday.getTime();
        const age = new Date(diffrence);
        return age.getUTCFullYear() - 1970; 
    }
}

const pers1 = new Person("Robin", '8699', '1998-03-29');
// const pers2 = new Person("Khan");
// const pers3 = new Person("Hassan");
console.log(pers1.ageCalculate())