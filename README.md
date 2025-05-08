# Computer Network: Peer-to-Peer Sharing
A full-stack project peer-to-peer file-sharing platform facilitating decentralized file distribution among multiple peers.
> **Capstone Project** | Team Size:   
> **Timeline**: 9/2024 - 10/2024

---

## 📌 Description
This project implements a simplified BitTorrent-style network, consisting of:

- Tracker Server: Manages peer registrations and distributes file metadata.

- Peer Application: Each peer can announce available files, query the tracker, and download or upload file chunks to other peers.

- Web UI: Real-time dashboard to monitor tracker and peer status.

Support decentralized protocols and P2P interaction in learning environments.

---

## 🚀 Technologies Used
Backend

- Node.js, Express.js

- RESTful API design

- UUID for peer identification

Frontend

- React.js, Vite

- Tailwind CSS for styling

- Axios for HTTP communication
  
---

## 🧹 Core Functionalities

- Peer Registration: Register and deregister peers with the tracker.

- File Announcement: Peers announce available files and their chunk availability.

- Chunk Exchange: Peers request and serve file chunks to each other.

- Real-time Monitoring: Web dashboard displays online peers, shared files, and transfer statistics.

---


## 🛠️ Setup Instructions
1. Clone repository
  - `git clone https://github.com/doandinhhao/computer-network.git`
  - `cd computer-network`
2. Install dependencies
  - npm run install-all
3. Configure environment
   - Create a .env file at project root:
      - TRACKER_HOST=http://localhost
      - TRACKER_PORT=3000
      - PEER_PORT=3001
      - FRONTEND_PORT=5173
4. Run components
- **Tracker**: `npm run tracker`
- **Peer**: `npm run peer`
- **UI**: `npm run front`
5. Multi-peer test
  -  `npm run test`
  
Visit http://localhost:5173 to view the dashboard and peer UI.

📶 Local Access

- Tracker API:  http://localhost:3000

- Peer UI:      http://localhost:5173
     
     





