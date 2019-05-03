# Travelz Journal

Travelz is an application that allows you to create your own travel journal.

## Installation

Go to https://c5119ec1.ngrok.io/ or http://localhost:5000/ to open the app

## Introduction

- Language

Travelz Journal was built with **Javascript** language. 

- APIs
The app contains two APIs: **Google Maps** and **Facebook**. Google Maps was chosen so the user can search for places in a speficic city he wishes to visit. The API contains the **autocomplete** feature which improves the search experience.
The Facebook API was used to facilitate the user login. The **Facebook username** is the only information accessed by the app.

- Views and Routes
The app contains the following views and, for each, a spefic route:

**Index**: home page<p>
**Sign up**: Sign up for first time users<p>
**Login**: Login for existing users<p>
**Private**: User's private page
**Create journal**: User can create a personal journal
**Journal details**: User can add, see and delete the journals he created
**Add place**: User can add the places he wishes to visit 

Extras
**Layout** HTML with APIs, bootstrap, stylesheet, javascript **href**
**Not found**: Route does not exist on the app
**Error**: Error on the server



## Instructions

When you go to the main page https://c5119ec1.ngrok.io/ or http://localhost:5000/, you are able to sign up or login. There are two different login methods: either via the **Travelz Journal** or via **Facebook**

After logging in, you will get redirected your **Private Page** where you can see all your personal journals. 

In order to create a new journal, click on **Add a journal**. You need to enter **the name of your journal** and the **city**

Once created, you will be redirected to **Journal Details**. In this page you can see the specific information about your trip. 

Inside Journal Details, you will add the **places** that you wish to visit in the city. You can also add any **comment** about each touristic spot. Use **Google Maps** to search for the places in the city you will be visiting.

While you're exploring the city, you can use **Travelz Journal** to mark the places you've already seen and hence organise your itinerary. To do so, simply mark the checkbox **Visited**

Your journal information will be saved in our **database** so every time you go back to Travelz, you can see past journals, **delete** them and **create** new ones.



