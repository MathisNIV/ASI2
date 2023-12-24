package com.cpe.logger;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jms.annotation.EnableJms;

@EnableJms
@SpringBootApplication
public class Logger 
{
    public static void main( String[] args )
    {
        SpringApplication.run(Logger.class, args);
    }
}
