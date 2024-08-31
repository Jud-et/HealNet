#!/bin/bash

# Installing Dependencies
npm i

# Starts the replica, running in the background
dfx start --background --clean

# Deploys your canisters to the replica and generates your candid interface
dfx deploy 