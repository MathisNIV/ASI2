package com.example.applitest;

import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPut;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.BasicResponseHandler;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class TestService {

    public TestModel updateUser(TestModel user) throws IOException {
        String modified_user = modify(user);

        String getUserResponse = getUser(user.getId());
        System.out.println(getUserResponse);

        return user;
    }

    public String modify(TestModel user) throws IOException {
        try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
            HttpPut httpPut = new HttpPut("http://localhost:8083/user/" + user.getId());
            String jsonBody = user.toJson();
            httpPut.setEntity(new StringEntity(jsonBody, ContentType.APPLICATION_JSON));

            System.out.println("PUT request");
            HttpResponse response = httpclient.execute(httpPut);

            System.out.println("Status code:" + response.getStatusLine().getStatusCode());
            String responseBody = new BasicResponseHandler().handleResponse(response);
            System.out.println(responseBody);

            return responseBody;
        }
    }

    public String getUser(Integer userId) throws IOException {
        try (CloseableHttpClient httpclient = HttpClients.createDefault()) {
            HttpGet httpGet = new HttpGet("http://localhost:8083/user/" + userId);

            System.out.println("GET request");
            HttpResponse response = httpclient.execute(httpGet);

            System.out.println("Status code:" + response.getStatusLine().getStatusCode());
            String responseBody = new BasicResponseHandler().handleResponse(response);
            return responseBody;
        }
    }
}
