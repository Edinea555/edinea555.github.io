*** Settings ***
Library    RequestsLibrary
Library    Collections

*** Variables ***
${BASE_URL}    https://jsonplaceholder.typicode.com

*** Test Cases ***
Consultar Post Existente
    ${response}=    GET    ${BASE_URL}/posts/1    expected_status=200
    Should Be Equal As Integers    ${response.json()}[id]    1
    Dictionary Should Contain Key    ${response.json()}    title

Consultar Post Inexistente
    ${response}=    GET    ${BASE_URL}/posts/999999    expected_status=404
    Should Be Equal As Integers    ${response.status_code}    404
