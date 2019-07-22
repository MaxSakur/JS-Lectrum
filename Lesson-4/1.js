/**
 * Задача 1.
 *
 * Создайте объект `person` у которого будет одно свойство `salary`.
 * При чтении этого свойства должна возвращаться строка с текстом.
 * Если до конца месяца осталось больше чем 20 дней — возвращается строка `good salary`, а если нет — `bad salary`
 */

const person = {

};

// Решение
person.salary = () => {
    return today.getDate > 10 ? console.log('good salary'):console.log('bad salary')
}
let today = new Date()

person.salary(); // good salary

// exports.person = person;
