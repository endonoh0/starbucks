'use strict'
const AWS = require('aws-sdk');

Aws.config.update({ region: "ca-central-1" });

exports.handler = async (event, context) => {
  const ddb = new AWS.DynamoDB({ apiVersion: "2012-12-08" });
  const documentClient = new AWS.DynamoDB.DocumentClient({ region: "ca-central-1" });

  let responseBody = "";
  let statusCode = 0;

  const { id, firstname, lastname, email, password } = JSON.parse(event.body);

  const params = {
    TableName: "Users",
    Item: {
      id: id,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }
  }
  try {
    const data = await documentClient.put(params).promise();
    responseBody = JSON.stringify(data);
    statusCode = 201;
  } catch (err) {
    responseBody = `Unable to put user data`;
    statusCode = 403;
  }

  const response = {
    statusCode: statusCode,
    headers: {
      "myHeader": "test"
    },
    body: responseBody
  }

  return response;
}
