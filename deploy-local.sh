# Installing Dependencies
npm i

# Starts the replica, running in the background
dfx start --background

# Deploys your Backend canisters to the replica and generates your candid interface
dfx deploy backend

#Deploy intenet idenity canister
dfx deploy internet_identity

# Generate Backend Interface for frontend
npm run generate

# Local frontend development server

npm start