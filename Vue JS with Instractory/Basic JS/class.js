class Person{
    constructor(firstName, lastName, mobile, dob, income){
        this.firstName = firstName;
        this.lastName = lastName;
        this.mobile = mobile;
        this.birdhday = new Date(dob);
        this.income = income;
    }
    getFullName = () => {
        return this.firstName + ' ' + this.lastName;
    }

    getAge =  () => {
        const diffrence = Date.now() - this.birdhday.getTime();
        const age = new Date(diffrence);
        return age.getUTCFullYear() - 1970;
    }

    getTaxAmount = () => {
        let taxAmount = 0

        if(this.income > 850000){
            taxAmount = this.income * 0.25;
        }else if(this.income >= 550000 && this.income <= 850000){
            taxAmount = this.income * 0.15
        }else{
            taxAmount = 0;
        }
        return taxAmount;
    }
}

const khan = new Person(
    'Robiul', 
    'Hassan', 
    '013535993', 
    '1998-03-29', 
    970000
)

console.log(khan.getFullName(), khan.getAge(), khan.getTaxAmount())