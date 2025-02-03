#!/bin/bash

source ./.env

cd backend
npm run start:dev & 

cd ../frontend
npm run dev