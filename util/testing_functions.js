const chai = require("chai")//import the assertion library
const chaiHttp = require("chai-http")//import the request sending library

const {expect} = chai;//grab expect from chai
chai.use(chaiHttp);//initliase chaiHTTP

exports.get = (title, route, status, outcome, payload) => {

    it(title, (done) => {

        chai.request("http://localhost:4000")//the base url
        
        .get(route)//the route
        .set('content-type', 'application/json')

        .send()//no payload on a get request

        .end((err, res) => {

            if(err) done(err)//handle the error
            expect(res).to.have.status(status)//expect a 424 response
            expect(res.body.message).to.equal(outcome)//The expected result
            done()
        })
    })

}

exports.post = (title, route, status, outcome, payload) => {

    it(title, (done) => {

        chai.request("http://localhost:4000")//the base url
        
        .post(route)//the route
        .set('content-type', 'application/json')

        .send(//The payload of the request
            payload)

        .end((err, res) => {

            if(err) done(err)//handle the error
            expect(res).to.have.status(status)//expect a 424 response
            expect(res.body.message).to.equal(outcome)//The expected message
            done()
        })
    })

}

exports.patch = (title, route, status, outcome, payload) => {

    it(title, (done) => {

        chai.request("http://localhost:4000")//the base url
        
        .patch(route)//the route
        .set('content-type', 'application/json')

        .send(//The payload of the request
            payload)

        .end((err, res) => {

            if(err) done(err)//handle the error
            expect(res).to.have.status(status)//expect a 424 response
            expect(res.body.message).to.equal(outcome)//The expected message
            done()
        })
    })

}

exports.delete = (title, route, status, outcome, payload) => {

    it(title, (done) => {

        chai.request("http://localhost:4000")//the base url
        
        .delete(route)//the route
        .set('content-type', 'application/json')

        .send(//The payload of the request
            payload)

        .end((err, res) => {

            if(err) done(err)//handle the error
            expect(res).to.have.status(status)//expect a 424 response
            expect(res.body.message).to.equal(outcome)//The expected message
            done()
        })
    })

}

exports.brute_force_attempt = () => {

    it("should return captcha:true if the wrong password is given more than 3 times in a row ", (done) => {

        chai.request("http://localhost:4000")
        
        .post("/login")
        .set('content-type', 'application/json')
        .send({
            email:"test@test.com",
            password: 'wrongpassword1'
        })


        .end((err, res) => {

            if(err) done(err)
            expect(res.body.message).to.equal("Sorry, your password is incorrect")
   
        })
        
        chai.request("http://localhost:4000")
        
        .post("/login")
        .set('content-type', 'application/json')
        .send({
            email:"test@test.com",
            password: 'wrongpassword2'
        })


        .end((err, res) => {

            if(err) done(err)
            expect(res.body.message).to.equal("Sorry, your password is incorrect")
   
        })
        
        chai.request("http://localhost:4000")
        
        .post("/login")
        .set('content-type', 'application/json')
        .send({
            email:"test@test.com",
            password: 'wrongpassword3'
        })


        .end((err, res) => {

            if(err) done(err)
            expect(res.body.message).to.equal("Sorry, your password is incorrect")
   
        })
        
        chai.request("http://localhost:4000")
        
        .post("/login")
        .set('content-type', 'application/json')
        .send({
            email:"test@test.com",
            password: 'wrongpassword4'
        })


        .end((err, res) => {

            if(err) done(err)
            expect(res).to.have.status(418)
            expect(res.body.message).to.equal("Sorry, your password is incorrect")
            expect(res.body.captcha).to.equal(true)
            done()
        })

    })
}