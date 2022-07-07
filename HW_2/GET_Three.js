// 2. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 3. Спарсить response body в json.
let jsonData = pm.response.json()

let name = jsonData.name
let age = jsonData.age
let salary = String(jsonData.salary)
let family = jsonData.family
let dog = jsonData.family.pets.dog
let dog_name = jsonData.family.pets.dog.name
let dog_age = jsonData.family.pets.dog.age


// 4. Спарсить request.
let rqst = pm.request.url.query.toObject()
let rqst_name = rqst.name
let rqst_age = rqst.age
let rqst_salary = rqst.salary
// 5. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test('Correct rqst_name', function () {
    pm.expect(rqst_name).to.eql(name)
});
// 6. Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test('Correct rqst_age', function () {
    pm.expect(rqst_age).to.eql(age)
});
// 7. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
pm.test('Correct rqst_salary', function () {
    pm.expect(rqst_salary).to.eql(salary)
});
// 8. Вывести в консоль параметр family из response.
console.log('response family', family)
// 9. Проверить, что у параметра dog есть параметры name.
pm.test('dog_name', function () {
    pm.expect(dog).to.have.property('name')
});
// 10. Проверить, что у параметра dog есть параметры age.
pm.test('dog_age', function () {
    pm.expect(dog).to.have.property('age')
});
// 11. Проверить, что параметр name имеет значение Luky.
pm.test('Correct_name', function () {
    pm.expect(dog_name).to.have.eql('Luky')
});
// 12. Проверить, что параметр age имеет значение 4.
pm.test('Correct_age', function () {
    pm.expect(dog_age).to.have.eql(4)
});
