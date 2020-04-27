server:
post to url https://reqres.in/api/users

installs:
need axios and to use the post method // npm install axios
need yup for form validation // npm install -S yup
install cypress for tests // npm install --save-dev cypress

imports:
import React, { useState, Component, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios'
import * as yup from 'yup'

testing:
npx cypress open

cypress.json 

  
{
    "baseUrl": "http://localhost:3000/",
    "viewportWidth": 450,
    "viewportHeight": 750
  }