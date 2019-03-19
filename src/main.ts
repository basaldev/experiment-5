import { store } from "domain/store/main"
import render from "renderer"
import startRouters from "domain/middleware/router"

window["AWS"].config.region = "us-east-1" // Region
window["AWS"].config.credentials = new window["AWS"].CognitoIdentityCredentials({
  // Provide your Pool Id here
  IdentityPoolId: "us-east-1:a7ef0bcd-4c3e-4965-8342-688cedd4f60e"
})
store.addWatch("renderLoop", render)
startRouters()
