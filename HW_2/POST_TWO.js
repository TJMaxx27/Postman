// 2. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 3.Спарсить response body в json.
let jsonData = pm.response.json()

let name = jsonData.name
let age = jsonData.age
let salary = jsonData.salary
let family = jsonData.family
let salary_1_5 = jsonData.u_salary_1_5_year

//4. Проверить, что name в ответе равно name s request (name вбить руками.)
pm.test('Correct name', function () {
    pm.expect(name).to.eql('Mikhail')
});

//5. Проверить, что age в ответе равно age s request (age вбить руками.)
pm.test('Correct age', function () {
    pm.expect(age).to.eql('30')
});

//6. Проверить, что salary в ответе равно salary s request (salary вбить руками.)
pm.test('Correct salary', function () {
    pm.expect(salary).to.eql(60000)
});
//7. Спарсить request.
let rqst = request.data
let rqst_name = rqst.name
let rqst_age = rqst.age
let rqst_salary = rqst.salary
let rqst_salary_1_5 = rqst.u_salary_1_5_year


//8. Проверить, что name в ответе равно name s request (name забрать из request.)
pm.test('Correct rqst_name', function () {
    pm.expect(rqst_name).to.eql('Mikhail')
});
//9. Проверить, что age в ответе равно age s request (age забрать из request.)
pm.test('Correct rqst_age', function () {
    pm.expect(rqst_age).to.eql('30')
});
//10. Проверить, что salary в ответе равно salary s request (salary забрать из request.)
pm.test('Correct rqst_salary', function () {
    pm.expect(rqst_salary).to.eql('60000')
});
//11. Вывести в консоль параметр family из response.
console.log('response family', family)
//12. Проверить что u_salary_1_5_year в ответе равно salary*4 (salary забрать из request)
pm.test('Correct u_salary_1_5_year', function () {
    pm.expect(rqst_salary_1_5).to.eql(salary_1_5)
});
