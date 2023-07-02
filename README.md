# Team-Alpha-Vets-Hackathon 7/1/2023

## Equine Therapy App 

    Gallop Towards Wellness: Connecting Veterans with Equine Therapy 

### 🎯 Problem Statement:
Veterans seeking equine therapy to enhance their mental health and overall well-being face significant challenges when it comes to accessibility. Equine-assisted psychotherapy (EAP) has shown remarkable benefits in supporting emotional well-being for individuals with anxiety, depression, PTSD, substance abuse, and other emotional and cognitive disorders. However, the limited availability and information about equine therapy services within the VA system hinder many veterans from accessing this effective form of treatment.


### 🌟 Solution:

The Equine Therapy App is the solution aims to break geographical barriers and efficiently connect veterans to equine therapy by providing the following core features:

1. **Connect veterans through form search:** Veterans can easily locate VA-based equine therapy services or 3rd party providers by using our intuitive form-based search functionality, which allows filtering based on state or zip code.

2. **Connect veterans to veteran-friendly equine therapy services:** Our app goes beyond the VA system to connect veterans with vetted and veteran-friendly equine therapy services outside of the VA. This widens the range of options available to veterans, ensuring they can access therapy regardless of their location.

3. **Connect 3rd party providers to VA grants/funding:** We facilitate the connection between 3rd party equine therapy providers and VA grants/funding opportunities. This streamlines the process for providers to offer their services to veterans while accessing the necessary financial support.

---
      

### Team Members 

- Greg Petropoulos - Lead Developer
- Neka Blair - Designer/Developer
- Gladys Chiang - Designer/Developer
- Darryl Yeargin - Designer/Developer
- Michael Sigg - Designer/Developer
---
### Table of Contents

