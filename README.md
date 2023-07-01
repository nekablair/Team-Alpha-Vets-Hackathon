# Team-Alpha-Vets-Hackathon 5/2023

## Equine Therapy App

<em> Harnessing Resilience: Connecting Veterans and Horses for Renewed Wellness </em>

### Problem Statement:
Veterans seeking equine therapy to enhance their mental health and overall well-being face significant challenges when it comes to accessibility. Equine-assisted psychotherapy (EAP) has shown remarkable benefits in supporting emotional well-being for individuals with anxiety, depression, PTSD, substance abuse, and other emotional and cognitive disorders. However, the limited availability and information about equine therapy services within the VA system hinder many veterans from accessing this effective form of treatment.


### Solution:

The Equine Therapy App is the solution aims to break geographical barriers and efficiently connect veterans to equine therapy by providing the following core features:

1. **Connect veterans through form search:** Veterans can easily locate VA-based equine therapy services or 3rd party providers by using our intuitive form-based search functionality, which allows filtering based on state or zip code.

2. **Connect veterans to veteran-friendly equine therapy services:** Our app goes beyond the VA system to connect veterans with vetted and veteran-friendly equine therapy services outside of the VA. This widens the range of options available to veterans, ensuring they can access therapy regardless of their location.

3. **Connect 3rd party providers to VA grants/funding:** We facilitate the connection between 3rd party equine therapy providers and VA grants/funding opportunities. This streamlines the process for providers to offer their services to veterans while accessing the necessary financial support.


    🌟  

### Team Members

- Greg Petropoulos - Lead Developer
- Neka Blair - Designer/Developer
- Gladys Chiang - Designer/Developer
- Darryl Yeargin - Designer/Developer

### Table of Contents

[About](#about)

[Architecture](#architecture)

[Team Procedures](#team-procedures)

[Links and Resources](#links-and-resources)

### About

The Equine Therapy for Veterans and Providers App is a team effort to provide an efficient solution for veterans seeking equine therapy service. Our app aims to connect veterans with therapy providers across the VA system, <strong> transcending geographical barriers and ensuring access to equine therapy to enhance veterans' mental health and wellness.</strong>

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


## Modeling of Data
To support the functionality of the app, we have designed the following data models:

1. **Equine Therapy Provider Model:** Contains information about equine therapy service providers, such as location, services offered, availability, and contact details.
2. **VA Funding Model:** Stores information related to VA grants and funding opportunities, including eligibility criteria and application processes.

## Well-Scoped MVP
Our well-scoped Minimum Viable Product (MVP) includes the following features:

- Form-based search functionality to locate equine therapy services based on state or zip code
- Display of equine therapy provider information, including contact details and available services
- Connection with VA funding resources for eligible veterans and 3rd party providers
- Intuitive user interface for a seamless user experience

### Other Architectures Considered




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

