# Microservices E-commerce Platform with Kafka

## 🚀 Project Overview

### A fully containerized, event-driven microservices architecture demonstrating a complete e-commerce workflow using Apache Kafka for asynchronous communication between services.

# Features

- **Event-Driven Architecture**: Kafka-powered communication between decoupled services.
  
- **Complete Order Flow**: 
  - Payment processing
  - Order creation
  - Email notification
  - Analytics
  
- **Containerized Deployment**: Docker Compose for easy setup and scaling.

- **Real-time Monitoring**: Kafka UI for message queue visualization.

# 🛠️ Technology Stack

| **Component**       | **Technology**                  | **Purpose**                |
|---------------------|----------------------------------|----------------------------|
| **Frontend**         | Next.js 15, React, Tailwind CSS  | User interface             |
| **API Gateway**      | Express.js (per service)        | Service endpoints          |
| **Message Broker**   | Apache Kafka with ZooKeeper     | Event streaming            |
| **Containerization** | Docker, Docker Compose          | Deployment & orchestration |
| **Monitoring**       | Kafka UI                        | Real-time queue monitoring |
| **Language**         | Node.js/JavaScript              | All microservices          |


# 📨 Kafka Topics

| **Topic**            | **Description**                   | **Produced By**        | **Consumed By**                          |
|----------------------|-----------------------------------|------------------------|------------------------------------------|
| **order-successful**  | Order creation events            | Order Service          |  Email Service, Analytic Service |
| **payment-successful**| Payment processing events        | Payment Service        | Order Service, Analytic Service         |
| **email-successful**  | Email delivery events            | Email Service          | Analytic Service                        |


# 🚀 Quick Start

## Prerequisites
- **Docker & Docker Compose**
- **Git**
- **4GB+ RAM** (for all containers)

# Option 1: Complete Docker Setup (Recommended)

```bash
# Clone the repository
git clone <repository-url>
cd 2-microservices-single-kafka-server

# Build and start all services
docker-compose build
docker-compose up -d

# Check service status
docker-compose ps

# Access the application
# Frontend: http://localhost:3000
# Kafka UI: http://localhost:8081
```

# Option 2: Development Setup

```bash
# Start only Kafka infrastructure
cd services/kafka
docker-compose up -d

# Install dependencies for each service
cd ../..
for service in order-service payment-service email-service analytic-service client; do
  cd services/$service && npm install && cd ../..
done

# Start services in separate terminals
# Terminal 1: Order Service
cd services/order-service && npm start

# Terminal 2: Payment Service
cd services/payment-service && npm start

# Terminal 3: Email Service
cd services/email-service && npm start

# Terminal 4: Analytic Service
cd services/analytic-service && npm start

# Terminal 5: Client
cd services/client && npm run dev
```

# 🔍 Testing the Flow

1. **Access the frontend**: [http://localhost:3000](http://localhost:3000)

2. **Create a test order** using the UI.

3. **Monitor the event flow**:
   - Order Service creates order → publishes to `order-successful`
   - Payment Service processes payment → publishes to `payment-successful`
   - Email Service sends notification → publishes to `email-successful`
   - Analytic Service tracks all events

4. **View messages in Kafka UI**: [http://localhost:8081](http://localhost:8081)

5. **Check service logs**:

```bash
docker-compose logs -f order-service
docker-compose logs -f payment-service
docker-compose logs -f email-service
docker-compose logs -f analytic-service
```
# 🔧 Management Commands

## Docker Operations

```bash
# Build all services
docker-compose build

# Start all services
docker-compose up -d

# Stop all services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# View logs
docker-compose logs -f [service-name]

# Restart specific service
docker-compose restart [service-name]

# Check service status
docker-compose ps
```

# 📈 Monitoring

## Kafka UI

- **URL**: [http://localhost:8081](http://localhost:8081)

### Features:
- View all Kafka topics and partitions
- Monitor message rates
- Browse messages in topics
- Check consumer groups

# 🔒 Security Notes

- **Development Only**: This setup uses plaintext Kafka communication.
- **No Authentication**: Services communicate without authentication.
- **Local Network**: All services run on the local Docker network.

## For Production:
- Add SSL, authentication, and proper security measures.