[About](#about)

[Architecture](#architecture)

[Diagram of Architecture](#diagram-of-architecture)

[Modeling of Data](#modeling-of-data)

[Well-Scoped MVP](#well-scoped-mvp)

[Team Procedures](#team-procedures)

[Links and Resources](#links-and-resources)

---
### About

Our Equine Therapy App, is a direct response to the challenges faced by veterans seeking equine therapy to enhance their mental health and overall well-being. 

Recognizing the crucial need for improved access and information, our app is dedicated to bridging the gap and ensuring that equine therapy is readily available to veterans who seek it. By providing a comprehensive platform that connects veterans with a network of equine therapy providers, both within the VA system and beyond, we aim to break down barriers and empower veterans to take control of their mental health journey.

Through our app, veterans can easily locate and connect with equine therapy providers in their area, regardless of their geographical location. We are committed to delivering a user-friendly experience that simplifies the process of accessing this vital form of treatment. Our mission is to empower veterans by providing them the knowledge and resources needed to make informed decisions about their mental health care.

By leveraging technology and the power of collaboration, we aspire to enhance the lives of veterans by ensuring equitable access to the life-changing benefits of equine therapy. Together, we can make a difference in the well-being of our veterans and pave the way for a brighter future.

---

### Architecture

Our app boasts a modular and scalable architecture, guaranteeing flexibility and maintainability. Here's an overview of the components:

- **Frontend:** The frontend is developed using React, implementing best practices such as error handling, validation, and Git versioning. The user interface is designed to be intuitive and seamless, providing a smooth experience for veterans to locate therapy facilities based on their location.

- **Backend:** We leverage the VA API and web crawling techniques to gather comprehensive and up-to-date data on equine therapy providers within the VA system. It ensures the availability of accurate and relevant information for veterans.

    -  Node.js v18.12.1: Our backend servers are powered by Node.js

    - Express.js v4.18.2: Express.js is used to run the backend servers and handle API requests, providing a robust and efficient foundation for our app.

    - MongoDB with Mongoose Schema (ORM): We have chosen MongoDB, a NoSQL database, for efficient storage and retrieval of data. Mongoose Schema, an Object-Relational Mapping (ORM) library, simplifies data modeling and interaction with the database.


- **Web Scraping:** For data gathering, we employ Playwright, a powerful and flexible library for browser automation. This allows us to crawl web pages and extract relevant information from various sources.

- **Testing:** We use Cypress for end-to-end testing to ensure the reliability and quality of our app


### Diagram of Architecture



---
## Modeling of Data
To support the functionality of the app, we have designed the following data models:

1. **Equine Therapy Provider Model:** Contains information about equine therapy service providers, such as location, services offered, availability, and contact details.
2. **VA Funding Model:** Stores information related to VA grants and funding opportunities, including eligibility criteria and application processes.

## Well-Scoped MVP
Our well-scoped Minimum Viable Product (MVP) includes the following features:

- Form-based search functionality to locate equine therapy services based on state or zip code. (Home page)
- Connect veterans to veteran friendly equine therapy services outside the VA. Display of equine therapy provider information, including contact details and available services. (Resources page)
- Connection with VA funding resources for eligible veterans and 3rd party providers. Show the forms necessary for a nonprofit/provider to fill out either VA forms API or downloadable pdf. (Providers Page)
- Intuitive user interface for a seamless user experience.

---
### Other Architectures Considered

During the planning phase, our team carefully evaluated various architectures to determine the best fit for The Equine Therapy App. 

Monolithic Architecture: This traditional architecture approach would involve building the entire application as a single, interconnected unit. However, we decided against this architecture due to its limited scalability and potential difficulties in maintenance and future enhancements.

Microservices Architecture: We explored the possibility of adopting a microservices architecture, where the application would be divided into smaller, loosely coupled services. Each service would handle a specific functionality, such as user management, therapy provider search, and VA funding connection. While this architecture provides flexibility and scalability, we realized it might introduce complexity during the initial development phase.

Serverless Architecture: We also discussed a serverless architecture using cloud-based services like AWS Lambda or Azure Functions. This architecture would allow us to focus on developing individual functions without worrying about server management. However, we decided against it as it might introduce additional overhead and dependencies on specific cloud platforms.

After careful consideration, we chose the <strong> MVC (Model-View-Controller) architecture </strong> as the most suitable option for our application. This architecture separates the application into three main components: the model, which represents the data and business logic; the view, responsible for the user interface; and the controller, which handles the communication between the model and view.

By adopting the MVC architecture, we ensure clear separation of concerns, maintainability, and extensibility of our application. It also allows for easier testing and collaboration among team members, facilitating efficient development and deployment processes.

---
### [Team Procedures](./docs/team-procedures.md)

- Reporting Bugs
- Create a PR
- Workflow


---

### Links and Resources

Framework/technology used:
- [VA API](https://developer.va.gov/)
- [Node.js](https://nodejs.org/en)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Playwright](https://playwright.dev/)
- [Cypress](https://www.cypress.io/)

Possible non-profit collaborations: Saving Horses, Healing Heroes:

- [Healing Heroes Through Horses](https://www.vfw.org/media-and-events/latest-releases/archives/2022/7/healing-heroes-through-horses)
- [New Freedom Farm - Veteran's Support Peer Group](https://www.newfreedomfarm.org/veteran-resources)

A list of grant opportunities for horse therapy programs/ providers for veterans:
- [VA Adaptive Sports and Arts](https://department.va.gov/veteran-sports/grant-program/)
- [Wounded Warrior Project Grants](https://newsroom.woundedwarriorproject.org/2022-07-11-Wounded-Warrior-Project-Announces-Latest-Grants-to-Support-Veterans-Service-Organization-Partners)
- [Notice of Funding Availability for Equine Therapy - VA](https://department.va.gov/veteran-sports/wp-content/uploads/sites/3/2023/02/NOFA_VA_EQUINE_2023.pdf)
- [Disabled Veterans National Foundation Grants](https://www.dvnf.org/grants/)
- [Newman's Own Foundation Grants](https://texvet.org/resources/newmans-own-foundation)
- [The McCormick Foundation Veterans Program](https://www.mccormickfoundation.org/investments/veterans/)
- [VA's Grant and Per Diem Program (GPD)](https://www.va.gov/homeless/gpd.asp)
