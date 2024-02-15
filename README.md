# Scania

This repository contains the technical test requested by Scania; here you can find the following:
- Dockerized dotnet console app with Image on AWS-Elastic Container register.
- CI /CD pipeline that deploys and updates the docker image from AWS
- Mechanism Backstage to run the console app as a template
- Script to install the App.

Prerequisites:
- Docker
- Node Js version V18.19.0
- Github repo with Personal Access Token generated locally, with permission to read and trigger workflows

# How the application Works. 
- Clone the repo and navigate to the folder.
- Install dependencies `yarn install`
- start backstage locally.
- In your terminal, run this command to make the script executable `chmod +x start_app.sh`.
- Then run the startup script `./start_app.sh`

- View the component inside backstage using http://localhost:3000.
  <img width="1676" alt="Screenshot 2024-02-14 at 22 14 47" src="https://github.com/rubmaigut/Scania/assets/71988131/190bc502-3ee4-4f0e-b7db-da499817a354">
  <img width="1663" alt="Screenshot 2024-02-14 at 22 16 07" src="https://github.com/rubmaigut/Scania/assets/71988131/5c9b5aa0-dc5e-48eb-888d-da6013f87cbd">

- The component will be automatically added and available as a template.
  <img width="973" alt="Screenshot 2024-02-14 at 22 16 56" src="https://github.com/rubmaigut/Scania/assets/71988131/9b9ac53c-449d-4901-893c-d15d34ad5a5d">

  
#My Process
- Started creating the console app with dotnet, which allows interaction and returns a message after asking for an input name.
![Screenshot 2024-02-14 at 22 21 42](https://github.com/rubmaigut/Scania/assets/71988131/b01c6314-69ff-4bb2-94b5-083b9d62b548)

- Having the application working, created the `Dockerfile`  with AWS deploy information. 
- Started to work with AWS:
    a. Create an account and read the documentation about ECR.
    b. Fix issues with the authentication: Create IAM user, and update permission for ECR.
- With authentication ready mu steps were:
    a. Created the CI/CD pipeline and success deploy.
    b. Started to work with backstage mechanism.
- Built trigger function inside backstage was something new for me, so it took me time and some tests to have the integration triggered automatically through GitHub.

Here, you can see a log of the repository in AWS. 
![Screenshot 2024-02-14 at 22 31 07](https://github.com/rubmaigut/Scania/assets/71988131/b080342c-0465-49f2-a7e4-79660ab7516e)



