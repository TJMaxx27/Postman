// 2. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 3. Спарсить response body в json.
let jsonData = pm.response.json()

let name = jsonData.name
let age = String(jsonData.age)
let salary = jsonData.salary

// 4. Спарсить request.
let rqst = pm.request.url.query.toObject()
let rqst_name = rqst.name
let rqst_age = rqst.age
let rqst_salary = rqst.salary
// 5. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test('Correct rqst_name', function () {
    pm.expect(rqst_name).to.eql(name)
});

// 6. Проверить, что age в ответе равно age из request (age забрать из request.)
pm.test('Correct rqst_age', function () {
    pm.expect(rqst_age).to.eql(age)
});
// 7. Вывести в консоль параметр salary из request.
console.log("Request salary =", rqst_salary)
// 8. Вывести в консоль параметр salary из response.
console.log("response salary =", salary)
// 9. Вывести в консоль 0-й элемент параметра salary из response.
console.log("response salary =", salary[0])
// 10. Вывести в консоль 1-й элемент параметра salary параметр salary из response.
console.log("response salary =", salary[1])
// 11. Вывести в консоль 2-й элемент параметра salary параметр salary из response.
console.log("response salary =", salary[2])
// 12. Проверить, что 0-й элемент параметра salary равен salary из request (salary забрать из request.)
pm.test('Correct rqst_salary[0]', function () {
    pm.expect(String(salary[0])).to.eql(rqst_salary)
});
// 13. Проверить, что 1-й элемент параметра salary равен salary*2 из request (salary забрать из request.)
pm.test('Correct rqst_salary[1]', function () {
    pm.expect(salary[1]).to.eql(String(rqst_salary*2))
});
// 14. Проверить, что 2-й элемент параметра salary равен salary*3 из request (salary забрать из request.)
pm.test('Correct rqst_salary[2]', function () {
    pm.expect(salary[2]).to.eql(String(rqst_salary*3))
});
// 15. Создать в окружении переменную name
// 18. Передать в окружение переменную name
pm.environment.set("name", rqst.name)
// 16. Создать в окружении переменную age
// 19. Передать в окружение переменную age
pm.environment.set("age", rqst.age)
// 17. Создать в окружении переменную salary
// 20. Передать в окружение переменную salary
pm.environment.set("salary", rqst.salary)

// 21. Написать цикл который выведет в консоль по порядку элементы списка из параметра salary.
for (i = 0; i < salary.length; i++ ) {
    console.log(salary[i])
};
// или через метод ForEach(для массива): salary.forEach((item) => {console.log(item)}) 
