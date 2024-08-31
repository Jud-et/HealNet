# Healnet

Healnet: AI Chat powered by Gemini Flash

Healnet is an AI chat model designed for engaging and informative conversations. Fueled by the cutting-edge technology of Gemini Flash, Healnet offers a natural and smooth conversation experience.

This repository houses the codebase for Healnet, including:

- The core AI model utilizing Gemini Flash for conversation processing.
- The backend chat system written in Azle for efficient communication.

Key Features:

- **Always Available**: Healnet is ready to chat 24/7 whenever you need a companion.
- **Informative & Fun**: Ask questions, explore topics, or have lighthearted conversations and games with Healnet.
- **Data Ownership & Security**: Conversations are stored securely on the Internet Computer canister (blockchain), giving you complete control over your chat history.

## Data Flow

1. User prompts Healnet.

2. Frontend (optional): Preprocesses prompt.

3. Frontend sends prompt + history to Gemini API.

4. Backend (Gemini): Processes prompt & history, generates response.\*\*

5. Backend sends response to Frontend.

6. Frontend displays response.

7. Backend stores prompt & response in Internet Computer canister.

**Benefits**:

- Improved context for future interactions.
- Personalized experience based on chat history.
- Ability to resume conversations from past points.

To learn more before you start working with Healnet, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)

## ⚠️ Disclaimer: Local Development with Gemini and Content Security Policy (CSP)

Local Development with Gemini and Content Security Policy (CSP)

### Important: When deploying this frontend locally and attempting to interact with the Gemini generative language model API, you may encounter errors due to Content Security Policy (CSP) restrictions.

### Reason: The CSP limits connections to specific sources for security. (`Here connection is http`)

### Recommendation:

For seamless **local interaction with frontend and AI**, **we strongly recommend`using the Vite development server`**. Vite handles CORS (Cross-Origin Resource Sharing) issues, allowing you to interact with Gemini without modifying the CSP.

If you want to start working on your project right away, you might want to try the following commands:

```bash
cd Healnet/
dfx help
dfx canister --help
```

## Running the project locally

If you want to test your project locally, you can use the following commands:

```bash
# Installing Dependencies
npm i

# Starts the replica, running in the background
dfx start --background

# Deploys your Backend canisters to the replica and generates your candid interface
dfx deploy backend

#Deploy intenet idenity canister
dfx deploy internet_identity
```

Once the job completes, your application will be available at `http://localhost:8080?canisterId={asset_canister_id}`.

If you have made changes to your backend canister, you can generate a new candid interface with

```bash
npm run generate
```

at any time. This is recommended before starting the frontend development server, and will be run automatically any time you run `dfx deploy`.

If you are making frontend changes, you can start a development server with

```bash
npm start
```

You will see a URL in terminal example `http://localhost:3000/` from vite. And you can open this URL in Browser and start interacting with Healnet

### Note on frontend environment variables

If you are hosting frontend code somewhere without using DFX, you may need to make one of the following adjustments to ensure your project does not fetch the root key in production:

- set`DFX_NETWORK` to `ic` if you are using Webpack
- use your own preferred method to replace `process.env.DFX_NETWORK` in the autogenerated declarations
  - Setting `canisters -> {asset_canister_id} -> declarations -> env_override to a string` in `dfx.json` will replace `process.env.DFX_NETWORK` with the string in the autogenerated declarations
- Write your own `createActor` constructor
