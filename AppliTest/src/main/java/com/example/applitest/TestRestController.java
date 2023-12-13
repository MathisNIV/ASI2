package com.example.applitest;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.IOException;

public class TestRestController {
    private final TestService testService;

    public TestRestController(TestService testService) {
        this.testService = testService;
    }

    @RequestMapping(method= RequestMethod.PUT,value="/user/{id}")
    public TestModel updateUser(@RequestBody TestModel user, @PathVariable String id) throws IOException {
        return testService.updateUser(user);
    }

    @RequestMapping(method= RequestMethod.GET,value="/user/{user}")
    public TestModel returnUser(@PathVariable TestModel user) {
        return user;
    }
}
