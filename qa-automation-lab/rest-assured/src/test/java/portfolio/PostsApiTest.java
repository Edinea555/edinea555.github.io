package portfolio;

import org.junit.jupiter.api.Test;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

class PostsApiTest {
    private static final String BASE_URL = "https://jsonplaceholder.typicode.com";

    @Test
    void deveConsultarPostComContratoValido() {
        given()
            .baseUri(BASE_URL)
        .when()
            .get("/posts/1")
        .then()
            .statusCode(200)
            .body("id", equalTo(1))
            .body("userId", equalTo(1))
            .body("title", not(isEmptyOrNullString()));
    }

    @Test
    void deveRetornar404ParaPostInexistente() {
        given()
            .baseUri(BASE_URL)
        .when()
            .get("/posts/999999")
        .then()
            .statusCode(404);
    }
}
