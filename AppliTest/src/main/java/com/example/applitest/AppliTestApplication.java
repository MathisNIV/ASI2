package com.example.applitest;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.io.IOException;

@SpringBootApplication
public class AppliTestApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppliTestApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(TestService testService) {
        return (args) -> {
            TestModel newUser = createDefaultUser();
            try {
                testService.updateUser(newUser);
            } catch (IOException e) {
                e.printStackTrace();
            }
        };
    }


    private TestModel createDefaultUser() {
        TestModel user = new TestModel();
        user.setId(7);
        user.setLogin("string");
        user.setPwd("string");
        user.setAccount(0);
        user.setLastName("string");
        user.setSurName("string");
        user.setEmail("string");
        user.getCardList().add(0);

        return user;
    }
}
