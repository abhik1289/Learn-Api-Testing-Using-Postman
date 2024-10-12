pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});


const response = pm.response.json();

console.log(response.status);
//if there exits any to-me/ - like this you can use
console.log(response['status'])


pm.test('It is ok',()=>{
    pm.expect(response.status).to.eql('OK');

})


// Test cases

