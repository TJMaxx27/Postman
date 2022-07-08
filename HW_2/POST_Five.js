// 5. Статус код 200
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
// 6. Спарсить response body в json.
let jsonData = pm.response.json()

// 7. Спарсить request.
let rqst = request.data
// 8. Проверить, что json response имеет параметр start_qa_salary
pm.test('JSON response have start_qa_salary', function () {
    pm.expect(jsonData).to.have.property('start_qa_salary')
});
// можно писать вот так: pm.response.to.have.jsonBody('start_qa_salary')
// 9. Проверить, что json response имеет параметр qa_salary_after_6_months
pm.test('JSON response have qa_salary_after_6_months', function () {
    pm.expect(jsonData).to.have.property('qa_salary_after_6_months')
});
// 10. Проверить, что json response имеет параметр qa_salary_after_12_months
pm.test('JSON response have qa_salary_after_12_months', function () {
   pm.expect(jsonData).to.have.property('qa_salary_after_12_months')
});
// 11. Проверить, что json response имеет параметр qa_salary_after_1.5_year
pm.test('JSON response have qa_salary_after_1.5_year', function () {
    pm.expect(jsonData).to.have.property('qa_salary_after_1.5_year')
});
// 12. Проверить, что json response имеет параметр qa_salary_after_3.5_years
pm.test('JSON response have qa_salary_after_3.5_years', function () {
   pm.expect(jsonData).to.have.property('qa_salary_after_3.5_years')
});
// 13. Проверить, что json response имеет параметр person
pm.test('JSON response have person', function () {
    pm.expect(pm.response.text()).to.include('person')
});
// 14. Проверить, что параметр start_qa_salary равен salary из request (salary забрать из request.)
pm.test('Check start_qa_salary == rqst.salary', function (){
    pm.expect(String(jsonData.start_qa_salary)).to.eql(rqst.salary)
});
    
// 15. Проверить, что параметр qa_salary_after_6_months равен salary*2 из request (salary забрать из request.)
pm.test('Check qa_salary_after_6_months == salary*2', function (){
    pm.expect(jsonData.qa_salary_after_6_months).to.eql(rqst.salary * 2)
});
// 16. Проверить, что параметр qa_salary_after_12_months равен salary*2.7 из request (salary забрать из request.)
pm.test('Check qa_salary_after_12_months == salary*2.7', function (){
    pm.expect(jsonData.qa_salary_after_12_months).to.eql(rqst.salary * 2.7)
});
// 17. Проверить, что параметр qa_salary_after_1.5_year равен salary*3.3 из request (salary забрать из request.)
pm.test('Check qa_salary_after_1.5_year == salary*3.3', function (){
    pm.expect(jsonData['qa_salary_after_1.5_year']).to.eql(rqst.salary * 3.3)
});
// 18. Проверить, что параметр qa_salary_after_3.5_years равен salary*3.8 из request (salary забрать из request.)
pm.test('Check qa_salary_after_3.5_year == salary*3.8', function (){
    pm.expect(jsonData['qa_salary_after_3.5_years']).to.eql(rqst.salary * 3.8)
});
// 19. Проверить, что в параметре person, 1-й элемент из u_name равен salary из request (salary забрать из request.)
pm.test('Check 1-st element in u_name == rqst.salary', function () {
    pm.expect(String(jsonData.person.u_name[1])).to.eql(rqst.salary)
});
// 20. Проверить, что что параметр u_age равен age из request (age забрать из request.)
pm.test('Check u_age == rqst.age', function () {
    pm.expect(String(jsonData.person.u_age)).to.eql(rqst.age)
});
// 21. Проверить, что параметр u_salary_5_years равен salary*4.2 из request (salary забрать из request.)
pm.test('u_salary_5_years == rqst.salary*4.2', function () {
    pm.expect(jsonData.person.u_salary_5_years).to.eql(rqst.salary *4.2)
});
// 22. ***Написать цикл который выведет в консоль по порядку элементы списка из параметра person.
for (i in jsonData.person){
    console.log(i + ' : ' + jsonData.person[i])
}
// Цикл в одну строку: Object.entries(jsonData.person).forEach(([key,value]) => console.log(`${key} : ${value}`))
