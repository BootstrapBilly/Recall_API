const chai = require("chai")//import the assertion library
const chaiHttp = require("chai-http")//import the request sending library

const { expect } = chai;//grab expect from chai
chai.use(chaiHttp);//initliase chaiHTTP

const User = require("../models/User")

exports.get_user_id = async email => {

    const user = await User.findOne({ email_address: email })

    if (user) {
        return user._id
    }
}


exports.get = (title, route, status, outcome, payload) => {

    it(title, (done) => {

        chai.request("http://localhost:4000")//the base url

            .get(route)//the route
            .set('content-type', 'application/json')

            .send()//no payload on a get request

            .end((err, res) => {

                if (err) done(err)//handle the error
                expect(res).to.have.status(status)//expect a 424 response
                expect(res.body.message).to.equal(outcome)//The expected result

                done()
            })
    })

}

exports.post = (title, route, status, outcome, payload, extra_assertion, count, additional_assertion, additional_count) => {

    it(title, (done) => {

        chai.request("http://localhost:4000")//the base url

            .post(route)//the route
            .set('content-type', 'application/json')

            .send(//The payload of the request
                payload)

            .end((err, res) => {

                if (err) done(err)//handle the error
                expect(res).to.have.status(status)//expect a 424 response
                expect(res.body.message).to.equal(outcome)//The expected message
                extra_assertion && expect(res.body[extra_assertion]).to.have.lengthOf(count)//check the length of the returned notes or processes(//!takes a string param)
                additional_assertion && expect(res.body[additional_assertion]).to.have.lengthOf(additional_count)//check the length of the returned notes or processes
                done()
            })
    })

}

exports.post_check_res_user_id = async (title, route, status, outcome, email, payload) => {

    it(title, (done) => {

        chai.request("http://localhost:4000")//the base url

            .post(route)//the route
            .set('content-type', 'application/json')

            .send(//The payload of the request
                payload)

            .end((err, res) => {

                if (err) done(err)//handle the error
                expect(res).to.have.status(status)//expect a 424 response
                expect(res.body.message).to.equal(outcome)//The expected message
                expect(res.body.user_id).to.equal(email)//check the value of the assertion(//!takes a string param)
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

                if (err) done(err)//handle the error
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

                if (err) done(err)//handle the error
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
                email: "test@test.com",
                password: 'wrongpassword1'
            })


            .end((err, res) => {

                if (err) done(err)
                expect(res.body.message).to.equal("Sorry, your password is incorrect")

            })

        chai.request("http://localhost:4000")

            .post("/login")
            .set('content-type', 'application/json')
            .send({
                email: "test@test.com",
                password: 'wrongpassword2'
            })


            .end((err, res) => {

                if (err) done(err)
                expect(res.body.message).to.equal("Sorry, your password is incorrect")

            })

        chai.request("http://localhost:4000")

            .post("/login")
            .set('content-type', 'application/json')
            .send({
                email: "test@test.com",
                password: 'wrongpassword3'
            })


            .end((err, res) => {

                if (err) done(err)
                expect(res.body.message).to.equal("Sorry, your password is incorrect")

            })

        chai.request("http://localhost:4000")

            .post("/login")
            .set('content-type', 'application/json')
            .send({
                email: "test@test.com",
                password: 'wrongpassword4'
            })


            .end((err, res) => {

                if (err) done(err)
                expect(res).to.have.status(418)
                expect(res.body.message).to.equal("Sorry, your password is incorrect")
                expect(res.body.captcha).to.equal(true)
                done()
            })

    })
}


