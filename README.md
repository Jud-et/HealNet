# Healnet

Healnet: AI Chat powered by Gemini Flash

Healnet is an AI chat model designed to provide real-time support,
answering queries, offering advice, and
connecting users with necessary resources. It helps
in guiding individuals through their recovery
journey, providing motivation and personalized
suggestions based on user interactions and data
analysis.



 Key Features:

- **Always Available**: Healnet is ready to chat 24/7 whenever you need a companion.
- **Informative & Fun**: Ask questions, explore topics, or have lighthearted conversations and games with Healnet.
- **Data Ownership & Security**: Conversations are stored securely on the Internet Computer canister (blockchain), giving you complete control over your chat history.
- **Adaptive learning**:
Continous learning based on the user knowledge level

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
- Clear explanations of complex concepts

To learn more before you start working with Healnet, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)

## Usage Guidelines

- For educational purposes only on drugs, prevention, recovery and treatment.
- Not for personal medical advice
- Consult healthcare professionals for health concerns.

### Recommendation:

For seamless **local interaction with frontend and AI**, **we strongly recommend`using the Vite development server`**. Vite handles CORS (Cross-Origin Resource Sharing) issues, allowing you to interact with Gemini without modifying the CSP.

If you want to start working on your project right away, you might want to try the following commands:

Cloning repo:

```bash
git clone https://github.com/Jud-et/HealNet
cd HealNet
```

### **If you want to install packages and deploy everything in one command Run below script:**

```bash
 chmod +x deploy-local.sh

 ./deploy-local.sh
```

> **You will see a URL in terminal example `http://localhost:3000/` from vite. And you can open this URL in Browser and start interacting with HealNetAI**

-
-
-
-
-
-
-
-
-
-

### If you want to install and deploy Step by Step Follow below commands:

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

You will see a URL in terminal example `http://localhost:3000/` from vite. And you can open this URL in Browser and start interacting with HealNetAI
