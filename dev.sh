#!/bin/bash

source ./.env

cd backend
npm install
npm run start:dev & 

cd ../frontend
npm install
npm run dev